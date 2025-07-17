import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic (API call or auth function)
    alert("Login submitted");
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic
    alert("Sign Up submitted");
  };

  return (
    <header className="bg-gradient-to-r from-pink-100 to-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center lg:flex-1">
          <a href="#" className="flex items-center space-x-2">
            <img
              src="/assets/images/logo.png"
              alt="Travlog Logo"
              className="h-8 w-8 object-contain"
            />
            <span className="text-xl font-semibold text-gray-900">Travlog</span>
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-10">
          {["Home", "Discover", "Deals", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-gray-900 hover:text-purple-600"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center space-x-4">
          <button
            onClick={() => setShowSignup(true)}
            className="text-sm font-medium text-gray-900 hover:text-purple-600"
          >
            Sign Up
          </button>
          <button
            onClick={() => setShowLogin(true)}
            className="rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-purple-700"
          >
            Login
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white px-6 py-6">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center space-x-2">
              <img
                src="/assets/images/logo.png"
                alt="Travlog Logo"
                className="h-8 w-8 object-contain"
              />
              <span className="text-xl font-semibold text-gray-900">
                Travlog
              </span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 space-y-4">
            {["Home", "Discover", "Deals", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="block text-base font-medium text-gray-900 hover:text-purple-600"
              >
                {item}
              </a>
            ))}
            <button
              onClick={() => {
                setShowSignup(true);
                setMobileMenuOpen(false);
              }}
              className="block text-base font-medium text-gray-900 hover:text-purple-600"
            >
              Sign Up
            </button>
            <button
              onClick={() => {
                setShowLogin(true);
                setMobileMenuOpen(false);
              }}
              className="inline-block rounded-full hover: bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-700"
            >
              Login
            </button>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Login</h2>
              <button onClick={() => setShowLogin(false)}>
                <X className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <input
                type="email"
                required
                placeholder="Email"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              <input
                type="password"
                required
                placeholder="Password"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Sign Up</h2>
              <button onClick={() => setShowSignup(false)}>
                <X className="h-5 w-5 hover:underline text-gray-600" />
              </button>
            </div>
            <form onSubmit={handleSignupSubmit} className="space-y-4">
              <input
                type="text"
                required
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              <input
                type="email"
                required
                placeholder="Email"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              <input
                type="password"
                required
                placeholder="Password"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
