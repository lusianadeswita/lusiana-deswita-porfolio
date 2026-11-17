import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './layouts/SiteLayout'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

const NutrivaCaseStudy = lazy(() =>
  import('./pages/NutrivaCaseStudy').then((module) => ({
    default: module.NutrivaCaseStudy,
  })),
)

function PageLoader() {
  return (
    <div className="flex min-h-[70svh] items-center justify-center pt-24">
      <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-muted">
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-sage-200 border-t-sage-700" />
        Loading case study
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route
            path="work/nutriva"
            element={
              <Suspense fallback={<PageLoader />}>
                <NutrivaCaseStudy />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
