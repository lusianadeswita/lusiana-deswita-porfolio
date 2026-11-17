import { ArrowLeft } from 'lucide-react'
import { useContent } from '../i18n/useContent'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { Button } from '../components/Button'
import { Reveal } from '../components/AnimationWrapper'

export function NotFound() {
  const { t } = useContent()

  useDocumentMeta({
    title: t.meta.notFound.title,
    description: t.meta.notFound.description,
  })

  return (
    <section className="relative flex min-h-[78svh] items-center overflow-hidden pt-28 pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-sage-200"
      />
      <div className="shell relative">
        <Reveal>
          <p className="eyebrow text-sage-700">
            <span>{t.notFound.eyebrow}</span>
            <span aria-hidden="true" className="h-px w-8 bg-sage-300" />
            <span>404</span>
          </p>
          <p className="mt-6 text-[clamp(5rem,16vw,12rem)] leading-[0.8] font-semibold tracking-[-0.06em] text-sage-200">
            404
          </p>
          <h1 className="mt-6 max-w-[18ch] text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-semibold tracking-[-0.04em] text-ink">
            {t.notFound.title}
          </h1>
          <p className="mt-4 max-w-[44ch] text-[14px] leading-[1.8] text-muted">
            {t.notFound.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/" variant="primary" withArrow>
              {t.notFound.home}
            </Button>
            <Button to="/work/nutriva" variant="secondary">
              <span className="inline-flex items-center gap-2">
                <ArrowLeft className="h-3.5 w-3.5" />
                {t.notFound.caseStudy}
              </span>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
