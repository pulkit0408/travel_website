import React from "react";
import { Menu, X } from "lucide-react";

const Header = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <header className="bg-gradient-to-r from-pink-100 to-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center lg:flex-1">
          <a href="#" className="flex items-center space-x-2">
            <img
              src="/assets/images/logo.png" // replace with actual path to your logo image
              alt="Travlog Logo"
              className="h-8 w-8 object-contain"
            />
            <span className="text-xl font-semibold text-gray-900">Travlog</span>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex lg:gap-x-10">
          <a
            href="#"
            className="text-sm font-medium text-gray-900 hover:text-purple-600"
          >
            Home
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-900 hover:text-purple-600"
          >
            Discover
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-900 hover:text-purple-600"
          >
            Deals
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-900 hover:text-purple-600"
          >
            Contact
          </a>
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center space-x-4">
          <a
            href="#"
            className="text-sm font-medium text-gray-900 hover:text-purple-600"
          >
            Sign Up
          </a>
          <a
            href="#"
            className="rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-purple-700"
          >
            Login
          </a>
        </div>
      </nav>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white px-6 py-6">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center space-x-2">
              <img
                src="/logo.png" // same here, update with actual logo path
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
            <a
              href="#"
              className="block text-base font-medium text-gray-900 hover:text-purple-600"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-base font-medium text-gray-900 hover:text-purple-600"
            >
              Discover
            </a>
            <a
              href="#"
              className="block text-base font-medium text-gray-900 hover:text-purple-600"
            >
              Deals
            </a>
            <a
              href="#"
              className="block text-base font-medium text-gray-900 hover:text-purple-600"
            >
              Contact
            </a>
            <a
              href="#"
              className="block text-base font-medium text-gray-900 hover:text-purple-600"
            >
              Sign Up
            </a>
            <a
              href="#"
              className="inline-block rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-700"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
