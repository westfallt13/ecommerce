import ProductCard from './ProductCards'

const products = [
    { id: 1, name: 'Wireless Headphones', description: 'Premium sound with active noise cancellation.', price: '79.99', image: '/headphones.jpg' },
    { id: 2, name: 'Mechanical Keyboard', description: 'Tactile switches with RGB backlighting.', price: '59.99', image: '/keyboard.jpg' },
    { id: 3, name: 'USB-C Hub', description: '7-in-1 hub with HDMI, USB, and SD card slots.', price: '34.99', image: '/usbhub.jpg' },
    { id: 4, name: 'HD Web Cam', description: '1080p webcam with built-in microphone.', price: '49.99', image: '/webcam.jpg' },
    { id: 5, name: 'Mouse Pad XL', description: 'Extended desk mat with non-slip base.', price: '19.99', image: '/mousepad.jpg' },
    { id: 6, name: 'LED Desk Lamp', description: 'Adjustable brightness with USB charging port.', price: '29.99', image: '/lamp.jpg' },
]

function GridContainer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    image={product.image} 
                />
            ))}
        </div>
    )
}

export default GridContainer