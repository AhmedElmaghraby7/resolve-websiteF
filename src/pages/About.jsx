import React from 'react';
import { motion } from 'framer-motion';
import AboutTeam from '../components/AboutTeam';
function About() {
  return (
        <motion.div
          className=" w-full mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">About Resolve</h1>
      <p className="mb-2">Resolve was founded to help people who live alone feel more connected through photo sharing.</p>
      <p>Our mission is to combine cloud technology, user-generated data, and a fun user experience to create meaningful digital connections.</p>
    </div>
    <AboutTeam></AboutTeam>
    </motion.div>
  );
}

export default About;
