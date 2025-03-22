
import React, { useEffect, useState } from "react";
import CountdownTimer from "@/components/CountdownTimer";
import GallerySection, { GalleryImage } from "@/components/GallerySection";
import RsvpForm from "@/components/RsvpForm";
import { Film } from "lucide-react";

const LuxeEmbrace = () => {
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

  // Sample gallery images
  const galleryImages: GalleryImage[] = [
    { 
      src: "https://images.unsplash.com/photo-1529636798458-92182e662485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Couple portrait", 
      caption: "The day we met" 
    },
    { 
      src: "https://images.unsplash.com/photo-1537907510280-a9fcc6e42b91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Proposal moment", 
      caption: "The proposal" 
    },
    { 
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Celebration dinner", 
      caption: "Our celebration" 
    },
    { 
      src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Engagement ring", 
      caption: "The ring" 
    },
    { 
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Venue", 
      caption: "Our venue" 
    },
    { 
      src: "https://images.unsplash.com/photo-1547637589-f54c34f5d7a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Couple adventure", 
      caption: "Our journey" 
    },
  ];

  return (
    <div className={`relative min-h-screen bg-luxe-cream overflow-x-hidden ${showPage ? 'page-transition show' : 'page-transition'}`}>
      {/* Gold shimmer accents */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-luxe-gold/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-luxe-gold/10 rounded-full blur-2xl"></div>
      
      {/* Video button */}
      <button 
        onClick={toggleVideo}
        className="fixed bottom-6 left-6 z-50 bg-luxe-gold text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:shadow-lg hover:bg-luxe-gold/80 transition-all duration-300"
        aria-label="Play couple's message"
      >
        <Film size={20} />
      </button>
      
      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-6">
          <div className="bg-white/95 border border-luxe-gold/30 backdrop-blur-md rounded-sm p-6 max-w-3xl w-full shadow-lg">
            <h3 className="luxe-heading text-2xl text-luxe-burgundy mb-4 text-center">Our Personal Invitation</h3>
            
            <div className="relative w-full rounded-sm overflow-hidden aspect-video mb-6">
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
                className="luxe-button"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Navigation - Removed Back to Templates link */}
      <nav className="absolute top-0 left-0 w-full p-6 flex justify-center items-center z-10">
        <div className="flex space-x-6 text-luxe-burgundy">
          <a href="#story" className="hover:text-luxe-gold transition-colors duration-300">Our Story</a>
          <a href="#gallery" className="hover:text-luxe-gold transition-colors duration-300">Gallery</a>
          <a href="#rsvp" className="hover:text-luxe-gold transition-colors duration-300">RSVP</a>
        </div>
      </nav>
      
      {/* Hero Section with parallax effect */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-luxe-burgundy/10"></div>
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"
          style={{ 
            transform: "scale(1.1)",
            filter: "brightness(0.8)"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-luxe-cream via-transparent to-transparent"></div>
        
        {/* Added a semi-transparent background to the text container for better visibility */}
        <div className="relative z-10 text-center px-6 transform -translate-y-10 max-w-3xl mx-auto">
          <div className="inline-block mb-4 animate-fade-in bg-black/20 backdrop-blur-sm p-4 rounded-sm">
            <div className="luxe-shimmer h-0.5 w-32 mx-auto"></div>
            <p className="luxe-subheading text-white mt-2">Join us for our</p>
          </div>
          
          <h1 className="luxe-heading text-5xl md:text-7xl text-white mb-6 animate-fade-in [animation-delay:300ms] text-shadow-lg">
            Sophia & James
          </h1>
          
          <p className="luxe-subheading text-2xl text-white mb-8 animate-fade-in [animation-delay:600ms] bg-black/20 backdrop-blur-sm inline-block px-4 py-2 rounded-sm">
            ARE GETTING ENGAGED
          </p>
          
          <div className="flex justify-center animate-fade-in [animation-delay:900ms]">
            <span className="luxe-button">
              NOVEMBER 12, 2023 • THE GRAND PALACE
            </span>
          </div>
        </div>
      </section>
      
      {/* Countdown Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="luxe-heading text-3xl text-luxe-burgundy mb-12">Celebrating in</h2>
          <CountdownTimer targetDate={engagementDate} variant="luxe" />
        </div>
      </section>
      
      {/* Our Story Section */}
      <section id="story" className="py-20 px-6 bg-luxe-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="luxe-shimmer h-0.5 w-24 mx-auto mb-4"></div>
            <h2 className="luxe-heading text-3xl md:text-4xl text-luxe-burgundy">Our Story</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <div className="relative">
                <div className="absolute inset-0 border-2 border-luxe-gold transform translate-x-4 translate-y-4 rounded-sm"></div>
                <img 
                  src="https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Couple portrait" 
                  className="w-full h-auto rounded-sm relative z-10 shadow-lg"
                />
              </div>
            </div>
            
            <div className="space-y-6 animate-fade-in-right">
              <div className="luxe-card">
                <h3 className="luxe-subheading text-luxe-burgundy mb-2">HOW WE MET</h3>
                <p className="luxe-body text-luxe-burgundy/80">
                  We first crossed paths at an art gallery opening in downtown Manhattan. 
                  James was there showcasing his photography, while Sophia was covering the event for a lifestyle magazine.
                </p>
              </div>
              
              <div className="luxe-card">
                <h3 className="luxe-subheading text-luxe-burgundy mb-2">OUR JOURNEY</h3>
                <p className="luxe-body text-luxe-burgundy/80">
                  After three years of adventures together—from spontaneous weekend trips to quiet 
                  evenings at home—we've created a life filled with love, respect, and endless laughter.
                </p>
              </div>
              
              <div className="luxe-card">
                <h3 className="luxe-subheading text-luxe-burgundy mb-2">THE PROPOSAL</h3>
                <p className="luxe-body text-luxe-burgundy/80">
                  On a crisp autumn evening, James arranged a private rooftop dinner overlooking the city skyline. 
                  With a string quartet playing softly in the background, he got down on one knee and presented a ring 
                  that had been in his family for generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="luxe-shimmer h-0.5 w-24 mx-auto mb-4"></div>
            <h2 className="luxe-heading text-3xl md:text-4xl text-luxe-burgundy">Gallery</h2>
            <p className="luxe-body text-luxe-burgundy/80 mt-4 max-w-2xl mx-auto">
              A glimpse into our journey together and the beautiful moments we've shared.
            </p>
          </div>
          
          <GallerySection images={galleryImages} variant="luxe" />
        </div>
      </section>
      
      {/* Event Details Section */}
      <section className="py-20 px-6 bg-luxe-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="luxe-shimmer h-0.5 w-24 mx-auto mb-4"></div>
            <h2 className="luxe-heading text-3xl md:text-4xl text-luxe-burgundy">Event Details</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="luxe-card animate-fade-in">
              <h3 className="luxe-subheading text-luxe-burgundy mb-4">CEREMONY</h3>
              <p className="luxe-body text-luxe-burgundy/80 mb-2">
                <strong>Date:</strong> November 12, 2023
              </p>
              <p className="luxe-body text-luxe-burgundy/80 mb-2">
                <strong>Time:</strong> 5:00 PM
              </p>
              <p className="luxe-body text-luxe-burgundy/80 mb-2">
                <strong>Venue:</strong> The Grand Palace
              </p>
              <p className="luxe-body text-luxe-burgundy/80">
                <strong>Address:</strong> 123 Luxury Avenue, New York, NY 10001
              </p>
            </div>
            
            <div className="luxe-card animate-fade-in [animation-delay:300ms]">
              <h3 className="luxe-subheading text-luxe-burgundy mb-4">RECEPTION</h3>
              <p className="luxe-body text-luxe-burgundy/80 mb-2">
                <strong>Time:</strong> 6:30 PM
              </p>
              <p className="luxe-body text-luxe-burgundy/80 mb-2">
                <strong>Venue:</strong> The Grand Palace Ballroom
              </p>
              <p className="luxe-body text-luxe-burgundy/80 mb-2">
                <strong>Dress Code:</strong> Formal Attire
              </p>
              <p className="luxe-body text-luxe-burgundy/80">
                <strong>Parking:</strong> Valet parking available
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* RSVP Section */}
      <section id="rsvp" className="py-20 px-6 bg-white">
        <div className="max-w-xl mx-auto">
          <RsvpForm variant="luxe" />
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 px-6 bg-luxe-burgundy text-white text-center">
        <div className="max-w-4xl mx-auto">
          <p className="luxe-subheading mb-4">SOPHIA & JAMES</p>
          <p className="luxe-body text-white/80">
            We can't wait to celebrate our special day with you.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LuxeEmbrace;
