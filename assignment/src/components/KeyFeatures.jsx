import React from "react";
import { Award, Calendar, Ticket } from "lucide-react";

const KeyFeatures = () => {
  return (
    <div className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold text-pink-600 uppercase tracking-wide mb-4">
              Key Features
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              We Offer Best Services
            </h2>
            <p className="text-gray-600 mb-8">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in classical Latin literature.
            </p>

            {/* Feature Items */}
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center m-4">
                  <Award className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Top Quality Services
                  </h3>
                  <p className="text-gray-600">
                    We deliver only the best services to our customers.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
                  <Calendar className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Flexible Scheduling
                  </h3>
                  <p className="text-gray-600">
                    Book and manage your trips with ease and flexibility.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                  <Ticket className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Discounted Coupons
                  </h3>
                  <p className="text-gray-600">
                    Get amazing discounts and offers on all bookings.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-[320px] h-[420px] overflow-hidden rounded-[100px] shadow-lg">
            <img
              src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Mountain landscape"
              className="w-full h-full object-cover"
            />

            {/* Small circular image at bottom-right corner */}
            <div className="absolute -bottom-2 -right-2 w-40 h-40 rounded-full border-4 border-white shadow-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Golden temple"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
