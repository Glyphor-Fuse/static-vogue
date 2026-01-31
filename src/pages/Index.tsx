import React from 'react';
import { SystemFrame } from '@/components/SystemFrame';
import { LiquidHeadline } from '@/components/LiquidHeadline';
import { ProjectCard } from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Index = () => {
  const projects = [
    {
      title: "CORTEX_REDUX",
      category: "Digital Architecture",
      image: "/images/project-1.jpg",
      year: "1984",
      index: "01"
    },
    {
      title: "VELVET_DATA",
      category: "Editorial Design",
      image: "/images/project-2.jpg",
      year: "1992",
      index: "02"
    },
    {
      title: "NEURAL_VOGUE",
      category: "Fashion Tech",
      image: "/images/project-3.jpg",
      year: "2024",
      index: "03"
    }
  ];

  return (
    <SystemFrame>
      {/* HERO SECTION */}
      <section className="min-h-[85vh] flex flex-col justify-end pb-20 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full border-l border-ink/10 hidden md:block">
           <img 
             src="/images/hero-bg.jpg" 
             alt="Abstract texture" 
             className="w-full h-full object-cover grayscale opacity-60 mix-blend-multiply" 
           />
           <div className="absolute inset-0 bg-gradient-to-b from-vellum via-transparent to-vellum"></div>
        </div>

        <div className="max-w-4xl z-10">
          <div className="mb-6 inline-block border-b border-oxblood pb-1">
            <span className="font-mono text-xs text-oxblood uppercase tracking-widest">
              Volume 01 — Portfolio Matrix
            </span>
          </div>
          
          <LiquidHeadline 
            text="STATIC" 
            className="text-[15vw] md:text-[12rem] font-black text-ink leading-[0.8]" 
            delay={0}
          />
          <LiquidHeadline 
            text="VOGUE" 
            className="text-[15vw] md:text-[12rem] font-black text-oxblood leading-[0.8] ml-[10vw] md:ml-32 italic" 
            delay={300}
          />
          
          <div className="mt-12 max-w-lg ml-2 md:ml-32 font-mono text-sm leading-relaxed text-ink/80 border-l-2 border-oxblood pl-6">
            <p>
              Rejecting the static grid. A digital editorial experiment merging 
              mid-century Parisian layout with Cold War mainframe logic. 
              Rendered in Oxblood and Aged Vellum.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 animate-bounce">
           <ArrowDown className="w-6 h-6 text-oxblood" />
        </div>
      </section>

      {/* MANIFESTO SECTION */}
      <section className="py-24 border-t border-ink/10 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4 font-mono text-xs uppercase tracking-widest text-ink/50 sticky top-32 h-fit">
          <div>// MANIFESTO_LOG</div>
          <div className="mt-4 text-oxblood">SYSTEM STATUS: OVERRIDE</div>
        </div>
        
        <div className="md:col-span-8">
           <p className="text-3xl md:text-5xl font-serif leading-tight mb-8">
             We exist in the <span className="text-oxblood italic">glitch</span> between the glossy page and the terminal screen.
           </p>
           <div className="columns-1 md:columns-2 gap-8 font-serif text-lg text-ink/80 text-justify">
             <p className="mb-8">
               <span className="float-left text-5xl font-bold mr-2 mt-[-6px] font-mono text-oxblood">01</span>
               The web has become sterile. A perfect grid of perfect pixels. We propose a return to the tactile chaos of the printing press, digitized through the lens of early computing. Where ink bleeds and data streams collide.
             </p>
             <p>
               Every scroll is a fresh impression. Every interaction is a stamped record in the system log. This is not just a portfolio; it is a visual manifesto for a new kind of brutalist elegance.
             </p>
           </div>
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section className="py-24 border-t border-ink/10">
        <div className="flex justify-between items-end mb-16">
          <LiquidHeadline text="SELECTED_WORKS" className="text-5xl md:text-8xl font-serif" />
          <div className="hidden md:block font-mono text-xs text-right">
            <div>INDEX_LOADED: 100%</div>
            <div>SORT: CHRONOLOGICAL</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
             <div key={idx} className={idx === 1 ? "md:mt-24" : ""}>
               <ProjectCard {...project} />
             </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
           <Button variant="outline" className="border-oxblood text-oxblood hover:bg-oxblood hover:text-vellum font-mono uppercase tracking-widest px-8 py-6 rounded-none text-xs">
             Access Full Archive
           </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-ink/10 pt-12 pb-24 mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 font-mono text-xs">
         <div>
           <div className="mb-4 text-oxblood font-bold">CONTACT</div>
           <ul className="space-y-2 text-ink/60">
             <li className="hover:text-oxblood cursor-pointer">EMAIL_Protocol</li>
             <li className="hover:text-oxblood cursor-pointer">TWITTER_Feed</li>
             <li className="hover:text-oxblood cursor-pointer">LINKEDIN_Node</li>
           </ul>
         </div>
         <div>
            <div className="mb-4 text-oxblood font-bold">LOCATION</div>
            <p className="text-ink/60">
              Sector 7G<br/>
              Neo-Paris District<br/>
              Server Rack 42
            </p>
         </div>
         <div className="md:col-span-2 flex flex-col justify-between">
            <p className="text-right text-ink/40">
              © 2024 STATIC VOGUE SYSTEMS.<br/>
              ALL RIGHTS RESERVED.<br/>
              NO UNAUTHORIZED DATA SCRAPING.
            </p>
            <div className="text-right mt-8 text-[10rem] leading-none opacity-5 font-serif pointer-events-none">
              SV
            </div>
         </div>
      </footer>
    </SystemFrame>
  );
};

export default Index;
