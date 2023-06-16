import React from 'react';
import { Helmet } from 'react-helmet';
import BottomNavBar from '../components/BottomNavBar/BottomNavBar';
import { Scrollbars } from 'react-custom-scrollbars-2';


const image1 = require('../assets/images1.png');
const image2 = require('../assets/images2.png');
const image3 = require('../assets/images3.png');
const image4 = require('../assets/images4.png');

const DashboardPage = () => {
  const recommendedItems = [
    { image: image1, text: 'Item 1' },
    { image: image2, text: 'Item 2' },
    { image: image3, text: 'Item 3' },
    { image: image4, text: 'Item 4' },
  ];

  return (
        <div className="min-h-screen p-4">
          <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Helmet>
          
          {/* desktop view */}
          <nav className="fixed top-0 z-10 w-full bg-white">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex-shrink-0">
                  <span className="text-3xl">
                    Hello, <span className="text-blue-400">Yusuf!</span>
                  </span>
                </div>
                <div className="hidden md:block">
                  <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                    Home
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* mobile view */}
          <BottomNavBar />
          
          <div className="flex items-center justify-between p-6 mt-5 mb-4 bg-yellow-300 rounded promo-box">
            <span className="text-lg">
              FIND YOUR FAVORITE RECIPE
            </span>
            <i className="text-2xl fas fa-gift"></i>
          </div>

          <div className="mt-20 mb-20">
            <h2 className="mb-4 text-2xl font-bold">Recommended For You</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {recommendedItems.map((item) => (
                <div key={item.text} className="flex flex-col items-center">
                  <img src={item.image} alt={item.text} className="w-full mb-2 rounded" />
                  <span className="mb-2 text-lg font-medium">{item.text}</span>
                  <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
          <footer>{/* Footer icons */}</footer>
        </div>
  );
};

export default DashboardPage;
