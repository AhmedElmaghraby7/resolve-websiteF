import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const ClassName =`duration-300 hover:scale-125`
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold mr-10">Resolve</h1>
        <nav>
          <ul className="flex space-x-6 flex-wrap pr-5">
            <li className={ClassName}><Link to="/" >Home</Link></li>
            <li className={ClassName}><Link to="/about" >About</Link></li>
            <li className={ClassName}><Link to="/products">Products</Link></li>
            <li className={ClassName}><Link to="/uploadImage">Upload</Link></li>
            <li className={ClassName}><Link to="/gallery">Gallery</Link></li>
            <li className={ClassName}><Link to="/privacy" >Privacy</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
