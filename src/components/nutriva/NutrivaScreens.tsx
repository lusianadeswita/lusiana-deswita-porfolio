import type { ReactNode } from 'react'
import {
  ArrowLeft,
  Bell,
  CalendarDays,
  ChevronRight,
  CircleHelp,
  Clock3,
  Droplets,
  Flame,
  Heart,
  Home,
  Leaf,
  Lock,
  LogOut,
  Mail,
  Plus,
  Search,
  Settings2,
  SlidersHorizontal,
  Sparkles,
  Target,
  TrendingUp,
  User,
} from 'lucide-react'
import type { ScreenId } from '../../data/nutriva'
import { cn } from '../../lib/utils'
import { FoodArt, type FoodArtVariant } from '../FoodArt'

/* ------------------------------------------------------------------ */
/* Shared primitives                                                   */
/* ------------------------------------------------------------------ */

const card =
  'rounded-[16px] bg-white ring-1 ring-[#EDEFE8] shadow-[0_1px_2px_rgba(37,53,43,0.03)]'

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-1.5">
      <span
        className={cn(
          'grid place-items-center rounded-full bg-nutriva-500 text-white',
          compact ? 'h-5 w-5' : 'h-7 w-7',
        )}
      >
        <Leaf className={compact ? 'h-2.5 w-2.5' : 'h-3.5 w-3.5'} strokeWidth={2.2} />
      </span>
      <span
        className={cn(
          'font-semibold tracking-[-0.02em] text-nutriva-800',
          compact ? 'text-[11px]' : 'text-[13px]',
        )}
      >
        Nutriva
      </span>
    </div>
  )
}

function CalorieRing({
  value,
  size = 62,
  stroke = 5,
  track = 'rgba(255,255,255,0.28)',
  color = '#FFFFFF',
  children,
}: {
  value: number
  size?: number
  stroke?: number
  track?: string
  color?: string
  children?: ReactNode
}) {
  const radius = 42
  const circumference = 2 * Math.PI * radius
  const dash = (Math.min(Math.max(value, 0), 100) / 100) * circumference

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90" aria-hidden="true">
        <circle cx="50" cy="50" r={radius} fill="none" stroke={track} strokeWidth={stroke} />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circumference}`}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center">{children}</div>
    </div>
  )
}

function MacroBar({
  label,
  value,
  goal,
  color,
}: {
  label: string
  value: number
  goal: number
  color: string
}) {
  const percent = Math.min((value / goal) * 100, 100)
  return (
    <div className={cn(card, 'px-2 py-2')}>
      <p className="text-[7.5px] font-medium uppercase tracking-[0.08em] text-[#8B9288]">
        {label}
      </p>
      <p className="mt-0.5 text-[11px] font-semibold text-nutriva-800">
        {value}
        <span className="ml-0.5 text-[7px] font-normal text-[#9AA196]">g</span>
      </p>
      <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-[#EEF1EA]">
        <div
          className="h-full rounded-full"
          style={{ width: `${percent}%`, backgroundColor: color }}
        />
      </div>
    </div>
  )
}

type NavKey = 'home' | 'discover' | 'progress' | 'profile'

function BottomNav({ active }: { active: NavKey }) {
  const items: Array<{ key: NavKey; label: string; icon: typeof Home }> = [
    { key: 'home', label: 'Home', icon: Home },
    { key: 'discover', label: 'Discover', icon: Search },
    { key: 'progress', label: 'Progress', icon: TrendingUp },
    { key: 'profile', label: 'Profile', icon: User },
  ]

  return (
    <div className="-mx-4 mt-auto border-t border-[#EDEFE8] bg-white px-3 pb-[19px] pt-2">
      <div className="flex items-end justify-between">
        {items.slice(0, 2).map((item) => (
          <NavItem key={item.key} item={item} active={active === item.key} />
        ))}

        <button
          type="button"
          tabIndex={-1}
          aria-label="Log a meal"
          className="-mt-6 grid h-9 w-9 place-items-center rounded-full bg-nutriva-500 text-white shadow-[0_8px_16px_-8px_rgba(95,155,114,0.9)] ring-4 ring-paper"
        >
          <Plus className="h-4 w-4" strokeWidth={2.2} />
        </button>

        {items.slice(2).map((item) => (
          <NavItem key={item.key} item={item} active={active === item.key} />
        ))}
      </div>
    </div>
  )
}

function NavItem({
  item,
  active,
}: {
  item: { key: NavKey; label: string; icon: typeof Home }
  active: boolean
}) {
  const Icon = item.icon
  return (
    <div
      className={cn(
        'flex w-[46px] flex-col items-center gap-0.5',
        active ? 'text-nutriva-600' : 'text-[#A2A89E]',
      )}
    >
      <Icon className="h-[15px] w-[15px]" strokeWidth={active ? 2.2 : 1.7} />
      <span className="text-[6.5px] font-medium tracking-[0.01em]">{item.label}</span>
    </div>
  )
}

function Screen({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('flex h-full flex-col bg-paper px-4 pt-[38px]', className)}>
      {children}
    </div>
  )
}

function ScreenHeader({
  title,
  subtitle,
  back = false,
  right,
  className,
}: {
  title: string
  subtitle?: string
  back?: boolean
  right?: ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex items-center justify-between', className)}>
      <div className="flex items-center gap-2">
        {back && (
          <span className="grid h-6 w-6 place-items-center rounded-full bg-white text-nutriva-800 ring-1 ring-[#EDEFE8]">
            <ArrowLeft className="h-3 w-3" strokeWidth={2} />
          </span>
        )}
        <div>
          <h4 className="text-[13px] font-semibold leading-tight tracking-[-0.015em] text-nutriva-800">
            {title}
          </h4>
          {subtitle && <p className="mt-0.5 text-[7.5px] text-[#929A8F]">{subtitle}</p>}
        </div>
      </div>
      {right}
    </div>
  )
}

function IconButton({
  children,
  className,
  label,
}: {
  children: ReactNode
  className?: string
  label?: string
}) {
  return (
    <span
      aria-label={label}
      className={cn(
        'grid h-6 w-6 place-items-center rounded-full bg-white text-nutriva-800 ring-1 ring-[#EDEFE8]',
        className,
      )}
    >
      {children}
    </span>
  )
}

function Pill({ children, active = false }: { children: ReactNode; active?: boolean }) {
  return (
    <span
      className={cn(
        'whitespace-nowrap rounded-full px-2.5 py-1 text-[7.5px] font-medium',
        active
          ? 'bg-nutriva-500 text-white'
          : 'bg-white text-[#798176] ring-1 ring-[#E7EBE2]',
      )}
    >
      {children}
    </span>
  )
}

function IllustrationCard({ variant }: { variant: FoodArtVariant }) {
  return (
    <div className="relative h-[92px] overflow-hidden rounded-[14px] bg-nutriva-100">
      <FoodArt variant={variant} className="h-full w-full" />
      <span className="absolute left-2 top-2 rounded-full bg-white/85 px-2 py-0.5 text-[6.5px] font-semibold uppercase tracking-[0.1em] text-nutriva-700 backdrop-blur">
        Balanced
      </span>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Screens                                                             */
/* ------------------------------------------------------------------ */

function SplashScreen() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center overflow-hidden bg-nutriva-500 px-6 text-center">
      <div className="absolute -left-10 -top-10 h-36 w-36 rounded-full border border-white/15" />
      <div className="absolute -right-16 bottom-16 h-44 w-44 rounded-full border border-white/15" />
      <div className="absolute left-6 top-24 h-10 w-10 rounded-full bg-white/10" />

      <span className="grid h-16 w-16 place-items-center rounded-full bg-white/15 ring-1 ring-white/30">
        <Leaf className="h-7 w-7 text-white" strokeWidth={1.7} />
      </span>
      <h3 className="mt-5 text-[27px] font-semibold leading-none tracking-[-0.04em] text-white">
        Nutriva
      </h3>
      <p className="mt-2 text-[7.5px] font-medium uppercase tracking-[0.3em] text-white/70">
        Eat well · Feel better
      </p>

      <div className="absolute bottom-12 flex items-center gap-1.5">
        <span className="h-1 w-4 rounded-full bg-white" />
        <span className="h-1 w-1 rounded-full bg-white/40" />
        <span className="h-1 w-1 rounded-full bg-white/40" />
      </div>
      <p className="absolute bottom-[42px] text-[6.5px] tracking-[0.12em] text-white/45">
        A CONCEPT EXPERIENCE
      </p>
    </div>
  )
}

function OnboardingScreen() {
  return (
    <Screen>
      <div className="flex items-center justify-between">
        <Logo compact />
        <span className="text-[8px] font-medium text-[#929A8F]">Skip</span>
      </div>

      <div className="relative mt-4 h-[186px] overflow-hidden rounded-[26px] bg-nutriva-100">
        <div className="absolute left-1/2 top-1/2 h-40 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-nutriva-200/70" />
        <FoodArt variant="smoothie" className="relative h-full w-full" />
        <span className="absolute right-3 top-3 rounded-full bg-white/80 px-2 py-1 text-[6.5px] font-semibold uppercase tracking-[0.1em] text-nutriva-700">
          Daily habits
        </span>
      </div>

      <div className="mt-4">
        <div className="flex gap-1">
          <span className="h-1 w-5 rounded-full bg-nutriva-500" />
          <span className="h-1 w-1.5 rounded-full bg-[#E3E8DE]" />
          <span className="h-1 w-1.5 rounded-full bg-[#E3E8DE]" />
        </div>
        <h3 className="mt-3 text-[19px] font-semibold leading-[1.15] tracking-[-0.03em] text-nutriva-800">
          Healthy eating,
          <br />
          made simple.
        </h3>
        <p className="mt-2 text-[8.5px] leading-[1.6] text-[#7F877C]">
          Understand your meals and build habits that feel good — one small choice at a time.
        </p>
      </div>

      <div className="mt-auto pb-[22px]">
        <div className="flex h-9 items-center justify-center rounded-full bg-nutriva-500 text-[9.5px] font-semibold text-white">
          Get started
        </div>
        <p className="mt-3 text-center text-[7.5px] text-[#929A8F]">
          Already have an account?{' '}
          <span className="font-semibold text-nutriva-700">Sign in</span>
        </p>
      </div>
    </Screen>
  )
}

function AuthScreen() {
  return (
    <Screen>
      <div className="flex items-center justify-between">
        <IconButton label="Back">
          <ArrowLeft className="h-3 w-3" />
        </IconButton>
        <Logo compact />
        <span className="h-6 w-6" />
      </div>

      <div className="mt-5">
        <h3 className="text-[21px] font-semibold leading-[1.1] tracking-[-0.035em] text-nutriva-800">
          Welcome back
        </h3>
        <p className="mt-1.5 text-[8.5px] leading-relaxed text-[#7F877C]">
          Sign in to pick up where you left off.
        </p>
      </div>

      <div className="mt-5 space-y-2.5">
        <div>
          <label className="text-[7.5px] font-semibold uppercase tracking-[0.1em] text-[#8B9288]">
            Email
          </label>
          <div className={cn(card, 'mt-1 flex h-9 items-center gap-2 px-2.5')}>
            <Mail className="h-3 w-3 text-[#A2A89E]" />
            <span className="text-[8.5px] text-[#5C645A]">maya@example.com</span>
          </div>
        </div>
        <div>
          <label className="text-[7.5px] font-semibold uppercase tracking-[0.1em] text-[#8B9288]">
            Password
          </label>
          <div className={cn(card, 'mt-1 flex h-9 items-center gap-2 px-2.5')}>
            <Lock className="h-3 w-3 text-[#A2A89E]" />
            <span className="flex-1 text-[8.5px] tracking-[0.18em] text-[#5C645A]">••••••••</span>
            <span className="text-[6.5px] font-medium text-nutriva-600">Show</span>
          </div>
        </div>
      </div>

      <div className="mt-2 text-right">
        <span className="text-[7.5px] font-medium text-nutriva-700">Forgot password?</span>
      </div>

      <div className="mt-4 flex h-9 items-center justify-center rounded-full bg-nutriva-500 text-[9.5px] font-semibold text-white">
        Sign in
      </div>

      <div className="mt-4 flex items-center gap-2">
        <span className="h-px flex-1 bg-[#E7EBE2]" />
        <span className="text-[6.5px] uppercase tracking-[0.12em] text-[#A2A89E]">
          or continue with
        </span>
        <span className="h-px flex-1 bg-[#E7EBE2]" />
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        {['Google', 'Apple'].map((provider) => (
          <div
            key={provider}
            className={cn(card, 'flex h-8 items-center justify-center gap-1.5')}
          >
            <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-[#F1F3ED] text-[6.5px] font-bold text-[#5C645A]">
              {provider.charAt(0)}
            </span>
            <span className="text-[7.5px] font-medium text-[#5C645A]">{provider}</span>
          </div>
        ))}
      </div>

      <p className="mt-auto pb-[22px] text-center text-[7.5px] text-[#929A8F]">
        New to Nutriva? <span className="font-semibold text-nutriva-700">Create an account</span>
      </p>
    </Screen>
  )
}

function DashboardScreen() {
  return (
    <Screen>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[7.5px] text-[#929A8F]">Good morning</p>
          <h3 className="mt-0.5 text-[16px] font-semibold leading-none tracking-[-0.03em] text-nutriva-800">
            Maya
          </h3>
        </div>
        <div className="flex items-center gap-1.5">
          <IconButton label="Notifications">
            <Bell className="h-3 w-3" />
          </IconButton>
          <span className="grid h-7 w-7 place-items-center rounded-full bg-nutriva-200 text-[8px] font-bold text-nutriva-700 ring-2 ring-white">
            MP
          </span>
        </div>
      </div>

      <div className="relative mt-3 overflow-hidden rounded-[20px] bg-nutriva-500 p-3.5 text-white">
        <div className="absolute -right-7 -top-10 h-28 w-28 rounded-full bg-white/10" />
        <div className="absolute -bottom-10 left-10 h-20 w-20 rounded-full bg-white/5" />
        <div className="relative flex items-center justify-between">
          <div>
            <p className="text-[7px] font-medium uppercase tracking-[0.14em] text-white/70">
              Today’s energy
            </p>
            <p className="mt-1.5 text-[22px] font-semibold leading-none tracking-[-0.03em]">
              1,360
              <span className="ml-1 text-[8px] font-normal text-white/70">kcal</span>
            </p>
            <p className="mt-1.5 text-[7.5px] text-white/75">640 kcal remaining today</p>
          </div>
          <CalorieRing value={68} size={64} stroke={5}>
            <div className="text-center">
              <p className="text-[10px] font-semibold leading-none">68%</p>
              <p className="mt-0.5 text-[5.5px] text-white/65">of goal</p>
            </div>
          </CalorieRing>
        </div>
      </div>

      <div className="mt-2.5 grid grid-cols-3 gap-1.5">
        <MacroBar label="Protein" value={72} goal={100} color="#5F9B72" />
        <MacroBar label="Carbs" value={148} goal={250} color="#A8C9A8" />
        <MacroBar label="Fat" value={42} goal={65} color="#E9B759" />
      </div>

      <div className="mt-3.5 flex items-center justify-between">
        <h4 className="text-[10px] font-semibold tracking-[-0.01em] text-nutriva-800">
          Today’s meals
        </h4>
        <span className="text-[7px] font-medium text-nutriva-600">View all</span>
      </div>

      <div className="mt-2 space-y-1.5">
        {[
          { name: 'Overnight oats & berries', type: 'Breakfast', kcal: '320', variant: 'oats' as const },
          { name: 'Grilled salmon bowl', type: 'Lunch', kcal: '520', variant: 'salmon' as const },
        ].map((meal) => (
          <div key={meal.name} className={cn(card, 'flex items-center gap-2 p-1.5')}>
            <FoodArt variant={meal.variant} className="h-8 w-8 shrink-0 rounded-[8px]" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[8.5px] font-semibold text-nutriva-800">{meal.name}</p>
              <p className="mt-0.5 text-[6.5px] text-[#929A8F]">{meal.type}</p>
            </div>
            <span className="pr-1 text-[7.5px] font-semibold text-[#6F776C]">{meal.kcal} kcal</span>
          </div>
        ))}
      </div>

      <div className="mt-2 flex h-8 items-center justify-center gap-1.5 rounded-[12px] border border-dashed border-[#D5DDD0] text-[7.5px] font-medium text-[#8B9288]">
        <Plus className="h-3 w-3" />
        Add a snack
      </div>

      <div className="mt-2.5 flex items-center gap-2 rounded-[12px] bg-nutriva-100 px-2.5 py-2">
        <Droplets className="h-3 w-3 text-nutriva-600" />
        <span className="text-[7px] font-medium text-nutriva-700">Water</span>
        <div className="ml-auto flex items-center gap-0.5">
          {Array.from({ length: 8 }).map((_, index) => (
            <span
              key={index}
              className={cn(
                'h-1.5 w-1.5 rounded-full',
                index < 5 ? 'bg-nutriva-500' : 'bg-nutriva-200',
              )}
            />
          ))}
        </div>
        <span className="text-[6.5px] font-semibold text-nutriva-700">5/8</span>
      </div>

      <div className="mt-2 rounded-[12px] border border-[#EDEFE8] bg-white px-2.5 py-2">
        <div className="flex items-center gap-1.5 text-nutriva-700">
          <Sparkles className="h-2.5 w-2.5" />
          <span className="text-[7px] font-semibold">A gentle tip</span>
        </div>
        <p className="mt-0.5 text-[6.5px] leading-[1.5] text-[#7F877C]">
          Add a handful of leafy greens to dinner for extra fibre.
        </p>
      </div>

      <div className="mt-2.5 flex items-center gap-2 px-1">
        <Flame className="h-3 w-3 text-nutriva-600" />
        <span className="text-[7px] font-medium text-[#7F877C]">3-day logging streak</span>
        <div className="ml-auto flex items-center gap-1">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
            <span
              key={day + index}
              className={cn(
                'grid h-4 w-4 place-items-center rounded-full text-[5.5px] font-semibold',
                index < 3 ? 'bg-nutriva-500 text-white' : 'bg-[#F0F2EC] text-[#A2A89E]',
              )}
            >
              {day}
            </span>
          ))}
        </div>
      </div>

      <BottomNav active="home" />
    </Screen>
  )
}

function NutritionScreen() {
  const bars = [46, 62, 54, 78, 66, 84, 58]
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

  return (
    <Screen>
      <ScreenHeader
        title="Nutrition overview"
        subtitle="Your week at a glance"
        back
        right={
          <IconButton label="Choose date">
            <CalendarDays className="h-3 w-3" />
          </IconButton>
        }
      />

      <div className="mt-3 flex gap-1">
        {['Day', 'Week', 'Month'].map((item, index) => (
          <span
            key={item}
            className={cn(
              'rounded-full px-2.5 py-1 text-[7.5px] font-medium',
              index === 1
                ? 'bg-nutriva-800 text-white'
                : 'bg-white text-[#7F877C] ring-1 ring-[#E7EBE2]',
            )}
          >
            {item}
          </span>
        ))}
      </div>

      <div className={cn(card, 'mt-3 p-3')}>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[8px] font-medium text-[#8B9288]">This week</p>
            <p className="mt-0.5 text-[16px] font-semibold leading-none tracking-[-0.02em] text-nutriva-800">
              9,240 <span className="text-[7px] font-normal text-[#929A8F]">kcal</span>
            </p>
          </div>
          <span className="rounded-full bg-nutriva-100 px-2 py-1 text-[6.5px] font-semibold text-nutriva-700">
            Avg 1,320
          </span>
        </div>

        <div className="mt-3 flex h-[74px] items-end justify-between gap-2">
          {bars.map((height, index) => (
            <div key={days[index] + index} className="flex flex-1 flex-col items-center gap-1.5">
              <div className="flex h-[62px] w-full items-end">
                <div
                  className={cn(
                    'w-full rounded-t-[4px]',
                    index === 5 ? 'bg-nutriva-500' : 'bg-nutriva-200',
                  )}
                  style={{ height: `${height}px` }}
                />
              </div>
              <span
                className={cn(
                  'text-[6.5px]',
                  index === 5 ? 'font-semibold text-nutriva-700' : 'text-[#A2A89E]',
                )}
              >
                {days[index]}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className={cn(card, 'mt-2.5 flex items-center gap-3 p-3')}>
        <div
          className="relative grid h-[62px] w-[62px] shrink-0 place-items-center rounded-full"
          style={{
            backgroundImage:
              'conic-gradient(#5F9B72 0% 45%, #A8C9A8 45% 75%, #E9B759 75% 100%)',
          }}
        >
          <div className="grid h-[44px] w-[44px] place-items-center rounded-full bg-white text-center">
            <div>
              <p className="text-[8.5px] font-semibold leading-none text-nutriva-800">1,360</p>
              <p className="mt-0.5 text-[5.5px] text-[#A2A89E]">kcal</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-[9px] font-semibold text-nutriva-800">Macro balance</p>
          <div className="mt-1.5 space-y-1">
            {[
              { label: 'Carbs', value: '45%', color: '#5F9B72' },
              { label: 'Protein', value: '30%', color: '#A8C9A8' },
              { label: 'Fat', value: '25%', color: '#E9B759' },
            ].map((macro) => (
              <div key={macro.label} className="flex items-center gap-1.5">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: macro.color }}
                />
                <span className="flex-1 text-[7px] text-[#7F877C]">{macro.label}</span>
                <span className="text-[7px] font-semibold text-nutriva-800">{macro.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={cn(card, 'mt-2.5 p-3')}>
        <div className="flex items-center justify-between">
          <p className="text-[8px] font-semibold text-nutriva-800">Meal rhythm</p>
          <span className="text-[6.5px] text-[#A2A89E]">Avg per day</span>
        </div>
        <div className="mt-2 space-y-1.5">
          {[
            { label: 'Breakfast', value: 26, color: '#A8C9A8' },
            { label: 'Lunch', value: 38, color: '#5F9B72' },
            { label: 'Dinner', value: 28, color: '#E9B759' },
            { label: 'Snacks', value: 8, color: '#DCE5D5' },
          ].map((meal) => (
            <div key={meal.label} className="flex items-center gap-2">
              <span className="w-10 text-[6.5px] text-[#8B9288]">{meal.label}</span>
              <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#F0F2EC]">
                <span
                  className="block h-full rounded-full"
                  style={{ width: `${meal.value}%`, backgroundColor: meal.color }}
                />
              </span>
              <span className="w-6 text-right text-[6.5px] font-semibold text-nutriva-800">
                {meal.value}%
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2.5 rounded-[14px] bg-nutriva-100 p-2.5">
        <div className="flex items-center gap-1.5 text-nutriva-700">
          <Sparkles className="h-3 w-3" />
          <span className="text-[7.5px] font-semibold">A gentle note</span>
        </div>
        <p className="mt-1 text-[7px] leading-[1.5] text-[#71806F]">
          Protein is a little lower today. A handful of chickpeas would round out your evening meal.
        </p>
      </div>

      <div className="mt-auto pb-[22px]">
        <div className="flex h-9 items-center justify-center gap-1.5 rounded-full bg-nutriva-500 text-[9px] font-semibold text-white">
          <TrendingUp className="h-3 w-3" />
          View daily progress
        </div>
        <p className="mt-2 text-center text-[6px] text-[#B0B5AC]">Illustrative values · Concept data</p>
      </div>
    </Screen>
  )
}

function DiscoveryScreen() {
  return (
    <Screen>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[7.5px] text-[#929A8F]">Find something good</p>
          <h3 className="mt-0.5 text-[16px] font-semibold leading-none tracking-[-0.03em] text-nutriva-800">
            Discover meals
          </h3>
        </div>
        <IconButton label="Filters">
          <SlidersHorizontal className="h-3 w-3" />
        </IconButton>
      </div>

      <div className={cn(card, 'mt-3 flex h-8 items-center gap-2 px-2.5')}>
        <Search className="h-3 w-3 text-[#A2A89E]" />
        <span className="text-[8px] text-[#A2A89E]">Search meals or ingredients</span>
      </div>

      <div className="-mx-4 mt-2.5 flex gap-1.5 overflow-x-auto px-4 no-scrollbar">
        {['All meals', 'Breakfast', 'Lunch', 'High protein', 'Vegan'].map((chip, index) => (
          <Pill key={chip} active={index === 0}>
            {chip}
          </Pill>
        ))}
      </div>

      <div className="mt-3">
        <div className="flex items-center justify-between">
          <h4 className="text-[9.5px] font-semibold text-nutriva-800">Featured today</h4>
          <span className="text-[6.5px] text-[#A2A89E]">Illustrative</span>
        </div>

        <div className={cn(card, 'mt-1.5 overflow-hidden p-1.5')}>
          <IllustrationCard variant="salmon" />
          <div className="flex items-end justify-between px-1 pb-1 pt-2">
            <div>
              <p className="text-[9px] font-semibold leading-tight text-nutriva-800">
                Grilled salmon bowl
              </p>
              <p className="mt-0.5 text-[6.5px] text-[#929A8F]">520 kcal · 32g protein</p>
            </div>
            <span className="rounded-full bg-nutriva-100 px-2 py-1 text-[6.5px] font-semibold text-nutriva-700">
              View
            </span>
          </div>
        </div>
      </div>

      <div className="mt-2.5 grid grid-cols-2 gap-2">
          {[
            { name: 'Avocado toast', meta: '310 kcal', variant: 'toast' as const },
            { name: 'Garden salad', meta: '240 kcal', variant: 'salad' as const },
          ].map((meal) => (
            <div key={meal.name} className={cn(card, 'overflow-hidden p-1.5')}>
              <FoodArt variant={meal.variant} className="h-[64px] w-full rounded-[10px] bg-nutriva-100" />
              <p className="mt-1.5 truncate text-[8px] font-semibold text-nutriva-800">{meal.name}</p>
              <p className="mt-0.5 text-[6.5px] text-[#929A8F]">{meal.meta}</p>
            </div>
          ))}
        </div>

      <div className="mt-3">
        <div className="flex items-center justify-between">
          <h4 className="text-[9.5px] font-semibold text-nutriva-800">Collections</h4>
          <span className="text-[6.5px] font-medium text-nutriva-600">See all</span>
        </div>
        <div className="mt-1.5 grid grid-cols-2 gap-2">
          {[
            { title: 'High protein', count: '12 meals' },
            { title: 'Under 400 kcal', count: '9 meals' },
            { title: 'Quick & easy', count: '16 meals' },
            { title: 'Plant-based', count: '11 meals' },
          ].map((collection) => (
            <div
              key={collection.title}
              className="flex items-center gap-1.5 rounded-[11px] bg-nutriva-100 px-2 py-2"
            >
              <span className="grid h-5 w-5 place-items-center rounded-full bg-white text-nutriva-600">
                <Leaf className="h-2.5 w-2.5" />
              </span>
              <div>
                <p className="text-[7px] font-semibold text-nutriva-800">{collection.title}</p>
                <p className="text-[5.5px] text-[#8B9288]">{collection.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav active="discover" />
    </Screen>
  )
}

function MealDetailsScreen() {
  return (
    <div className="relative flex h-full flex-col bg-paper">
      <div className="relative h-[172px] shrink-0 overflow-hidden bg-nutriva-100">
        <FoodArt variant="salmon" className="h-full w-full" />
        <div className="absolute inset-x-3 top-[40px] flex items-center justify-between">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-white/85 text-nutriva-800 backdrop-blur">
            <ArrowLeft className="h-3 w-3" />
          </span>
          <span className="grid h-6 w-6 place-items-center rounded-full bg-white/85 text-nutriva-600 backdrop-blur">
            <Heart className="h-3 w-3" />
          </span>
        </div>
      </div>

      <div className="relative -mt-4 flex min-h-0 flex-1 flex-col rounded-t-[22px] bg-paper px-4 pb-[20px] pt-3.5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-[6.5px] font-medium uppercase tracking-[0.12em] text-nutriva-600">
              Lunch · Balanced
            </p>
            <h3 className="mt-1 text-[15px] font-semibold leading-tight tracking-[-0.025em] text-nutriva-800">
              Grilled salmon bowl
            </h3>
          </div>
          <span className="rounded-full bg-white px-2 py-1 text-[7px] font-semibold text-nutriva-700 ring-1 ring-[#EDEFE8]">
            520 kcal
          </span>
        </div>

        <div className="mt-2 flex items-center gap-2.5 text-[6.5px] text-[#929A8F]">
          <span className="flex items-center gap-1">
            <Clock3 className="h-2.5 w-2.5" /> 15 min
          </span>
          <span className="h-2.5 w-px bg-[#E2E7DD]" />
          <span>High protein</span>
          <span className="h-2.5 w-px bg-[#E2E7DD]" />
          <span>Gluten free</span>
        </div>

        <div className="mt-2.5 grid grid-cols-3 gap-1.5">
          {[
            { label: 'Protein', value: '32g', color: '#5F9B72' },
            { label: 'Carbs', value: '48g', color: '#A8C9A8' },
            { label: 'Fat', value: '18g', color: '#E9B759' },
          ].map((macro) => (
            <div key={macro.label} className={cn(card, 'px-2 py-1.5')}>
              <div className="flex items-center gap-1">
                <span className="h-1 w-1 rounded-full" style={{ backgroundColor: macro.color }} />
                <span className="text-[6px] text-[#929A8F]">{macro.label}</span>
              </div>
              <p className="mt-0.5 text-[10px] font-semibold text-nutriva-800">{macro.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between">
          <h4 className="text-[9px] font-semibold text-nutriva-800">Ingredients</h4>
          <span className="text-[6.5px] text-[#A2A89E]">4 items</span>
        </div>
        <div className="mt-1.5 space-y-1">
          {[
            ['Salmon fillet', '140 g'],
            ['Quinoa, cooked', '120 g'],
            ['Avocado', '½'],
            ['Broccoli & greens', '80 g'],
          ].map(([name, amount]) => (
            <div
              key={name}
              className="flex items-center gap-2 border-b border-[#EEF1EA] py-1 last:border-0"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-nutriva-300" />
              <span className="flex-1 text-[7.5px] text-[#65705F]">{name}</span>
              <span className="text-[7px] font-medium text-[#8B9288]">{amount}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-3">
          <div className="flex h-9 items-center justify-center gap-1.5 rounded-full bg-nutriva-500 text-[9.5px] font-semibold text-white">
            <Plus className="h-3 w-3" />
            Add to diary
          </div>
          <p className="mt-1.5 text-center text-[6px] text-[#B0B5AC]">
            Nutrition values are illustrative
          </p>
        </div>
      </div>
    </div>
  )
}

function DiaryScreen() {
  const days = [
    { day: 'M', date: '12' },
    { day: 'T', date: '13' },
    { day: 'W', date: '14' },
    { day: 'T', date: '15' },
    { day: 'F', date: '16' },
    { day: 'S', date: '17' },
    { day: 'S', date: '18' },
  ]

  return (
    <Screen>
      <ScreenHeader
        title="Food diary"
        subtitle="Wednesday, 14 May"
        back
        right={
          <IconButton label="Calendar">
            <CalendarDays className="h-3 w-3" />
          </IconButton>
        }
      />

      <div className="mt-3 flex justify-between">
        {days.map((item, index) => (
          <div key={item.day + item.date} className="flex flex-col items-center gap-1">
            <span className="text-[6.5px] text-[#A2A89E]">{item.day}</span>
            <span
              className={cn(
                'grid h-6 w-6 place-items-center rounded-full text-[7.5px] font-medium',
                index === 2
                  ? 'bg-nutriva-500 text-white'
                  : 'text-[#7F877C]',
              )}
            >
              {item.date}
            </span>
            {index === 2 && <span className="h-0.5 w-0.5 rounded-full bg-nutriva-500" />}
          </div>
        ))}
      </div>

      <div className={cn(card, 'mt-3 p-3')}>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[7.5px] text-[#929A8F]">Calories logged</p>
            <p className="mt-0.5 text-[15px] font-semibold leading-none tracking-[-0.02em] text-nutriva-800">
              1,360 <span className="text-[7px] font-normal text-[#929A8F]">/ 2,000 kcal</span>
            </p>
          </div>
          <span className="text-[7px] font-medium text-nutriva-600">640 left</span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#EEF1EA]">
          <div className="h-full w-[68%] rounded-full bg-nutriva-500" />
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <h4 className="text-[9.5px] font-semibold text-nutriva-800">Meals</h4>
        <span className="flex items-center gap-1 text-[6.5px] font-medium text-nutriva-600">
          <Plus className="h-2.5 w-2.5" /> Add meal
        </span>
      </div>

      <div className="mt-1.5 space-y-1.5">
        {[
          {
            meal: 'Breakfast',
            kcal: '320',
            items: ['Overnight oats', 'Blueberries'],
            variant: 'oats' as const,
          },
          {
            meal: 'Lunch',
            kcal: '520',
            items: ['Grilled salmon bowl'],
            variant: 'salmon' as const,
          },
          {
            meal: 'Snack',
            kcal: '150',
            items: ['Greek yoghurt'],
            variant: 'smoothie' as const,
          },
          {
            meal: 'Dinner',
            kcal: '',
            items: ['Not logged yet'],
            variant: 'salad' as const,
            empty: true,
          },
        ].map((entry) => (
          <div
            key={entry.meal}
            className={cn(card, 'flex items-center gap-2 p-1.5', entry.empty && 'border border-dashed border-[#DDE3D8] bg-transparent ring-0')}
          >
            <FoodArt
              variant={entry.variant}
              className={cn(
                'h-8 w-8 shrink-0 rounded-[8px] bg-nutriva-100',
                entry.empty && 'opacity-35',
              )}
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1">
                <p className="text-[7.5px] font-semibold text-nutriva-800">{entry.meal}</p>
                {entry.kcal && (
                  <span className="text-[6px] text-[#A2A89E]">· {entry.kcal} kcal</span>
                )}
              </div>
              <p className="mt-0.5 truncate text-[6.5px] text-[#929A8F]">
                {entry.items.join(', ')}
              </p>
            </div>
            <span className="grid h-5 w-5 place-items-center rounded-full bg-[#F4F6F0] text-[#8B9288]">
              <ChevronRight className="h-2.5 w-2.5" />
            </span>
          </div>
        ))}
      </div>

      <div className={cn(card, 'mt-2.5 flex items-center gap-2 p-2.5')}>
        <span className="grid h-6 w-6 place-items-center rounded-full bg-nutriva-100 text-nutriva-600">
          <Droplets className="h-3 w-3" />
        </span>
        <div className="flex-1">
          <p className="text-[7.5px] font-semibold text-nutriva-800">Hydration</p>
          <p className="mt-0.5 text-[6px] text-[#929A8F]">5 of 8 glasses</p>
        </div>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 8 }).map((_, index) => (
            <span
              key={index}
              className={cn(
                'h-1.5 w-1.5 rounded-full',
                index < 5 ? 'bg-nutriva-500' : 'bg-nutriva-200',
              )}
            />
          ))}
        </div>
      </div>

      <div className="mt-2.5 rounded-[14px] bg-nutriva-100 p-2.5">
        <div className="flex items-center gap-1.5 text-nutriva-700">
          <Sparkles className="h-3 w-3" />
          <span className="text-[7.5px] font-semibold">Daily reflection</span>
        </div>
        <p className="mt-1 text-[7px] leading-[1.5] text-[#71806F]">
          Meals logged calmly today. Dinner is still open — there’s no rush to fill it in.
        </p>
      </div>

      <p className="mt-2 text-center text-[6px] text-[#B0B5AC]">Values are illustrative</p>
    </Screen>
  )
}

function ProgressScreen() {
  return (
    <Screen>
      <ScreenHeader
        title="Daily progress"
        subtitle="A gentle view of today"
        right={<Pill>This week</Pill>}
      />

      <div className={cn(card, 'mt-3 flex flex-col items-center px-3 py-3.5')}>
        <CalorieRing value={68} size={116} stroke={7} track="#EEF1EA" color="#5F9B72">
          <div className="text-center">
            <p className="text-[22px] font-semibold leading-none tracking-[-0.03em] text-nutriva-800">
              68%
            </p>
            <p className="mt-1 text-[7px] text-[#929A8F]">of daily goal</p>
          </div>
        </CalorieRing>
        <p className="mt-2.5 text-[9px] font-semibold text-nutriva-800">
          1,360 <span className="text-[7px] font-normal text-[#929A8F]">of 2,000 kcal</span>
        </p>
        <p className="mt-1 text-[6.5px] text-[#A2A89E]">640 kcal left — a calm pace for today</p>
      </div>

      <div className="mt-2.5 grid grid-cols-2 gap-2">
        <div className={cn(card, 'p-2.5')}>
          <div className="flex items-center gap-1.5 text-nutriva-600">
            <Flame className="h-3 w-3" />
            <span className="text-[6.5px] font-medium uppercase tracking-[0.08em]">Streak</span>
          </div>
          <p className="mt-1 text-[13px] font-semibold leading-none text-nutriva-800">
            6 <span className="text-[7px] font-normal text-[#929A8F]">days</span>
          </p>
          <p className="mt-1 text-[6px] text-[#A2A89E]">Keep it going, gently.</p>
        </div>
        <div className={cn(card, 'p-2.5')}>
          <div className="flex items-center gap-1.5 text-nutriva-600">
            <Droplets className="h-3 w-3" />
            <span className="text-[6.5px] font-medium uppercase tracking-[0.08em]">Water</span>
          </div>
          <p className="mt-1 text-[13px] font-semibold leading-none text-nutriva-800">
            5 <span className="text-[7px] font-normal text-[#929A8F]">of 8</span>
          </p>
          <p className="mt-1 text-[6px] text-[#A2A89E]">Glasses today.</p>
        </div>
      </div>

      <div className={cn(card, 'mt-2.5 p-3')}>
        <div className="flex items-center justify-between">
          <p className="text-[7.5px] font-medium text-[#7F877C]">Hydration</p>
          <span className="text-[6.5px] font-semibold text-nutriva-700">63%</span>
        </div>
        <div className="mt-2 flex justify-between">
          {Array.from({ length: 8 }).map((_, index) => (
            <Droplets
              key={index}
              className={cn(
                'h-3.5 w-3.5',
                index < 5 ? 'fill-nutriva-200 text-nutriva-500' : 'text-[#DDE3D8]',
              )}
              strokeWidth={1.6}
            />
          ))}
        </div>
      </div>

      <div className="mt-2.5 rounded-[14px] bg-nutriva-100 p-2.5">
        <div className="flex items-center gap-1.5 text-nutriva-700">
          <Sparkles className="h-3 w-3" />
          <span className="text-[7.5px] font-semibold">Small steps count</span>
        </div>
        <p className="mt-1 text-[7px] leading-[1.5] text-[#71806F]">
          You’ve logged a meal three days in a row. Consistency matters more than perfection.
        </p>
      </div>

      <div className={cn(card, 'mt-2.5 flex items-center gap-2 px-3 py-2.5')}>
        <div className="flex-1">
          <p className="text-[7.5px] font-semibold text-nutriva-800">This week</p>
          <p className="mt-0.5 text-[6px] text-[#929A8F]">5 of 7 days logged</p>
        </div>
        <div className="flex items-center gap-1">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
            <span
              key={day + index}
              className={cn(
                'grid h-4 w-4 place-items-center rounded-full text-[5.5px] font-semibold',
                index < 5 ? 'bg-nutriva-500 text-white' : 'bg-[#F0F2EC] text-[#A2A89E]',
              )}
            >
              {day}
            </span>
          ))}
        </div>
      </div>

      <p className="mt-2 text-center text-[6px] text-[#B0B5AC]">Illustrative concept data</p>

      <BottomNav active="progress" />
    </Screen>
  )
}

function ProfileScreen() {
  return (
    <Screen>
      <ScreenHeader
        title="Profile"
        subtitle="Your Nutriva space"
        right={
          <IconButton label="Settings">
            <Settings2 className="h-3 w-3" />
          </IconButton>
        }
      />

      <div className="mt-4 flex flex-col items-center text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-nutriva-200 text-[16px] font-semibold text-nutriva-700 ring-4 ring-white">
          MP
        </span>
        <p className="mt-2 text-[11px] font-semibold text-nutriva-800">Maya Putri</p>
        <p className="mt-0.5 text-[6.5px] text-[#929A8F]">maya@example.com</p>
        <span className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-nutriva-100 px-2 py-1 text-[6.5px] font-medium text-nutriva-700">
          <Target className="h-2.5 w-2.5" /> Balanced eating
        </span>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-1.5">
        {[
          { value: '24', label: 'Meals' },
          { value: '6', label: 'Day streak' },
          { value: '3', label: 'Goals' },
        ].map((stat) => (
          <div key={stat.label} className={cn(card, 'py-2 text-center')}>
            <p className="text-[12px] font-semibold leading-none text-nutriva-800">{stat.value}</p>
            <p className="mt-1 text-[6px] text-[#929A8F]">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className={cn(card, 'mt-3 overflow-hidden')}>
        {[
          { label: 'Personal details', icon: User },
          { label: 'Nutrition goals', icon: Target },
          { label: 'Preferences', icon: SlidersHorizontal },
          { label: 'Notifications', icon: Bell },
          { label: 'Help & support', icon: CircleHelp },
          { label: 'About Nutriva', icon: Leaf },
        ].map((item, index) => (
          <div
            key={item.label}
            className={cn(
              'flex items-center gap-2 px-2.5 py-2',
              index !== 5 && 'border-b border-[#EEF1EA]',
            )}
          >
            <span className="grid h-5 w-5 place-items-center rounded-[6px] bg-nutriva-100 text-nutriva-600">
              <item.icon className="h-2.5 w-2.5" />
            </span>
            <span className="flex-1 text-[8px] font-medium text-[#5C645A]">{item.label}</span>
            <ChevronRight className="h-2.5 w-2.5 text-[#B0B5AC]" />
          </div>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-center gap-1.5 py-2 text-[7.5px] font-medium text-[#929A8F]">
        <LogOut className="h-3 w-3" />
        Sign out
      </div>

      <BottomNav active="profile" />
    </Screen>
  )
}

/* ------------------------------------------------------------------ */

type NutrivaScreenProps = {
  id: ScreenId
  className?: string
}

export function NutrivaScreen({ id, className }: NutrivaScreenProps) {
  const screens: Record<ScreenId, ReactNode> = {
    splash: <SplashScreen />,
    onboarding: <OnboardingScreen />,
    auth: <AuthScreen />,
    dashboard: <DashboardScreen />,
    nutrition: <NutritionScreen />,
    discovery: <DiscoveryScreen />,
    'meal-details': <MealDetailsScreen />,
    diary: <DiaryScreen />,
    progress: <ProgressScreen />,
    profile: <ProfileScreen />,
  }

  return <div className={cn('h-full w-full', className)}>{screens[id]}</div>
}
