
import React, { useEffect, useState } from "react";
import CountdownTimer from "@/components/CountdownTimer";
import GallerySection, { GalleryImage } from "@/components/GallerySection";
import RsvpForm from "@/components/RsvpForm";
import { Film } from "lucide-react";

const VintageAffair = () => {
  const [showPage, setShowPage] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);
  
  useEffect(() => {
    // Delayed animation for page entrance
    const timer = setTimeout(() => {
      setShowPage(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (audioPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setAudioPlaying(!audioPlaying);
    }
  };

  // Toggle video modal
  const toggleVideo = () => {
    // Pause background audio if it's playing
    if (audioRef.current && audioPlaying) {
      audioRef.current.pause();
      setAudioPlaying(false);
    }
    setShowVideo(!showVideo);
  };

  // Set engagement date (6 months from now)
  const engagementDate = new Date();
  engagementDate.setMonth(engagementDate.getMonth() + 6);

  // Sample gallery images
  const galleryImages: GalleryImage[] = [
    { 
      src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Vintage couple portrait", 
      caption: "First dance together" 
    },
    { 
      src: "https://images.unsplash.com/photo-1494955870715-979ca4f13bf0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Old letters", 
      caption: "Love letters" 
    },
    { 
      src: "https://images.unsplash.com/photo-1532117182044-9755a5ca7986?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Vintage camera", 
      caption: "Capturing memories" 
    },
    { 
      src: "https://images.unsplash.com/photo-1517457210348-703d726a9b59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Antique venue", 
      caption: "Our venue" 
    },
    { 
      src: "https://images.unsplash.com/photo-1564648351416-3eec9f3e85de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Vintage ring", 
      caption: "The heirloom ring" 
    },
    { 
      src: "https://images.unsplash.com/photo-1559631526-5716df3cfaab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Old vinyl records", 
      caption: "Our favorite tunes" 
    },
  ];

  return (
    <div className={`relative min-h-screen bg-vintage-paper vintage-grain overflow-hidden ${showPage ? 'page-transition show' : 'page-transition'}`}>
      {/* Background audio - hidden */}
      <audio ref={audioRef} loop className="hidden">
        <source src="https://soundcloud.com/jazzy-piano-music/sets/relaxing-jazz-piano-music" type="audio/mpeg" />
      </audio>
      
      {/* Audio control */}
      <button 
        onClick={toggleAudio}
        className="fixed bottom-6 right-6 z-50 bg-vintage-sepia text-vintage-cream rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          {audioPlaying ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
          )}
        </svg>
      </button>
      
      {/* Video button */}
      <button 
        onClick={toggleVideo}
        className="fixed bottom-6 left-6 z-50 bg-vintage-sepia text-vintage-cream rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300"
        aria-label="Play couple's message"
      >
        <Film size={20} />
      </button>
      
      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6">
          <div className="bg-vintage-paper border-2 border-vintage-sepia/30 p-6 max-w-3xl w-full shadow-lg">
            <h3 className="vintage-heading text-2xl text-vintage-sepia mb-4 text-center">A Message From Us</h3>
            
            <div className="relative w-full overflow-hidden aspect-video mb-6">
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
                className="vintage-button"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full p-6 flex justify-center items-center z-10">
        <div className="flex space-x-6 text-vintage-sepia vintage-body">
          <a href="#story" className="hover:text-vintage-sepia/70 transition-colors duration-300">Our Story</a>
          <a href="#gallery" className="hover:text-vintage-sepia/70 transition-colors duration-300">Gallery</a>
          <a href="#rsvp" className="hover:text-vintage-sepia/70 transition-colors duration-300">RSVP</a>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-24">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1561642769-1bca263542e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" 
              alt="Vintage background" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-vintage-paper bg-opacity-70"></div>
          </div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <div className="vintage-card border-2 p-10 animate-fade-in">
            <div className="mb-6">
              <h3 className="vintage-subheading text-3xl mb-2">Save the Date</h3>
              <div className="h-0.5 w-24 bg-vintage-sepia/50 mx-auto"></div>
            </div>
            
            <h1 className="vintage-heading text-5xl md:text-6xl text-vintage-sepia mb-6 animate-fade-in [animation-delay:300ms]">
              Eleanor & Theodore
            </h1>
            
            <p className="vintage-body text-vintage-sepia mb-8 text-xl animate-fade-in [animation-delay:600ms]">
              Request the pleasure of your company at their engagement celebration
            </p>
            
            <div className="animate-fade-in [animation-delay:900ms]">
              <p className="vintage-body text-vintage-sepia text-xl mb-1">December 8, 2023</p>
              <p className="vintage-body text-vintage-sepia text-lg mb-6">at four o'clock in the afternoon</p>
              <p className="vintage-body text-vintage-sepia">The Antique Ballroom</p>
              <p className="vintage-body text-vintage-sepia mb-6">42 Heritage Lane, Charleston, SC</p>
              <div className="h-0.5 w-16 bg-vintage-sepia/50 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Countdown Section */}
      <section className="py-20 px-6 bg-white bg-opacity-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="vintage-heading text-3xl text-vintage-sepia mb-12">Until We Celebrate</h2>
          <CountdownTimer targetDate={engagementDate} variant="vintage" />
        </div>
      </section>
      
      {/* Our Story Section */}
      <section id="story" className="py-20 px-6 bg-vintage-paper">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="vintage-subheading text-4xl text-vintage-sepia">Our Love Story</h2>
            <div className="h-0.5 w-24 bg-vintage-sepia/50 mx-auto mt-2"></div>
          </div>
          
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="animate-fade-in-left">
                <div className="relative">
                  <div className="absolute inset-0 border-2 border-vintage-sepia/30 transform -translate-x-4 -translate-y-4"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1517230878791-4d28214057c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Vintage cafe" 
                    className="w-full h-auto relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
              
              <div className="vintage-card animate-fade-in-right">
                <h3 className="vintage-subheading text-2xl text-vintage-sepia mb-4">Chapter One: The Meeting</h3>
                <p className="vintage-body text-vintage-sepia/90">
                  It was a rainy afternoon at the corner bookshop, both reaching for the same vintage copy 
                  of "Pride and Prejudice." Theodore offered it to Eleanor with a smile, and they spent the 
                  next three hours discussing classic literature over coffee.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="vintage-card animate-fade-in-left order-2 md:order-1">
                <h3 className="vintage-subheading text-2xl text-vintage-sepia mb-4">Chapter Two: The Courtship</h3>
                <p className="vintage-body text-vintage-sepia/90">
                  Letters turned to long walks through the city's historic district. Weekend picnics in the 
                  botanical gardens led to dancing at the town's annual heritage festival. With each passing day, 
                  their hearts grew fonder.
                </p>
              </div>
              
              <div className="animate-fade-in-right order-1 md:order-2">
                <div className="relative">
                  <div className="absolute inset-0 border-2 border-vintage-sepia/30 transform translate-x-4 -translate-y-4"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1515523110800-9415d13b84a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Vintage picnic" 
                    className="w-full h-auto relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="animate-fade-in-left">
                <div className="relative">
                  <div className="absolute inset-0 border-2 border-vintage-sepia/30 transform -translate-x-4 translate-y-4"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1518035695511-cc6dbfd2eb33?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Vintage proposal" 
                    className="w-full h-auto relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
              
              <div className="vintage-card animate-fade-in-right">
                <h3 className="vintage-subheading text-2xl text-vintage-sepia mb-4">Chapter Three: The Proposal</h3>
                <p className="vintage-body text-vintage-sepia/90">
                  On a starlit evening at the antique carousel where they had their first kiss, Theodore 
                  knelt down with his grandmother's ring. Eleanor, with tears of joy, whispered a breathless "yes" 
                  as the ancient melodies of the carousel played their song.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6 bg-white bg-opacity-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="vintage-subheading text-4xl text-vintage-sepia">Photo Album</h2>
            <div className="h-0.5 w-24 bg-vintage-sepia/50 mx-auto mt-2"></div>
            <p className="vintage-body text-vintage-sepia/90 mt-4 max-w-2xl mx-auto">
              Memories captured throughout our journey together.
            </p>
          </div>
          
          <GallerySection images={galleryImages} variant="vintage" />
        </div>
      </section>
      
      {/* Event Details Section */}
      <section className="py-20 px-6 bg-vintage-paper">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="vintage-subheading text-4xl text-vintage-sepia">Event Details</h2>
            <div className="h-0.5 w-24 bg-vintage-sepia/50 mx-auto mt-2"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="vintage-card animate-fade-in">
              <h3 className="vintage-subheading text-2xl text-vintage-sepia mb-4">The Ceremony</h3>
              <div className="space-y-3">
                <p className="vintage-body text-vintage-sepia/90">
                  <strong>Date:</strong> December 8, 2023
                </p>
                <p className="vintage-body text-vintage-sepia/90">
                  <strong>Time:</strong> 4:00 PM
                </p>
                <p className="vintage-body text-vintage-sepia/90">
                  <strong>Venue:</strong> The Antique Ballroom
                </p>
                <p className="vintage-body text-vintage-sepia/90">
                  <strong>Address:</strong> 42 Heritage Lane, Charleston, SC
                </p>
              </div>
            </div>
            
            <div className="vintage-card animate-fade-in [animation-delay:300ms]">
              <h3 className="vintage-subheading text-2xl text-vintage-sepia mb-4">The Celebration</h3>
              <div className="space-y-3">
                <p className="vintage-body text-vintage-sepia/90">
                  <strong>Reception:</strong> Following the ceremony
                </p>
                <p className="vintage-body text-vintage-sepia/90">
                  <strong>Attire:</strong> Formal attire
                </p>
                <p className="vintage-body text-vintage-sepia/90">
                  <strong>Music:</strong> Live music
                </p>
                <p className="vintage-body text-vintage-sepia/90">
                  <strong>Note:</strong> Photography welcome
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* RSVP Section */}
      <section id="rsvp" className="py-20 px-6 bg-white bg-opacity-50">
        <div className="max-w-xl mx-auto">
          <RsvpForm variant="vintage" />
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 px-6 bg-vintage-sepia text-vintage-cream text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="vintage-subheading text-3xl mb-4">Eleanor & Theodore</h2>
          <p className="vintage-body mb-4">
            "Love is not about how many days, months, or years you have been together. 
            Love is about how much you love each other every single day."
          </p>
          <div className="h-0.5 w-16 bg-vintage-cream/50 mx-auto"></div>
        </div>
      </footer>
    </div>
  );
};

export default VintageAffair;
