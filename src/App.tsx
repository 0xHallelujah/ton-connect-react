import { TonConnectUIProvider } from '@tonconnect/ui-react';
import './App.css'
import { Header } from './components/Header';

function App() {

  return (
    <>
      <TonConnectUIProvider manifestUrl="https://0xhallelujah.github.io/ton-connect-react/tonconnect-manifest.json">
        <Header/>
      </TonConnectUIProvider>
    </>
  )
}

export default App
