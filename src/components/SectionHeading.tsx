import type { ReactNode } from 'react'
import { cn } from '../lib/utils'
import { Reveal } from './AnimationWrapper'

type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  action?: ReactNode
  tone?: 'default' | 'inverse'
  align?: 'split' | 'stacked'
  className?: string
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  action,
  tone = 'default',
  align = 'split',
  className,
}: SectionHeadingProps) {
  const inverse = tone === 'inverse'

  return (
    <Reveal className={cn('w-full', className)}>
      <div
        className={cn(
          'flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em]',
          inverse ? 'text-sage-200' : 'text-sage-700',
        )}
      >
        <span aria-hidden="true">{index}</span>
        <span
          aria-hidden="true"
          className={cn('h-px w-8', inverse ? 'bg-white/25' : 'bg-sage-300')}
        />
        <span>{eyebrow}</span>
      </div>

      <div
        className={cn(
          'mt-6',
          align === 'split'
            ? 'grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:items-end lg:gap-16'
            : '',
        )}
      >
        <h2
          className={cn(
            'max-w-[17ch] text-[clamp(2rem,4.4vw,3.5rem)] leading-[1.04] font-semibold tracking-[-0.035em]',
            inverse ? 'text-paper' : 'text-ink',
          )}
        >
          {title}
        </h2>

        {(description || action) && (
          <div
            className={cn(
              'max-w-[46ch]',
              align === 'split' ? 'lg:justify-self-end lg:pb-1' : 'mt-5',
            )}
          >
            {description && (
              <p
                className={cn(
                  'text-[15px] leading-[1.75]',
                  inverse ? 'text-sage-100/80' : 'text-muted',
                )}
              >
                {description}
              </p>
            )}
            {action && <div className="mt-5">{action}</div>}
          </div>
        )}
      </div>
    </Reveal>
  )
}
