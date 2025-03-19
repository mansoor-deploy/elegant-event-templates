
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type CountdownTimerProps = {
  targetDate: Date;
  className?: string;
  variant?: "luxe" | "vintage" | "celestial" | "mystic";
};

const CountdownTimer = ({ targetDate, className, variant = "luxe" }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, [targetDate]);

  const variantStyles = {
    luxe: {
      container: "flex justify-center items-center space-x-4 sm:space-x-8",
      item: "flex flex-col items-center bg-luxe-burgundy/10 backdrop-blur-sm border border-luxe-gold/30 rounded-md px-4 py-2 sm:px-6 sm:py-4 min-w-[70px] sm:min-w-[90px]",
      number: "text-2xl sm:text-4xl font-bold luxe-heading text-luxe-burgundy",
      label: "text-xs sm:text-sm uppercase tracking-wider text-luxe-burgundy/80 luxe-subheading"
    },
    vintage: {
      container: "flex justify-center items-center space-x-4 sm:space-x-6",
      item: "flex flex-col items-center bg-vintage-paper border border-vintage-sepia/30 rounded px-3 py-2 sm:px-5 sm:py-3 min-w-[65px] sm:min-w-[80px]",
      number: "text-2xl sm:text-3xl font-bold vintage-heading text-vintage-sepia",
      label: "text-xs sm:text-sm capitalize text-vintage-sepia/70 vintage-body"
    },
    celestial: {
      container: "flex justify-center items-center space-x-3 sm:space-x-5",
      item: "flex flex-col items-center bg-white/10 backdrop-blur-md border border-celestial-silver/30 rounded-lg px-3 py-2 sm:px-5 sm:py-3 min-w-[65px] sm:min-w-[80px]",
      number: "text-2xl sm:text-3xl font-bold celestial-heading text-white",
      label: "text-xs sm:text-sm uppercase tracking-wider text-white/80 celestial-subheading"
    },
    mystic: {
      container: "flex justify-center items-center space-x-3 sm:space-x-5",
      item: "flex flex-col items-center bg-white/5 backdrop-blur-md border border-mystic-silver/20 rounded-md px-3 py-2 sm:px-5 sm:py-3 min-w-[65px] sm:min-w-[80px]",
      number: "text-2xl sm:text-3xl font-bold mystic-heading text-white",
      label: "text-xs sm:text-sm uppercase tracking-wider text-white/70 mystic-body"
    }
  };

  const styles = variantStyles[variant];

  return (
    <div className={cn(styles.container, className)}>
      <div className={cn(styles.item, "animate-fade-in [animation-delay:200ms]")}>
        <span className={styles.number}>{timeLeft.days}</span>
        <span className={styles.label}>Days</span>
      </div>
      <div className={cn(styles.item, "animate-fade-in [animation-delay:400ms]")}>
        <span className={styles.number}>{timeLeft.hours}</span>
        <span className={styles.label}>Hours</span>
      </div>
      <div className={cn(styles.item, "animate-fade-in [animation-delay:600ms]")}>
        <span className={styles.number}>{timeLeft.minutes}</span>
        <span className={styles.label}>Minutes</span>
      </div>
      <div className={cn(styles.item, "animate-fade-in [animation-delay:800ms]")}>
        <span className={styles.number}>{timeLeft.seconds}</span>
        <span className={styles.label}>Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
