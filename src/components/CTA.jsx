export default function CTA() {
  return (
    <section id="get-started" className="relative py-24 bg-gradient-to-b from-white to-red-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-red-100 bg-white p-10 sm:p-14 shadow-sm">
          <div className="max-w-3xl">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900">Ready to create your ripple effect?</h3>
            <p className="mt-3 text-gray-700">
              Launch your interactive landing page in minutes. No code lock-in, all the flexibility.
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-red-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-red-700 transition-colors"
            >
              Create account
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-900 font-medium hover:bg-gray-50"
            >
              Talk to sales
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-gray-500">By continuing, you agree to our Terms and Privacy Policy.</p>
      </div>
    </section>
  );
}
