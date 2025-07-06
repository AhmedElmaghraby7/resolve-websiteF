import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaMagic } from 'react-icons/fa';

const products = [
  {
    name: 'Resolve App',
    description: 'A cloud-based photo-sharing app powered by collective data and an intelligent mascot.',
    icon: <FaCloud className="text-3xl text-blue-500" />,
    delay: 0,
  },
  {
    name: 'Resolve Mascot Packs',
    description: 'Fun add-ons that let you customize your sharing experience with new mascot animations and themes.',
    icon: <FaMagic className="text-3xl text-purple-500" />,
    delay: 0.2,
  },
];

function Products() {
  return (
    <div className="p-8 bg-gray-50 ">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {products.map((product, index) => (
          <motion.li
            key={index}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: product.delay }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gray-100 p-3 rounded-full">
                {product.icon}
              </div>
              <h2 className="text-xl font-semibold">{product.name}</h2>
            </div>
            <p className="text-gray-600">{product.description}</p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
