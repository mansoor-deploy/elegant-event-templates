
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import CountdownTimer from "@/components/CountdownTimer";
import GallerySection, { GalleryImage } from "@/components/GallerySection";
import RsvpForm from "@/components/RsvpForm";

const MysticWhisper = () => {
  const [showPage, setShowPage] = useState(false);
  const [showAudioMessage, setShowAudioMessage] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Delayed animation for page entrance
    const timer = setTimeout(() => {
      setShowPage(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Mouse particle effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
        
        // Create particle
        if (Math.random() > 0.92) {
          const particle = document.createElement('div');
          particle.className = 'absolute w-1 h-1 bg-mystic-lavender/60 rounded-full animate-particle-flow';
          particle.style.left = `${e.clientX}px`;
          particle.style.top = `${e.clientY}px`;
          
          document.body.appendChild(particle);
          
          // Remove particle after animation
          setTimeout(() => {
            particle.remove();
          }, 3000);
        }
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleAudioMessage = () => {
    setShowAudioMessage(!showAudioMessage);
  };

  const playAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Set engagement date (6 months from now)
  const engagementDate = new Date();
  engagementDate.setMonth(engagementDate.getMonth() + 6);

  // Sample gallery images
  const galleryImages: GalleryImage[] = [
    { 
      src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Mystical forest", 
      caption: "Enchanted encounter" 
    },
    { 
      src: "https://images.unsplash.com/photo-1551378933-45dfe4f65ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Magic crystals", 
      caption: "Crystal binding" 
    },
    { 
      src: "https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Moonlit silhouette", 
      caption: "Moonlight dance" 
    },
    { 
      src: "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Starry night", 
      caption: "Whispers of the stars" 
    },
    { 
      src: "https://images.unsplash.com/photo-1501826858180-70a1cb155618?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Misty mountains", 
      caption: "Veiled promises" 
    },
    { 
      src: "https://images.unsplash.com/photo-1606498236504-030a628c0047?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Ethereal butterflies", 
      caption: "Spirits of transformation" 
    },
  ];

  return (
    <div className={`relative min-h-screen bg-mystic-midnight ${showPage ? 'page-transition show' : 'page-transition'}`}>
      {/* Magic cursor follower */}
      <div 
        ref={cursorRef}
        className="fixed w-8 h-8 rounded-full border border-mystic-lavender/30 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
      ></div>
      
      {/* Mystical background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-mystic-midnight via-mystic-purple/20 to-mystic-midnight"></div>
        
        {/* Floating particles */}
        {Array.from({ length: 40 }).map((_, index) => (
          <div
            key={index}
            className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-70 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${6 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Mystical fog/mist elements */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-mystic-purple/10 to-transparent"></div>
      <div className="absolute top-1/3 left-0 w-full h-60 bg-gradient-to-r from-mystic-lavender/5 via-transparent to-mystic-lavender/5 blur-3xl"></div>
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-10 bg-gradient-to-b from-mystic-midnight/80 to-transparent backdrop-blur-sm">
        <div>
          <Link to="/" className="text-white hover:text-mystic-lavender transition-colors duration-300">
            ← Back to Templates
          </Link>
        </div>
        <div className="flex space-x-6 text-white">
          <a href="#story" className="hover:text-mystic-lavender transition-colors duration-300">Our Tale</a>
          <a href="#gallery" className="hover:text-mystic-lavender transition-colors duration-300">Gallery</a>
          <a href="#rsvp" className="hover:text-mystic-lavender transition-colors duration-300">RSVP</a>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-6">
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-block mb-6 animate-fade-in">
            <p className="mystic-subheading text-mystic-lavender">A Mystical Union</p>
          </div>
          
          <h1 className="mystic-heading text-5xl md:text-7xl text-white mb-8 animate-fade-in [animation-delay:300ms]">
            Luna & Artemis
          </h1>
          
          <p className="mystic-body text-white/90 text-xl mb-10 animate-fade-in [animation-delay:600ms]">
            request your presence as they celebrate their enchanted engagement
          </p>
          
          <div className="space-y-4 animate-fade-in [animation-delay:900ms]">
            <p className="mystic-body text-white text-xl">FEBRUARY 14, 2024</p>
            <p className="mystic-body text-white text-lg mb-8">THE ENCHANTED GARDENS, MOONLIGHT VALE</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#rsvp" className="mystic-button">
                SEND YOUR WISHES
              </a>
              <button 
                onClick={toggleAudioMessage}
                className="px-6 py-2 border border-mystic-lavender/50 text-white hover:bg-mystic-lavender/10 transition-all duration-300 rounded-md flex items-center justify-center gap-2"
              >
                <span className="w-3 h-3 bg-mystic-lavender/70 rounded-full animate-pulse"></span>
                HEAR OUR MESSAGE
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Audio Message Modal */}
      {showAudioMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6">
          <div className="bg-mystic-midnight/90 border border-mystic-lavender/30 backdrop-blur-md rounded-lg p-8 max-w-md w-full mystic-glow">
            <h3 className="mystic-heading text-2xl text-white mb-6 text-center">A Message From Our Hearts</h3>
            
            <p className="mystic-body text-white/80 mb-6 text-center">
              Listen to our personal invitation and the story of how our stars aligned.
            </p>
            
            <div className="flex justify-center mb-8">
              <audio ref={audioRef} className="hidden">
                <source src="https://samplelib.com/lib/preview/mp3/sample-15s.mp3" type="audio/mpeg" />
              </audio>
              <button 
                onClick={playAudio}
                className="w-16 h-16 rounded-full bg-mystic-lavender/20 border border-mystic-lavender/50 flex items-center justify-center hover:bg-mystic-lavender/30 transition-all duration-300"
              >
                {isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                  </svg>
                )}
              </button>
            </div>
            
            <div className="text-center">
              <button 
                onClick={toggleAudioMessage}
                className="mystic-button"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Countdown Section */}
      <section className="py-20 px-6 mystic-glow">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mystic-heading text-3xl text-white mb-12">The Magic Awaits</h2>
          <CountdownTimer targetDate={engagementDate} variant="mystic" />
        </div>
      </section>
      
      {/* Our Tale Section */}
      <section id="story" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mystic-subheading text-mystic-lavender mb-1">When Magic Happens</h2>
            <h3 className="mystic-heading text-3xl md:text-4xl text-white">Our Enchanted Tale</h3>
          </div>
          
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="animate-fade-in-left order-2 md:order-1">
                <div className="mystic-card">
                  <h3 className="mystic-subheading text-mystic-lavender mb-3">First Enchantment</h3>
                  <p className="mystic-body text-white/80">
                    We first met during the Lunar Eclipse Festival, where Luna was performing 
                    a traditional moon blessing ceremony and Artemis was documenting ancient rituals. 
                    As our eyes met across the moonlit clearing, time seemed to stand still—the stars 
                    above us suddenly brighter, the air around us charged with an inexplicable energy.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <span className="inline-block px-3 py-1 bg-mystic-purple/20 rounded-full text-xs text-mystic-mist">Lunar Eclipse</span>
                    <span className="inline-block px-3 py-1 bg-mystic-purple/20 rounded-full text-xs text-mystic-mist">Full Moon</span>
                  </div>
                </div>
              </div>
              
              <div className="relative animate-fade-in-right order-1 md:order-2">
                <div className="absolute inset-0 border border-mystic-lavender/30 rounded-md transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1564996699789-5f11e63d1498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Mystical forest" 
                  className="relative z-10 rounded-md shadow-lg w-full h-auto"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="relative animate-fade-in-left">
                <div className="absolute inset-0 border border-mystic-lavender/30 rounded-md transform -rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1535953472862-9cc610a70f8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Crystal cave" 
                  className="relative z-10 rounded-md shadow-lg w-full h-auto"
                />
              </div>
              
              <div className="animate-fade-in-right">
                <div className="mystic-card">
                  <h3 className="mystic-subheading text-mystic-lavender mb-3">Soul Connection</h3>
                  <p className="mystic-body text-white/80">
                    Our journeys intertwined as we discovered shared connections to ancient wisdom 
                    and mystical arts. Luna's knowledge of celestial alignments complemented Artemis's 
                    understanding of earth energies. Together, we explored sacred sites and hidden realms, 
                    our bond deepening with each shared experience.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <span className="inline-block px-3 py-1 bg-mystic-purple/20 rounded-full text-xs text-mystic-mist">Twin Flames</span>
                    <span className="inline-block px-3 py-1 bg-mystic-purple/20 rounded-full text-xs text-mystic-mist">Sacred Journey</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="animate-fade-in-left order-2 md:order-1">
                <div className="mystic-card">
                  <h3 className="mystic-subheading text-mystic-lavender mb-3">Ethereal Proposal</h3>
                  <p className="mystic-body text-white/80">
                    On the winter solstice, Artemis led Luna through an ancient grove illuminated by 
                    thousands of floating lanterns. At its center stood a crystal altar where a ring 
                    crafted from a meteorite and blessed by elders rested among rare moon flowers. 
                    As the aurora borealis painted the sky above, Artemis asked Luna to join their soul's 
                    journey for eternity.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <span className="inline-block px-3 py-1 bg-mystic-purple/20 rounded-full text-xs text-mystic-mist">Winter Solstice</span>
                    <span className="inline-block px-3 py-1 bg-mystic-purple/20 rounded-full text-xs text-mystic-mist">Aurora Dance</span>
                  </div>
                </div>
              </div>
              
              <div className="relative animate-fade-in-right order-1 md:order-2">
                <div className="absolute inset-0 border border-mystic-lavender/30 rounded-md transform rotate-2"></div>
                <img 
                  src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Northern lights" 
                  className="relative z-10 rounded-md shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Hidden Secrets Section - Easter Eggs */}
      <section className="py-20 px-6 mystic-glow">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mystic-heading text-3xl text-white mb-8">Whispered Secrets</h2>
          <p className="mystic-body text-white/80 mb-12 max-w-2xl mx-auto">
            Hidden throughout our invitation are mystical symbols and messages. 
            Discover them to unlock the deeper meanings of our journey.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Hidden messages that reveal on click */}
            {[
              { icon: "✨", message: "Every great love story is a never-ending spiritual journey" },
              { icon: "🔮", message: "Our souls recognized each other from past lives" },
              { icon: "🌙", message: "Love is the most powerful magic of all" },
              { icon: "🌿", message: "Two hearts beating as one across the cosmos" }
            ].map((item, index) => (
              <div 
                key={index}
                className="group relative rounded-md overflow-hidden cursor-pointer aspect-square flex items-center justify-center perspective-500"
              >
                <div className="transition-all duration-700 transform preserve-3d group-hover:rotateY-180 w-full h-full">
                  {/* Front side */}
                  <div className="absolute inset-0 backface-hidden flex items-center justify-center bg-mystic-midnight/70 border border-mystic-lavender/30 rounded-md">
                    <span className="text-4xl">{item.icon}</span>
                  </div>
                  
                  {/* Back side - the hidden message */}
                  <div className="absolute inset-0 backface-hidden rotateY-180 flex items-center justify-center p-4 bg-mystic-purple/50 backdrop-blur-sm rounded-md">
                    <p className="text-sm text-white mystic-body">{item.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mystic-subheading text-mystic-lavender mb-1">Captured Enchantments</h2>
            <h3 className="mystic-heading text-3xl md:text-4xl text-white">Mystical Memories</h3>
            <p className="mystic-body text-white/80 mt-4 max-w-2xl mx-auto">
              Glimpses of the magic we've shared along our journey.
            </p>
          </div>
          
          <GallerySection images={galleryImages} variant="mystic" />
        </div>
      </section>
      
      {/* Event Details Section */}
      <section className="py-20 px-6 mystic-glow">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mystic-subheading text-mystic-lavender mb-1">The Celebration</h2>
            <h3 className="mystic-heading text-3xl md:text-4xl text-white">Ethereal Details</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="mystic-card animate-fade-in">
              <h3 className="mystic-subheading text-mystic-lavender mb-4">Sacred Ceremony</h3>
              <div className="space-y-4">
                <p className="mystic-body text-white/90">
                  <span className="text-mystic-lavender">When:</span> February 14, 2024 at 8:00 PM
                </p>
                <p className="mystic-body text-white/90">
                  <span className="text-mystic-lavender">Where:</span> The Enchanted Gardens
                </p>
                <p className="mystic-body text-white/90">
                  <span className="text-mystic-lavender">Address:</span> Moonlight Vale, Hidden Path 21
                </p>
                <p className="mystic-body text-white/90">
                  <span className="text-mystic-lavender">Phase:</span> Full Moon in Virgo
                </p>
              </div>
            </div>
            
            <div className="mystic-card animate-fade-in [animation-delay:300ms]">
              <h3 className="mystic-subheading text-mystic-lavender mb-4">Mystical Details</h3>
              <div className="space-y-4">
                <p className="mystic-body text-white/90">
                  <span className="text-mystic-lavender">Attire:</span> Ethereal Formal (Flowing fabrics in celestial hues)
                </p>
                <p className="mystic-body text-white/90">
                  <span className="text-mystic-lavender">Experience:</span> Crystal blessing ceremony, enchanted feast, astral meditation
                </p>
                <p className="mystic-body text-white/90">
                  <span className="text-mystic-lavender">Offerings:</span> Each guest will receive a blessed crystal as a memento
                </p>
                <p className="mystic-body text-white/90">
                  <span className="text-mystic-lavender">Note:</span> The venue is accessible through a portal that opens at sunset
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* RSVP Section */}
      <section id="rsvp" className="py-20 px-6">
        <div className="max-w-xl mx-auto">
          <RsvpForm variant="mystic" />
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 px-6 bg-gradient-to-t from-mystic-purple/30 to-transparent text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="mystic-subheading text-3xl mb-4">Luna & Artemis</h2>
          <p className="mystic-body text-white/80 mb-4">
            "Two souls intertwined by the threads of fate, dancing together through the tapestry of existence."
          </p>
          <div className="h-0.5 w-16 bg-mystic-lavender/50 mx-auto"></div>
        </div>
      </footer>
      
      {/* CSS for 3D card effect */}
      <style jsx>{`
        .perspective-500 {
          perspective: 500px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotateY-180 {
          transform: rotateY(180deg);
        }
        
        @keyframes particleAnimation {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(20px);
            opacity: 0;
          }
        }
        
        .animate-particle-flow {
          animation: particleAnimation 3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default MysticWhisper;
