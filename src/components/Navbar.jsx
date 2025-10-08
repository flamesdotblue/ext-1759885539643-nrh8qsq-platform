import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white/70 backdrop-blur border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-red-100 text-red-600">
            <Rocket size={18} />
          </div>
          <span className="font-semibold tracking-tight">GridRipple</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-9 items-center rounded-md border border-gray-200 px-4 text-sm font-medium hover:bg-gray-50">Sign in</button>
          <button className="inline-flex h-9 items-center rounded-md bg-red-600 px-4 text-sm font-medium text-white hover:bg-red-700">Get started</button>
        </div>
      </nav>
    </header>
  );
}
