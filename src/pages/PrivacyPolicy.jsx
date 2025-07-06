// src/pages/PrivacyPolicy.jsx
import React from 'react';
import { motion } from 'framer-motion';
function PrivacyPolicy() {
  return (
            <motion.div
          className=" w-full mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-2">Your privacy is important to us. Resolve does not sell your data or share it without your consent.</p>
      <p>All user photos and preferences are securely stored and encrypted using industry-standard cloud practices.</p>
    </div>
    </motion.div>
  );
}

export default PrivacyPolicy;
