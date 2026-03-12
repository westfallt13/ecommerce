import AddToCartButton from './AddToCartButton'

function ProductCard({ id, name, description, price, image, onAddToCart }) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col gap-4">
            <img
                src={image}
                alt={name}
                className="w-full h-48 object-contain rounded-xl"
            />
            <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold text-gray-800">{name}</h3>
                <p className="text-gray-500 text-sm">{description}</p>
                <span className="text-blue-600 font-semibold text-lg">${price}</span>
            </div>
            <AddToCartButton onAddToCart={() => onAddToCart({ id, name, price, image })} />
        </div>
    )
}

export default ProductCard