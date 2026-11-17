import { useContent } from '../i18n/useContent'
import { Reveal } from '../components/AnimationWrapper'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SectionHeading'

export function FeaturedProject() {
  const { nutriva, t } = useContent()

  return (
    <section id="work" className="border-t border-line bg-paper-deep/60 py-20 sm:py-28 lg:py-32">
      <div className="shell">
        <SectionHeading
          index="02"
          eyebrow={t.featured.eyebrow}
          title={
            <>
              {t.featured.titleLead}
              <span className="text-sage-700">{t.featured.titleAccent}</span>
            </>
          }
          description={t.featured.description}
        />

        <Reveal className="mt-12 lg:mt-16" y={30}>
          <ProjectCard />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <dl className="flex flex-wrap gap-x-10 gap-y-4">
              {nutriva.keyFacts.map((fact) => (
                <div key={fact.label} className="flex items-baseline gap-2.5">
                  <dt className="sr-only">{fact.label}</dt>
                  <dd className="text-2xl font-semibold tracking-[-0.03em] text-ink">
                    {fact.value}
                  </dd>
                  <dd className="text-[11px] uppercase tracking-[0.1em] text-muted">{fact.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
