import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

const Services = () => {
  return (
    <div className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Services Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            {/* Title */}
            <div className="lg:col-span-1">
              <p className="text-sm font-semibold text-pink-600 uppercase tracking-wide mb-2">Services</p>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Top Value Categories For You
              </h2>
            </div>
            
            {/* Service Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Best Tour Guide */}
              <div className="text-center p-6 hover:shadow-md rounded-xl transition">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Best Tour Guide</h3>
                <p className="text-gray-600">Explore your destination with experienced guides.</p>
              </div>

              {/* Easy Booking */}
              <div className="text-center p-6 hover:shadow-md rounded-xl transition">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Booking</h3>
                <p className="text-gray-600">Book your trip in just a few clicks with ease.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Top Destination Section */}
        <div>
          {/* Header Row */}
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <p className="text-sm font-semibold text-pink-600 uppercase tracking-wide mb-2">Top Destination</p>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Explore Top Destinations
              </h2>
            </div>
            
            <div className="flex space-x-2">
              <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition" aria-label="Previous">
                ←
              </button>
              <button className="p-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition" aria-label="Next">
                →
              </button>
            </div>
          </div>

          {/* Destination Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: "https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg",
                title: "Egypt",
              },
              {
                image: "https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg",
                title: "Paris",
              },
              {
                image: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=400",
                title: "Fort Mayers",
              },
            ].map((destination, index) => (
              <div
                key={index}
                className="group cursor-pointer overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition"
              >
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4 text-center bg-white">
                  <h3 className="text-lg font-semibold text-gray-900">{destination.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
