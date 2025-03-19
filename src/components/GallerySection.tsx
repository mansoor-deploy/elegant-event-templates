
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

type GallerySectionProps = {
  images: GalleryImage[];
  className?: string;
  variant?: "luxe" | "vintage" | "celestial" | "mystic";
  columns?: 2 | 3 | 4;
};

const GallerySection = ({ 
  images, 
  className, 
  variant = "luxe",
  columns = 3
}: GallerySectionProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const variantStyles = {
    luxe: {
      container: "grid gap-4 sm:gap-6",
      imageContainer: "overflow-hidden rounded-sm border border-luxe-gold/20 transition-all duration-500 hover:shadow-lg group relative",
      image: "w-full h-64 object-cover transition-all duration-700 group-hover:scale-105",
      caption: "absolute bottom-0 left-0 right-0 bg-luxe-burgundy/80 backdrop-blur-sm text-white p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 text-center luxe-body",
      modal: "fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4",
      modalContent: "max-w-4xl max-h-[90vh] relative bg-white rounded-sm overflow-hidden shadow-2xl",
      modalImage: "max-w-full max-h-[90vh] object-contain",
      modalCaption: "absolute bottom-0 left-0 right-0 bg-luxe-burgundy/90 text-white p-3 luxe-body text-center"
    },
    vintage: {
      container: "grid gap-6",
      imageContainer: "overflow-hidden rounded border border-vintage-sepia/30 transition-all duration-500 hover:shadow relative group",
      image: "w-full h-64 object-cover transition-all duration-700 filter group-hover:brightness-105 group-hover:contrast-105",
      caption: "absolute bottom-0 left-0 right-0 bg-vintage-sepia/80 backdrop-blur-xs text-vintage-cream p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 text-center vintage-body",
      modal: "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4",
      modalContent: "max-w-4xl max-h-[90vh] relative bg-vintage-paper rounded overflow-hidden shadow-2xl",
      modalImage: "max-w-full max-h-[90vh] object-contain",
      modalCaption: "absolute bottom-0 left-0 right-0 bg-vintage-sepia/90 text-vintage-cream p-3 vintage-body text-center"
    },
    celestial: {
      container: "grid gap-6",
      imageContainer: "overflow-hidden rounded-lg border border-white/20 transition-all duration-500 hover:shadow-[0_0_20px_rgba(155,135,245,0.3)] group relative",
      image: "w-full h-64 object-cover transition-all duration-700 group-hover:scale-105",
      caption: "absolute bottom-0 left-0 right-0 bg-celestial-blue/60 backdrop-blur-md text-white p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 text-center celestial-body",
      modal: "fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4",
      modalContent: "max-w-4xl max-h-[90vh] relative bg-celestial-navy/90 rounded-lg border border-white/20 overflow-hidden shadow-2xl",
      modalImage: "max-w-full max-h-[90vh] object-contain",
      modalCaption: "absolute bottom-0 left-0 right-0 bg-celestial-blue/80 text-white p-3 celestial-body text-center"
    },
    mystic: {
      container: "grid gap-6",
      imageContainer: "overflow-hidden rounded-md border border-white/20 transition-all duration-500 hover:shadow-[0_0_20px_rgba(155,141,224,0.4)] group relative",
      image: "w-full h-64 object-cover transition-all duration-700 group-hover:scale-105",
      caption: "absolute bottom-0 left-0 right-0 bg-mystic-purple/70 backdrop-blur-md text-white p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 text-center mystic-body",
      modal: "fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4",
      modalContent: "max-w-4xl max-h-[90vh] relative bg-mystic-midnight/90 rounded-md border border-white/20 overflow-hidden shadow-2xl",
      modalImage: "max-w-full max-h-[90vh] object-contain",
      modalCaption: "absolute bottom-0 left-0 right-0 bg-mystic-purple/80 text-white p-3 mystic-body text-center"
    }
  };

  const styles = variantStyles[variant];
  const gridCols = `grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns}`;

  return (
    <>
      <div className={cn(styles.container, gridCols, className)}>
        {images.map((image, index) => (
          <div 
            key={index} 
            className={cn(styles.imageContainer, "animate-fade-in")}
            style={{animationDelay: `${index * 150}ms`}}
            onClick={() => handleImageClick(image)}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className={styles.image} 
              loading="lazy"
            />
            {image.caption && (
              <div className={styles.caption}>{image.caption}</div>
            )}
          </div>
        ))}
      </div>

      {selectedImage && (
        <div 
          className={styles.modal}
          onClick={closeModal}
        >
          <div 
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className={styles.modalImage} 
            />
            {selectedImage.caption && (
              <div className={styles.modalCaption}>{selectedImage.caption}</div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;
