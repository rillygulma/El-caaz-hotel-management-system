import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  width: number;
  height: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Fresh Tomatoes',
    image: '/images/Tomato.jpg',
    price: 20000,
    description: 'Organic fresh tomatoes grown locally.',
    width: 300,
    height: 200,
  },
  {
    id: 2,
    name: 'Chickens',
    image: '/images/chicken.jpg',
    price: 10000,
    description: 'Healthy chickens straight from the farm.',
    width: 300,
    height: 200,
  },
  {
    id: 3,
    name: 'Farm Fresh Eggs',
    image: '/images/eggs.jpg',
    price: 8000,
    description: 'Free-range eggs from healthy chickens.',
    width: 300,
    height: 200,
  },
  {
    id: 4,
    name: 'Fresh Cucumber',
    image: '/images/cucumber.jpg',
    price: 24000,
    description: 'Fresh Cucumber from the Farm.',
    width: 300,
    height: 200,
  },
  {
    id: 5,
    name: 'Farm Fish',
    image: '/images/fish.jpg',
    price: 4000,
    description:
      'Fresh pond fish is a natural delicacy, sustainably raised in clean, controlled environments to ensure optimal health and flavor. Known for its rich taste, tender texture, and high nutritional value, pond-raised fish is free from harmful additives, making it a wholesome choice for meals.',
    width: 300,
    height: 200,
  },
];

const FarmProductSales: React.FC = () => {
  return (
    <div className="container mx-auto text-black dark:text-white py-10">
      <div className="container mx-auto px-4">
        {/* Coming Soon Section */}
        <div className="mb-10 text-center">
          <h1 className="font-heading text-2xl md:text-3xl mb-4">
            Full Functionality Coming Soon!
          </h1>
          <p className=" font-heading md:text-lg text-gray-700 dark:text-white">
            Here&apos;s what to expect in the farms:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-white mt-4 text-sm md:text-base max-w-3xl mx-auto">
            <li>Wide variety of fresh and organic produce.</li>
            <li>Customizable farm packages tailored to your needs.</li>
            <li>Farm-to-table delivery service.</li>
            <li>Seasonal offers and discounts.</li>
            <li>Detailed product information and nutritional facts.</li>
          </ul>
        </div>

        {/* Product Display Section */}
        <h2 className="font-heading text-center text-2xl md:text-3xl mb-8">
          Our Farm Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={product.width}
                height={product.height}
                className="object-cover w-full h-40 sm:h-48"
              />
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100">
                  {product.name}
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-2">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-green-600 dark:text-white font-bold text-sm md:text-lg">
                    ₦{product.price.toFixed(2)}
                  </span>
                  <button
                    disabled
                    className="btn-primary text-sm px-3 py-2"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FarmProductSales;
