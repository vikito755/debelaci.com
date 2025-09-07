import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanstackDevtools } from '@tanstack/react-devtools'

import Header from '../components/Header'

import StoreDevtools from '../lib/demo-store-devtools'

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'

import type { QueryClient } from '@tanstack/react-query'
import { Box } from '@mantine/core'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
    <Box p={'xl'}>
      <Header />
      <Outlet />
      <TanstackDevtools
        config={{
          position: 'bottom-left',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
          StoreDevtools,
          TanStackQueryDevtools,
        ]}
      />
      </Box>
    </>
  ),
})
