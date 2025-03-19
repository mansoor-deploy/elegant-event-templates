
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 animate-fade-in">
          Elegant Engagement Themes
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 animate-fade-in [animation-delay:300ms]">
          Choose from our premium collection of engagement website templates, each crafted with exquisite 
          attention to detail and sophisticated design elements.
        </p>
      </header>

      <div className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link 
          to="/luxe-embrace"
          className="group relative h-[400px] overflow-hidden rounded-lg shadow-lg animate-fade-in [animation-delay:450ms]"
        >
          <div className="absolute inset-0 bg-luxe-burgundy transition-transform duration-700 group-hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="h-full w-full flex flex-col justify-end p-8">
              <div className="bg-luxe-gold h-0.5 w-16 mb-4 transform origin-left transition-all duration-500 group-hover:w-32"></div>
              <h2 className="text-3xl font-bold text-white luxe-heading">Luxe Embrace</h2>
              <p className="text-white/80 mt-2 max-w-md luxe-body">Opulent & Regal Celebration with gold accents and premium details</p>
              <div className="mt-6 inline-block">
                <span className="py-2 px-6 border border-white/40 text-white uppercase tracking-wider text-sm transition-all duration-300 group-hover:bg-white/10">
                  View Template
                </span>
              </div>
            </div>
          </div>
        </Link>
        
        <Link 
          to="/vintage-affair"
          className="group relative h-[400px] overflow-hidden rounded-lg shadow-lg animate-fade-in [animation-delay:600ms]"
        >
          <div className="absolute inset-0 bg-vintage-sepia transition-transform duration-700 group-hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="h-full w-full flex flex-col justify-end p-8">
              <div className="bg-vintage-cream h-0.5 w-16 mb-4 transform origin-left transition-all duration-500 group-hover:w-32"></div>
              <h2 className="text-3xl font-bold text-white vintage-heading">Vintage Affair</h2>
              <p className="text-white/80 mt-2 max-w-md vintage-body">Nostalgic Romance with retro aesthetics and timeless charm</p>
              <div className="mt-6 inline-block">
                <span className="py-2 px-6 border border-white/40 text-white uppercase tracking-wider text-sm transition-all duration-300 group-hover:bg-white/10">
                  View Template
                </span>
              </div>
            </div>
          </div>
        </Link>
        
        <Link 
          to="/celestial-union"
          className="group relative h-[400px] overflow-hidden rounded-lg shadow-lg animate-fade-in [animation-delay:750ms]"
        >
          <div className="absolute inset-0 bg-celestial-navy transition-transform duration-700 group-hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="h-full w-full flex flex-col justify-end p-8">
              <div className="bg-celestial-purple h-0.5 w-16 mb-4 transform origin-left transition-all duration-500 group-hover:w-32"></div>
              <h2 className="text-3xl font-bold text-white celestial-heading">Celestial Union</h2>
              <p className="text-white/80 mt-2 max-w-md celestial-body">Futuristic & Ethereal Bond with cosmic elements and modern design</p>
              <div className="mt-6 inline-block">
                <span className="py-2 px-6 border border-white/40 text-white uppercase tracking-wider text-sm transition-all duration-300 group-hover:bg-white/10">
                  View Template
                </span>
              </div>
            </div>
          </div>
        </Link>
        
        <Link 
          to="/mystic-whisper"
          className="group relative h-[400px] overflow-hidden rounded-lg shadow-lg animate-fade-in [animation-delay:900ms]"
        >
          <div className="absolute inset-0 bg-mystic-purple transition-transform duration-700 group-hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="h-full w-full flex flex-col justify-end p-8">
              <div className="bg-mystic-silver h-0.5 w-16 mb-4 transform origin-left transition-all duration-500 group-hover:w-32"></div>
              <h2 className="text-3xl font-bold text-white mystic-heading">Mystic Whisper</h2>
              <p className="text-white/80 mt-2 max-w-md mystic-body">Ethereal & Enigmatic Romance with magical elements and dreamy aesthetics</p>
              <div className="mt-6 inline-block">
                <span className="py-2 px-6 border border-white/40 text-white uppercase tracking-wider text-sm transition-all duration-300 group-hover:bg-white/10">
                  View Template
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
