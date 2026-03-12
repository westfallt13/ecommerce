import GridContainer from '../components/GridContainer'

function Products({ onAddToCart }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Products</h2>
      <GridContainer onAddToCart={onAddToCart} />
    </section>
  )
}

export default Products