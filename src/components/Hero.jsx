import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
            A modern way to engage with interactive surfaces
          </h1>
          <p className="mt-6 text-lg sm:text-xl leading-8 text-gray-700 max-w-2xl">
            Experience a minimalist, responsive canvas where every interaction triggers a subtle ripple across a seamless grid of tiles. Built for modern, digital-first brands.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-md bg-red-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-red-700 transition-colors"
            >
              Start free <ArrowRight className="ml-2" size={18} />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-900 font-medium hover:bg-gray-50"
            >
              Explore features
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-gray-600">
            <Stat label="Setup time" value="5 min" />
            <Stat label="Uptime" value="99.99%" />
            <Stat label="Global users" value="120k+" />
            <Stat label="Latency" value="< 50ms" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="">
      <div className="text-gray-900 font-semibold">{value}</div>
      <div>{label}</div>
    </div>
  );
}
