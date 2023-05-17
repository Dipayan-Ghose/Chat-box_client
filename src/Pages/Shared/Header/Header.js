/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../../Components/Auth/Auth";
import { toast } from "react-hot-toast";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {user, providerLogout} = useContext(authContext);
  const clickLogout = () => {
    toast.success("Sign Out Successfully", {
      position: "bottom-center",
      autoClose: 1000,
    });
    providerLogout()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <nav className="bg-green-400">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="" className="text-2xl font-bold text-red-600">
                <Link to="/">
                  {" "}
                  Chat <span className="text-orange-500">Box</span>
                </Link>
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href=""
                  className="px-3 py-2 rounded-md text-xl font-medium text-green-800 hover:bg-green-400 hover:text-white"
                >
                  <Link to="/">Home</Link>
                </a>
                <a
                  href=""
                  className="px-3 py-2 rounded-md text-xl font-medium text-green-800 hover:bg-green-400 hover:text-white"
                >
                  <Link to="/media">Media </Link>
                </a>
                <a
                  href=""
                  className="px-3 py-2 rounded-md text-xl font-medium text-green-800 hover:bg-green-400 hover:text-white"
                >
                  <Link to="/message"> Message </Link>
                </a>
                <a
                  href=""
                  className="px-3 py-2 rounded-md text-xl font-medium text-green-800 hover:bg-green-400 hover:text-white"
                >
                  <Link to="/about"> About </Link>
                </a>
                <a
                  href=""
                  className="px-3 py-2 rounded-md text-xl font-medium text-green-800 hover:bg-green-400 hover:text-white"
                >
                  {user? (
                    <Link to="/" onClick={clickLogout}>
                      {" "}
                      Sign Out{" "}
                    </Link>
                  ) : (
                    <Link to="/login"> Sign In </Link>
                  )}
                </a>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-green-800 hover:text-green-800 hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-700"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Menu</span>
                {isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`${isOpen ? "block" : "hidden"} md:hidden`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href=""
              className="block px-3 py-2 rounded-md text-base font-medium text-green-800 hover:bg-green-400 hover:text-white"
            >
              <Link to="/">Home</Link>
            </a>
            <a
              href=""
              className="block px-3 py-2 rounded-md text-base font-medium text-green-800 hover:bg-green-400 hover:text-white"
            >
              <Link to="/media">Media </Link>
            </a>
            <a
              href=""
              className="block px-3 py-2 rounded-md text-base font-medium text-green-800 hover:bg-green-400 hover:text-white"
            >
              <Link to="/message"> Message </Link>
            </a>
            <a
              href=""
              className="block px-3 py-2 rounded-md text-base font-medium text-green-800 hover:bg-green-400 hover:text-white"
            >
              <Link to="/about"> About </Link>
            </a>
            <a
              href=""
              className="px-3 py-2 rounded-md text-xl font-medium text-green-800 hover:bg-green-400 hover:text-white"
            >
              <Link to="/login"> Sign In </Link>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
