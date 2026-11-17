import { copy } from './copy'
import { useLanguage } from './useLanguage'
import { designPrinciples, profiles } from '../data/profile'
import { skillGroupsByLang, toolsByLang } from '../data/skills'
import { nutrivaContent } from '../data/nutriva'

/**
 * Returns every language-dependent content set for the active language.
 * Components call this once and read the fields they need.
 */
export function useContent() {
  const { lang } = useLanguage()

  return {
    lang,
    t: copy[lang],
    profile: profiles[lang],
    principles: designPrinciples[lang],
    nutriva: nutrivaContent[lang],
    skillGroups: skillGroupsByLang[lang],
    tools: toolsByLang[lang],
  }
}
