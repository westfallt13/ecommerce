function MainContainer({ children }) {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Welcome to Our Store
        </h1>
        <p className="text-gray-600 text-lg">
          Browse our products and find something you love.
        </p>
      </section>

      <div>
        {children}
      </div>
    </main>
  )
}

export default MainContainer