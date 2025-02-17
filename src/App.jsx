import React from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
    WalletConnectButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import './App.css';
import Airdrop from './Airdrop';

function App() {
  return (
    <ConnectionProvider endpoint="https://solana-devnet.g.alchemy.com/v2/MXmNvmsa7b9wRGgQVZ2A0aFisRQXR6ta">
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className="app-container">
            <header className="app-header">
              <h1>Solana Wallet</h1>
              <br /> 
              <h3>Connect your wallet and receive devnet SOL</h3>
            </header>

            <div className="wallet-buttons">
              <WalletMultiButton />
              <WalletDisconnectButton />
            </div>

            <div className="airdrop-container">
              <h2 className="airdrop-title">Devnet SOL Airdrop</h2>
              <p className="airdrop-description">
                Send some SOL to your wallet (Devnet only😅)
              </p>
              <Airdrop />
            </div>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App


