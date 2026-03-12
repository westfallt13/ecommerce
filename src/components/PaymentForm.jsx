import { useState } from 'react'
import PayNow from './PayNow'

function PaymentForm({ total }) {
  const [form, setForm] = useState({
    cardholderName: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    alert(`Payment of $${total} submitted! Thank you.`)
  }

  const inputClass =
    'w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md flex flex-col gap-5"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">Payment Details</h2>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600" htmlFor="cardholderName">
            Cardholder Name
          </label>
          <input
            id="cardholderName"
            name="cardholderName"
            type="text"
            placeholder="Jane Doe"
            value={form.cardholderName}
            onChange={handleChange}
            className={inputClass}
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600" htmlFor="cardNumber">
            Card Number
          </label>
          <input
            id="cardNumber"
            name="cardNumber"
            type="text"
            placeholder="1234 5678 9012 3456"
            value={form.cardNumber}
            onChange={handleChange}
            maxLength={19}
            className={inputClass}
            required
          />
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col gap-1 flex-1">
            <label className="text-sm font-medium text-gray-600" htmlFor="expirationDate">
              Expiration Date
            </label>
            <input
              id="expirationDate"
              name="expirationDate"
              type="text"
              placeholder="MM/YY"
              value={form.expirationDate}
              onChange={handleChange}
              maxLength={5}
              className={inputClass}
              required
            />
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <label className="text-sm font-medium text-gray-600" htmlFor="cvv">
              CVV
            </label>
            <input
              id="cvv"
              name="cvv"
              type="password"
              placeholder="•••"
              value={form.cvv}
              onChange={handleChange}
              maxLength={4}
              className={inputClass}
              required
            />
          </div>
        </div>

        <PayNow />
      </form>
    </div>
  )
}

export default PaymentForm
