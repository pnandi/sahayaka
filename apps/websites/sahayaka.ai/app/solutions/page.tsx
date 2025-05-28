export default function Solutions() {
  const solutions = [
    {
      title: "Hospital Systems",
      description: "Enterprise-grade solutions for large healthcare networks",
      features: [
        "Multi-facility workflow coordination",
        "Advanced patient flow optimization",
        "Integrated resource management",
        "Comprehensive analytics dashboard",
        "24/7 AI-powered monitoring"
      ],
      benefits: [
        "Reduce patient wait times by 40%",
        "Improve bed utilization by 25%",
        "Decrease administrative costs by 30%"
      ]
    },
    {
      title: "Clinics & Private Practices",
      description: "Streamlined solutions for smaller healthcare providers",
      features: [
        "Automated appointment scheduling",
        "Patient communication automation",
        "Simplified billing and coding",
        "EHR integration and optimization",
        "Telehealth workflow support"
      ],
      benefits: [
        "Save 15+ hours per week on admin tasks",
        "Increase patient satisfaction by 35%",
        "Improve revenue cycle by 20%"
      ]
    },
    {
      title: "Specialty Care Centers",
      description: "Specialized workflows for focused medical disciplines",
      features: [
        "Discipline-specific protocols",
        "Research data integration",
        "Outcome tracking and analysis",
        "Compliance monitoring",
        "Specialized reporting tools"
      ],
      benefits: [
        "Enhance clinical outcomes by 30%",
        "Streamline research workflows",
        "Ensure 100% compliance tracking"
      ]
    }
  ]

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Healthcare Solutions
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Tailored AI automation solutions for every type of healthcare organization, 
            from large hospital systems to specialized clinics.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {solutions.map((solution, index) => (
            <div key={solution.title} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                  {solution.title}
                </h2>
                <p className="text-lg text-gray-500 mb-6">
                  {solution.description}
                </p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Benefits</h3>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-indigo-600 font-medium">
                        <svg className="h-5 w-5 text-indigo-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-8 text-white h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">
                      {index === 0 ? '🏥' : index === 1 ? '🩺' : '🧬'}
                    </div>
                    <h3 className="text-2xl font-bold">{solution.title}</h3>
                    <p className="mt-2 opacity-90">AI-Powered Healthcare Automation</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Custom Solutions Available
            </h2>
            <p className="text-lg text-gray-500 mb-6">
              Don't see your specific use case? We work with healthcare organizations to create 
              custom AI automation solutions tailored to your unique workflows and requirements.
            </p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors">
              Discuss Custom Solution
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
