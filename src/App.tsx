import { useAccount, useBalance } from 'wagmi'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  // State with a stricter type for Ethereum addresses.
  const [address, setAddress] = useState<`0x${string}` | undefined>(undefined);
  const account = useAccount();

  const data = useBalance({
    address: address, // Pass the stricter typed address here.
  });

  useEffect(() => {
    if (account?.address && account.address.startsWith('0x')) {
      console.log('Account:', account);
      console.log("Data:", data);
      // Log the account info to the console.
      setAddress(account.address as `0x${string}`); // Type assertion to satisfy TypeScript.
    }
  }, [account]);

  return (
    <main className="w-full h-screen bg-black flex items-center justify-center">
        <div className="flex items-center">
        </div>
        <div className='network'>
        <w3m-button />
          <w3m-network-button/>
        </div>
    </main>
  )
}

export default App
