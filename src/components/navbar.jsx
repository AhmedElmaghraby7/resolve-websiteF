import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
function Navbar() {
  const [menu, setMenu] = useState(false);
  const linkClass = `duration-300 hover:scale-125`;

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md relative">
      <div className="container mx-auto flex justify-between items-center ">
        <h1 className="text-2xl font-bold">Resolve</h1>
        <nav>
          <AnimatePresence>
          <motion.ul
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5,}}
            className={`${
              menu ? "flex absolute top-7.5 bg-blue-600 p-5 w-full left-0 items-center" : "hidden"
            } md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0`}
          >
            <li className={linkClass}><Link onClick={() => setMenu(false)} to="/">Home</Link></li>
            <li className={linkClass}><Link onClick={() => setMenu(false)} to="/about">About</Link></li>
            <li className={linkClass}><Link onClick={() => setMenu(false)} to="/products">Products</Link></li>
            <li className={linkClass}><Link onClick={() => setMenu(false)} to="/uploadImage">Upload</Link></li>
            <li className={linkClass}><Link onClick={() => setMenu(false)} to="/gallery">Gallery</Link></li>
            <li className={linkClass}><Link onClick={() => setMenu(false)} to="/privacy">Privacy</Link></li>
          </motion.ul>
          </AnimatePresence>
                  <button
          className="md:hidden px-3 py-1 rounded "
          onClick={() => setMenu(!menu)}
        >
          ☰
        </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
