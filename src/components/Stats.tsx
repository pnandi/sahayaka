export default function Stats() {
  const stats = [
    { id: 1, name: 'Reduction in Administrative Time', value: '75%' },
    { id: 2, name: 'Improvement in Data Accuracy', value: '95%' },
    { id: 3, name: 'Faster Patient Processing', value: '3x' },
    { id: 4, name: 'Healthcare Providers Served', value: '500+' },
  ]

  return (
    <div className="bg-indigo-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Proven Results in Healthcare Innovation
          </h2>
          <p className="mt-3 text-xl text-indigo-200 sm:mt-4">
            Our AI-powered platform delivers measurable improvements across all aspects of healthcare administration.
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
                {stat.name}
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
