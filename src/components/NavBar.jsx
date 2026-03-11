import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="w-full bg-blue-600 px-8 py-4">
      <ul className="flex gap-6">
        <li>
          <Link
            to="/"
            className="text-white text-lg font-semibold hover:text-yellow-300 transition-colors"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="text-white text-lg font-semibold hover:text-yellow-300 transition-colors"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/checkout"
            className="text-white text-lg font-semibold hover:text-yellow-300 transition-colors"
          >
            Checkout
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar