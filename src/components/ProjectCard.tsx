import { ArrowUpRight } from 'lucide-react'
import { useContent } from '../i18n/useContent'
import { PhoneMockup } from './PhoneMockup'
import { NutrivaScreen } from './nutriva/NutrivaScreens'
import { screenTone } from './nutriva/screenMeta'

/**
 * The featured project card. One project is shown today, but the component is
 * content-driven so more case studies can be added later.
 */
export function ProjectCard() {
  const { nutriva, t } = useContent()

  return (
    <article className="group relative overflow-hidden rounded-[24px] border border-line bg-white sm:rounded-[30px]">
      <div className="grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
        <div className="flex flex-col justify-between p-6 sm:p-9 lg:p-11">
          <div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-sage-700">
              <span className="rounded-full bg-sage-100 px-2.5 py-1">{t.featured.eyebrow}</span>
              <span className="text-muted-soft">01 / 01</span>
            </div>

            <h3 className="mt-6 text-[clamp(2.5rem,5vw,3.75rem)] leading-none font-semibold tracking-[-0.045em] text-ink">
              {nutriva.name}
            </h3>
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-sage-700">
              {nutriva.category} · {nutriva.platform}
            </p>

            <p className="mt-6 max-w-[42ch] text-[15px] leading-[1.75] text-muted">
              {nutriva.overview}
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6 sm:grid-cols-3">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.14em] text-muted-soft">
                  {nutriva.meta[3]?.label}
                </dt>
                <dd className="mt-1.5 text-[13px] font-medium text-ink">{nutriva.role}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.14em] text-muted-soft">
                  {nutriva.meta[4]?.label}
                </dt>
                <dd className="mt-1.5 text-[13px] font-medium text-ink">{nutriva.projectType}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.14em] text-muted-soft">
                  {nutriva.meta[5]?.label}
                </dt>
                <dd className="mt-1.5 text-[13px] font-medium text-ink">{nutriva.status}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden bg-sage-100 sm:min-h-[500px] lg:min-h-full">
          <div className="phone-stage-grid absolute inset-0 opacity-80" aria-hidden="true" />
          <div
            className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sage-300/60 sm:h-[420px] sm:w-[420px]"
            aria-hidden="true"
          />
          <div
            className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sage-200/50 sm:h-[300px] sm:w-[300px]"
            aria-hidden="true"
          />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-[46%]">
            <PhoneMockup
              className="w-[178px] transition-transform duration-700 ease-out sm:w-[215px] lg:group-hover:-translate-y-1.5"
              tone={screenTone.dashboard}
              floating
              label={t.caseStudy.labels.dashboard}
            >
              <NutrivaScreen id="dashboard" />
            </PhoneMockup>
          </div>

          <div className="absolute -bottom-8 right-[6%] hidden w-[160px] rotate-[6deg] sm:block lg:w-[180px]">
            <PhoneMockup
              tone={screenTone['meal-details']}
              className="transition-transform duration-700 ease-out lg:group-hover:-translate-y-3"
              label={t.caseStudy.labels.mealDetails}
            >
              <NutrivaScreen id="meal-details" />
            </PhoneMockup>
          </div>

          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-[10px] font-medium text-sage-800 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-nutriva-500" />
            {t.hero.conceptProject}
          </div>

          <div className="absolute bottom-5 left-5 hidden items-center gap-2 text-[10px] font-medium tracking-[0.02em] text-sage-700 sm:flex">
            <ArrowUpRight className="h-3 w-3" />
            {t.caseStudy.uiDesign.stats[0]}
          </div>
        </div>
      </div>
    </article>
  )
}
