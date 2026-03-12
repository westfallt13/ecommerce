import PaymentForm from '../components/PaymentForm'

function Checkout({ cart = [] }) {
  const total = cart
    .reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0)
    .toFixed(2)

  return (
    <section className="flex flex-col gap-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty. Add some products first!</p>
        ) : (
          <ul className="flex flex-col gap-3">
            {cart.map(item => (
              <li
                key={item.id}
                className="flex items-center gap-4 bg-white rounded-xl shadow-sm p-4"
              >
                <img src={item.image} alt={item.name} className="w-14 h-14 object-contain rounded-lg" />
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
                <span className="font-semibold text-blue-600">
                  ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <div className="flex justify-end mt-4">
            <span className="text-xl font-bold text-gray-800">Total: ${total}</span>
          </div>
        )}
      </div>

      <PaymentForm total={total} />
    </section>
  )
}

export default Checkout