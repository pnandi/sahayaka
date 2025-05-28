export default function About() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            About Sahayaka
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            We're revolutionizing healthcare through AI-powered workflow automation, 
            making healthcare more efficient, accurate, and patient-focused.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Our Mission</h2>
              <p className="mt-4 text-lg text-gray-500">
                At Sahayaka, we believe that healthcare professionals should spend their time caring for patients, 
                not drowning in administrative tasks. Our AI-powered platform automates complex workflows, 
                creates comprehensive patient profiles, and reduces the burden on clinicians while improving 
                accuracy and efficiency across healthcare operations.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                We're committed to transforming healthcare delivery through intelligent automation, 
                enabling providers to focus on what matters most: exceptional patient care.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg opacity-90">
                A healthcare system where AI seamlessly handles administrative complexity, 
                allowing human expertise to shine in patient care and clinical decision-making.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 bg-indigo-500 rounded-lg flex items-center justify-center">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Patient-Centered</h3>
              <p className="mt-2 text-base text-gray-500">
                Every decision we make is guided by what's best for patient outcomes and experience.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-12 w-12 bg-indigo-500 rounded-lg flex items-center justify-center">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Accuracy First</h3>
              <p className="mt-2 text-base text-gray-500">
                We prioritize precision and reliability in every aspect of our AI systems.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-12 w-12 bg-indigo-500 rounded-lg flex items-center justify-center">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Innovation</h3>
              <p className="mt-2 text-base text-gray-500">
                We continuously push the boundaries of what's possible with AI in healthcare.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
