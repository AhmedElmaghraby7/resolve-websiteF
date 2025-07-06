import React from 'react';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
function Hero() {
  return (
          <motion.div
          className=" w-full mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
    <section className="text-center py-16 bg-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Share Moments. Connect Lives.</h2>
        <p className="text-lg max-w-xl mx-auto mb-6">
          Resolve is the new way to share your photos using the power of crowd-sourced data and a lovable mascot.
          Perfect for people who live alone and want to feel connected.
        </p>
        <motion.div
          className=""
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{  delay:0.5,duration: 0.5 }}
        >
        <Link to="/products" className="bg-blue-600 text-white px-6 py-3 hover:px-9 duration-300 rounded-lg shadow hover:bg-red-500 cursor-pointer">
          Explore Products
        </Link>
        </motion.div>
      </div>
    </section>
    </motion.div>
  );
}

export default Hero;
