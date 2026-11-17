import { ArrowUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useContent } from '../i18n/useContent'

export function Footer() {
  const { profile, t } = useContent()

  const scrollToTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <footer className="border-t border-line bg-paper">
      <div className="shell py-14 sm:py-16">
        <div className="flex flex-col gap-10 border-b border-line pb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[15px] font-bold tracking-[0.16em] text-ink"
            >
              {profile.logo}
              <span className="mb-1 h-1.5 w-1.5 rounded-full bg-sage-500" />
            </Link>
            <p className="mt-5 max-w-[22ch] text-[clamp(1.5rem,2.8vw,2.25rem)] leading-[1.1] font-medium tracking-[-0.03em] text-ink">
              {t.footer.tagline}
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex w-fit items-center gap-3 text-[12px] font-medium tracking-[0.02em] text-muted transition-colors hover:text-ink"
            aria-label={t.common.backToTop}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-white transition-colors duration-300 group-hover:border-sage-400">
              <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </span>
            {t.common.backToTop}
          </button>
        </div>

        <div className="flex flex-col gap-8 pt-8 md:flex-row md:items-start md:justify-between">
          <nav aria-label={t.nav.footer} className="flex flex-wrap gap-x-6 gap-y-3">
            {profile.navigation.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-[13px] text-muted transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="max-w-[34ch] text-[12px] leading-[1.7] text-muted-soft md:text-right">
            {profile.footer.note}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-[11px] tracking-[0.02em] text-muted-soft sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.copyright}</p>
          <p>{t.footer.role}</p>
        </div>
      </div>
    </footer>
  )
}
