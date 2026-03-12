function AddToCartButton({ onAddToCart }) {
  return (
    <button
      onClick={onAddToCart}
      className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
    >
      Add to Cart
    </button>
  )
}

export default AddToCartButton