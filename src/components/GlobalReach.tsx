import React from 'react';
import { Globe, Anchor, MapPin } from 'lucide-react';
import { SVCMLogo } from './SVCMLogo';

export const GlobalReach: React.FC = () => {
  return (
    <section id="global-reach" className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 w-full max-w-7xl mx-auto border-t border-stone-200">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-stone-200">
        <div>
          <div className="inline-flex items-center gap-2 border border-stone-200 bg-white px-3.5 py-1.5 rounded-full shadow-subtle mb-3">
            <SVCMLogo size={18} />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A5A35] font-bold">
              INTERNATIONAL FREIGHT &amp; LOGISTICS
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1C1917]">
            From Vetapalem Plant to{' '}
            <span className="italic text-[#183C2C]">Global Ports.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-2xl">
            Serving quality-conscious buyers beyond India with containerized freight, vacuum nitrogen protection, and complete documentation.
          </p>
        </div>

        <div className="shrink-0 font-mono text-xs text-stone-500">
          Incoterms: <strong>FOB &amp; CIF Supported</strong>
        </div>
      </div>

      {/* Main Logistics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12 items-stretch">
        {/* Left Column (7 cols): Route & Gateway Ports Visual Map */}
        <div className="lg:col-span-7 rounded-3xl bg-[#1C1917] text-stone-100 p-8 sm:p-10 shadow-elevated border border-stone-800 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between pb-6 border-b border-stone-800">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400 font-bold">
                MARITIME SUPPLY CORRIDOR
              </span>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>ACTIVE EXPORT LANES</span>
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white mt-6 leading-snug">
              Strategic Gateway to Chennai &amp; Visakhapatnam Deepwater Ports
            </h3>

            <p className="mt-4 text-xs sm:text-sm text-stone-400 leading-relaxed max-w-xl">
              Our factory in Vetapalem (Prakasam District) is seamlessly linked by highway and rail freight corridors to India's premier east coast container terminals. Stuffing and customs lead sealing are executed directly at our plant premises.
            </p>

            {/* Logistics Steps Strip */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-amber-300 font-bold mb-1">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>ORIGIN</span>
                </div>
                <div className="text-white font-semibold">Vetapalem Plant</div>
                <p className="text-[11px] text-stone-400 mt-1">Nayenipalli Ind. Area, Prakasam (A.P.)</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-emerald-300 font-bold mb-1">
                  <Anchor className="w-4 h-4 shrink-0" />
                  <span>GATEWAY PORTS</span>
                </div>
                <div className="text-white font-semibold">Chennai &amp; Vizag</div>
                <p className="text-[11px] text-stone-400 mt-1">Direct ocean liner services to global hubs</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-amber-300 font-bold mb-1">
                  <Globe className="w-4 h-4 shrink-0" />
                  <span>DESTINATIONS</span>
                </div>
                <div className="text-white font-semibold">Global Markets</div>
                <p className="text-[11px] text-stone-400 mt-1">Middle East, Europe &amp; Americas</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400 font-mono">
            <span>Container Inspection</span>
            <span className="text-amber-400 font-semibold">SGS / Third-Party Audit Welcome</span>
          </div>
        </div>

        {/* Right Column (5 cols): Container Configurations */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* 20ft FCL Box */}
          <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-subtle flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <span className="font-mono text-xs font-bold text-white bg-[#183C2C] px-3 py-1 rounded-xl">
                  STANDARD FCL
                </span>
                <span className="font-mono text-xs text-stone-500">1 x 20ft Container</span>
              </div>

              <h4 className="text-base font-bold text-stone-900 mt-3">
                ~16 Metric Tonnes Payload
              </h4>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Holds 700 export master cartons (each containing 2 x 25 lbs nitrogen tins). Standard commercial unit for wholesale importers.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-600">
              <span>Gross Weight: ~17.5 MT</span>
              <span className="text-emerald-700 font-semibold">FCL Rate Available</span>
            </div>
          </div>

          {/* 40ft FCL Box */}
          <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-subtle flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <span className="font-mono text-xs font-bold text-white bg-[#8A5A35] px-3 py-1 rounded-xl">
                  HIGH-VOLUME FCL
                </span>
                <span className="font-mono text-xs text-stone-500">1 x 40ft Container</span>
              </div>

              <h4 className="text-base font-bold text-stone-900 mt-3">
                ~26 Metric Tonnes Payload
              </h4>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Holds ~1,150 master cartons. Ideal for large retail packers and multi-market distribution centers seeking optimal freight economics.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-600">
              <span>Gross Weight: ~28.5 MT</span>
              <span className="text-emerald-700 font-semibold">Bulk Rate Available</span>
            </div>
          </div>

          {/* Trial / LCL Consignments */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-center justify-between text-xs">
            <span className="text-stone-700">
              <strong>Trial Orders (500 kg – 2 MT):</strong> Supported for verified commercial buyers.
            </span>
            <span className="font-mono text-[#8A5A35] font-bold shrink-0 ml-2">LCL Air / Sea</span>
          </div>
        </div>
      </div>
    </section>
  );
};
