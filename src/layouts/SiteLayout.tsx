import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export function SiteLayout() {
  const location = useLocation()
  const previousPath = useRef(location.pathname)

  useEffect(() => {
    const pathChanged = previousPath.current !== location.pathname
    previousPath.current = location.pathname

    if (location.hash) {
      const id = decodeURIComponent(location.hash.replace('#', ''))
      const timer = window.setTimeout(() => {
        const element = document.getElementById(id)
        if (!element) return
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        element.scrollIntoView({
          behavior: pathChanged || reduce ? 'auto' : 'smooth',
          block: 'start',
        })
      }, 80)
      return () => window.clearTimeout(timer)
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    return undefined
  }, [location.pathname, location.hash])

  return (
    <div className="flex min-h-svh flex-col bg-paper">
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
