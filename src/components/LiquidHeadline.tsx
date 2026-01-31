
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface LiquidHeadlineProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  delay?: number;
}

export const LiquidHeadline: React.FC<LiquidHeadlineProps> = ({ 
  text, 
  className, 
  as: Component = 'h1',
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Split text into words to stagger the ink effect
  const words = text.split(' ');

  return (
    <Component 
      ref={elementRef} 
      className={cn("relative leading-[0.85] tracking-tighter", className)}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="block overflow-hidden pb-4"> 
        {words.map((word, i) => (
          <span
            key={i}
            className={cn(
              "inline-block mr-[0.25em] transition-all duration-1000 ease-out will-change-[filter,transform,opacity]",
              isVisible ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-lg scale-110"
            )}
            style={{ 
              transitionDelay: `${delay + (i * 100)}ms`,
              textShadow: isVisible ? "0 0 1px rgba(66, 5, 5, 0.2)" : "none" 
            }}
          >
            {word}
          </span>
        ))}
      </span>
    </Component>
  );
};
