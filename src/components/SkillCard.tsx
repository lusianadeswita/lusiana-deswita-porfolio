import { ArrowUpRight } from 'lucide-react'
import type { SkillGroup } from '../data/skills'
import { cn } from '../lib/utils'

type SkillCardProps = {
  group: SkillGroup
  className?: string
}

export function SkillCard({ group, className }: SkillCardProps) {
  return (
    <article
      className={cn(
        'group relative flex h-full flex-col border-t border-line-strong pt-6',
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-[10px] tracking-[0.08em] text-sage-700">
            {group.index}
          </span>
          <h3 className="text-xl font-semibold tracking-[-0.02em] text-ink sm:text-[1.35rem]">
            {group.title}
          </h3>
        </div>
        <ArrowUpRight
          aria-hidden="true"
          className="mt-1 h-4 w-4 shrink-0 text-sage-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sage-700"
        />
      </div>

      <p className="mt-3 max-w-[34ch] text-[13px] leading-[1.7] text-muted">
        {group.description}
      </p>

      <ul className="mt-6 space-y-0 border-t border-line">
        {group.skills.map((skill) => (
          <li
            key={skill}
            className="flex items-center gap-3 border-b border-line py-2.5 text-[13px] text-ink/80"
          >
            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-sage-400"
            />
            {skill}
          </li>
        ))}
      </ul>
    </article>
  )
}
