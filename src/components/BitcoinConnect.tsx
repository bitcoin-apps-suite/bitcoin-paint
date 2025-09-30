'use client';

import { useState } from 'react';

export default function BitcoinConnect() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string>('');

  const connectWallet = async () => {
    try {
      // Check if window.bitcoin exists (for browser extensions like Alby, Xverse, etc.)
      if (typeof window !== 'undefined' && (window as any).bitcoin) {
        const bitcoin = (window as any).bitcoin;
        const accounts = await bitcoin.requestAccounts();
        if (accounts && accounts.length > 0) {
          setIsConnected(true);
          setAddress(accounts[0]);
        }
      } else {
        alert('Please install a Bitcoin wallet extension');
      }
    } catch (error) {
      console.error('Failed to connect:', error);
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setAddress('');
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {!isConnected ? (
        <button
          onClick={connectWallet}
          className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
        >
          Connect Bitcoin Wallet
        </button>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-gray-600">Connected:</p>
          <p className="font-mono text-xs bg-gray-100 p-2 rounded">
            {address.slice(0, 6)}...{address.slice(-4)}
          </p>
          <button
            onClick={disconnectWallet}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm"
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
}