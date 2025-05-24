import Link from 'next/link'

export default function CTA() {
  return (
    <div className="bg-indigo-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to transform your healthcare operations?</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
          Join hundreds of healthcare providers who are already experiencing the benefits of AI-powered workflow automation.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition-colors"
          >
            Schedule a Demo
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-indigo-600 transition-colors"
          >
            Explore Features
          </Link>
        </div>
      </div>
    </div>
  )
}
