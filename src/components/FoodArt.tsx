import { cn } from '../lib/utils'

export type FoodArtVariant =
  | 'bowl'
  | 'salmon'
  | 'smoothie'
  | 'oats'
  | 'toast'
  | 'salad'

type FoodArtProps = {
  variant?: FoodArtVariant
  className?: string
  label?: string
}

const labels: Record<FoodArtVariant, string> = {
  bowl: 'Illustration of a colourful grain bowl',
  salmon: 'Illustration of a grilled salmon plate',
  smoothie: 'Illustration of a green smoothie',
  oats: 'Illustration of an oat and berry bowl',
  toast: 'Illustration of avocado toast',
  salad: 'Illustration of a fresh salad plate',
}

/**
 * Small, hand-built food illustrations. They keep the concept screens consistent,
 * load instantly and avoid relying on stock photography for an unshipped app.
 */
export function FoodArt({ variant = 'bowl', className, label }: FoodArtProps) {
  return (
    <div
      role="img"
      aria-label={label ?? labels[variant]}
      className={cn('overflow-hidden', className)}
    >
      <svg
        viewBox="0 0 240 180"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        focusable="false"
      >
        {variant === 'bowl' && <BowlArt />}
        {variant === 'salmon' && <SalmonArt />}
        {variant === 'smoothie' && <SmoothieArt />}
        {variant === 'oats' && <OatsArt />}
        {variant === 'toast' && <ToastArt />}
        {variant === 'salad' && <SaladArt />}
      </svg>
    </div>
  )
}

function PlateBase({ fill = '#FBF8EF' }: { fill?: string }) {
  return (
    <>
      <ellipse cx="120" cy="104" rx="96" ry="58" fill="#DDE6D7" opacity="0.55" />
      <ellipse cx="120" cy="98" rx="90" ry="57" fill={fill} />
      <ellipse
        cx="120"
        cy="98"
        rx="79"
        ry="48"
        fill="none"
        stroke="#E5E0D2"
        strokeWidth="1.5"
      />
    </>
  )
}

function BowlArt() {
  return (
    <>
      <PlateBase />
      <ellipse cx="120" cy="98" rx="62" ry="38" fill="#EFE5C8" />
      <g fill="#E7D8AF">
        <circle cx="82" cy="102" r="1.4" />
        <circle cx="92" cy="90" r="1.2" />
        <circle cx="104" cy="110" r="1.4" />
        <circle cx="128" cy="104" r="1.2" />
        <circle cx="150" cy="96" r="1.4" />
        <circle cx="140" cy="82" r="1.2" />
        <circle cx="112" cy="86" r="1.3" />
        <circle cx="72" cy="90" r="1.2" />
        <circle cx="156" cy="108" r="1.2" />
      </g>

      {/* leafy greens */}
      <path
        d="M63 96c10-18 30-14 33 3 2 13-14 22-27 17-8-3-10-11-6-20Z"
        fill="#5F9B72"
      />
      <path
        d="M75 91c8-10 20-7 21 4 1 8-9 14-17 10-5-2-7-8-4-14Z"
        fill="#7FB287"
      />
      <path
        d="M157 74c14 2 21 15 12 24-11 11-28 4-30-9-1-8 7-16 18-15Z"
        fill="#7FB287"
      />
      <path
        d="M164 81c8 1 12 8 7 13-6 6-16 2-17-5 0-5 4-9 10-8Z"
        fill="#5F9B72"
      />

      {/* avocado fan */}
      <g transform="rotate(-16 152 112)">
        <ellipse cx="152" cy="112" rx="20" ry="9" fill="#A8C9A8" />
        <ellipse cx="152" cy="112" rx="13" ry="5" fill="#D8E9CE" />
      </g>
      <g transform="rotate(2 143 120)">
        <ellipse cx="143" cy="120" rx="19" ry="8" fill="#8DBB91" />
        <ellipse cx="143" cy="120" rx="12" ry="4" fill="#CBE3C0" />
      </g>

      {/* tomatoes */}
      <circle cx="104" cy="79" r="9.5" fill="#D87A5B" />
      <circle cx="101" cy="76" r="3" fill="#E9A087" opacity="0.8" />
      <circle cx="125" cy="118" r="8" fill="#C9674C" />
      <circle cx="122" cy="115" r="2.4" fill="#E9A087" opacity="0.75" />

      {/* soft egg */}
      <circle cx="101" cy="102" r="12" fill="#FFFDF7" />
      <circle cx="101" cy="102" r="5.2" fill="#E9B759" />

      {/* seeds */}
      <g fill="#F7F1E2">
        <circle cx="118" cy="92" r="1.6" />
        <circle cx="132" cy="86" r="1.3" />
        <circle cx="86" cy="113" r="1.4" />
      </g>
    </>
  )
}

function SalmonArt() {
  return (
    <>
      <PlateBase fill="#FAF7EE" />
      <ellipse cx="118" cy="100" rx="65" ry="41" fill="#F1ECDD" />
      <g transform="rotate(-14 122 96)">
        <rect x="86" y="72" width="66" height="38" rx="12" fill="#E08D6A" />
        <rect x="86" y="72" width="66" height="38" rx="12" fill="none" stroke="#D07855" strokeWidth="1.5" />
        <path d="M95 78h48M93 88h54M95 98h48M99 106h40" stroke="#F2BFA5" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
      </g>

      {/* rice */}
      <ellipse cx="166" cy="116" rx="28" ry="20" fill="#FFFDF7" />
      <g fill="#E7DFCB">
        <circle cx="154" cy="112" r="1.4" />
        <circle cx="164" cy="106" r="1.3" />
        <circle cx="174" cy="113" r="1.4" />
        <circle cx="160" cy="122" r="1.3" />
        <circle cx="172" cy="123" r="1.2" />
        <circle cx="181" cy="119" r="1.1" />
      </g>

      {/* broccoli */}
      <g>
        <path d="M67 125v10" stroke="#4A7F5B" strokeWidth="4" strokeLinecap="round" />
        <circle cx="62" cy="118" r="10" fill="#4A7F5B" />
        <circle cx="73" cy="114" r="9" fill="#5F9B72" />
        <circle cx="70" cy="125" r="7" fill="#3B6549" />
        <circle cx="78" cy="123" r="6" fill="#4A7F5B" />
      </g>

      {/* lemon */}
      <g transform="rotate(18 92 118)">
        <circle cx="92" cy="118" r="12" fill="#F0D27B" />
        <circle cx="92" cy="118" r="9" fill="#F7E8B5" />
        <path d="M92 110v16M84 118h16" stroke="#E3C468" strokeWidth="1.2" />
      </g>

      {/* greens + tomatoes */}
      <path d="M112 128c6-10 18-8 20 1 2 8-8 14-15 10-4-2-7-7-5-11Z" fill="#7FB287" />
      <circle cx="130" cy="74" r="6" fill="#D87A5B" />
      <circle cx="144" cy="80" r="4.5" fill="#C9674C" />
      <g fill="#F7F1E2">
        <circle cx="108" cy="86" r="1.5" />
        <circle cx="104" cy="108" r="1.2" />
      </g>
    </>
  )
}

function SmoothieArt() {
  return (
    <>
      <circle cx="120" cy="92" r="72" fill="#DDEBD6" opacity="0.7" />
      <circle cx="72" cy="56" r="14" fill="#C9DFC2" />
      <circle cx="172" cy="114" r="22" fill="#CDE2C6" opacity="0.8" />

      {/* leaves */}
      <path d="M78 58c14-16 32-9 32 5 0 15-19 22-30 11-6-6-6-11-2-16Z" fill="#5F9B72" />
      <path d="M92 52c7-6 17-2 17 7 0 8-10 11-15 6-3-3-4-9-2-13Z" fill="#A8C9A8" />
      <path d="M170 60c-10-8-22-2-22 7 0 11 14 15 21 7 4-5 4-10 1-14Z" fill="#7FB287" />

      {/* straw */}
      <g transform="rotate(14 148 70)">
        <rect x="142" y="30" width="9" height="76" rx="4.5" fill="#F3EBDD" />
        <path d="M142 42h9M142 58h9M142 74h9" stroke="#D8A48C" strokeWidth="4" />
      </g>

      {/* glass */}
      <path
        d="M82 60h76l-8 88c-1 8-8 13-16 13h-28c-8 0-15-5-16-13L82 60Z"
        fill="#FDFBF5"
        stroke="#E8E3D6"
        strokeWidth="2"
      />
      <path
        d="M88 84h64l-6 62c-.7 5.7-5.7 9-12 9h-28c-6.3 0-11.3-3.3-12-9l-6-62Z"
        fill="#6FA36F"
      />
      <path
        d="M88 84h64l-1.6 16H89.6L88 84Z"
        fill="#A8C9A8"
        opacity="0.9"
      />
      <g fill="#3B6549" opacity="0.55">
        <circle cx="108" cy="132" r="3" />
        <circle cx="127" cy="138" r="2.4" />
        <circle cx="138" cy="124" r="2.8" />
      </g>
      <g>
        <path d="M96 62c-8 10-7 24 3 30" stroke="#F7F1E2" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
        <circle cx="136" cy="52" r="7" fill="#D87A5B" />
        <circle cx="146" cy="49" r="5" fill="#C9674C" />
      </g>
    </>
  )
}

function OatsArt() {
  return (
    <>
      <PlateBase fill="#FAF7EE" />
      <ellipse cx="120" cy="100" rx="68" ry="42" fill="#F3EDDC" />
      <ellipse cx="120" cy="98" rx="58" ry="34" fill="#FBF5E6" />

      {/* oat texture */}
      <g fill="#E6D9BC">
        {Array.from({ length: 18 }).map((_, index) => (
          <ellipse
            key={index}
            cx={76 + ((index * 17) % 88)}
            cy={84 + ((index * 11) % 30)}
            rx="2.6"
            ry="1.4"
            transform={`rotate(${(index * 37) % 180} ${76 + ((index * 17) % 88)} ${84 + ((index * 11) % 30)})`}
          />
        ))}
      </g>

      {/* berries */}
      <circle cx="94" cy="88" r="8.5" fill="#8E5C7E" />
      <circle cx="91" cy="85" r="2.5" fill="#B58AA6" />
      <circle cx="110" cy="98" r="7" fill="#6E4A6A" />
      <circle cx="134" cy="86" r="9" fill="#C9674C" />
      <circle cx="131" cy="83" r="2.7" fill="#E9A087" />
      <circle cx="149" cy="101" r="6.5" fill="#8E5C7E" />

      {/* banana slices */}
      <g fill="#F2DFA5">
        <circle cx="112" cy="78" r="7" />
        <circle cx="112" cy="78" r="3.2" fill="#E7CD86" />
        <circle cx="150" cy="82" r="6" />
        <circle cx="150" cy="82" r="2.7" fill="#E7CD86" />
      </g>

      {/* mint */}
      <path d="M164 96c8-2 13 4 10 10-4 8-15 5-15-3 0-3 2-6 5-7Z" fill="#5F9B72" />
      <g fill="#E3D5B6">
        <ellipse cx="120" cy="70" rx="3" ry="1.4" transform="rotate(30 120 70)" />
        <ellipse cx="128" cy="112" rx="3" ry="1.4" transform="rotate(-20 128 112)" />
        <ellipse cx="84" cy="106" rx="2.6" ry="1.3" transform="rotate(60 84 106)" />
      </g>
    </>
  )
}

function ToastArt() {
  return (
    <>
      <circle cx="120" cy="94" r="74" fill="#E7EFE1" opacity="0.85" />
      <g transform="rotate(-8 120 96)">
        <rect x="58" y="52" width="124" height="88" rx="18" fill="#E4C48C" />
        <rect x="63" y="57" width="114" height="78" rx="15" fill="#F0DDB2" />
        <rect x="72" y="66" width="96" height="60" rx="12" fill="#A8C9A8" />
        <path d="M80 92c8-16 24-22 40-18 16 3 26 14 30 25-14 8-44 12-70-7Z" fill="#7FB287" />
        <path d="M96 74c10-6 22-4 30 3" stroke="#CBE3C0" strokeWidth="4" strokeLinecap="round" />
        <circle cx="132" cy="94" r="12" fill="#FFFDF7" />
        <circle cx="132" cy="94" r="5.4" fill="#E9B759" />
        <circle cx="102" cy="104" r="4" fill="#D87A5B" />
        <circle cx="92" cy="78" r="3" fill="#D87A5B" />
        <g fill="#3B6549" opacity="0.6">
          <circle cx="145" cy="80" r="1.2" />
          <circle cx="151" cy="88" r="1.1" />
          <circle cx="139" cy="73" r="1" />
        </g>
      </g>
      <path d="M170 62c10-4 17 4 13 12-5 10-19 7-19-4 0-4 3-7 6-8Z" fill="#5F9B72" />
      <circle cx="70" cy="128" r="6" fill="#C9674C" />
      <circle cx="184" cy="108" r="4.5" fill="#8E5C7E" />
    </>
  )
}

function SaladArt() {
  return (
    <>
      <PlateBase />
      <ellipse cx="120" cy="98" rx="64" ry="39" fill="#E5F0DE" />
      <path d="M62 92c12-20 34-14 37 4 2 15-17 25-31 19-9-4-11-13-6-23Z" fill="#5F9B72" />
      <path d="M76 86c9-12 23-8 24 5 1 9-11 16-20 11-6-3-8-10-4-16Z" fill="#7FB287" />
      <path d="M150 70c18 2 26 18 15 28-13 12-33 4-35-11-1-9 9-18 20-17Z" fill="#8DBB91" />
      <path d="M158 79c10 1 14 9 8 15-8 7-19 1-19-7 0-6 5-10 11-8Z" fill="#5F9B72" />
      <circle cx="95" cy="112" r="9" fill="#D87A5B" />
      <circle cx="111" cy="86" r="7" fill="#C9674C" />
      <circle cx="146" cy="114" r="6.5" fill="#D87A5B" />
      <ellipse cx="131" cy="100" rx="17" ry="9" fill="#A8C9A8" transform="rotate(24 131 100)" />
      <ellipse cx="131" cy="100" rx="10" ry="4.5" fill="#D8E9CE" transform="rotate(24 131 100)" />
      <path d="M160 102c5-4 12 0 11 6-1 7-10 8-13 3-2-3-1-7 2-9Z" fill="#F2DFA5" />
      <g fill="#F7F1E2">
        <circle cx="104" cy="76" r="1.6" />
        <circle cx="120" cy="118" r="1.4" />
        <circle cx="90" cy="96" r="1.3" />
      </g>
    </>
  )
}
