import { NavBar } from '@/features/navbar/components/navbar.component'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <div className='space-y-10'>
  <NavBar/>
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
})