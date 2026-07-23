const MAX_MESSAGES = 8
const MAX_MESSAGE_LENGTH = 1000

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'Server not configured' })
  }

  const { systemInstruction, contents } = req.body || {}
  if (!Array.isArray(contents) || contents.length === 0) {
    return res.status(400).json({ error: 'Invalid request' })
  }
  if (contents.some(c => (c.parts?.[0]?.text?.length || 0) > MAX_MESSAGE_LENGTH)) {
    return res.status(400).json({ error: 'Message too long' })
  }

  const trimmedContents = contents.slice(-MAX_MESSAGES)

  try {
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction,
          contents: trimmedContents,
          generationConfig: { temperature: 0.7, maxOutputTokens: 300 }
        })
      }
    )

    if (!geminiRes.ok) {
      return res.status(502).json({ error: 'Upstream error' })
    }

    const data = await geminiRes.json()
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || null
    return res.status(200).json({ text })
  } catch {
    return res.status(500).json({ error: 'Request failed' })
  }
}
