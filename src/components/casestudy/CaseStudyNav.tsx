import { Nutriva as nutriva } from '../../data/nutriva'
import { useActiveSection } from '../../hooks/useActiveSection'
import { cn } from '../../lib/utils'

const ids = nutriva.sections.map((section) => section.id)

export function CaseStudyNav() {
  const active = useActiveSection(ids)

  return (
    <div className="sticky top-[72px] z-30 border-y border-line bg-paper/90 backdrop-blur-xl">
      <div className="shell">
        <div className="no-scrollbar flex items-center gap-1 overflow-x-auto py-2.5">
          <span className="mr-3 hidden shrink-0 text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-soft xl:block">
            Case study
          </span>
          {nutriva.sections.map((section) => {
            const isActive = active === section.id
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[10px] transition-colors duration-300',
                  isActive
                    ? 'bg-sage-100 text-sage-800'
                    : 'text-muted hover:bg-sage-50 hover:text-ink',
                )}
              >
                <span
                  className={cn(
                    'font-mono text-[8px]',
                    isActive ? 'text-sage-700' : 'text-muted-soft',
                  )}
                >
                  {section.index}
                </span>
                {section.label}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
