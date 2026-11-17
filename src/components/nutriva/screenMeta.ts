import type { ScreenId } from '../../data/nutriva'

/** Which status-bar treatment each concept screen expects. */
export const screenTone: Record<ScreenId, 'light' | 'dark'> = {
  splash: 'light',
  onboarding: 'dark',
  auth: 'dark',
  dashboard: 'dark',
  nutrition: 'dark',
  discovery: 'dark',
  'meal-details': 'dark',
  diary: 'dark',
  progress: 'dark',
  profile: 'dark',
}
