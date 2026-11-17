import { ArrowUpRight } from 'lucide-react'
import { useContent } from '../i18n/useContent'
import { Reveal } from '../components/AnimationWrapper'
import { Button } from '../components/Button'

export function Contact() {
  const { profile, t } = useContent()
  const email = profile.contact.links.find((link) => link.id === 'email')

  return (
    <section id="contact" className="relative overflow-hidden bg-sage-800 text-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-[380px] w-[380px] rounded-full border border-white/10 sm:h-[520px] sm:w-[520px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 h-[320px] w-[320px] rounded-full border border-white/10"
      />
      <p
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 bottom-0 select-none text-[16rem] leading-none font-semibold tracking-[-0.08em] text-white/[0.035] sm:text-[24rem]"
      >
        LD
      </p>

      <div className="shell relative py-20 sm:py-28 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-sage-200">
                <span>05</span>
                <span aria-hidden="true" className="h-px w-8 bg-white/25" />
                <span>{t.contact.eyebrow}</span>
              </div>

              <h2 className="mt-6 max-w-[15ch] text-[clamp(2.3rem,4.6vw,3.9rem)] leading-[1.02] font-semibold tracking-[-0.04em] text-paper">
                {profile.contact.headline}
              </h2>

              <p className="mt-6 max-w-[48ch] text-[15px] leading-[1.8] text-sage-100/75">
                {profile.contact.description}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button
                  href={email?.href}
                  variant="light"
                  size="lg"
                  withArrow
                  ariaLabel={t.contact.emailAria}
                >
                  {profile.contact.cta}
                </Button>
                <span className="inline-flex items-center gap-2 text-[11px] text-sage-100/70">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage-300 opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sage-300" />
                  </span>
                  {profile.availability}
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="lg:pt-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-sage-200/80">
                {t.contact.findMe}
              </p>

              <ul className="mt-4 border-t border-white/15">
                {profile.contact.links.map((link) => {
                  const content = (
                    <>
                      <span className="min-w-0">
                        <span className="text-[10px] uppercase tracking-[0.14em] text-sage-200/90">
                          {link.label}
                        </span>
                        <span className="mt-1 block truncate text-[14px] font-medium text-paper">
                          {link.value}
                        </span>
                      </span>
                      <span className="flex shrink-0 items-center gap-2.5">
                        {link.placeholder && (
                          <span className="rounded-full border border-white/20 px-2 py-0.5 text-[8px] font-medium uppercase tracking-[0.1em] text-sage-200/90">
                            {t.contact.placeholder}
                          </span>
                        )}
                        <ArrowUpRight
                          aria-hidden="true"
                          className="h-4 w-4 text-sage-200/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-paper"
                        />
                      </span>
                    </>
                  )

                  return (
                    <li key={link.id} className="border-b border-white/15">
                      {link.href ? (
                        <a
                          href={link.href}
                          className="group flex items-center justify-between gap-6 py-4 transition-colors hover:text-paper"
                          {...(link.href.startsWith('http')
                            ? { target: '_blank', rel: 'noreferrer noopener' }
                            : {})}
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="group flex items-center justify-between gap-6 py-4">
                          {content}
                        </div>
                      )}
                    </li>
                  )
                })}
              </ul>

              {/* <div className="mt-6 flex items-start gap-2.5 text-[10px] leading-[1.6] text-sage-200/85">
                <Mail className="mt-0.5 h-3 w-3 shrink-0" strokeWidth={1.8} />
                <p>
                  Contact details are editable placeholders. Update them in{' '}
                  <code className="rounded bg-white/10 px-1 py-0.5 text-[9px] text-sage-100">
                    src/data/profile.ts
                  </code>{' '}
                  to go live.
                </p>
              </div> */}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
