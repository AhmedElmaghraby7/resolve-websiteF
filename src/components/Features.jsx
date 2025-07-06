import React from 'react';
import { motion } from 'framer-motion';
function Features() {
  return (
                  <motion.div
              className=" w-full mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay:1 , duration: 0.5 }}
            >
    <section id="products" className="py-16 bg-blue-100 text-center">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-semibold mb-6">Why Resolve?</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-2">Crowd Intelligence</h4>
            <p>Harness the power of crowd-sourced data to organize and share your best photos.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-2">Always with You</h4>
            <p>Cloud-powered and mobile-ready – perfect for anyone on the go.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-2">Friendly Companion</h4>
            <p>Our mascot is here to make sharing fun, even when you’re alone.</p>
          </div>
        </div>
      </div>
    </section>
    </motion.div>
  );
}

export default Features;
