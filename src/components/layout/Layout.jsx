import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ChatBot from '../ChatBot'
import LightSparkles from '../LightSparkles'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col grid-bg">
      <LightSparkles />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ChatBot />
    </div>
  )
}
