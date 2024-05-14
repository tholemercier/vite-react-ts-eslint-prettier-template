import { Outlet, RouteObject, createBrowserRouter } from 'react-router-dom'

import { GeneralLayout } from './components/GeneralLayout'

const landingRoute: RouteObject = {
  path: '/',
  lazy: async () => {
    const { LandingView } = await import('./views/LandingView')
    return { Component: LandingView }
  },
}

const membershipSelectionRoute: RouteObject = {
  path: '/membership-selection',
  lazy: async () => {
    const { LandingView } = await import('./views/LandingView')
    return { Component: LandingView }
  },
}

const layoutRoute: RouteObject = {
  element: (
    <GeneralLayout>
      <Outlet />
    </GeneralLayout>
  ),
  children: [landingRoute, membershipSelectionRoute],
}

export const appRouter = createBrowserRouter([layoutRoute])
