import { PenTool } from 'lucide-react'
import { useContent } from '../i18n/useContent'
import { Reveal } from '../components/AnimationWrapper'
import { SectionHeading } from '../components/SectionHeading'

function FigmaMark() {
  return (
    <span className="grid w-9 grid-cols-2" aria-hidden="true">
      <span className="h-4.5 rounded-l-full bg-[#F24E1E]" />
      <span className="h-4.5 rounded-r-full bg-[#FF7262]" />
      <span className="h-4.5 rounded-l-full bg-[#A259FF]" />
      <span className="h-4.5 rounded-full bg-[#1ABCFE]" />
      <span className="h-4.5 rounded-l-full bg-[#0ACF83]" />
      <span className="h-4.5" />
    </span>
  )
}

function FigJamMark() {
  return (
    <span className="grid h-9 w-9 grid-cols-2 gap-1" aria-hidden="true">
      <span className="rounded-tl-[10px] rounded-br-[4px] bg-[#FFCD29]" />
      <span className="rounded-tr-[10px] rounded-bl-[4px] bg-[#A259FF]" />
      <span className="rounded-bl-[10px] rounded-tr-[4px] bg-[#1ABCFE]" />
      <span className="rounded-br-[10px] rounded-tl-[4px] bg-[#0ACF83]" />
    </span>
  )
}

const marks = {
  Figma: FigmaMark,
  FigJam: FigJamMark,
}

export function Tools() {
  const { tools, t } = useContent()

  return (
    <section aria-labelledby="tools-heading" className="border-t border-line bg-sage-50 py-20 sm:py-24">
      <div className="shell">
        <SectionHeading
          index="04"
          eyebrow={t.tools.eyebrow}
          title={<span id="tools-heading">{t.tools.title}</span>}
          description={t.tools.description}
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-14 lg:gap-6">
          {tools.map((tool, index) => {
            const Mark = marks[tool.name as keyof typeof marks] ?? PenTool
            return (
              <Reveal key={tool.name} delay={index * 0.08}>
                <article className="group flex h-full flex-col justify-between rounded-[20px] border border-line bg-white p-6 transition-[border-color,box-shadow] duration-500 hover:border-sage-300 hover:shadow-[var(--shadow-soft)] sm:p-8">
                  <div>
                    <div className="flex items-start justify-between gap-6">
                      <span className="flex h-14 w-14 items-center justify-center rounded-[14px] border border-line bg-paper">
                        <Mark />
                      </span>
                      <span className="rounded-full border border-line bg-paper px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-sage-700">
                        {tool.level}
                      </span>
                    </div>

                    <h3 className="mt-7 text-[1.6rem] font-semibold tracking-[-0.03em] text-ink">
                      {tool.name}
                    </h3>
                    <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.12em] text-sage-700">
                      {tool.role}
                    </p>
                    <p className="mt-4 max-w-[40ch] text-[14px] leading-[1.75] text-muted">
                      {tool.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-2 border-t border-line pt-5 text-[10px] tracking-[0.04em] text-muted-soft">
                    <span className="h-1.5 w-1.5 rounded-full bg-sage-400" />
                    {t.tools.usedAcross}
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.12}>
          <p className="mt-6 max-w-[62ch] text-[11px] leading-[1.7] text-muted-soft">
            {t.tools.note}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
