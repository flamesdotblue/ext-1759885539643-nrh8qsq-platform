import { Shield, Zap, Star, Rocket } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Interactive hero',
    description:
      'Delight visitors with a smooth, responsive cover that reacts to every click and hover with a domino-like ripple.',
  },
  {
    icon: Shield,
    title: 'Secure & reliable',
    description:
      'Built atop robust infrastructure with best-in-class security practices and continuous monitoring.',
  },
  {
    icon: Zap,
    title: 'Fast by default',
    description:
      'Optimized for performance and minimal bundle size to ensure snappy load times around the globe.',
  },
  {
    icon: Star,
    title: 'Beautifully minimalist',
    description:
      'A clean visual language that emphasizes clarity, focus, and modern design principles.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Everything you need to launch</h2>
          <p className="mt-4 text-gray-700">
            Designed for modern teams that value simplicity, performance, and delightful user experiences.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="group rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow bg-white">
      <div className="h-10 w-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
        <Icon size={20} />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-700 leading-6">{description}</p>
      <div className="mt-4 h-1 w-0 bg-red-600 transition-all duration-300 group-hover:w-20" />
    </div>
  );
}
