import { Languages } from 'lucide-react'
import { LANGUAGES, type Lang } from '../i18n/config'
import { useLanguage } from '../i18n/useLanguage'
import { cn } from '../lib/utils'

type LanguageToggleProps = {
  tone?: 'default' | 'inverse'
  className?: string
  showIcon?: boolean
}

/**
 * Compact EN / ID switch. The active language is exposed through `aria-pressed`,
 * so it works with keyboard and screen readers without extra instructions.
 */
export function LanguageToggle({
  tone = 'default',
  className,
  showIcon = false,
}: LanguageToggleProps) {
  const { lang, setLang } = useLanguage()
  const inverse = tone === 'inverse'

  const select = (code: Lang) => {
    setLang(code)
  }

  return (
    <div
      role="group"
      aria-label="Language / Bahasa"
      className={cn(
        'inline-flex items-center gap-0.5 rounded-full border p-0.5',
        inverse
          ? 'border-white/25 bg-white/10'
          : 'border-line-strong bg-white/70',
        className,
      )}
    >
      {showIcon && (
        <span
          aria-hidden="true"
          className={cn(
            'ml-1.5 mr-1 flex items-center',
            inverse ? 'text-sage-200/80' : 'text-muted-soft',
          )}
        >
          <Languages className="h-3.5 w-3.5" strokeWidth={1.8} />
        </span>
      )}
      {LANGUAGES.map((language) => {
        const isActive = lang === language.code
        return (
          <button
            key={language.code}
            type="button"
            onClick={() => select(language.code)}
            aria-pressed={isActive}
            aria-label={language.label}
            className={cn(
              'rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-[0.06em] transition-colors duration-300',
              isActive
                ? inverse
                  ? 'bg-paper text-sage-800'
                  : 'bg-sage-700 text-paper'
                : inverse
                  ? 'text-sage-100/75 hover:text-paper'
                  : 'text-muted hover:text-ink',
            )}
          >
            {language.short}
          </button>
        )
      })}
    </div>
  )
}
