import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { Wifi } from 'lucide-react'
import { cn } from '../lib/utils'

type PhoneMockupProps = {
  children: ReactNode
  className?: string
  tone?: 'light' | 'dark'
  floating?: boolean
  label?: string
}

/** Logical screen size. Everything inside is scaled to the rendered phone width. */
const SCREEN_WIDTH = 292
const SCREEN_HEIGHT = 626

function SignalBars({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 17 11" className={className} aria-hidden="true" fill="currentColor">
      <rect x="0" y="7.5" width="3" height="3.5" rx="0.8" />
      <rect x="4.6" y="5.5" width="3" height="5.5" rx="0.8" />
      <rect x="9.2" y="3.2" width="3" height="7.8" rx="0.8" />
      <rect x="13.8" y="0.8" width="3" height="10.2" rx="0.8" />
    </svg>
  )
}

function Battery({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 25 12" className={className} aria-hidden="true" fill="none">
      <rect x="0.6" y="0.6" width="21" height="10.8" rx="3" stroke="currentColor" strokeOpacity="0.45" />
      <rect x="2.4" y="2.4" width="16" height="7.2" rx="1.6" fill="currentColor" />
      <path d="M23.4 4v4c.9-.3 1.3-1.1 1.3-2s-.4-1.7-1.3-2Z" fill="currentColor" fillOpacity="0.6" />
    </svg>
  )
}

/**
 * A realistic, scaleable smartphone frame built with CSS. The screen is live UI
 * rendered on a fixed 292 × 626 canvas, then scaled to fit the chosen frame width
 * so type, spacing and layout stay perfectly proportioned at any size.
 */
export function PhoneMockup({
  children,
  className,
  tone = 'dark',
  floating = false,
  label,
}: PhoneMockupProps) {
  const screenRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useLayoutEffect(() => {
    const element = screenRef.current
    if (!element) return

    const update = () => {
      if (element.clientWidth > 0) setScale(element.clientWidth / SCREEN_WIDTH)
    }

    update()
    const observer = new ResizeObserver(update)
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={cn('relative', className)}
      role="img"
      aria-label={label ?? 'Mobile app screen preview'}
    >
      <div
        className={cn(
          'relative rounded-[2.7rem] bg-[#20241f] p-[6px] ring-1 ring-black/10',
          floating
            ? 'shadow-[0_50px_90px_-40px_rgba(37,41,35,0.55)]'
            : 'shadow-[0_30px_70px_-34px_rgba(37,41,35,0.45)]',
        )}
      >
        <span className="absolute -left-[2px] top-[86px] h-8 w-[3px] rounded-l-sm bg-[#343a31]" />
        <span className="absolute -left-[2px] top-[128px] h-12 w-[3px] rounded-l-sm bg-[#343a31]" />
        <span className="absolute -right-[2px] top-[104px] h-16 w-[3px] rounded-r-sm bg-[#343a31]" />

        <div
          ref={screenRef}
          className="relative aspect-[9/19.3] overflow-hidden rounded-[2.25rem] bg-white"
        >
          <div
            className="absolute left-0 top-0 z-10"
            style={{
              width: SCREEN_WIDTH,
              height: SCREEN_HEIGHT,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
            }}
            aria-hidden="true"
            inert
          >
            <div
              className={cn(
                'pointer-events-none absolute inset-x-0 top-0 z-30 flex h-[30px] items-center justify-between px-[18px] pt-[7px] text-[9px] font-semibold',
                tone === 'light' ? 'text-white/95' : 'text-ink',
              )}
            >
              <span className="tracking-[-0.02em]">9:41</span>
              <span className="flex items-center gap-1.5">
                <SignalBars className="h-[8px] w-[14px]" />
                <Wifi className="h-[9px] w-[9px]" strokeWidth={2.6} />
                <Battery className="h-[9px] w-[18px]" />
              </span>
            </div>

            <div className="absolute inset-0 z-10">{children}</div>
          </div>

          <div
            className={cn(
              'pointer-events-none absolute left-1/2 top-[9px] z-[35] h-[15px] w-[27%] max-w-[70px] -translate-x-1/2 rounded-full',
              tone === 'light' ? 'bg-black/80' : 'bg-[#141713]',
            )}
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute bottom-[7px] left-1/2 z-30 h-[3.5px] w-[32%] -translate-x-1/2 rounded-full bg-ink/25"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  )
}
