# Bitcoin Art

A Next.js application for Bitcoin Art Gallery, integrated with Bitcoin OS Bridge for wallet connectivity.

## Features

- Next.js 15.5 with App Router
- TypeScript support
- Tailwind CSS for styling
- Bitcoin wallet integration via @bitcoin-os/bridge

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bitcoin-apps-suite/bitcoin-art.git
cd bitcoin-art
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Bitcoin Wallet Integration

This project uses [@bitcoin-os/bridge](https://www.npmjs.com/package/@bitcoin-os/bridge) for Bitcoin wallet connectivity. The wallet connection component is located in `src/components/BitcoinConnect.tsx`.

## Project Structure

```
bitcoin-art/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       └── BitcoinConnect.tsx
├── public/
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## License

ISC