import React, { useState } from 'react';
import axios from 'axios';
function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const API_URL = "https://resolve-website-production.up.railway.app"
  const handleSubscribe = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await axios.post(`${API_URL}/subscribe`, { email });
      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };
  return (
    <section id="newsletter" className="py-16 bg-white text-center">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold mb-4">Stay Connected</h3>
        <p className="mb-6">
          Subscribe to our newsletter for updates, features, and fun moments from the community.
        </p>
        <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-3 border border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 duration-300 text-white px-6 py-3 hover:px-9 rounded-md hover:bg-red-500 cursor-pointer"
          >
            Subscribe
          </button>
        {status === 'success' && <p className="text-green-600">Subscribed successfully!</p>}
        {status === 'error' && <p className="text-red-600">Something went wrong. Try again.</p>}
        {status === 'loading' && <p className="text-gray-600">Submitting...</p>}
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
