import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { cookieStorage, createStorage } from 'wagmi';
import { mainnet, arbitrum, sepolia } from 'wagmi/chains';

// Get projectId from <https://cloud.reown.com>
export const projectId = "3cf5e137d84e71ac48e5222d2f96d774";

if (!projectId) throw new Error('Project ID is not defined');

const metadata = {
  name: 'AppKit example',
  description: 'AppKit Example',
  url: '',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

// Create wagmiConfig
const chains = [mainnet, arbitrum, sepolia] as const;
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  auth: {
    email: true,
    socials: ["google", "x", "github", "discord", "apple"],
    showWallets: true,
    walletFeatures: true
  },
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  }),
});