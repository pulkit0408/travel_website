import React from 'react';

const TravelPoint = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-yellow-100 to-orange-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Image + Decorations */}
          <div className="relative">
            {/* Yellow background circle */}
            <div className="absolute inset-0 w-96 h-96 bg-yellow-400 rounded-full -z-10 transform -translate-x-8 translate-y-8"></div>

            {/* Decorative circles */}
            <div className="absolute top-16 left-16 w-16 h-16 bg-purple-500 rounded-full"></div>
            <div className="absolute bottom-20 left-8 w-8 h-8 bg-purple-400 rounded-full"></div>
            <div className="absolute top-32 right-8 w-12 h-12 bg-yellow-300 rounded-full"></div>

            {/* Main Image */}
            <img
              src="https://images.pexels.com/photos/8147399/pexels-photo-8147399.jpeg"
              alt="Woman with luggage"
              className="relative w-full max-w-sm mx-auto rounded-3xl z-10"
            />

            {/* Floating badge */}
            <div className="absolute top-8 right-8 bg-white rounded-full px-4 py-2 shadow-lg z-20">
              <div className="flex items-center">
                <span className="text-orange-500 mr-2">🔥</span>
                <span className="text-sm font-semibold text-gray-900">Discounted Price</span>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <p className="text-sm font-semibold text-pink-600 uppercase tracking-wide mb-4">Travel Point</p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Our Top Value Categories For You
            </h2>
            <p className="text-gray-600 mb-8">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '500', label: 'Holiday Packages' },
                { number: '100', label: 'Luxury Hotel' },
                { number: '7', label: 'Premium Airlines' },
                { number: '2k+', label: 'Happy Customers' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
                >
                  <div className="text-2xl font-bold text-orange-500 mb-1">{item.number}</div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TravelPoint;
