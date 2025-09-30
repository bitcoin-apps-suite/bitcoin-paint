'use client';

import { useState } from 'react';
import { X, Mail, Lock, User, Bitcoin, Wallet, ArrowRight } from 'lucide-react';

interface AuthModalProps {
  onClose: () => void;
}

export default function AuthModal({ onClose }: AuthModalProps) {
  const [authMode, setAuthMode] = useState<'login' | 'register' | 'wallet'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication
    console.log('Auth submitted:', { authMode, email, password, username });
    onClose();
  };

  const handleWalletConnect = (walletType: string) => {
    console.log('Connecting to wallet:', walletType);
    // Handle wallet connection
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(4px)',
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '480px',
          background: 'linear-gradient(180deg, #1a1a1a 0%, #141414 100%)',
          borderRadius: '20px',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          padding: '32px',
          margin: '20px',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(139, 92, 246, 0.1)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#8b5cf6',
          }}
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              background: 'linear-gradient(135deg, #8b5cf6, #c084fc)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
            }}
          >
            <User size={32} color="white" />
          </div>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>
            {authMode === 'login' ? 'Welcome Back' : authMode === 'register' ? 'Create Account' : 'Connect Wallet'}
          </h2>
          <p style={{ color: '#999', fontSize: '14px' }}>
            {authMode === 'login'
              ? 'Sign in to access your paint gallery'
              : authMode === 'register'
              ? 'Join the Bitcoin Paint community'
              : 'Choose your Bitcoin wallet to connect'}
          </p>
        </div>

        {/* Auth Mode Tabs */}
        <div style={{ display: 'flex', marginBottom: '24px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '12px', padding: '4px' }}>
          <button
            onClick={() => setAuthMode('login')}
            style={{
              flex: 1,
              padding: '10px',
              background: authMode === 'login' ? 'rgba(139, 92, 246, 0.3)' : 'transparent',
              border: 'none',
              borderRadius: '8px',
              color: authMode === 'login' ? '#8b5cf6' : '#999',
              fontWeight: authMode === 'login' ? 600 : 400,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            Sign In
          </button>
          <button
            onClick={() => setAuthMode('register')}
            style={{
              flex: 1,
              padding: '10px',
              background: authMode === 'register' ? 'rgba(139, 92, 246, 0.3)' : 'transparent',
              border: 'none',
              borderRadius: '8px',
              color: authMode === 'register' ? '#8b5cf6' : '#999',
              fontWeight: authMode === 'register' ? 600 : 400,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            Sign Up
          </button>
          <button
            onClick={() => setAuthMode('wallet')}
            style={{
              flex: 1,
              padding: '10px',
              background: authMode === 'wallet' ? 'rgba(139, 92, 246, 0.3)' : 'transparent',
              border: 'none',
              borderRadius: '8px',
              color: authMode === 'wallet' ? '#8b5cf6' : '#999',
              fontWeight: authMode === 'wallet' ? 600 : 400,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            Wallet
          </button>
        </div>

        {/* Form Content */}
        {authMode !== 'wallet' ? (
          <form onSubmit={handleSubmit}>
            {authMode === 'register' && (
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: '#999', fontSize: '14px' }}>
                  Username
                </label>
                <div style={{ position: 'relative' }}>
                  <User
                    size={18}
                    style={{
                      position: 'absolute',
                      left: '16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#666',
                    }}
                  />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Choose a username"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px 12px 48px',
                      background: 'rgba(139, 92, 246, 0.1)',
                      border: '2px solid rgba(139, 92, 246, 0.2)',
                      borderRadius: '10px',
                      color: 'white',
                      fontSize: '16px',
                      outline: 'none',
                      transition: 'border 0.2s',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(139, 92, 246, 0.5)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                    }}
                  />
                </div>
              </div>
            )}

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: '#999', fontSize: '14px' }}>
                Email Address
              </label>
              <div style={{ position: 'relative' }}>
                <Mail
                  size={18}
                  style={{
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#666',
                  }}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px 12px 48px',
                    background: 'rgba(139, 92, 246, 0.1)',
                    border: '2px solid rgba(139, 92, 246, 0.2)',
                    borderRadius: '10px',
                    color: 'white',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'border 0.2s',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(139, 92, 246, 0.5)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: '#999', fontSize: '14px' }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <Lock
                  size={18}
                  style={{
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#666',
                  }}
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={authMode === 'register' ? 'Create a strong password' : 'Enter your password'}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px 12px 48px',
                    background: 'rgba(139, 92, 246, 0.1)',
                    border: '2px solid rgba(139, 92, 246, 0.2)',
                    borderRadius: '10px',
                    color: 'white',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'border 0.2s',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(139, 92, 246, 0.5)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                  }}
                />
              </div>
            </div>

            {authMode === 'login' && (
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input type="checkbox" />
                  <span style={{ fontSize: '14px', color: '#999' }}>Remember me</span>
                </label>
                <a href="#" style={{ fontSize: '14px', color: '#8b5cf6', textDecoration: 'none' }}>
                  Forgot password?
                </a>
              </div>
            )}

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '14px',
                background: 'linear-gradient(135deg, #8b5cf6, #c084fc)',
                border: 'none',
                borderRadius: '10px',
                color: 'white',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              {authMode === 'login' ? 'Sign In' : 'Create Account'}
              <ArrowRight size={18} />
            </button>
          </form>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button
              onClick={() => handleWalletConnect('handcash')}
              style={{
                width: '100%',
                padding: '16px',
                background: 'rgba(139, 92, 246, 0.1)',
                border: '2px solid rgba(139, 92, 246, 0.2)',
                borderRadius: '10px',
                color: 'white',
                fontSize: '16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
              }}
            >
              <Wallet size={20} />
              HandCash
            </button>
            <button
              onClick={() => handleWalletConnect('relayx')}
              style={{
                width: '100%',
                padding: '16px',
                background: 'rgba(139, 92, 246, 0.1)',
                border: '2px solid rgba(139, 92, 246, 0.2)',
                borderRadius: '10px',
                color: 'white',
                fontSize: '16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
              }}
            >
              <Wallet size={20} />
              RelayX
            </button>
            <button
              onClick={() => handleWalletConnect('twetch')}
              style={{
                width: '100%',
                padding: '16px',
                background: 'rgba(139, 92, 246, 0.1)',
                border: '2px solid rgba(139, 92, 246, 0.2)',
                borderRadius: '10px',
                color: 'white',
                fontSize: '16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
              }}
            >
              <Wallet size={20} />
              Twetch
            </button>
            <button
              onClick={() => handleWalletConnect('metamask')}
              style={{
                width: '100%',
                padding: '16px',
                background: 'rgba(139, 92, 246, 0.1)',
                border: '2px solid rgba(139, 92, 246, 0.2)',
                borderRadius: '10px',
                color: 'white',
                fontSize: '16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
              }}
            >
              <Wallet size={20} />
              Browser Wallet
            </button>
          </div>
        )}

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', margin: '24px 0' }}>
          <div style={{ flex: 1, height: '1px', background: 'rgba(139, 92, 246, 0.2)' }} />
          <span style={{ padding: '0 16px', color: '#666', fontSize: '14px' }}>OR</span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(139, 92, 246, 0.2)' }} />
        </div>

        {/* Alternative Auth */}
        <button
          onClick={() => setAuthMode(authMode === 'wallet' ? 'login' : 'wallet')}
          style={{
            width: '100%',
            padding: '12px',
            background: 'transparent',
            border: '2px solid rgba(139, 92, 246, 0.3)',
            borderRadius: '10px',
            color: '#8b5cf6',
            fontSize: '16px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          <Bitcoin size={18} />
          {authMode === 'wallet' ? 'Use Email Instead' : 'Connect with Bitcoin Wallet'}
        </button>

        {/* Footer */}
        <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: '#666' }}>
          {authMode === 'login' ? (
            <>
              Don't have an account?{' '}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setAuthMode('register');
                }}
                style={{ color: '#8b5cf6', textDecoration: 'none' }}
              >
                Sign up
              </a>
            </>
          ) : authMode === 'register' ? (
            <>
              Already have an account?{' '}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setAuthMode('login');
                }}
                style={{ color: '#8b5cf6', textDecoration: 'none' }}
              >
                Sign in
              </a>
            </>
          ) : (
            <>
              By connecting, you agree to our{' '}
              <a href="#" style={{ color: '#8b5cf6', textDecoration: 'none' }}>
                Terms
              </a>{' '}
              and{' '}
              <a href="#" style={{ color: '#8b5cf6', textDecoration: 'none' }}>
                Privacy Policy
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  );
}