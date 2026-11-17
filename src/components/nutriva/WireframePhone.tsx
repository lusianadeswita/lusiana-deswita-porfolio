import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

type WireframeVariant = 'dashboard' | 'discovery' | 'diary'

type WireframeScreenProps = {
  variant: WireframeVariant
}

function Bar({ className }: { className?: string }) {
  return <div className={cn('rounded-[3px] bg-[#E3E4DD]', className)} />
}

function Outline({ className, children }: { className?: string; children?: ReactNode }) {
  return (
    <div
      className={cn(
        'rounded-[10px] border border-dashed border-[#D6D8CF] bg-white',
        className,
      )}
    >
      {children}
    </div>
  )
}

function MiniNav() {
  return (
    <div className="mt-auto flex items-center justify-around border-t border-[#ECEDE7] pb-[20px] pt-2.5">
      {[0, 1, 2, 3, 4].map((item) => (
        <div key={item} className="flex flex-col items-center gap-1">
          <Bar className={cn('h-3 w-3 rounded-[3px]', item === 0 && 'bg-[#C9CBC1]')} />
          <Bar className="h-1 w-4 bg-[#EDEEE8]" />
        </div>
      ))}
    </div>
  )
}

/** Low-fidelity, deliberately structural. Clearly labelled as conceptual. */
export function WireframeScreen({ variant }: WireframeScreenProps) {
  return (
    <div className="flex h-full flex-col bg-[#FBFBF7] px-4 pt-[38px]">
      {variant === 'dashboard' && (
        <>
          <div className="flex items-center justify-between">
            <div className="space-y-1.5">
              <Bar className="h-1.5 w-10 bg-[#ECEDE7]" />
              <Bar className="h-3 w-20" />
            </div>
            <div className="flex items-center gap-1.5">
              <Bar className="h-6 w-6 rounded-full" />
              <Bar className="h-7 w-7 rounded-full bg-[#DADCD3]" />
            </div>
          </div>

          <div className="mt-3.5 rounded-[16px] border border-[#D6D8CF] bg-[#F0F1EB] p-3">
            <div className="flex items-center justify-between">
              <div className="space-y-1.5">
                <Bar className="h-1.5 w-16 bg-[#D4D6CD]" />
                <Bar className="h-6 w-20 bg-[#C9CBC1]" />
                <Bar className="h-1.5 w-24 bg-[#DEDFD6]" />
              </div>
              <div className="grid h-14 w-14 place-items-center rounded-full border-[5px] border-[#C9CBC1]">
                <Bar className="h-2 w-6 bg-[#C9CBC1]" />
              </div>
            </div>
          </div>

          <div className="mt-2 grid grid-cols-3 gap-1.5">
            {[0, 1, 2].map((item) => (
              <Outline key={item} className="p-2">
                <Bar className="h-1 w-8 bg-[#ECEDE7]" />
                <Bar className="mt-1.5 h-2 w-6" />
                <Bar className="mt-2 h-1 w-full bg-[#EDEEE8]" />
              </Outline>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <Bar className="h-2 w-20 bg-[#D4D6CD]" />
            <Bar className="h-1.5 w-8 bg-[#ECEDE7]" />
          </div>

          <div className="mt-2 space-y-1.5">
            {[0, 1].map((item) => (
              <Outline key={item} className="flex items-center gap-2 p-1.5">
                <Bar className="h-8 w-8 rounded-[6px] bg-[#DADCD3]" />
                <div className="flex-1 space-y-1.5">
                  <Bar className="h-1.5 w-24" />
                  <Bar className="h-1.5 w-12 bg-[#ECEDE7]" />
                </div>
                <Bar className="h-1.5 w-10 bg-[#ECEDE7]" />
              </Outline>
            ))}
          </div>

          <div className="mt-2 flex h-8 items-center justify-center rounded-[10px] border border-dashed border-[#D6D8CF]">
            <Bar className="h-1.5 w-14 bg-[#DADCD3]" />
          </div>

          <MiniNav />
        </>
      )}

      {variant === 'discovery' && (
        <>
          <div className="flex items-center justify-between">
            <div className="space-y-1.5">
              <Bar className="h-1.5 w-16 bg-[#ECEDE7]" />
              <Bar className="h-3 w-24" />
            </div>
            <Bar className="h-6 w-6 rounded-full" />
          </div>

          <div className="mt-3 flex h-8 items-center gap-2 rounded-[9px] border border-[#E1E2DA] bg-white px-2.5">
            <Bar className="h-3 w-3 rounded-full bg-[#E3E4DD]" />
            <Bar className="h-1.5 w-28 bg-[#ECEDE7]" />
          </div>

          <div className="mt-2.5 flex gap-1.5">
            {[0, 1, 2].map((item) => (
              <Bar
                key={item}
                className={cn('h-5 w-14 rounded-full', item === 0 && 'bg-[#D4D6CD]')}
              />
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between">
            <Bar className="h-2 w-20 bg-[#D4D6CD]" />
            <Bar className="h-1.5 w-10 bg-[#ECEDE7]" />
          </div>

          <Outline className="mt-2 p-1.5">
            <div className="h-[84px] rounded-[7px] bg-[#EDEEE8]">
              <div className="grid h-full place-items-center">
                <div className="grid h-10 w-10 place-items-center rounded-full border border-dashed border-[#C9CBC1]">
                  <Bar className="h-3 w-3 rounded-full bg-[#DADCD3]" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between px-1 pt-2">
              <div className="space-y-1.5">
                <Bar className="h-2 w-28" />
                <Bar className="h-1.5 w-16 bg-[#ECEDE7]" />
              </div>
              <Bar className="h-5 w-10 rounded-full bg-[#D4D6CD]" />
            </div>
          </Outline>

          <div className="mt-3 flex items-center justify-between">
            <Bar className="h-2 w-24 bg-[#D4D6CD]" />
            <Bar className="h-1.5 w-8 bg-[#ECEDE7]" />
          </div>

          <div className="mt-2 grid grid-cols-2 gap-2">
            {[0, 1].map((item) => (
              <Outline key={item} className="p-1.5">
                <Bar className="h-[50px] w-full rounded-[7px] bg-[#EDEEE8]" />
                <Bar className="mt-2 h-1.5 w-20" />
                <Bar className="mt-1.5 h-1.5 w-12 bg-[#ECEDE7]" />
              </Outline>
            ))}
          </div>

          <MiniNav />
        </>
      )}

      {variant === 'diary' && (
        <>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bar className="h-6 w-6 rounded-full" />
              <div className="space-y-1.5">
                <Bar className="h-2.5 w-24" />
                <Bar className="h-1.5 w-16 bg-[#ECEDE7]" />
              </div>
            </div>
            <Bar className="h-6 w-6 rounded-full" />
          </div>

          <div className="mt-3 flex justify-between">
            {[0, 1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="flex flex-col items-center gap-1.5">
                <Bar className="h-1.5 w-2.5 bg-[#ECEDE7]" />
                <Bar
                  className={cn(
                    'h-6 w-6 rounded-full',
                    item === 2 ? 'bg-[#C9CBC1]' : 'bg-[#EEEFE9]',
                  )}
                />
              </div>
            ))}
          </div>

          <Outline className="mt-3 p-3">
            <div className="flex items-end justify-between">
              <div className="space-y-1.5">
                <Bar className="h-1.5 w-16 bg-[#ECEDE7]" />
                <Bar className="h-4 w-24 bg-[#D4D6CD]" />
              </div>
              <Bar className="h-1.5 w-10 bg-[#ECEDE7]" />
            </div>
            <Bar className="mt-2.5 h-2 w-full bg-[#EDEEE8]" />
          </Outline>

          <div className="mt-3 flex items-center justify-between">
            <Bar className="h-2 w-12 bg-[#D4D6CD]" />
            <Bar className="h-1.5 w-12 bg-[#ECEDE7]" />
          </div>

          <div className="mt-2 space-y-1.5">
            {[0, 1, 2, 3].map((item) => (
              <Outline key={item} className="flex items-center gap-2 p-1.5">
                <Bar className="h-8 w-8 rounded-[6px] bg-[#DADCD3]" />
                <div className="flex-1 space-y-1.5">
                  <Bar className="h-1.5 w-16" />
                  <Bar className="h-1.5 w-28 bg-[#ECEDE7]" />
                </div>
                <Bar className="h-4 w-4 rounded-full bg-[#EEEFE9]" />
              </Outline>
            ))}
          </div>

          <div className="mt-2 flex justify-center">
            <Bar className="h-1.5 w-24 bg-[#ECEDE7]" />
          </div>
        </>
      )}
    </div>
  )
}
