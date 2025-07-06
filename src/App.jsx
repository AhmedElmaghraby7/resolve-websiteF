import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ImageUpload from './pages/ImageUpload';
import ImageGallery from './pages/ImageGallery';
function App() {
  return (
    <Router>
      <div className="bg-blue-50 text-gray-800 min-h-screen flex flex-col duration-300">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/gallery" element={<ImageGallery />} />
            <Route path="/uploadImage" element={<ImageUpload />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
