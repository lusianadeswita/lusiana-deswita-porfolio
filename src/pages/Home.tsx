import { useContent } from '../i18n/useContent'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { Hero } from '../sections/Hero'
import { About } from '../sections/About'
import { FeaturedProject } from '../sections/FeaturedProject'
import { Skills } from '../sections/Skills'
import { Tools } from '../sections/Tools'
import { Contact } from '../sections/Contact'

function Principles() {
  const { principles, t } = useContent()

  return (
    <section aria-label={t.principles.ariaLabel} className="border-y border-line bg-paper">
      <div className="shell py-8 sm:py-10">
        <div className="grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4 sm:divide-x sm:divide-line">
          {principles.map((principle, index) => (
            <div key={principle.title} className="sm:px-6 sm:first:pl-0 sm:last:pr-0">
              <p className="font-mono text-[9px] tracking-[0.08em] text-sage-700">
                P.0{index + 1}
              </p>
              <p className="mt-2 text-[13px] font-semibold tracking-[-0.01em] text-ink">
                {principle.title}
              </p>
              <p className="mt-1 max-w-[24ch] text-[10.5px] leading-relaxed text-muted">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Home() {
  const { t } = useContent()

  useDocumentMeta({
    title: t.meta.home.title,
    description: t.meta.home.description,
  })

  return (
    <>
      <Hero />
      <Principles />
      <About />
      <FeaturedProject />
      <Skills />
      <Tools />
      <Contact />
    </>
  )
}
