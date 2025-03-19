
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CountdownTimer from "@/components/CountdownTimer";
import GallerySection, { GalleryImage } from "@/components/GallerySection";
import RsvpForm from "@/components/RsvpForm";

const CelestialUnion = () => {
  const [showPage, setShowPage] = useState(false);
  
  useEffect(() => {
    // Delayed animation for page entrance
    const timer = setTimeout(() => {
      setShowPage(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Set engagement date (6 months from now)
  const engagementDate = new Date();
  engagementDate.setMonth(engagementDate.getMonth() + 6);

  // Sample gallery images
  const galleryImages: GalleryImage[] = [
    { 
      src: "https://images.unsplash.com/photo-1532970936611-5e9a6b0429f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Starry night", 
      caption: "Under the stars" 
    },
    { 
      src: "https://images.unsplash.com/photo-1548509925-0d51b5177572?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Galaxy", 
      caption: "Our universe" 
    },
    { 
      src: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Moonlight", 
      caption: "Moonlit proposal" 
    },
    { 
      src: "https://images.unsplash.com/photo-1515513284007-89a2fb0a2a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Northern lights", 
      caption: "Aurora adventure" 
    },
    { 
      src: "https://images.unsplash.com/photo-1479267658415-ff274a213280?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Cosmos", 
      caption: "Celestial celebration" 
    },
    { 
      src: "https://images.unsplash.com/photo-1596818531679-96bb2687f4d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Comet", 
      caption: "Cosmic connection" 
    },
  ];

  return (
    <div className={`relative min-h-screen bg-celestial-navy ${showPage ? 'page-transition show' : 'page-transition'}`}>
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-30"></div>
        
        {/* Star particles */}
        {Array.from({ length: 50 }).map((_, index) => (
          <div
            key={index}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-celestial-purple/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/3 w-60 h-60 bg-celestial-blue/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-10 bg-celestial-navy/30 backdrop-blur-sm">
        <div>
          <Link to="/" className="text-white hover:text-celestial-purple transition-colors duration-300">
            ← Back to Templates
          </Link>
        </div>
        <div className="flex space-x-6 text-white">
          <a href="#story" className="hover:text-celestial-purple transition-colors duration-300">Our Journey</a>
          <a href="#gallery" className="hover:text-celestial-purple transition-colors duration-300">Gallery</a>
          <a href="#rsvp" className="hover:text-celestial-purple transition-colors duration-300">RSVP</a>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-6">
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-block mb-8 animate-fade-in">
            <div className="h-0.5 w-20 bg-celestial-purple mx-auto"></div>
            <p className="celestial-subheading text-white mt-3">CELESTIAL UNION</p>
          </div>
          
          <h1 className="celestial-heading text-5xl md:text-7xl text-white mb-8 animate-fade-in [animation-delay:300ms]">
            Nova & Orion
          </h1>
          
          <p className="celestial-body text-white/90 text-xl mb-10 animate-fade-in [animation-delay:600ms]">
            Two stars aligned across the cosmos, destined to celebrate their celestial engagement
          </p>
          
          <div className="space-y-4 animate-fade-in [animation-delay:900ms]">
            <p className="celestial-body text-white text-xl">JANUARY 21, 2024</p>
            <p className="celestial-body text-white text-lg mb-8">PLANETARY OBSERVATORY, SUMMIT PEAK</p>
            <a href="#rsvp" className="celestial-button inline-block">
              JOIN OUR CELESTIAL CELEBRATION
            </a>
          </div>
        </div>
        
        {/* Floating orb decoration */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-60 h-60">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 rounded-full border border-white/20 animate-rotate-slow"></div>
            <div className="absolute inset-2 rounded-full border border-white/15 animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>
            <div className="absolute inset-4 rounded-full border border-white/10 animate-rotate-slow" style={{ animationDuration: '30s' }}></div>
          </div>
        </div>
      </section>
      
      {/* Countdown Section */}
      <section className="py-20 px-6 celestial-glow">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="celestial-heading text-3xl text-white mb-12">Cosmic Countdown</h2>
          <CountdownTimer targetDate={engagementDate} variant="celestial" />
        </div>
      </section>
      
      {/* Our Journey Section */}
      <section id="story" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="h-0.5 w-20 bg-celestial-purple mx-auto mb-3"></div>
            <h2 className="celestial-heading text-3xl md:text-4xl text-white">Our Cosmic Journey</h2>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-celestial-blue via-celestial-purple to-celestial-lightblue"></div>
            
            {/* Timeline items */}
            <div className="space-y-20">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-celestial-purple rounded-full"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12 animate-fade-in-left">
                    <h3 className="celestial-heading text-2xl text-white mb-4">First Encounter</h3>
                    <p className="celestial-body text-white/80">
                      We met at the International Space Conference, both presenting our research 
                      on exoplanetary atmospheres. Our theories complemented each other perfectly, 
                      much like our personalities.
                    </p>
                  </div>
                  <div className="celestial-card animate-fade-in-right md:mt-10">
                    <p className="celestial-subheading text-sm text-celestial-lightblue mb-1">MARCH 15, 2021</p>
                    <p className="celestial-body text-white/90">
                      "The universe conspires to bring together minds that belong in the same orbit."
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-celestial-purple rounded-full"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="celestial-card animate-fade-in-left md:mt-10">
                    <p className="celestial-subheading text-sm text-celestial-lightblue mb-1">AUGUST 23, 2022</p>
                    <p className="celestial-body text-white/90">
                      "Two souls, like binary stars, forever bound by an invisible force."
                    </p>
                  </div>
                  <div className="md:pl-12 animate-fade-in-right">
                    <h3 className="celestial-heading text-2xl text-white mb-4">Gravity Bound</h3>
                    <p className="celestial-body text-white/80">
                      After a year of research collaborations that took us from observatories 
                      in Chile to space centers in Japan, we realized our connection transcended 
                      professional admiration. Under a meteor shower in New Zealand, we shared our first kiss.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-celestial-purple rounded-full"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12 animate-fade-in-left">
                    <h3 className="celestial-heading text-2xl text-white mb-4">Stellar Proposal</h3>
                    <p className="celestial-body text-white/80">
                      During the rare alignment of Jupiter and Saturn, Orion arranged a private viewing 
                      at the Planetary Observatory. As the celestial bodies converged, he presented Nova 
                      with a ring containing a fragment of a meteorite—a piece of the cosmos to symbolize 
                      their cosmic bond.
                    </p>
                  </div>
                  <div className="celestial-card animate-fade-in-right md:mt-10">
                    <p className="celestial-subheading text-sm text-celestial-lightblue mb-1">NOVEMBER 18, 2023</p>
                    <p className="celestial-body text-white/90">
                      "In all the vastness of space and the infinity of time, finding you was the greatest improbability."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6 celestial-glow">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="h-0.5 w-20 bg-celestial-purple mx-auto mb-3"></div>
            <h2 className="celestial-heading text-3xl md:text-4xl text-white">Astral Memories</h2>
            <p className="celestial-body text-white/80 mt-4 max-w-2xl mx-auto">
              Captured moments from our journey across the cosmos.
            </p>
          </div>
          
          <GallerySection images={galleryImages} variant="celestial" />
        </div>
      </section>
      
      {/* Event Details Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="h-0.5 w-20 bg-celestial-purple mx-auto mb-3"></div>
            <h2 className="celestial-heading text-3xl md:text-4xl text-white">Event Coordinates</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="celestial-card animate-fade-in">
              <h3 className="celestial-heading text-2xl text-white mb-4">Time & Space</h3>
              <div className="space-y-4">
                <p className="celestial-body text-white/90">
                  <span className="text-celestial-lightblue">Date:</span> January 21, 2024
                </p>
                <p className="celestial-body text-white/90">
                  <span className="text-celestial-lightblue">Time:</span> 7:00 PM - Cosmic Alignment
                </p>
                <p className="celestial-body text-white/90">
                  <span className="text-celestial-lightblue">Venue:</span> Planetary Observatory
                </p>
                <p className="celestial-body text-white/90">
                  <span className="text-celestial-lightblue">Location:</span> Summit Peak, 123 Stellar Way
                </p>
              </div>
            </div>
            
            <div className="celestial-card animate-fade-in [animation-delay:300ms]">
              <h3 className="celestial-heading text-2xl text-white mb-4">Celestial Notes</h3>
              <div className="space-y-4">
                <p className="celestial-body text-white/90">
                  <span className="text-celestial-lightblue">Attire:</span> Cosmic Elegant (Celestial blues, purples, and silver encouraged)
                </p>
                <p className="celestial-body text-white/90">
                  <span className="text-celestial-lightblue">Experience:</span> Interactive stargazing and a holographic celestial display
                </p>
                <p className="celestial-body text-white/90">
                  <span className="text-celestial-lightblue">Atmosphere:</span> Temperature-controlled dome with panoramic sky views
                </p>
                <p className="celestial-body text-white/90">
                  <span className="text-celestial-lightblue">Transport:</span> Shuttle service available from Downtown Stellar Station
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* RSVP Section */}
      <section id="rsvp" className="py-20 px-6 celestial-glow">
        <div className="max-w-xl mx-auto">
          <RsvpForm variant="celestial" />
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 px-6 bg-celestial-blue/20 text-white text-center backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <p className="celestial-heading mb-2">NOVA & ORION</p>
          <p className="celestial-body text-white/80 mb-4">
            "In all the vast cosmos, we found each other. Join us as we celebrate this celestial union."
          </p>
          <div className="h-0.5 w-16 bg-celestial-purple mx-auto"></div>
        </div>
      </footer>
    </div>
  );
};

export default CelestialUnion;
