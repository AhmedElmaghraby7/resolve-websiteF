import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ImageGallery() {
  const [images, setImages] = useState([]);
  const API_URL = "https://resolve-website-production.up.railway.app"
  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await axios.get(`${API_URL}/images`);
        setImages(res.data);
      } catch (err) {
        console.error('Error loading images', err);
      }
    }
    fetchImages();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">📷 Uploaded Images</h2>
      {images[0]?
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Uploaded ${index}`}
            className="rounded shadow"
          />
        ))}</div>:(<p className='text-center py-10'><h1 className='text-3xl'>Not image yet Be first.</h1> <br /></p> )}
        <Link to="/uploadImage" className='my-5 mx-auto block w-fit bg-blue-600 text-white px-4 py-2 duration-300 hover:px-9 rounded-md hover:bg-red-500 cursor-pointer'><i className='fa-solid fa-arrow-left'></i> Go to upload</Link>
    </div>
  );
}

export default ImageGallery;
