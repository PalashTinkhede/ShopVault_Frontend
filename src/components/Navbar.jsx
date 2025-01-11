import  React ,{ useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AppContext from "../context/AppContext";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState(" ");
  const navigate = useNavigate();
  const location = useLocation();

  const { setFilteredData, products, logout, isAuthenticated, cart } =
    useContext(AppContext);
  // console.log("user cart = ",cart)

  const filterbyCategory = (cat) => {
    setFilteredData(
      products.filter(
        (data) => data.category.toLowerCase() == cat.toLowerCase()
      )
    );
  };
  const filterbyPrice = (price) => {
    setFilteredData(products.filter((data) => data.price <= price));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/product/search/${searchTerm}`);
    setSearchTerm(" ");
  };
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="text-3xl font-bold text-blue-500">◎</div>
         <Link to={"/"}> <h1 className="text-xl font-semibold">ShopVault</h1></Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="/products" className="hover:text-blue-400 text-gray-300 text-lg">Products</a>
          <a href="#about" className="hover:text-blue-400 text-gray-300 text-lg">About</a>
          <a href="#blog" className="hover:text-blue-400 text-gray-300 text-lg">Blog</a>
          { isAuthenticated && 

          <a href="/cart" className="hover:text-blue-400 text-gray-300 text-lg">cart({    
        cart?.items?.length > 0 && (                     cart?.items?.length
          )})</a>
        }

        </nav>

        {/* Call to Action Button */}
        <div className="hidden md:flex"> 
        { isAuthenticated && <Link to={"/login"}><button className="px-4 py-2 bg-red-600 rounded-full hover:bg-blue-700" onClick={logout}>
            Logout
          </button></Link>

        }
        { !isAuthenticated && <Link to={"/login"}><button className="px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-700">
            Login
          </button></Link>

        }
         
         
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ">
          <button className="text-gray-300 focus:outline-none">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
