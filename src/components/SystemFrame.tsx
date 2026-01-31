
import React from 'react';

interface SystemFrameProps {
  children: React.ReactNode;
}

export const SystemFrame: React.FC<SystemFrameProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-vellum text-ink relative selection:bg-oxblood selection:text-vellum overflow-x-hidden font-mono">
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Top System Bar */}
      <header className="fixed top-0 left-0 w-full h-12 border-b border-ink/20 flex items-center justify-between px-4 z-40 bg-vellum/90 backdrop-blur-sm">
        <div className="flex items-center gap-4 text-xs tracking-widest uppercase">
          <span className="w-2 h-2 bg-oxblood animate-pulse rounded-full"></span>
          <span>SYS.LOG.84.2</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-[10px] text-ink/60">
          <span>MEM: 64KB OK</span>
          <span>TERM: VOGUE-1</span>
          <span>LOC: PARIS/LAB</span>
        </div>
        <div className="text-xs font-bold text-oxblood">STATIC_VOGUE</div>
      </header>

      {/* Side Rulers */}
      <div className="fixed left-0 top-0 bottom-0 w-12 border-r border-ink/20 hidden lg:flex flex-col justify-between py-16 items-center z-30 pointer-events-none">
        <div className="h-full w-px bg-ink/10 relative">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="absolute left-1/2 -translate-x-1/2 w-2 h-px bg-ink/30" style={{ top: `${i * 5}%` }}></div>
          ))}
        </div>
      </div>

      <div className="fixed right-0 top-0 bottom-0 w-12 border-l border-ink/20 hidden lg:flex flex-col justify-center py-4 items-center z-30 pointer-events-none bg-vellum">
         <div className="rotate-90 text-[10px] tracking-[0.2em] whitespace-nowrap text-ink/40">
           SCROLL_INTERCEPT_ACTIVE
         </div>
      </div>

      {/* Main Content Area */}
      <main className="pt-20 pb-12 px-4 lg:px-20 max-w-[1920px] mx-auto relative z-10">
        {children}
      </main>

      {/* Corner Anchors */}
      <div className="fixed top-4 left-4 w-4 h-4 border-t border-l border-oxblood z-50"></div>
      <div className="fixed top-4 right-4 w-4 h-4 border-t border-r border-oxblood z-50"></div>
      <div className="fixed bottom-4 left-4 w-4 h-4 border-b border-l border-oxblood z-50"></div>
      <div className="fixed bottom-4 right-4 w-4 h-4 border-b border-r border-oxblood z-50"></div>
    </div>
  );
};
