import { ArrowRight } from 'lucide-react'
import { nutriva } from '../../data/nutriva'
import { PhoneMockup } from '../PhoneMockup'
import { NutrivaScreen } from '../nutriva/NutrivaScreens'
import { screenDescriptions, screenTone } from '../nutriva/screenMeta'
import { WireframeScreen } from '../nutriva/WireframePhone'
import { Reveal } from '../AnimationWrapper'

const railBase =
  'no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0'

export function ScreenGallery() {
  return (
    <div className={`${railBase} mt-10 sm:grid-cols-2 lg:grid-cols-4`}>
      {nutriva.screens.map((screen, index) => (
        <Reveal
          key={screen.id}
          delay={(index % 4) * 0.05}
          className="w-[244px] shrink-0 snap-center sm:w-auto"
        >
          <figure className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-line bg-white transition-[border-color,box-shadow] duration-500 hover:border-sage-300 hover:shadow-[var(--shadow-soft)]">
            <div className="relative flex h-[436px] items-start justify-center overflow-hidden bg-sage-50 px-5 pt-7">
              <div className="phone-stage-grid absolute inset-0 opacity-50" aria-hidden="true" />
              <PhoneMockup
                className="relative w-[198px] transition-transform duration-700 ease-out group-hover:-translate-y-1.5"
                tone={screenTone[screen.id]}
                label={`${screen.name} — ${screenDescriptions[screen.id]}`}
              >
                <NutrivaScreen id={screen.id} />
              </PhoneMockup>
            </div>

            <figcaption className="flex flex-1 flex-col border-t border-line p-4">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[9px] text-sage-700">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-[8px] font-semibold uppercase tracking-[0.12em] text-muted-soft">
                  {screen.note}
                </span>
              </div>
              <h3 className="mt-2 text-[15px] font-semibold tracking-[-0.02em] text-ink">
                {screen.name}
              </h3>
              <p className="mt-1.5 text-[11.5px] leading-[1.65] text-muted">{screen.summary}</p>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  )
}

export function WireframeGallery() {
  return (
    <div className={`${railBase} mt-10 sm:grid-cols-3`}>
      {nutriva.wireframes.map((frame, index) => (
        <Reveal
          key={frame.name}
          delay={index * 0.07}
          className="w-[244px] shrink-0 snap-center sm:w-auto"
        >
          <figure className="group overflow-hidden rounded-[20px] border border-line bg-white">
            <div className="relative flex h-[420px] items-start justify-center overflow-hidden bg-[#F4F4EF] px-5 pt-7">
              <div className="phone-stage-grid absolute inset-0 opacity-40" aria-hidden="true" />
              <PhoneMockup
                className="relative w-[198px] transition-transform duration-700 group-hover:-translate-y-1"
                label={`Conceptual wireframe — ${frame.name}`}
              >
                <WireframeScreen variant={frame.id as 'dashboard' | 'discovery' | 'diary'} />
              </PhoneMockup>
              <span className="absolute left-3 top-3 rounded-full border border-[#DDE0D7] bg-white/80 px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.1em] text-muted backdrop-blur">
                Conceptual
              </span>
            </div>
            <figcaption className="border-t border-line p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-[14px] font-semibold tracking-[-0.02em] text-ink">
                  {frame.name}
                </h3>
                <span className="font-mono text-[9px] text-sage-700">
                  WF.{String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <p className="mt-1.5 text-[11.5px] leading-[1.65] text-muted">{frame.summary}</p>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  )
}

const finalScreens = ['onboarding', 'dashboard', 'meal-details', 'progress'] as const

export function FinalShowcase() {
  return (
    <Reveal className="mt-12" y={30}>
      <div className="relative overflow-hidden rounded-[24px] border border-sage-200 bg-sage-100 sm:rounded-[30px]">
        <div className="phone-stage-grid absolute inset-0 opacity-60" aria-hidden="true" />
        <div
          aria-hidden="true"
          className="absolute -left-20 -top-24 h-72 w-72 rounded-full border border-sage-300/60"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 -right-16 h-96 w-96 rounded-full border border-sage-300/50"
        />

        <div className="relative px-5 pt-10 sm:px-10 sm:pt-12 lg:px-12">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-sage-700">
                Final presentation
              </p>
              <h3 className="mt-3 text-[clamp(2rem,4vw,3.2rem)] leading-[1.02] font-semibold tracking-[-0.04em] text-sage-900">
                Nutriva, in use.
              </h3>
              <p className="mt-3 max-w-[46ch] text-[13px] leading-[1.7] text-sage-700">
                A connected set of screens showing the rhythm of a day — from first welcome to
                evening progress.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-sage-700">
              <span className="h-1.5 w-1.5 rounded-full bg-nutriva-500" />
              10 screens · 1 flow · Illustrative values
            </div>
          </div>

          <div className="no-scrollbar -mx-5 mt-10 flex snap-x snap-mandatory items-end gap-5 overflow-x-auto px-5 pb-10 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-4 lg:gap-5">
            {finalScreens.map((id, index) => (
              <div
                key={id}
                className={
                  index % 2 === 1
                    ? 'w-[230px] shrink-0 snap-center pb-6 sm:w-auto lg:pb-12'
                    : 'w-[230px] shrink-0 snap-center sm:w-auto'
                }
              >
                <PhoneMockup
                  className="w-full"
                  tone={screenTone[id]}
                  floating
                  label={screenDescriptions[id]}
                >
                  <NutrivaScreen id={id} />
                </PhoneMockup>
                <p className="mt-3 text-center text-[10px] tracking-[0.02em] text-sage-700">
                  {screenDescriptions[id]}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col gap-2 border-t border-sage-200 px-5 py-4 text-[10px] text-sage-700 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p>Concept UI presentation · Not a shipped product</p>
          <p className="flex items-center gap-1.5">
            All nutrition values are illustrative
            <ArrowRight className="h-3 w-3" aria-hidden="true" />
          </p>
        </div>
      </div>
    </Reveal>
  )
}
