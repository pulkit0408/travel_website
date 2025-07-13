import React from 'react';
import { Mail, Linkedin, Instagram, Twitter } from 'lucide-react';

const Newsletter = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-100 to-yellow-200">
      {/* Newsletter Section */}
      <div className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-orange-600 uppercase tracking-wide mb-4">
            Subscribe to our newsletter
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
            Prepare yourself & let's explore the world
          </h2>

          {/* Email input */}
          <form className="max-w-md mx-auto">
            <div className="flex items-center bg-white rounded-full p-2 shadow-sm border border-gray-200">
              <Mail className="h-5 w-5 text-gray-400 ml-3" />
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-4 py-2 text-gray-900 placeholder-gray-500 bg-transparent border-0 focus:outline-none focus:ring-0"
                required
              />
              <button
                type="submit"
                className="text-sm bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <div className="border-t border-yellow-300 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-6">
              <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-gray-900">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Email" className="text-gray-600 hover:text-gray-900">
                <Mail className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-gray-900">
                <Twitter className="h-6 w-6" />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-500">
              © Krishna Jaiswal 2025. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
