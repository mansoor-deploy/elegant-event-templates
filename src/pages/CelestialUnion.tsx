
import React, { useEffect, useState } from "react";
import CountdownTimer from "@/components/CountdownTimer";
import GallerySection, { GalleryImage } from "@/components/GallerySection";
import RsvpForm from "@/components/RsvpForm";
import { Film } from "lucide-react";

const CelestialUnion = () => {
  const [showPage, setShowPage] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  
  useEffect(() => {
    // Delayed animation for page entrance
    const timer = setTimeout(() => {
      setShowPage(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Toggle video modal
  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  // Set engagement date (6 months from now)
  const engagementDate = new Date();
  engagementDate.setMonth(engagementDate.getMonth() + 6);

  // Sample gallery images for celestial theme
  const galleryImages: GalleryImage[] = [
    { 
      src: "https://images.unsplash.com/photo-1540198163009-7afda7da2945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Starry night", 
      caption: "Under the stars" 
    },
    { 
      src: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Northern lights", 
      caption: "Aurora dreams" 
    },
    { 
      src: "https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Constellations", 
      caption: "Cosmic connection" 
    },
    { 
      src: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Space", 
      caption: "Infinite journey" 
    },
    { 
      src: "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Moon", 
      caption: "Lunar love" 
    },
    { 
      src: "https://images.unsplash.com/photo-1532981434728-a2706e808d74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Galaxy", 
      caption: "Galactic romance" 
    },
  ];

  return (
    <div className={`relative min-h-screen bg-celestial-navy overflow-x-hidden ${showPage ? 'page-transition show' : 'page-transition'}`}>
      {/* Celestial background effects */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-celestial-navy/80 via-celestial-navy/40 to-celestial-navy/90"></div>
      
      {/* Floating stars */}
      {Array.from({ length: 50 }).map((_, index) => (
        <div
          key={index}
          className="absolute w-1 h-1 bg-white rounded-full opacity-80 animate-twinkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${2 + Math.random() * 3}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
      
      {/* Video button */}
      <button 
        onClick={toggleVideo}
        className="fixed bottom-6 left-6 z-50 bg-celestial-purple text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:shadow-lg hover:bg-celestial-purple/80 transition-all duration-300"
        aria-label="Play couple's message"
      >
        <Film size={20} />
      </button>
      
      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-6">
          <div className="bg-celestial-navy/90 border border-celestial-purple/30 backdrop-blur-md rounded-lg p-6 max-w-3xl w-full celestial-glow">
            <h3 className="celestial-heading text-2xl text-white mb-4 text-center">Our Cosmic Message</h3>
            
            <div className="relative w-full rounded-lg overflow-hidden aspect-video mb-6">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="A message from the couple"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="text-center">
              <button 
                onClick={toggleVideo}
                className="celestial-button"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full p-6 flex justify-center items-center z-10">
        <div className="flex space-x-6 text-white">
          <a href="#story" className="hover:text-celestial-purple transition-colors duration-300">Our Journey</a>
          <a href="#gallery" className="hover:text-celestial-purple transition-colors duration-300">Gallery</a>
          <a href="#rsvp" className="hover:text-celestial-purple transition-colors duration-300">RSVP</a>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20 px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-10 opacity-30 bg-gradient-radial from-celestial-purple/30 via-transparent to-transparent blur-xl"></div>
          <div className="absolute -inset-10 opacity-20 bg-gradient-radial from-celestial-blue/30 via-transparent to-transparent blur-xl" style={{ top: '30%', left: '60%' }}></div>
        </div>
        
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-block mb-6 animate-fade-in">
            <div className="flex justify-center">
              <div className="w-20 h-20 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-celestial-blue to-celestial-purple rounded-full animate-pulse-glow blur-md"></div>
                <div className="absolute inset-2 bg-gradient-to-r from-celestial-blue to-celestial-purple rounded-full opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-xl">✨</span>
                </div>
              </div>
            </div>
            <p className="celestial-subheading text-white mt-4">You are invited to celebrate</p>
          </div>
          
          <h1 className="celestial-heading text-5xl md:text-7xl text-white mb-8 animate-fade-in [animation-delay:300ms] text-shadow-lg">
            Nova & Orion
          </h1>
          
          <p className="celestial-body text-white text-xl mb-10 animate-fade-in [animation-delay:600ms]">
            as the stars align for our cosmic engagement
          </p>
          
          <div className="space-y-8 animate-fade-in [animation-delay:900ms]">
            <p className="celestial-subheading text-white text-xl">JANUARY 21, 2024</p>
            <p className="celestial-body text-white text-lg">THE OBSERVATORY, STELLAR HEIGHTS</p>
            
            <div className="flex justify-center">
              <a href="#rsvp" className="celestial-button">
                JOIN OUR ORBIT
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Countdown Section */}
      <section className="py-20 px-6 celestial-glow">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="celestial-heading text-3xl text-white mb-12">Countdown to Liftoff</h2>
          <CountdownTimer targetDate={engagementDate} variant="celestial" />
        </div>
      </section>
      
      {/* Our Journey Section */}
      <section id="story" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="celestial-heading text-3xl md:text-4xl text-white">Our Cosmic Journey</h2>
            <div className="h-0.5 w-24 bg-gradient-to-r from-celestial-blue to-celestial-purple mx-auto mt-4"></div>
          </div>
          
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="animate-fade-in-left">
                <div className="relative">
                  <div className="absolute inset-0 border border-celestial-purple/30 rounded-lg transform translate-x-4 translate-y-4"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Galaxy" 
                    className="w-full h-auto rounded-lg relative z-10 shadow-lg"
                  />
                </div>
              </div>
              
              <div className="celestial-card animate-fade-in-right">
                <h3 className="celestial-subheading text-celestial-purple mb-4">FIRST ENCOUNTER</h3>
                <p className="celestial-body text-white">
                  In the vast expanse of the universe, our paths crossed at the International Astronomy Convention. 
                  Nova was presenting her research on exoplanets, while Orion was showcasing his latest photographs 
                  of distant nebulae. A chance conversation about the Andromeda galaxy sparked a connection that 
                  transcended space and time.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="celestial-card animate-fade-in-left order-2 md:order-1">
                <h3 className="celestial-subheading text-celestial-purple mb-4">GRAVITY'S PULL</h3>
                <p className="celestial-body text-white">
                  Like celestial bodies drawn together by gravitational force, we found ourselves orbiting 
                  each other's lives. Weekend stargazing dates turned into deep conversations about the 
                  mysteries of the cosmos and our place within it. With each passing day, the invisible 
                  force between us grew stronger.
                </p>
              </div>
              
              <div className="animate-fade-in-right order-1 md:order-2">
                <div className="relative">
                  <div className="absolute inset-0 border border-celestial-purple/30 rounded-lg transform -translate-x-4 translate-y-4"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Constellation" 
                    className="w-full h-auto rounded-lg relative z-10 shadow-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="animate-fade-in-left">
                <div className="relative">
                  <div className="absolute inset-0 border border-celestial-purple/30 rounded-lg transform translate-x-4 -translate-y-4"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Northern lights" 
                    className="w-full h-auto rounded-lg relative z-10 shadow-lg"
                  />
                </div>
              </div>
              
              <div className="celestial-card animate-fade-in-right">
                <h3 className="celestial-subheading text-celestial-purple mb-4">COSMIC PROPOSAL</h3>
                <p className="celestial-body text-white">
                  Under the dancing lights of the aurora borealis in Iceland, Orion knelt before Nova with 
                  a ring inspired by Saturn's bands. As the green and purple lights painted the sky above, 
                  he asked her to embark on their greatest adventure yet—a lifetime together exploring the 
                  wonders of the universe as one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6 celestial-glow">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="celestial-heading text-3xl md:text-4xl text-white">Celestial Moments</h2>
            <div className="h-0.5 w-24 bg-gradient-to-r from-celestial-blue to-celestial-purple mx-auto mt-4"></div>
            <p className="celestial-body text-white mt-4 max-w-2xl mx-auto">
              Capturing the light of our journey across the cosmos.
            </p>
          </div>
          
          <GallerySection images={galleryImages} variant="celestial" />
        </div>
      </section>
      
      {/* Event Details Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="celestial-heading text-3xl md:text-4xl text-white">Event Details</h2>
            <div className="h-0.5 w-24 bg-gradient-to-r from-celestial-blue to-celestial-purple mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="celestial-card animate-fade-in">
              <h3 className="celestial-subheading text-celestial-purple mb-4">THE CEREMONY</h3>
              <div className="space-y-4">
                <p className="celestial-body text-white">
                  <span className="text-celestial-purple">Date:</span> January 21, 2024
                </p>
                <p className="celestial-body text-white">
                  <span className="text-celestial-purple">Time:</span> 7:00 PM
                </p>
                <p className="celestial-body text-white">
                  <span className="text-celestial-purple">Venue:</span> The Observatory
                </p>
                <p className="celestial-body text-white">
                  <span className="text-celestial-purple">Address:</span> 1234 Stellar Heights, Galaxy View
                </p>
              </div>
            </div>
            
            <div className="celestial-card animate-fade-in [animation-delay:300ms]">
              <h3 className="celestial-subheading text-celestial-purple mb-4">THE CELEBRATION</h3>
              <div className="space-y-4">
                <p className="celestial-body text-white">
                  <span className="text-celestial-purple">Reception:</span> Immediately following in the Nebula Ballroom
                </p>
                <p className="celestial-body text-white">
                  <span className="text-celestial-purple">Details:</span> Dinner and celebration
                </p>
                <p className="celestial-body text-white">
                  <span className="text-celestial-purple">Activities:</span> Telescope viewing
                </p>
                <p className="celestial-body text-white">
                  <span className="text-celestial-purple">Note:</span> Please RSVP by December 21
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* RSVP Section */}
      <section id="rsvp" className="py-20 px-6">
        <div className="max-w-xl mx-auto">
          <RsvpForm variant="celestial" />
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 px-6 bg-gradient-to-t from-celestial-blue/30 to-transparent text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="celestial-heading text-2xl mb-4">Nova & Orion</h2>
          <p className="celestial-body text-white mb-4">
            "Two stars, one constellation, forever aligned"
          </p>
          <div className="h-0.5 w-16 bg-celestial-purple/50 mx-auto"></div>
        </div>
      </footer>

      {/* Add styles for celestial theme */}
      <style>
        {`
        .celestial-card {
          @apply bg-celestial-navy/70 backdrop-blur-sm border border-celestial-purple/30 rounded-lg p-6 shadow-lg;
        }
        
        .celestial-button {
          @apply px-6 py-3 bg-gradient-to-r from-celestial-blue to-celestial-purple text-white rounded-full hover:shadow-lg hover:brightness-110 transition-all duration-300;
        }
        
        .celestial-glow {
          position: relative;
        }
        
        .celestial-glow::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(155, 135, 245, 0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        
        .text-shadow-lg {
          text-shadow: 0 0 20px rgba(155, 135, 245, 0.8);
        }
        `}
      </style>
    </div>
  );
};

export default CelestialUnion;
