export default function Features() {
  const features = [
    {
      category: "AI Workflow Automation",
      items: [
        {
          name: "Intelligent Task Routing",
          description: "Automatically route tasks to the right personnel based on expertise, availability, and workload."
        },
        {
          name: "Adaptive Learning",
          description: "AI that learns from your workflows and continuously improves automation efficiency."
        },
        {
          name: "Real-time Decision Support",
          description: "Provide clinicians with AI-powered insights and recommendations at the point of care."
        }
      ]
    },
    {
      category: "Patient Profile Management",
      items: [
        {
          name: "Longitudinal Health Records",
          description: "Comprehensive patient histories that track health trends and outcomes over time."
        },
        {
          name: "Multi-source Data Integration",
          description: "Seamlessly combine data from EHRs, labs, imaging, and wearable devices."
        },
        {
          name: "Predictive Health Analytics",
          description: "Identify potential health risks and opportunities for preventive care."
        }
      ]
    },
    {
      category: "Administrative Automation",
      items: [
        {
          name: "Smart Scheduling",
          description: "Optimize appointment scheduling based on provider availability and patient needs."
        },
        {
          name: "Automated Documentation",
          description: "Generate clinical notes and documentation from voice recordings and structured data."
        },
        {
          name: "Insurance Processing",
          description: "Streamline prior authorizations, claims processing, and billing workflows."
        }
      ]
    }
  ]

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Platform Features
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Discover how Sahayaka's comprehensive AI platform transforms every aspect of healthcare operations.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {features.map((category, categoryIndex) => (
            <div key={category.category}>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {category.items.map((feature, featureIndex) => (
                  <div key={feature.name} className="bg-gray-50 rounded-lg p-6 card-hover">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">
                      {feature.name}
                    </h3>
                    <p className="text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-indigo-700 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-indigo-200 mb-6">
            Schedule a personalized demo to see how Sahayaka can transform your healthcare operations.
          </p>
          <button className="bg-white text-indigo-700 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
            Schedule Demo
          </button>
        </div>
      </div>
    </div>
  )
}
