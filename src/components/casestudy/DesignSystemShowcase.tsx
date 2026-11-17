import {
  CalendarDays,
  Droplets,
  Flame,
  Heart,
  Home,
  Leaf,
  Plus,
  Search,
  User,
} from 'lucide-react'
import { nutriva } from '../../data/nutriva'
import { FoodArt } from '../FoodArt'
import { cn } from '../../lib/utils'

const panel =
  'rounded-[20px] border border-line bg-white p-5 sm:p-6'

const accentIcons = [Leaf, Flame, Droplets, Search, CalendarDays, Heart, User, Plus]

export function DesignSystemShowcase() {
  const { designSystem } = nutriva

  return (
    <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {/* Colour */}
      <div className={cn(panel, 'md:col-span-2')}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-soft">
              Colour palette
            </p>
            <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-ink">
              Fresh, soft and grounded
            </h3>
          </div>
          <span className="rounded-full bg-nutriva-100 px-2.5 py-1 text-[9px] font-medium text-nutriva-700">
            01 / 05
          </span>
        </div>

        <div className="mt-5 grid grid-cols-5 gap-2 sm:gap-3">
          {designSystem.colors.map((color) => (
            <div key={color.hex}>
              <div
                className={cn(
                  'h-16 rounded-[10px] sm:h-20',
                  color.className,
                )}
              />
              <p className="mt-2 text-[10px] font-medium leading-tight text-ink">{color.name}</p>
              <p className="mt-0.5 font-mono text-[8px] text-muted-soft">{color.hex}</p>
              <p className="mt-1 hidden text-[8.5px] leading-snug text-muted sm:block">{color.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Type */}
      <div className={panel}>
        <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-soft">
          Typography
        </p>
        <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-ink">
          Plus Jakarta Sans
        </h3>

        <div className="mt-4 divide-y divide-line border-y border-line">
          {designSystem.typography.map((type) => (
            <div key={type.label} className="flex items-center justify-between gap-3 py-2.5">
              <span className={cn('font-semibold tracking-[-0.03em] text-ink', type.size)}>
                {type.sample}
              </span>
              <span className="text-right">
                <span className="block text-[10px] font-medium text-ink">{type.label}</span>
                <span className="block text-[8.5px] text-muted-soft">{type.detail}</span>
              </span>
            </div>
          ))}
        </div>

        <p className="mt-3 text-[9px] leading-relaxed text-muted-soft">
          Generous line height · restrained weights · comfortable reading widths.
        </p>
      </div>

      {/* Buttons + input */}
      <div className={panel}>
        <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-soft">
          Buttons & inputs
        </p>

        <div className="mt-4 space-y-2">
          <div className="flex h-10 items-center justify-center rounded-full bg-nutriva-500 text-[11px] font-semibold text-white">
            Add to diary
          </div>
          <div className="flex h-10 items-center justify-center gap-1.5 rounded-full border border-nutriva-300 bg-white text-[11px] font-semibold text-nutriva-700">
            <Plus className="h-3 w-3" />
            Add a snack
          </div>
        </div>

        <div className="mt-5">
          <p className="text-[9px] font-medium text-muted">Email address</p>
          <div className="mt-1.5 flex h-10 items-center gap-2 rounded-[10px] border border-line-strong bg-paper px-3">
            <Search className="h-3.5 w-3.5 text-muted-soft" />
            <span className="text-[10px] text-muted-soft">hello@example.com</span>
          </div>
          <p className="mt-1.5 text-[8px] text-muted-soft">
            Clear labels, generous tap targets and quiet placeholder text.
          </p>
        </div>
      </div>

      {/* Cards + navigation */}
      <div className={panel}>
        <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-soft">
          Cards & navigation
        </p>

        <div className="mt-4 rounded-[14px] border border-line bg-paper p-2.5">
          <FoodArt variant="oats" className="h-[58px] w-full rounded-[9px] bg-nutriva-100" />
          <div className="flex items-start justify-between gap-2 px-1 pt-2">
            <div>
              <p className="text-[10px] font-semibold text-ink">Overnight oats</p>
              <p className="mt-0.5 text-[8px] text-muted-soft">320 kcal · Breakfast</p>
            </div>
            <span className="rounded-full bg-nutriva-100 px-2 py-0.5 text-[7px] font-semibold text-nutriva-700">
              Logged
            </span>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-around rounded-[12px] border border-line bg-white py-2">
          {[
            { icon: Home, active: true },
            { icon: Search, active: false },
            { icon: Plus, active: false },
            { icon: TrendingIcon, active: false },
            { icon: User, active: false },
          ].map((item, index) => (
            <item.icon
              key={index}
              className={cn(
                'h-3.5 w-3.5',
                item.active ? 'text-nutriva-600' : 'text-[#A2A89E]',
              )}
              strokeWidth={item.active ? 2.2 : 1.7}
            />
          ))}
        </div>
        <p className="mt-2 text-center text-[8px] text-muted-soft">
          Bottom navigation with a clear active state
        </p>
      </div>

      {/* Icons + spacing */}
      <div className={panel}>
        <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-soft">
          Icons & spacing
        </p>

        <div className="mt-4 grid grid-cols-4 gap-2">
          {accentIcons.map((Icon, index) => (
            <span
              key={index}
              className="flex h-10 items-center justify-center rounded-[9px] border border-line bg-paper text-nutriva-600"
            >
              <Icon className="h-4 w-4" strokeWidth={1.7} />
            </span>
          ))}
        </div>

        <div className="mt-5 space-y-1.5">
          {designSystem.spacing.map((space) => (
            <div key={space.label} className="flex items-center gap-3">
              <span className="w-4 font-mono text-[8px] text-muted-soft">{space.label}</span>
              <span
                className="h-1.5 rounded-full bg-sage-300"
                style={{ width: `${Number(space.label) * 3}px`, maxWidth: '100%' }}
              />
              <span className="text-[8px] text-muted-soft">{space.value}</span>
            </div>
          ))}
        </div>

        <p className="mt-4 border-t border-line pt-3 text-[8.5px] leading-relaxed text-muted-soft">
          A 4-point spacing scale keeps rhythm consistent across every screen.
        </p>
      </div>
    </div>
  )
}

function TrendingIcon({ className, strokeWidth }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth ?? 2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 17l5-6 4 3 6-8" />
      <path d="M14 6h4v4" />
    </svg>
  )
}
