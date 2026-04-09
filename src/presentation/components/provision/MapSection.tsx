import { MapPin, ExternalLink } from "lucide-react";

const MapSection = () => {
  const googleMapsUrl = "https://maps.app.goo.gl/Uz2Xj5yQNmaDNWuB9";

  return (
    <div className="w-full aspect-[21/9] bg-[#f9f8f6] flex items-center justify-center overflow-hidden border border-[#eee] relative group">
      {/* Aesthetic Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
      
      <div className="relative z-10 flex flex-col items-center space-y-6 text-center px-6">
        <div className="w-12 h-12 rounded-full border border-[#1a1a1a]/10 flex items-center justify-center mb-2">
          <MapPin className="w-5 h-5 text-[#1a1a1a] stroke-[1.2]" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-serif text-[#1a1a1a] tracking-tight">Location Guidance</h3>
          <p className="text-[11px] text-[#737373] tracking-[0.1em] uppercase">
            서울 중구 남산공원길 105 (N서울타워 인근)
          </p>
        </div>

        <a 
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-8 py-3 border border-[#1a1a1a] text-[10px] tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white group"
        >
          <span>Open on Google Maps</span>
          <ExternalLink className="w-3 h-3 ml-1 opacity-50 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>

      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1a1a]/[0.02] pointer-events-none" />
    </div>
  );
};

export default MapSection;
