
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

type RsvpFormProps = {
  className?: string;
  variant?: "luxe" | "vintage" | "celestial" | "mystic";
};

const RsvpForm = ({ className, variant = "luxe" }: RsvpFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "yes",
    guests: "0",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Show success toast
      toast({
        title: "RSVP Submitted Successfully!",
        description: "Thank you for your response. We look forward to celebrating with you!",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        attending: "yes",
        guests: "0",
        message: "",
      });
    }, 1500);
  };

  const variantStyles = {
    luxe: {
      form: "space-y-6 backdrop-blur-sm bg-white/30 p-6 sm:p-8 rounded-sm border border-luxe-gold/30 shadow-md",
      label: "block luxe-subheading text-sm mb-2 text-luxe-burgundy",
      input: "w-full px-4 py-2 border border-luxe-gold/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-luxe-gold/50 luxe-body transition-all duration-300",
      select: "w-full px-4 py-2 border border-luxe-gold/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-luxe-gold/50 luxe-body transition-all duration-300 bg-white",
      textarea: "w-full px-4 py-2 border border-luxe-gold/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-luxe-gold/50 luxe-body transition-all duration-300 min-h-[100px]",
      button: "luxe-button w-full",
      heading: "luxe-heading text-2xl sm:text-3xl mb-6 text-center text-luxe-burgundy",
    },
    vintage: {
      form: "space-y-6 bg-vintage-paper p-6 sm:p-8 rounded border border-vintage-sepia/30 shadow-md",
      label: "block vintage-body text-sm mb-2 text-vintage-sepia",
      input: "w-full px-4 py-2 bg-white/80 border border-vintage-sepia/30 rounded focus:outline-none focus:ring-2 focus:ring-vintage-sepia/50 vintage-body transition-all duration-300",
      select: "w-full px-4 py-2 bg-white/80 border border-vintage-sepia/30 rounded focus:outline-none focus:ring-2 focus:ring-vintage-sepia/50 vintage-body transition-all duration-300",
      textarea: "w-full px-4 py-2 bg-white/80 border border-vintage-sepia/30 rounded focus:outline-none focus:ring-2 focus:ring-vintage-sepia/50 vintage-body transition-all duration-300 min-h-[100px]",
      button: "vintage-button w-full",
      heading: "vintage-heading text-2xl sm:text-3xl mb-6 text-center text-vintage-sepia",
    },
    celestial: {
      form: "space-y-6 backdrop-blur-md bg-white/10 p-6 sm:p-8 rounded-lg border border-white/20 shadow-lg",
      label: "block celestial-subheading text-sm mb-2 text-white",
      input: "w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-celestial-purple/50 celestial-body text-white transition-all duration-300",
      select: "w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-celestial-purple/50 celestial-body text-white transition-all duration-300",
      textarea: "w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-celestial-purple/50 celestial-body text-white transition-all duration-300 min-h-[100px]",
      button: "celestial-button w-full",
      heading: "celestial-heading text-2xl sm:text-3xl mb-6 text-center text-white",
    },
    mystic: {
      form: "space-y-6 backdrop-blur-md bg-white/5 p-6 sm:p-8 rounded-md border border-white/20 shadow-lg",
      label: "block mystic-body text-sm mb-2 text-white",
      input: "w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-mystic-lavender/50 mystic-body text-white transition-all duration-300",
      select: "w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-mystic-lavender/50 mystic-body text-white transition-all duration-300",
      textarea: "w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-mystic-lavender/50 mystic-body text-white transition-all duration-300 min-h-[100px]",
      button: "mystic-button w-full",
      heading: "mystic-heading text-2xl sm:text-3xl mb-6 text-center text-white",
    },
  };

  const styles = variantStyles[variant];

  return (
    <form className={cn(styles.form, className)} onSubmit={handleSubmit}>
      <h3 className={styles.heading}>RSVP</h3>
      
      <div>
        <label htmlFor="name" className={styles.label}>Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.input}
          placeholder="Your Name"
        />
      </div>
      
      <div>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.input}
          placeholder="your.email@example.com"
        />
      </div>
      
      <div>
        <label htmlFor="attending" className={styles.label}>Are you attending?</label>
        <select
          id="attending"
          name="attending"
          value={formData.attending}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="yes">Joyfully Accepts</option>
          <option value="no">Regretfully Declines</option>
        </select>
      </div>
      
      {formData.attending === "yes" && (
        <div>
          <label htmlFor="guests" className={styles.label}>Number of Guests (including yourself)</label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="1">1 Person</option>
            <option value="2">2 People</option>
            <option value="3">3 People</option>
            <option value="4">4 People</option>
          </select>
        </div>
      )}
      
      <div>
        <label htmlFor="message" className={styles.label}>Message (Optional)</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={styles.textarea}
          placeholder="Any notes or special requirements..."
        />
      </div>
      
      <button 
        type="submit" 
        className={styles.button}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Send RSVP"}
      </button>
    </form>
  );
};

export default RsvpForm;
