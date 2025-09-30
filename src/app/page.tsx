import BitcoinConnect from '@/components/BitcoinConnect';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Bitcoin Art</h1>
          <p className="text-lg text-gray-600">Welcome to Bitcoin Art Gallery</p>
        </div>
        <BitcoinConnect />
      </div>
    </main>
  );
}