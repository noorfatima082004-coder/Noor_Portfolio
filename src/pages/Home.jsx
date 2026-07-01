import Hero from '../components/hero/Hero'
import StatsBar from '../components/StatsBar'
import About from '../components/About'
import Projects from '../components/Projects'
import TestimonialsCTA from '../components/TestimonialsCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <About />
      <Projects limit={4} />
      <TestimonialsCTA />
    </>
  )
}
