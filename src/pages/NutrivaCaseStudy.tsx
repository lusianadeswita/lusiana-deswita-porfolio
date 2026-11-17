import { ArrowLeft, Info, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'
import { nutriva } from '../data/nutriva'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { Reveal } from '../components/AnimationWrapper'
import { Button } from '../components/Button'
import { SectionHeading } from '../components/SectionHeading'
import { PhoneMockup } from '../components/PhoneMockup'
import { NutrivaScreen } from '../components/nutriva/NutrivaScreens'
import { screenTone } from '../components/nutriva/screenMeta'
import { CaseStudyNav } from '../components/casestudy/CaseStudyNav'
import {
  FinalShowcase,
  ScreenGallery,
  WireframeGallery,
} from '../components/casestudy/ScreenGallery'
import { DesignSystemShowcase } from '../components/casestudy/DesignSystemShowcase'
import { cn } from '../lib/utils'

export function NutrivaCaseStudy() {
  useDocumentMeta({
    title: 'Nutriva Case Study — Lusiana Deswita',
    description:
      'A nutrition-focused mobile app concept case study by UI/UX Designer Lusiana Deswita — from problem framing and user flow to wireframes, UI design and a complete design system.',
  })

  return (
    <div className="pb-0">
      {/* ---------------------------------------------------------------- */}
      {/* 01 — Introduction                                                */}
      {/* ---------------------------------------------------------------- */}
      <section id="introduction" className="scroll-mt-32 pt-[100px] sm:pt-[112px]">
        <div className="shell">
          <Reveal>
            <Link
              to="/#work"
              className="group inline-flex items-center gap-2 text-[11px] font-medium text-muted transition-colors hover:text-ink"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
              Back to selected work
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-8 grid gap-10 lg:mt-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-16">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="eyebrow text-sage-700">
                    <span>Case study</span>
                    <span aria-hidden="true" className="h-px w-7 bg-sage-300" />
                    <span>Mobile application</span>
                  </span>
                  <span className="rounded-full border border-sage-200 bg-white px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-sage-700">
                    Concept project
                  </span>
                </div>

                <h1 className="mt-5 max-w-[18ch] text-[clamp(2.5rem,5.4vw,4.6rem)] leading-[0.99] font-semibold tracking-[-0.045em] text-ink">
                  Nutriva — Making Healthy Eating Feel Simpler
                </h1>

                <p className="mt-6 max-w-[52ch] text-[16px] leading-[1.8] text-muted sm:text-[17px]">
                  {nutriva.shortDescription}
                </p>

                <p className="mt-4 max-w-[58ch] text-[13px] leading-[1.8] text-muted-soft">
                  {nutriva.intro}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-2">
                  {['Nutrition & healthy lifestyle', 'UI/UX design', 'Mobile app concept'].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line-strong bg-white/60 px-3 py-1.5 text-[10px] text-ink/70"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="lg:border-l lg:border-line lg:pl-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-soft">
                  Project snapshot
                </p>
                <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-5">
                  {nutriva.meta.map((item) => (
                    <div key={item.label}>
                      <dt className="text-[9px] uppercase tracking-[0.12em] text-muted-soft">
                        {item.label}
                      </dt>
                      <dd className="mt-1 text-[12px] font-medium leading-snug text-ink">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 flex gap-3 rounded-[12px] border border-sage-200 bg-sage-50 p-3.5">
                  <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sage-700" strokeWidth={1.8} />
                  <p className="text-[10px] leading-[1.7] text-sage-800">
                    Self-initiated concept. No verified research, usability results, client
                    outcomes or business metrics are claimed.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} y={30}>
            <div className="relative mt-12 overflow-hidden rounded-[24px] border border-sage-200 bg-sage-100 sm:mt-16 sm:rounded-[30px]">
              <div className="phone-stage-grid absolute inset-0 opacity-60" aria-hidden="true" />
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sage-300/50 sm:h-[560px] sm:w-[560px]"
              />
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sage-200/60 sm:h-[420px] sm:w-[420px]"
              />

              <div className="relative flex h-[520px] items-center justify-center px-4 sm:h-[610px]">
                <PhoneMockup
                  className="relative z-10 w-[212px] sm:w-[252px]"
                  tone={screenTone.dashboard}
                  floating
                  label="Nutriva home dashboard concept screen"
                >
                  <NutrivaScreen id="dashboard" />
                </PhoneMockup>

                <div className="absolute bottom-4 left-[4%] hidden w-[168px] -rotate-[6deg] sm:block lg:left-[10%] lg:w-[190px]">
                  <PhoneMockup tone={screenTone.onboarding} label="Nutriva onboarding concept screen">
                    <NutrivaScreen id="onboarding" />
                  </PhoneMockup>
                </div>

                <div className="absolute right-[4%] top-10 hidden w-[168px] rotate-[6deg] sm:block lg:right-[10%] lg:w-[190px]">
                  <PhoneMockup
                    tone={screenTone['meal-details']}
                    label="Nutriva meal details concept screen"
                  >
                    <NutrivaScreen id="meal-details" />
                  </PhoneMockup>
                </div>

                <div className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-sage-700 backdrop-blur sm:left-6 sm:top-6">
                  Nutriva · Concept UI
                </div>
                <p className="absolute bottom-4 right-4 text-[9px] tracking-[0.02em] text-sage-700 sm:bottom-6 sm:right-6">
                  Illustrative screens · Not a shipped product
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="mt-10 sm:mt-14">
        <CaseStudyNav />
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* 02 — Challenge                                                   */}
      {/* ---------------------------------------------------------------- */}
      <section id="challenge" className="scroll-mt-32 border-b border-line py-16 sm:py-24">
        <div className="shell">
          <SectionHeading
            index="02"
            eyebrow="The challenge"
            title={
              <>
                Nutrition guidance often feels like <span className="text-sage-700">homework.</span>
              </>
            }
            description="Before designing screens, I framed the friction people might meet when trying to eat a little better. These are hypotheses, not findings."
          />

          <div className="mt-12 grid gap-x-12 gap-y-0 sm:grid-cols-2">
            {nutriva.challenges.map((challenge, index) => (
              <Reveal key={challenge.title} delay={(index % 2) * 0.07}>
                <div className="flex gap-5 border-t border-line py-7">
                  <span className="font-mono text-[10px] text-sage-700">{challenge.index}</span>
                  <div>
                    <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-ink">
                      {challenge.title}
                    </h3>
                    <p className="mt-2 max-w-[42ch] text-[13px] leading-[1.75] text-muted">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-8 flex max-w-[72ch] gap-3 rounded-[14px] border border-sage-200 bg-sage-50 p-4 sm:p-5">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-sage-700" strokeWidth={1.8} />
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-sage-800">
                  Design hypotheses — not validated research
                </p>
                <p className="mt-1.5 text-[12px] leading-[1.75] text-sage-700">
                  {nutriva.challengeFraming}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 03 — Goals                                                       */}
      {/* ---------------------------------------------------------------- */}
      <section id="goals" className="scroll-mt-32 border-b border-line py-16 sm:py-24">
        <div className="shell">
          <SectionHeading
            index="03"
            eyebrow="Design goals"
            title={
              <>
                Four principles to design <span className="text-sage-700">against.</span>
              </>
            }
            description="Every decision in the concept was checked against these four intentions."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {nutriva.goals.map((goal, index) => (
              <Reveal key={goal.title} delay={index * 0.06}>
                <article className="group flex h-full flex-col rounded-[18px] border border-line bg-white p-5 transition-[border-color,box-shadow] duration-500 hover:border-sage-300 hover:shadow-[var(--shadow-soft)] sm:p-6">
                  <div className="flex items-start justify-between">
                    <span className="text-[11px] font-mono text-sage-700">{goal.index}</span>
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 rounded-full bg-sage-200 transition-colors duration-500 group-hover:bg-sage-500"
                    />
                  </div>
                  <h3 className="mt-8 text-[17px] leading-snug font-semibold tracking-[-0.02em] text-ink">
                    {goal.title}
                  </h3>
                  <p className="mt-2.5 text-[12.5px] leading-[1.7] text-muted">{goal.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 04 — Target users                                                */}
      {/* ---------------------------------------------------------------- */}
      <section id="users" className="scroll-mt-32 border-b border-line py-16 sm:py-24">
        <div className="shell">
          <SectionHeading
            index="04"
            eyebrow="Target users"
            title={
              <>
                Two people worth <span className="text-sage-700">designing for.</span>
              </>
            }
            description="Illustrative personas used to keep the design grounded in a real-life context. They are not research-validated."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {nutriva.personas.map((persona, index) => (
              <Reveal key={persona.id} delay={index * 0.08}>
                <article className="flex h-full flex-col rounded-[20px] border border-line bg-white p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <span className="grid h-12 w-12 place-items-center rounded-full bg-sage-100 text-[15px] font-semibold text-sage-700">
                        {persona.name.charAt(0)}
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink">
                          {persona.name}
                        </h3>
                        <p className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-muted-soft">
                          {persona.age} · {persona.label}
                        </p>
                      </div>
                    </div>
                    <span className="rounded-full border border-line bg-paper px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.1em] text-muted-soft">
                      Illustrative
                    </span>
                  </div>

                  <p className="mt-5 text-[13px] leading-[1.75] text-muted">{persona.context}</p>

                  <blockquote className="mt-5 border-l-2 border-sage-300 pl-4 text-[13.5px] leading-[1.65] font-medium italic text-ink/80">
                    “{persona.quote}”
                  </blockquote>

                  <div className="mt-6 grid gap-6 border-t border-line pt-5 sm:grid-cols-2">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-sage-700">
                        Needs
                      </p>
                      <ul className="mt-2.5 space-y-2">
                        {persona.needs.map((need) => (
                          <li
                            key={need}
                            className="flex gap-2 text-[11.5px] leading-[1.6] text-ink/75"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-sage-500"
                            />
                            {need}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-sage-700">
                        Frustrations
                      </p>
                      <ul className="mt-2.5 space-y-2">
                        {persona.frustrations.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 text-[11.5px] leading-[1.6] text-ink/75"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-sage-300"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-6 flex max-w-[68ch] gap-2 text-[10px] leading-[1.7] text-muted-soft">
              <Info className="mt-0.5 h-3 w-3 shrink-0" strokeWidth={1.8} />
              {nutriva.personasNote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 05 — Process                                                     */}
      {/* ---------------------------------------------------------------- */}
      <section id="process" className="scroll-mt-32 border-b border-line py-16 sm:py-24">
        <div className="shell">
          <SectionHeading
            index="05"
            eyebrow="UX design process"
            title={
              <>
                From a question to a <span className="text-sage-700">considered interface.</span>
              </>
            }
            description="An iterative process — each stage informed the next, with room to revisit decisions as the screens evolved."
          />

          <div className="hidden lg:block">
            <div className="relative mt-16">
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-[11px] h-px bg-line-strong"
              />
              <ol className="relative grid grid-cols-6 gap-6">
                {nutriva.process.map((step) => (
                  <li key={step.title} className="relative pt-8">
                    <span className="absolute top-0 grid h-[23px] w-[23px] -translate-y-[0px] place-items-center rounded-full border border-sage-300 bg-paper text-[8px] font-semibold text-sage-700">
                      {step.index}
                    </span>
                    <h3 className="text-[14px] font-semibold tracking-[-0.02em] text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[11px] leading-[1.65] text-muted">{step.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <ol className="mt-10 lg:hidden">
            {nutriva.process.map((step, index) => (
              <li key={step.title} className="relative flex gap-5 pb-8 last:pb-0">
                {index !== nutriva.process.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-[13px] top-7 w-px bg-line-strong"
                  />
                )}
                <span className="relative z-10 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-sage-300 bg-paper text-[8px] font-semibold text-sage-700">
                  {step.index}
                </span>
                <div className="pt-1">
                  <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 max-w-[44ch] text-[12px] leading-[1.7] text-muted">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <Reveal delay={0.08}>
            <p className="mt-10 flex items-start gap-2 border-t border-line pt-5 text-[10px] leading-[1.7] text-muted-soft">
              <Info className="mt-0.5 h-3 w-3 shrink-0" strokeWidth={1.8} />
              A flexible framework rather than a rigid sequence. In a real engagement, research and
              testing would add feedback loops between these stages.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 06 — Flow                                                        */}
      {/* ---------------------------------------------------------------- */}
      <section id="flow" className="scroll-mt-32 border-b border-line bg-paper-deep/50 py-16 sm:py-24">
        <div className="shell">
          <SectionHeading
            index="06"
            eyebrow="User flow"
            title={
              <>
                Eight steps from first open to <span className="text-sage-700">first log.</span>
              </>
            }
            description="A deliberately short first-run journey. Each screen asks for one clear action before moving forward."
          />

          <div className="mt-14 hidden lg:block">
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-[11px] h-px bg-line-strong"
              />
              <ol className="relative grid grid-cols-8 gap-4">
                {nutriva.flow.map((step, index) => (
                  <li key={step.title} className="relative pt-8">
                    <span
                      className={cn(
                        'absolute top-0 grid h-[23px] w-[23px] place-items-center rounded-full border text-[8px] font-semibold',
                        index === 0 || index === nutriva.flow.length - 1
                          ? 'border-sage-600 bg-sage-700 text-paper'
                          : 'border-sage-300 bg-paper text-sage-700',
                      )}
                    >
                      {step.index}
                    </span>
                    <h3 className="text-[12.5px] font-semibold tracking-[-0.01em] text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-[10px] leading-[1.6] text-muted">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <ol className="mt-10 lg:hidden">
            {nutriva.flow.map((step, index) => (
              <li key={step.title} className="relative flex gap-5 pb-7 last:pb-0">
                {index !== nutriva.flow.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-[13px] top-7 w-px bg-line-strong"
                  />
                )}
                <span
                  className={cn(
                    'relative z-10 grid h-7 w-7 shrink-0 place-items-center rounded-full border text-[8px] font-semibold',
                    index === 0 || index === nutriva.flow.length - 1
                      ? 'border-sage-600 bg-sage-700 text-paper'
                      : 'border-sage-300 bg-white text-sage-700',
                  )}
                >
                  {step.index}
                </span>
                <div className="pt-0.5">
                  <h3 className="text-[13px] font-semibold text-ink">{step.title}</h3>
                  <p className="mt-1 text-[11.5px] leading-[1.6] text-muted">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <Reveal delay={0.08}>
            <p className="mt-10 border-t border-line pt-5 text-[10px] leading-[1.7] text-muted-soft">
              {nutriva.flowNote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 07 — Wireframes                                                  */}
      {/* ---------------------------------------------------------------- */}
      <section id="wireframes" className="scroll-mt-32 border-b border-line py-16 sm:py-24">
        <div className="shell">
          <SectionHeading
            index="07"
            eyebrow="Wireframes"
            title={
              <>
                Structure first. <span className="text-sage-700">Detail later.</span>
              </>
            }
            description="Low-fidelity layouts were used to test hierarchy, grouping and the path through each core screen before any visual styling."
          />

          <WireframeGallery />

          <Reveal delay={0.1}>
            <p className="mt-6 flex max-w-[70ch] gap-2 text-[10px] leading-[1.7] text-muted-soft">
              <Info className="mt-0.5 h-3 w-3 shrink-0" strokeWidth={1.8} />
              These are conceptual wireframes created for this portfolio. They are not
              reconstructed client deliverables.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 08 — UI design                                                   */}
      {/* ---------------------------------------------------------------- */}
      <section id="ui-design" className="scroll-mt-32 border-b border-line bg-paper-deep/50 py-16 sm:py-24">
        <div className="shell">
          <SectionHeading
            index="08"
            eyebrow="UI design"
            title={
              <>
                Ten screens, one <span className="text-sage-700">quiet visual language.</span>
              </>
            }
            description="A fresh green palette, warm surfaces and a consistent type scale carry the experience from welcome to progress."
          />

          <Reveal delay={0.05}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-line py-4 text-[10px] text-muted">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-nutriva-500" />
                10 concept screens
              </span>
              <span>iOS-style mobile frames</span>
              <span>Illustrative nutrition values</span>
              <span className="ml-auto hidden sm:block">Swipe on mobile · Scroll on desktop</span>
            </div>
          </Reveal>

          <ScreenGallery />

          <Reveal delay={0.08}>
            <div className="mt-8 flex max-w-[76ch] gap-3 rounded-[14px] border border-sage-200 bg-sage-50 p-4">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-sage-700" strokeWidth={1.8} />
              <p className="text-[11px] leading-[1.75] text-sage-800">{nutriva.screenNote}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 09 — Design system                                               */}
      {/* ---------------------------------------------------------------- */}
      <section id="design-system" className="scroll-mt-32 border-b border-line py-16 sm:py-24">
        <div className="shell">
          <SectionHeading
            index="09"
            eyebrow="Design system"
            title={
              <>
                A small system that keeps every screen <span className="text-sage-700">in tune.</span>
              </>
            }
            description={nutriva.designSystem.intro}
          />

          <DesignSystemShowcase />

          <Reveal delay={0.1}>
            <div className="mt-6 flex flex-wrap gap-2">
              {nutriva.designSystem.components.map((component) => (
                <span
                  key={component}
                  className="rounded-full border border-line-strong bg-white px-3 py-1.5 text-[10px] text-muted"
                >
                  {component}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 10 — Final presentation                                          */}
      {/* ---------------------------------------------------------------- */}
      <section id="final" className="scroll-mt-32 border-b border-line py-16 sm:py-24">
        <div className="shell">
          <SectionHeading
            index="10"
            eyebrow="Final presentation"
            title={
              <>
                The concept, presented as a <span className="text-sage-700">cohesive whole.</span>
              </>
            }
            description="Four screens selected to show the visual system at its most expressive — welcome, daily overview, meal detail and progress."
          />

          <FinalShowcase />
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 11 — Reflection                                                  */}
      {/* ---------------------------------------------------------------- */}
      <section id="reflection" className="scroll-mt-32 py-16 sm:py-24">
        <div className="shell">
          <SectionHeading
            index="11"
            eyebrow="Design reflection"
            title={
              <>
                What this project <span className="text-sage-700">taught me.</span>
              </>
            }
            description="A moment to step back — what worked, what I would test next, and why the process matters as much as the final screens."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-8">
            <Reveal>
              <div className="relative h-full overflow-hidden rounded-[22px] border border-sage-200 bg-sage-100 p-6 sm:p-9">
                <Quote
                  aria-hidden="true"
                  className="h-8 w-8 text-sage-400"
                  strokeWidth={1.4}
                />
                <blockquote className="mt-6 space-y-5">
                  {nutriva.reflection.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-[clamp(1.05rem,1.8vw,1.3rem)] leading-[1.65] font-medium tracking-[-0.015em] text-sage-900"
                    >
                      {paragraph}
                    </p>
                  ))}
                </blockquote>
                <div className="mt-8 flex gap-2 border-t border-sage-300/60 pt-5 text-[10px] leading-[1.7] text-sage-700">
                  <Info className="mt-0.5 h-3 w-3 shrink-0" strokeWidth={1.8} />
                  {nutriva.reflectionNote}
                </div>
              </div>
            </Reveal>

            <div className="space-y-8">
              <Reveal delay={0.08}>
                <div>
                  <h3 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-soft">
                    Design decisions
                  </h3>
                  <ul className="mt-4 divide-y divide-line border-y border-line">
                    {nutriva.designDecisions.map((decision) => (
                      <li key={decision.title} className="py-3.5">
                        <p className="text-[12.5px] font-semibold text-ink">{decision.title}</p>
                        <p className="mt-1 text-[11px] leading-[1.65] text-muted">
                          {decision.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div>
                  <h3 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-soft">
                    Next steps
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {nutriva.nextSteps.map((step, index) => (
                      <li key={step} className="flex gap-3 text-[11.5px] leading-[1.6] text-muted">
                        <span className="font-mono text-[9px] text-sage-500">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.12}>
            <div className="mt-16 flex flex-col gap-6 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-soft">
                  Thank you for reading
                </p>
                <p className="mt-2 max-w-[30ch] text-[clamp(1.4rem,2.6vw,2rem)] leading-tight font-semibold tracking-[-0.03em] text-ink">
                  Let’s create something meaningful next.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button to="/" variant="secondary" withArrow>
                  Back to portfolio
                </Button>
                <Button to="/#contact" variant="primary" withArrow>
                  Get in touch
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
