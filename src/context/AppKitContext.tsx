import { createContext, ReactNode } from 'react'
import { createAppKit } from '@reown/appkit/react'
import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet, AppKitNetwork } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Get projectId from https://cloud.reown.com
const projectId = '3cf5e137d84e71ac48e5222d2f96d774'

// 2. Create a metadata object - optional
const metadata = {
  name: 'AppKit',
  description: 'AppKit Example',
  url: 'https://example.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// 3. Set the networks
const networks: [AppKitNetwork, ...AppKitNetwork[]] = [mainnet, arbitrum]

// 4. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true
})

// 5. Create modal
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

// Define AppKit context type
interface AppKitContextType {
  wagmiAdapter: WagmiAdapter
  networks: typeof networks
  metadata: typeof metadata
  projectId: string
}

// Create Context
const AppKitContext = createContext<AppKitContextType | undefined>(undefined)

// Define Props for Provider
interface AppKitProviderProps {
  children: ReactNode
}

// Create AppKitProvider component
export function AppKitProvider({ children }: AppKitProviderProps): JSX.Element {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <AppKitContext.Provider value={{ wagmiAdapter, networks, metadata, projectId }}>
          {children}
        </AppKitContext.Provider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

