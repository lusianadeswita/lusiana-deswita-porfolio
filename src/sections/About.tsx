import { Compass, Quote, Sparkles } from 'lucide-react'
import { useContent } from '../i18n/useContent'
import { Reveal } from '../components/AnimationWrapper'
import { SectionHeading } from '../components/SectionHeading'

export function About() {
  const { profile, t } = useContent()

  return (
    <section id="about" className="relative border-t border-line py-20 sm:py-28 lg:py-32">
      <div className="shell">
        <SectionHeading
          index="01"
          eyebrow={t.about.eyebrow}
          title={profile.about.headline}
          description={t.about.description}
        />

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="group relative overflow-hidden rounded-[24px] border border-sage-200 bg-sage-100">
                <div className="phone-stage-grid absolute inset-0 opacity-60" aria-hidden="true" />
                <div
                  aria-hidden="true"
                  className="absolute -right-14 -top-14 h-52 w-52 rounded-full border border-sage-300/60"
                />
                <div className="relative flex aspect-[4/4.6] flex-col justify-between p-6 sm:p-8">
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-sage-700">
                      {t.about.portraitRole}
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-sage-400/50 bg-white/50 text-sage-700">
                      <Compass className="h-3.5 w-3.5" strokeWidth={1.6} />
                    </span>
                  </div>

                  <div>
                    <p className="text-[clamp(5.5rem,13vw,9rem)] leading-[0.78] font-semibold tracking-[-0.07em] text-sage-700/90">
                      LD
                    </p>
                    <p className="mt-6 max-w-[20ch] text-[15px] leading-snug font-medium tracking-[-0.01em] text-sage-900">
                      {profile.name}
                      <span className="mt-1 block text-[11px] font-normal tracking-[0.02em] text-sage-700">
                        {t.hero.role}
                      </span>
                    </p>
                  </div>

                  <div className="flex items-end justify-between border-t border-sage-300/60 pt-4">
                    <p className="max-w-[22ch] text-[10px] leading-[1.6] tracking-[0.02em] text-sage-700">
                      {t.about.principles[0]}
                      <br />
                      {t.about.principles[1]}
                    </p>
                    <span className="text-[10px] tracking-[0.14em] text-sage-700">2026</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-3 text-[10px] leading-relaxed text-muted-soft">
                {profile.about.portraitNote}
              </p>

              <div className="mt-6 grid grid-cols-2 divide-x divide-line border-y border-line py-5">
                <div className="pr-5">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-muted-soft">
                    {t.about.experienceLabel}
                  </p>
                  <p className="mt-1.5 text-lg font-semibold tracking-[-0.02em] text-ink">
                    {t.about.experienceValue}
                  </p>
                </div>
                <div className="pl-5">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-muted-soft">
                    {t.about.focusLabel}
                  </p>
                  <p className="mt-1.5 text-lg font-semibold tracking-[-0.02em] text-ink">
                    {t.about.focusValue}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <div className="space-y-5">
                <p className="text-[clamp(1.15rem,2vw,1.4rem)] leading-[1.6] font-medium tracking-[-0.015em] text-ink">
                  {profile.about.paragraphs[0]}
                </p>
                <p className="max-w-[58ch] text-[15px] leading-[1.85] text-muted">
                  {profile.about.paragraphs[1]}
                </p>
                <p className="max-w-[58ch] text-[15px] leading-[1.85] text-muted">
                  {profile.about.paragraphs[2]}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <figure className="relative mt-10 rounded-[20px] border border-line bg-white p-6 sm:p-8">
                <Quote
                  aria-hidden="true"
                  className="absolute right-6 top-6 h-7 w-7 text-sage-200"
                  strokeWidth={1.4}
                />
                <blockquote className="max-w-[38ch] text-[clamp(1.1rem,1.8vw,1.3rem)] leading-[1.55] font-medium tracking-[-0.015em] text-ink">
                  “{profile.about.philosophy}”
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-sage-700">
                  <span className="h-px w-5 bg-sage-400" />
                  {t.about.philosophy}
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-10">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-soft">
                  <Sparkles className="h-3.5 w-3.5 text-sage-700" strokeWidth={1.8} />
                  {t.about.interests}
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {profile.about.interests.map((interest) => (
                    <li
                      key={interest}
                      className="rounded-full border border-line-strong bg-white/60 px-3.5 py-2 text-[12px] text-ink/80"
                    >
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-10 flex gap-4 border-t border-line pt-6">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                  <Sparkles className="h-3.5 w-3.5" strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink">
                    {t.about.growingTitle}
                  </p>
                  <p className="mt-2 max-w-[52ch] text-[13px] leading-[1.75] text-muted">
                    {profile.about.experienceNote}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
