import { TonConnectUIProvider } from '@tonconnect/ui-react';
import './App.css'
import { Header } from './components/Header';

function App() {

  return (
    <>
      <TonConnectUIProvider manifestUrl="https://ton-connect.github.io/demo-dapp-with-wallet/tonconnect-manifest.json">
        <Header/>
      </TonConnectUIProvider>
    </>
  )
}

export default App
