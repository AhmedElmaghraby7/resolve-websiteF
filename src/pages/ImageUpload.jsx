import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ImageUpload() {
  const [file, setFile] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState('');
  const API_URL = "https://resolve-website-production.up.railway.app"
  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await axios.post(`${API_URL}/upload`, formData);
      setUploadedUrl(res.data.url);
    } catch (err) {
      console.error('Upload error:', err);
    }
  };

  return (
    <div className="p-4 mx-auto text-center">
      <h1 className='text-2xl'>Upload Image</h1>
      <form onSubmit={handleUpload} className='bg-white p-4 rounded shadow max-w-md mx-auto mt-5'>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
          className="duration-300 mb-4 border px-5 py-2 rounded border-gray-300 cursor-pointer block mx-auto hover:bg-blue-600 hover:text-white"
        />
        <button type="submit" className="block mx-auto bg-blue-600 text-white px-4 py-2 duration-300 hover:px-9 rounded-md hover:bg-red-500 cursor-pointer">
          Upload
        </button>
              {uploadedUrl && (
        <div className="mt-4">
          <p>Uploaded Image:</p>
          <img src={uploadedUrl} alt="Uploaded" className="max-w-full rounded" />
          <Link to="/gallery" className='my-5 mx-auto block w-fit bg-blue-600 text-white px-4 py-2 duration-300 hover:px-9 rounded-md hover:bg-red-500 cursor-pointer'>Go to gallery  <i className='fa-solid fa-arrow-right'></i></Link>
        </div>
      )}
      </form>
      </div>
  );
}

export default ImageUpload;
