import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => {
  return (
    <nav className="container mt-10">
      <div className="flex justify-between mb-4 content-center mx-2">
        <Link className="h-full w-5" to="/">
          <Logo />
        </Link>
        <div className="w-80 h-full flex items-center justify-end uppercase">
          <Link to="/" className="p-3 cursor-pointer hover:text-blue-400">
            Home
          </Link>
          <Link to="/shop" className="p-3 cursor-pointer hover:text-blue-400">
            Shop
          </Link>
          <Link to="/" className="p-3 cursor-pointer hover:text-blue-400">
            Contact
          </Link>
          <Link to="/" className="p-3 cursor-pointer hover:text-blue-400">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
