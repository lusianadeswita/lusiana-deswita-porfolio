import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Leaf } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useContent } from '../i18n/useContent'
import { PhoneMockup } from '../components/PhoneMockup'
import { NutrivaScreen } from '../components/nutriva/NutrivaScreens'
import { screenTone } from '../components/nutriva/screenMeta'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const reduceMotion = useReducedMotion()
  const { profile, t } = useContent()

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
  }

  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease },
    },
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-[112px] pb-16 sm:pt-[132px] sm:pb-20 lg:min-h-[94svh] lg:pt-[124px] lg:pb-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-sage-100/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[6%] top-[58%] h-2 w-2 rounded-full bg-sage-400/70"
      />

      <div className="shell relative">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] lg:gap-10 xl:gap-16">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-[42rem]"
          >
            <motion.div variants={item} className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-sage-200 bg-white/70 py-1.5 pl-2.5 pr-3.5 text-[11px] font-medium text-sage-800">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage-500 opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sage-600" />
                </span>
                {profile.availability}
              </span>
              <span className="text-[11px] tracking-[0.02em] text-muted-soft">
                {t.hero.year}
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 text-[clamp(2.65rem,5.6vw,4.6rem)] leading-[0.99] font-semibold tracking-[-0.045em] text-ink"
            >
              {profile.hero.headlineLead}{' '}
              <span className="text-sage-700 underline decoration-sage-300 decoration-[3px] underline-offset-[6px]">
                {profile.hero.headlineAccent}
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-7 max-w-[48ch] text-[15px] leading-[1.8] text-muted sm:text-base"
            >
              {profile.hero.supporting}
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/#work"
                className="group inline-flex h-12 items-center gap-2.5 rounded-full bg-sage-700 px-6 text-[13px] font-medium text-paper shadow-[0_14px_30px_-18px_rgba(61,77,57,0.8)] transition-colors duration-300 hover:bg-sage-800"
              >
                {profile.hero.primaryCta}
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </Link>
              <Link
                to="/#contact"
                className="group inline-flex h-12 items-center gap-2.5 rounded-full border border-line-strong bg-white/60 px-6 text-[13px] font-medium text-ink transition-colors duration-300 hover:border-sage-400 hover:bg-white"
              >
                {profile.hero.secondaryCta}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-5 text-[11px] text-muted"
            >
              <span className="inline-flex items-center gap-2">
                <Leaf className="h-3.5 w-3.5 text-sage-700" strokeWidth={1.8} />
                {profile.experience.short} {t.hero.experienceSuffix}
              </span>
              <span aria-hidden="true" className="hidden h-3 w-px bg-line-strong sm:block" />
              <span>{t.hero.role}</span>
              <span aria-hidden="true" className="hidden h-3 w-px bg-line-strong sm:block" />
              <span>{t.hero.mobileFirst}</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.25, ease }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[28px] border border-sage-200/70 bg-sage-100 sm:rounded-[34px]">
              <div className="phone-stage-grid absolute inset-0 opacity-70" aria-hidden="true" />
              <div
                aria-hidden="true"
                className="absolute -left-16 -top-20 h-64 w-64 rounded-full border border-sage-300/70"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-24 -right-12 h-72 w-72 rounded-full border border-sage-300/50"
              />
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sage-200/50 sm:h-[460px] sm:w-[460px]"
              />

              <div className="relative flex min-h-[430px] items-center justify-center px-5 py-10 sm:min-h-[540px] sm:px-8">
                <div className="relative translate-y-2">
                  <PhoneMockup
                    className="w-[188px] -rotate-[3deg] sm:w-[232px]"
                    tone={screenTone.dashboard}
                    floating
                    label={t.hero.labels.dashboard}
                  >
                    <NutrivaScreen id="dashboard" />
                  </PhoneMockup>
                </div>

                <div className="absolute -bottom-2 left-[5%] hidden w-[148px] rotate-[7deg] sm:block lg:-bottom-5 lg:left-[2%] lg:w-[162px]">
                  <PhoneMockup
                    tone={screenTone.progress}
                    floating
                    label={t.hero.labels.progress}
                  >
                    <NutrivaScreen id="progress" />
                  </PhoneMockup>
                </div>

                <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-white/50 bg-white/80 px-3 py-1.5 text-[10px] font-medium text-sage-800 backdrop-blur sm:right-6 sm:top-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-nutriva-500" />
                  {t.hero.featured}
                </div>

                <div className="absolute bottom-5 right-4 rounded-xl border border-white/50 bg-white/80 px-3 py-2 text-right backdrop-blur sm:bottom-7 sm:right-6">
                  <p className="text-[9px] uppercase tracking-[0.14em] text-sage-700">
                    {t.hero.conceptProject}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold text-ink">{t.hero.nutritionLifestyle}</p>
                </div>
              </div>
            </div>

            <p className="mt-4 flex items-center justify-between text-[10px] tracking-[0.02em] text-muted-soft">
              <span>{t.hero.selfInitiated}</span>
              <span className="hidden sm:inline">{t.hero.conceptStudy}</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
