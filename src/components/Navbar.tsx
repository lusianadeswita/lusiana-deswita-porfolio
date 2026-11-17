import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useContent } from '../i18n/useContent'
import { useActiveSection } from '../hooks/useActiveSection'
import { cn } from '../lib/utils'
import { Button } from './Button'
import { LanguageToggle } from './LanguageToggle'

const SECTION_IDS = ['home', 'about', 'work', 'skills', 'contact']

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const reduceMotion = useReducedMotion()
  const { profile, t } = useContent()
  const isHome = location.pathname === '/'
  const isCaseStudy = location.pathname.startsWith('/work/')
  const activeSection = useActiveSection(SECTION_IDS, isHome)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // Route changes are an external navigation event; close any open menu.
    // oxlint-disable-next-line react/set-state-in-effect
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  const handleSectionClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    const wasMenuOpen = menuOpen
    setMenuOpen(false)
    if (!isHome) return

    event.preventDefault()
    const id = sectionId

    // Wait for the mobile menu to finish its exit animation before scrolling;
    // body scroll is locked while the menu is open.
    window.setTimeout(() => {
      const element = document.getElementById(id)
      if (!element) return
      element.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'start',
      })
    }, wasMenuOpen ? 420 : 60)

    window.history.replaceState(null, '', `/#${sectionId}`)
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-sage-700 focus:px-5 focus:py-3 focus:text-sm focus:text-paper"
      >
        {t.common.skipToContent}
      </a>

      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500',
          scrolled || menuOpen
            ? 'border-b border-line bg-paper/90 backdrop-blur-xl'
            : 'border-b border-transparent bg-paper/40 backdrop-blur-sm',
        )}
      >
        <div className="shell flex h-[72px] items-center justify-between gap-6">
          <Link
            to="/"
            className="group flex items-center gap-2.5 text-[15px] font-bold tracking-[0.16em] text-ink"
            aria-label={`${profile.name} ${t.nav.homeSuffix}`}
            onClick={() => {
              setMenuOpen(false)
              if (isHome) window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
            }}
          >
            {profile.logo}
            <span className="mb-1 h-1.5 w-1.5 rounded-full bg-sage-500 transition-colors group-hover:bg-sage-700" />
          </Link>

          <nav
            aria-label={t.nav.primary}
            className="hidden items-center gap-1 lg:flex"
          >
            {profile.navigation.map((item) => {
              const isActive =
                (isHome && activeSection === item.sectionId) ||
                (isCaseStudy && item.sectionId === 'work')
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={(event) => handleSectionClick(event, item.sectionId)}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'relative rounded-full px-3.5 py-2 text-[13px] transition-colors duration-300',
                    isActive
                      ? 'text-ink'
                      : 'text-muted hover:text-ink',
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute inset-x-3.5 -bottom-[3px] h-px origin-left bg-sage-600 transition-transform duration-300',
                      isActive ? 'scale-x-100' : 'scale-x-0',
                    )}
                  />
                </Link>
              )
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageToggle showIcon />
            <Button
              to="/#contact"
              size="md"
              variant="primary"
              withArrow
              className="px-5"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.talk}
            </Button>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-white/60 text-ink transition-colors hover:border-sage-400 hover:bg-white lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t.common.closeMenu : t.common.openMenu}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 top-[72px] z-40 overflow-y-auto bg-paper lg:hidden"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="shell flex min-h-[calc(100dvh-72px)] flex-col justify-between pb-10 pt-8">
              <nav aria-label={t.nav.mobile} className="flex flex-col">
                {profile.navigation.map((item, index) => {
                  const isActive =
                    (isHome && activeSection === item.sectionId) ||
                    (isCaseStudy && item.sectionId === 'work')
                  return (
                    <motion.div
                      key={item.label}
                      initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + index * 0.04, duration: 0.4 }}
                    >
                      <Link
                        to={item.href}
                        onClick={(event) => handleSectionClick(event, item.sectionId)}
                        className="flex items-baseline justify-between border-b border-line py-4"
                      >
                        <span
                          className={cn(
                            'text-[2rem] font-medium tracking-[-0.03em]',
                            isActive ? 'text-sage-700' : 'text-ink',
                          )}
                        >
                          {item.label}
                        </span>
                        <span className="font-mono text-[10px] text-muted-soft">
                          0{index + 1}
                        </span>
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>

              <div className="mt-10 space-y-5">
                <div className="flex items-center justify-between border-b border-line pb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-soft">
                    {t.common.language}
                  </span>
                  <LanguageToggle />
                </div>
                <div className="flex items-center gap-2.5 text-[12px] text-muted">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-sage-600" />
                  </span>
                  {profile.availability}
                </div>
                <Button
                  to="/#contact"
                  variant="primary"
                  size="lg"
                  withArrow
                  className="w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  {profile.contact.cta}
                </Button>
                <a
                  href={profile.contact.links[0]?.href || '#'}
                  className="flex items-center justify-between border-t border-line pt-5 text-[13px] text-muted"
                >
                  <span>{profile.contact.links[0]?.value}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
