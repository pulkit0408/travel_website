import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-pink-600 uppercase tracking-wide mb-4">Testimonials</p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trust Our Clients
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
            
            {/* Avatar */}
            <div className="flex items-center justify-center mb-4">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
                alt="Client avatar"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            
            {/* Star Rating */}
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            {/* Client Info */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Arifin Mera Sathi</h3>
            <p className="text-gray-600 text-sm mb-4">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature.
            </p>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center space-x-2 mt-4">
              <span className="w-2 h-2 bg-pink-500 rounded-full" aria-label="Current testimonial"></span>
              <span className="w-2 h-2 bg-gray-300 rounded-full" aria-label="Next testimonial"></span>
              <span className="w-2 h-2 bg-gray-300 rounded-full" aria-label="Another testimonial"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
