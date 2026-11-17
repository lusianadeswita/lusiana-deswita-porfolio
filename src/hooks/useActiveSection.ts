import { useEffect, useState } from 'react'

/**
 * Tracks which page section is currently in view.
 * Uses normalised document positions so it also works inside nested layouts.
 */
export function useActiveSection(ids: string[], enabled = true): string {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    if (!enabled) {
      // Reset the scroll spy when it is disabled on non-home routes.
      // oxlint-disable-next-line react/set-state-in-effect
      setActive('')
      return
    }

    let frame = 0

    const update = () => {
      const marker = window.scrollY + window.innerHeight * 0.32
      let current = ids[0] ?? ''

      for (const id of ids) {
        const element = document.getElementById(id)
        if (!element) continue
        const top = element.getBoundingClientRect().top + window.scrollY
        if (top <= marker) current = id
      }

      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 120
      if (nearBottom) current = ids[ids.length - 1] ?? current

      setActive(current)
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [enabled, ids])

  return active
}
