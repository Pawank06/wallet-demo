// App.tsx
import React from 'react';
import { createAppKit } from '@reown/appkit/react';
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { solana, arbitrum, mainnet, AppKitNetwork } from '@reown/appkit/networks';


// 1. Get projectId from https://cloud.reown.com
const projectId: string = '3cf5e137d84e71ac48e5222d2f96d774';

// 2. Create a metadata object - optional
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com', // origin must match your domain & subdomain
  icons: ['https://avatars.mywebsite.com/']
}
const networks: [AppKitNetwork, ...AppKitNetwork[]] = [solana, arbitrum, mainnet];

// 3. Create modal
createAppKit({
  adapters: [new EthersAdapter()],
  networks,
  metadata,
  projectId,
  features: {
    analytics: true
  }
})
const App: React.FC = () => {
  return <div>
    <div>
      <appkit-button/>
      <appkit-network-button/>
    </div>
  </div>;
};

export default App;
