import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AppKitProvider } from './context/AppKitContext.tsx'


createRoot(document.getElementById('root')!).render(
  <AppKitProvider>
    <App />
  </AppKitProvider>
  
)
