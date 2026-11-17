import type { ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '../lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'light' | 'outline-light'
type ButtonSize = 'md' | 'lg'

type ButtonProps = {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  to?: string
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  withArrow?: boolean
  ariaLabel?: string
  disabled?: boolean
}

const base =
  'group inline-flex items-center justify-center gap-2.5 rounded-full font-medium transition-[background-color,border-color,color,transform,box-shadow] duration-300 ease-out active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50'

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-sage-700 text-paper shadow-[0_10px_24px_-14px_rgba(61,77,57,0.7)] hover:bg-sage-800',
  secondary:
    'border border-line-strong bg-white/70 text-ink hover:border-sage-400 hover:bg-white',
  ghost: 'text-ink hover:text-sage-700',
  light: 'bg-paper text-sage-800 hover:bg-white',
  'outline-light':
    'border border-white/25 text-paper hover:border-white/50 hover:bg-white/10',
}

const sizes: Record<ButtonSize, string> = {
  md: 'h-11 px-5 text-[13px]',
  lg: 'h-13 px-6 text-sm',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  className,
  withArrow = false,
  ariaLabel,
  disabled,
}: ButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowUpRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.8}
        />
      )}
    </>
  )

  const classes = cn(base, variants[variant], sizes[size], className)

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
        {...(href.startsWith('http')
          ? { target: '_blank', rel: 'noreferrer noopener' }
          : {})}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {content}
    </button>
  )
}
