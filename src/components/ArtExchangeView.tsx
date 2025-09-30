'use client';

import { useState } from 'react';
import {
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Bitcoin,
  DollarSign,
  Activity,
  BarChart3,
  Clock,
  Info,
  Zap,
  Award,
  Users,
  Coins,
} from 'lucide-react';

export default function ArtExchangeView() {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'trade' | 'analytics' | 'staking'>('overview');
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');
  const [amount, setAmount] = useState('');

  // Mock data
  const tokenStats = {
    price: 0.00042,
    priceChange24h: 12.5,
    marketCap: 2456780,
    volume24h: 145670,
    holders: 3456,
    totalSupply: 100000000,
    circulatingSupply: 45000000,
  };

  const priceHistory = [
    { time: '00:00', price: 0.00038 },
    { time: '04:00', price: 0.00039 },
    { time: '08:00', price: 0.00041 },
    { time: '12:00', price: 0.00040 },
    { time: '16:00', price: 0.00043 },
    { time: '20:00', price: 0.00042 },
  ];

  const recentTrades = [
    { type: 'buy', amount: 5000, price: 0.00042, time: '2 mins ago', user: 'Art...3fx' },
    { type: 'sell', amount: 3200, price: 0.00041, time: '5 mins ago', user: 'Collector...8ha' },
    { type: 'buy', amount: 10000, price: 0.00043, time: '12 mins ago', user: 'Gallery...2df' },
    { type: 'buy', amount: 2500, price: 0.00042, time: '18 mins ago', user: 'Creator...9kl' },
    { type: 'sell', amount: 7500, price: 0.00041, time: '25 mins ago', user: 'Trader...5mn' },
  ];

  const stakingTiers = [
    { level: 'Bronze', required: 1000, apy: 8, benefits: ['5% trading fee discount', 'Early access to drops'] },
    { level: 'Silver', required: 5000, apy: 12, benefits: ['10% trading fee discount', 'Exclusive NFT airdrops', 'Voting rights'] },
    { level: 'Gold', required: 25000, apy: 18, benefits: ['20% trading fee discount', 'Premium features', 'Priority support', 'Governance rights'] },
    { level: 'Diamond', required: 100000, apy: 25, benefits: ['30% trading fee discount', 'VIP access', 'Revenue sharing', 'Full governance rights'] },
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#0a0a0a' }}>
      {/* Header */}
      <div
        style={{
          padding: '24px',
          background: 'linear-gradient(180deg, #1a1a1a 0%, #141414 100%)',
          borderBottom: '1px solid rgba(255, 107, 0, 0.2)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, #ff6b00, #ff8c42)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                $B
              </div>
              <div>
                <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: 'white', margin: 0 }}>
                  $bArt Token Exchange
                </h1>
                <p style={{ color: '#999', margin: 0 }}>
                  The native token of Bitcoin Art Gallery
                </p>
              </div>
            </div>
          </div>

          {/* Price Display */}
          <div style={{ textAlign: 'right' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-end' }}>
              <Bitcoin size={24} color="#ff6b00" />
              <span style={{ fontSize: '32px', fontWeight: 'bold', color: 'white' }}>
                {tokenStats.price.toFixed(6)}
              </span>
              <span
                style={{
                  padding: '4px 8px',
                  background: tokenStats.priceChange24h >= 0 ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)',
                  color: tokenStats.priceChange24h >= 0 ? '#00ff00' : '#ff0000',
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                {tokenStats.priceChange24h >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                {Math.abs(tokenStats.priceChange24h)}%
              </span>
            </div>
            <p style={{ color: '#666', fontSize: '14px', marginTop: '4px' }}>
              ≈ ${(tokenStats.price * 65000).toFixed(2)} USD
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '24px' }}>
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'trade', label: 'Trade', icon: Activity },
            { id: 'analytics', label: 'Analytics', icon: TrendingUp },
            { id: 'staking', label: 'Staking', icon: Coins },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id as any)}
              style={{
                padding: '10px 20px',
                background: selectedTab === tab.id ? 'rgba(255, 107, 0, 0.2)' : 'transparent',
                border: 'none',
                borderRadius: '8px',
                color: selectedTab === tab.id ? '#ff6b00' : '#999',
                fontSize: '16px',
                fontWeight: selectedTab === tab.id ? 600 : 400,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s',
              }}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
        {selectedTab === 'overview' && (
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            {/* Stats Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px',
                marginBottom: '32px',
              }}
            >
              <div style={{ background: '#141414', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255, 107, 0, 0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <DollarSign size={16} color="#ff6b00" />
                  <span style={{ fontSize: '14px', color: '#999' }}>Market Cap</span>
                </div>
                <p style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>
                  ${(tokenStats.marketCap / 1000000).toFixed(2)}M
                </p>
              </div>
              <div style={{ background: '#141414', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255, 107, 0, 0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Activity size={16} color="#ff6b00" />
                  <span style={{ fontSize: '14px', color: '#999' }}>24h Volume</span>
                </div>
                <p style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>
                  ${(tokenStats.volume24h / 1000).toFixed(0)}K
                </p>
              </div>
              <div style={{ background: '#141414', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255, 107, 0, 0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Users size={16} color="#ff6b00" />
                  <span style={{ fontSize: '14px', color: '#999' }}>Holders</span>
                </div>
                <p style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>
                  {tokenStats.holders.toLocaleString()}
                </p>
              </div>
              <div style={{ background: '#141414', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255, 107, 0, 0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Coins size={16} color="#ff6b00" />
                  <span style={{ fontSize: '14px', color: '#999' }}>Circulating Supply</span>
                </div>
                <p style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>
                  {(tokenStats.circulatingSupply / 1000000).toFixed(0)}M
                </p>
              </div>
            </div>

            {/* Chart and Recent Trades */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
              {/* Price Chart */}
              <div style={{ background: '#141414', padding: '24px', borderRadius: '12px', border: '1px solid rgba(255, 107, 0, 0.2)' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'white', marginBottom: '20px' }}>
                  Price Chart (24h)
                </h3>
                <div style={{ height: '300px', display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
                  {priceHistory.map((point, index) => (
                    <div key={index} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div
                        style={{
                          width: '100%',
                          background: 'linear-gradient(to top, #ff6b00, #ff8c42)',
                          borderRadius: '4px 4px 0 0',
                          height: `${((point.price - 0.00037) / 0.00006) * 250}px`,
                        }}
                      />
                      <span style={{ fontSize: '10px', color: '#666', marginTop: '8px' }}>{point.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Trades */}
              <div style={{ background: '#141414', padding: '24px', borderRadius: '12px', border: '1px solid rgba(255, 107, 0, 0.2)' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'white', marginBottom: '20px' }}>
                  Recent Trades
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {recentTrades.map((trade, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '12px',
                        background: 'rgba(255, 107, 0, 0.05)',
                        borderRadius: '8px',
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span
                            style={{
                              padding: '2px 6px',
                              background: trade.type === 'buy' ? 'rgba(0, 255, 0, 0.2)' : 'rgba(255, 0, 0, 0.2)',
                              color: trade.type === 'buy' ? '#00ff00' : '#ff0000',
                              borderRadius: '4px',
                              fontSize: '12px',
                              fontWeight: 600,
                            }}
                          >
                            {trade.type.toUpperCase()}
                          </span>
                          <span style={{ fontSize: '14px', color: 'white' }}>{trade.amount} $bArt</span>
                        </div>
                        <p style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>{trade.user}</p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ fontSize: '14px', color: '#ff6b00' }}>{trade.price}</p>
                        <p style={{ fontSize: '12px', color: '#666' }}>{trade.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Token Info */}
            <div
              style={{
                background: '#141414',
                padding: '24px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 107, 0, 0.2)',
                marginTop: '24px',
              }}
            >
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#ff6b00', marginBottom: '20px' }}>
                About $bArt Token
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                <div>
                  <h4 style={{ fontSize: '16px', color: 'white', marginBottom: '12px' }}>Utility</h4>
                  <ul style={{ color: '#999', fontSize: '14px', paddingLeft: '20px' }}>
                    <li>Platform governance and voting rights</li>
                    <li>Trading fee discounts up to 30%</li>
                    <li>Access to exclusive NFT drops and features</li>
                    <li>Staking rewards and revenue sharing</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', color: 'white', marginBottom: '12px' }}>Token Economics</h4>
                  <ul style={{ color: '#999', fontSize: '14px', paddingLeft: '20px' }}>
                    <li>Total Supply: 100,000,000 $bArt</li>
                    <li>Circulating: 45,000,000 $bArt</li>
                    <li>Team & Advisors: 15% (vested)</li>
                    <li>Community Rewards: 40%</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', color: 'white', marginBottom: '12px' }}>Benefits</h4>
                  <ul style={{ color: '#999', fontSize: '14px', paddingLeft: '20px' }}>
                    <li>Early access to new art collections</li>
                    <li>Participation in artist launchpad</li>
                    <li>Premium analytics and market data</li>
                    <li>VIP community access</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'trade' && (
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ background: '#141414', padding: '32px', borderRadius: '16px', border: '1px solid rgba(255, 107, 0, 0.2)' }}>
              {/* Trade Type Toggle */}
              <div style={{ display: 'flex', marginBottom: '24px' }}>
                <button
                  onClick={() => setTradeType('buy')}
                  style={{
                    flex: 1,
                    padding: '12px',
                    background: tradeType === 'buy' ? 'linear-gradient(135deg, #00ff00, #00cc00)' : 'transparent',
                    border: '2px solid ' + (tradeType === 'buy' ? '#00ff00' : '#333'),
                    borderRadius: '8px 0 0 8px',
                    color: tradeType === 'buy' ? 'black' : '#999',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Buy $bArt
                </button>
                <button
                  onClick={() => setTradeType('sell')}
                  style={{
                    flex: 1,
                    padding: '12px',
                    background: tradeType === 'sell' ? 'linear-gradient(135deg, #ff0000, #cc0000)' : 'transparent',
                    border: '2px solid ' + (tradeType === 'sell' ? '#ff0000' : '#333'),
                    borderRadius: '0 8px 8px 0',
                    borderLeft: 'none',
                    color: tradeType === 'sell' ? 'white' : '#999',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Sell $bArt
                </button>
              </div>

              {/* Amount Input */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: '#999', fontSize: '14px' }}>
                  Amount ($bArt)
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: 'rgba(255, 107, 0, 0.1)',
                    border: '2px solid rgba(255, 107, 0, 0.3)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '18px',
                    outline: 'none',
                  }}
                />
                <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                  {['25%', '50%', '75%', '100%'].map((percent) => (
                    <button
                      key={percent}
                      style={{
                        flex: 1,
                        padding: '6px',
                        background: 'rgba(255, 107, 0, 0.1)',
                        border: '1px solid rgba(255, 107, 0, 0.3)',
                        borderRadius: '4px',
                        color: '#ff6b00',
                        fontSize: '12px',
                        cursor: 'pointer',
                      }}
                    >
                      {percent}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Info */}
              <div style={{ marginBottom: '24px', padding: '16px', background: 'rgba(255, 107, 0, 0.05)', borderRadius: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ color: '#999', fontSize: '14px' }}>Price per $bArt</span>
                  <span style={{ color: 'white', fontSize: '14px' }}>{tokenStats.price} BTC</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ color: '#999', fontSize: '14px' }}>Total</span>
                  <span style={{ color: 'white', fontSize: '16px', fontWeight: 600 }}>
                    {amount ? (Number(amount) * tokenStats.price).toFixed(6) : '0.000000'} BTC
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#999', fontSize: '14px' }}>Fee (0.2%)</span>
                  <span style={{ color: '#666', fontSize: '14px' }}>
                    {amount ? (Number(amount) * tokenStats.price * 0.002).toFixed(8) : '0.00000000'} BTC
                  </span>
                </div>
              </div>

              {/* Trade Button */}
              <button
                style={{
                  width: '100%',
                  padding: '16px',
                  background: tradeType === 'buy' ? 'linear-gradient(135deg, #00ff00, #00cc00)' : 'linear-gradient(135deg, #ff0000, #cc0000)',
                  border: 'none',
                  borderRadius: '8px',
                  color: tradeType === 'buy' ? 'black' : 'white',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              >
                {tradeType === 'buy' ? 'Buy' : 'Sell'} $bArt
              </button>

              {/* Wallet Balance */}
              <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(0, 0, 0, 0.3)', borderRadius: '8px' }}>
                <p style={{ fontSize: '14px', color: '#999', marginBottom: '8px' }}>Your Balances:</p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'white' }}>$bArt: 12,500</span>
                  <span style={{ color: 'white' }}>BTC: 0.45</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'staking' && (
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600, color: 'white', marginBottom: '24px' }}>
              Stake $bArt & Earn Rewards
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {stakingTiers.map((tier) => (
                <div
                  key={tier.level}
                  style={{
                    background: 'linear-gradient(180deg, #1a1a1a 0%, #141414 100%)',
                    border: tier.level === 'Gold' ? '2px solid #ff6b00' : '1px solid rgba(255, 107, 0, 0.2)',
                    borderRadius: '16px',
                    padding: '24px',
                    position: 'relative',
                  }}
                >
                  {tier.level === 'Gold' && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '-12px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        padding: '4px 16px',
                        background: 'linear-gradient(135deg, #ff6b00, #ff8c42)',
                        color: 'white',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: 600,
                      }}
                    >
                      POPULAR
                    </span>
                  )}
                  <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <Award size={48} color={tier.level === 'Diamond' ? '#ff6b00' : '#666'} />
                    <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', marginTop: '12px' }}>
                      {tier.level}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#999', marginTop: '4px' }}>
                      Min. {tier.required.toLocaleString()} $bArt
                    </p>
                  </div>
                  <div
                    style={{
                      padding: '16px',
                      background: 'rgba(255, 107, 0, 0.1)',
                      borderRadius: '8px',
                      textAlign: 'center',
                      marginBottom: '20px',
                    }}
                  >
                    <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#ff6b00' }}>
                      {tier.apy}%
                    </p>
                    <p style={{ fontSize: '14px', color: '#999' }}>APY</p>
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <p style={{ fontSize: '14px', fontWeight: 600, color: 'white', marginBottom: '12px' }}>Benefits:</p>
                    <ul style={{ fontSize: '13px', color: '#999', paddingLeft: '20px' }}>
                      {tier.benefits.map((benefit, index) => (
                        <li key={index} style={{ marginBottom: '6px' }}>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: tier.level === 'Gold' ? 'linear-gradient(135deg, #ff6b00, #ff8c42)' : 'rgba(255, 107, 0, 0.2)',
                      border: 'none',
                      borderRadius: '8px',
                      color: tier.level === 'Gold' ? 'white' : '#ff6b00',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    Stake Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}