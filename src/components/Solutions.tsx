export default function Solutions() {
  const solutions = [
    {
      title: 'Hospital Systems',
      description: 'Comprehensive workflow automation for large hospital networks, reducing administrative overhead and improving patient flow.',
      features: ['Patient admission automation', 'Discharge planning', 'Resource allocation', 'Staff scheduling'],
      image: '🏥',
    },
    {
      title: 'Clinics & Practices',
      description: 'Streamlined operations for smaller healthcare practices, focusing on patient care efficiency and administrative simplification.',
      features: ['Appointment scheduling', 'Patient records management', 'Billing automation', 'Insurance processing'],
      image: '🩺',
    },
    {
      title: 'Specialty Care',
      description: 'Specialized solutions for specific medical disciplines with tailored workflows and compliance requirements.',
      features: ['Specialized protocols', 'Compliance tracking', 'Research integration', 'Outcome monitoring'],
      image: '🧬',
    },
  ]

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Solutions</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Tailored for Every Healthcare Setting
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            From large hospital systems to specialized clinics, our AI platform adapts to your unique needs and workflows.
          </p>
        </div>

        <div className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
          {solutions.map((solution) => (
            <div key={solution.title} className="card-hover bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="text-4xl mb-4">{solution.image}</div>
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">
                  {solution.title}
                </h3>
                <p className="text-base text-gray-500 mb-4">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
