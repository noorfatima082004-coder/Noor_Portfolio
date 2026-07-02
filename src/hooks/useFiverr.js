import { useEffect, useState } from 'react'

export function useFiverr() {
  const [isFiverr, setIsFiverr] = useState(() => {
    // Check sessionStorage first (persists across page navigation)
    return sessionStorage.getItem('fiverr_mode') === 'true'
  })

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const fromFiverr =
      params.get('ref') === 'fiverr' ||
      params.get('source') === 'fiverr' ||
      document.referrer.includes('fiverr.com')

    if (fromFiverr) {
      sessionStorage.setItem('fiverr_mode', 'true')
      setIsFiverr(true)
    }
  }, [])

  return isFiverr
}
