import { ArrowUpRight } from 'lucide-react'
import { useContent } from '../i18n/useContent'
import { Reveal, Stagger, StaggerItem } from '../components/AnimationWrapper'
import { SectionHeading } from '../components/SectionHeading'
import { SkillCard } from '../components/SkillCard'

export function Skills() {
  const { skillGroups, t } = useContent()

  return (
    <section id="skills" className="border-t border-line py-20 sm:py-28 lg:py-32">
      <div className="shell">
        <SectionHeading
          index="03"
          eyebrow={t.skills.eyebrow}
          title={
            <>
              {t.skills.titleLead}
              <span className="text-sage-700">{t.skills.titleEmphasis}</span>
              {t.skills.titleTail}
            </>
          }
          description={t.skills.description}
        />

        <Stagger className="mt-12 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {skillGroups.map((group) => (
            <StaggerItem key={group.id} className="h-full">
              <SkillCard group={group} />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.08}>
          <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[62ch] text-[12px] leading-[1.75] text-muted">{t.skills.note}</p>
            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 text-[12px] font-medium text-ink transition-colors hover:text-sage-700"
            >
              {t.skills.cta}
              <ArrowUpRight className="h-4 w-4 text-sage-700 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
