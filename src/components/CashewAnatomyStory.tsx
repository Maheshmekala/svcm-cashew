import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { SVCMLogo } from './SVCMLogo';
import { asset } from '../utils/assets';

interface AnatomyStage {
  id: number;
  stageNumber: string;
  name: string;
  botanicalTerm: string;
  badge: string;
  image: string;
  videoSrc?: string;
  headline: string;
  description: string;
  keyFacts: string[];
}

export const CashewAnatomyStory: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<number>(1);

  const stages: AnatomyStage[] = [
    {
      id: 1,
      stageNumber: '01',
      name: 'The Whole Fruit & Pseudofruit',
      botanicalTerm: 'Hypocarpium (Cashew Apple)',
      badge: 'TREE MATURITY',
      image: asset('assets/cashew/cashew_fruit_rotating.jpg'),
      videoSrc: asset('assets/cashew/anatomy_displayed.mp4'),
      headline: 'The Botanical Deception: Fruit & Pseudofruit',
      description: 'Unlike apples or mangoes, the cashew nut grows externally at the base of a swollen, edible false-fruit called the hypocarpium or cashew apple. Rich in vitamin C and natural fruit sugars, it ripens to a brilliant yellow-scarlet.',
      keyFacts: [
        'The true reproductive seed is the kidney-shaped nut suspended at the bottom.',
        'Tree-ripened on organic coastal Andhra plantations.',
        'Harvested only after natural abscission when the drupe is fully mature.',
      ],
    },
    {
      id: 2,
      stageNumber: '02',
      name: 'The True Drupe & Hanging Nut',
      botanicalTerm: 'Anacardium Occidentale (True Fruit)',
      badge: 'EXTERNAL DRUPE',
      image: asset('assets/cashew/cashew_nut_and_apple.jpg'),
      videoSrc: asset('assets/cashew/anatomy_displayed.mp4'),
      headline: 'Nature’s Hermetic External Seed Capsule',
      description: 'The hanging drupe is nature’s impenetrable vault. It shields the delicate embryo inside with multiple moisture-resistant concentric layers, allowing the seed to survive torrential tropical monsoon rains.',
      keyFacts: [
        'Curved reniform (kidney-shaped) profile with natural longitudinal suture.',
        'Average weight 5 to 9 grams per raw cashew nut.',
        'High outturn benchmark: 48 to 52 lbs KOR (Kernel Outturn Ratio).',
      ],
    },
    {
      id: 3,
      stageNumber: '03',
      name: 'The Outer Leathery Pericarp Shell',
      botanicalTerm: 'Exocarpium Impermeabile',
      badge: 'PROTECTIVE SHELL',
      image: asset('assets/cashew/cashew_shell_splitting.jpg'),
      videoSrc: asset('assets/cashew/shell_split_kernel.mp4'),
      headline: 'The Tough Natural Outer Barrier',
      description: 'A 1 to 2 mm thick, leathery, smooth greenish-grey skin covered in a dense waxy cuticle. Controlled steam conditioning softens this leathery barrier so it fractures cleanly along its natural suture line without shattering the kernel.',
      keyFacts: [
        'Hydrophobic waxy cuticle arrests atmospheric moisture entry.',
        'Naturally fractures along the ventral suture under mechanical pressure.',
        'Uniform steam conditioning ensures intact whole kernel yield.',
      ],
    },
    {
      id: 4,
      stageNumber: '04',
      name: 'The Alveolar Mesocarp & Cushion',
      botanicalTerm: 'Mesocarpium Alveolare',
      badge: 'INTERNAL SHIELD',
      image: asset('assets/cashew/cashew_apple_skin.jpg'),
      headline: 'The Honeycombed Cellular Matrix',
      description: 'Beneath the outer skin lies a spongy, honeycomb-like cellular matrix. In its raw botanical state, this honeycomb houses natural viscous resin that protects the seed against fungal attack and insects in the wild.',
      keyFacts: [
        'Porous honeycomb alveolar tissue providing thermal shock absorption.',
        'Contains viscous natural oils that are safely neutralized during steam roasting.',
        'Protects the inner ivory kernel from physical impact and external heat.',
      ],
    },
    {
      id: 5,
      stageNumber: '05',
      name: 'Twin Ivory Cotyledons (The Kernel)',
      botanicalTerm: 'Semen Anacardii (Grade W-180)',
      badge: 'EXPORT WHOLE',
      image: asset('assets/cashew/cashew_kernel_split_halves.jpg'),
      videoSrc: asset('assets/cashew/kernel_splitting.mp4'),
      headline: 'The Prize: Creamy Whole Ivory Kernel',
      description: 'Inside the shell sits the pristine ivory cashew kernel. It consists of two symmetric jumbo cotyledons holding dense oleic fatty acids and essential minerals. After 70°C Borma drying, the moisture content drops below 4.5%, creating the signature Vetapalem crunch.',
      keyFacts: [
        'Symmetric twin cotyledons joined along the central longitudinal axis.',
        'Grade W-180 King Whole: 160–180 nuts per pound benchmark.',
        'Delicate, creamy ivory coloration with zero thermal scorching.',
      ],
    },
    {
      id: 6,
      stageNumber: '06',
      name: 'The Embryonic Axis & Lipid Stores',
      botanicalTerm: 'Axis Embryonalis & Oleic Cells',
      badge: 'CELLULAR MACRO',
      image: asset('assets/cashew/cashew_kernel_embryo_macro.jpg'),
      videoSrc: asset('assets/cashew/microscopic_embryo.mp4'),
      headline: 'The Microscopic Living Spark of the Seed',
      description: 'At the heart of the cotyledon split lies the microscopic embryonic root and shoot axis. Surrounding this delicate germ are densely packed oleic and linoleic lipid cells that give the nut its rich, buttery mouthfeel and long shelf stability.',
      keyFacts: [
        'Intact germ preserved through gentle foot-pedal mechanical peeling.',
        'Rich in monounsaturated fats (oleic acid) that stay crisp under nitrogen seal.',
        'High natural sweetness and zero bitter tannin residue.',
      ],
    },
  ];

  const activeStage = stages.find((s) => s.id === activeStageId) || stages[0];

  return (
    <section id="anatomy" className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 w-full max-w-7xl mx-auto border-t border-stone-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-stone-200">
        <div>
          <div className="inline-flex items-center gap-2 border border-stone-200 bg-white px-3.5 py-1.5 rounded-full shadow-subtle mb-3">
            <SVCMLogo size={18} />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A5A35] font-bold">
              BOTANICAL STORYTELLING
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1C1917]">
            The Anatomy of an{' '}
            <span className="italic text-[#183C2C]">Authentic Cashew.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-2xl">
            Explore the biological structure of Anacardium Occidentale — from tree-hanging drupe to the prized ivory cotyledon export whole.
          </p>
        </div>

        <div className="shrink-0 font-mono text-xs text-stone-500">
          Interactive Specimen: <strong>6 Botanical Layers</strong>
        </div>
      </div>

      {/* Stage Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-10 pb-8">
        {stages.map((stage) => {
          const isSelected = stage.id === activeStageId;
          return (
            <button
              key={stage.id}
              type="button"
              onClick={() => setActiveStageId(stage.id)}
              className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#183C2C] text-white border-[#183C2C] shadow-elevated'
                  : 'bg-white text-stone-700 border-stone-200/90 hover:border-amber-400 hover:bg-stone-50'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5 font-mono text-[10px]">
                <span className={isSelected ? 'text-amber-300 font-bold' : 'text-stone-400 font-semibold'}>
                  STAGE {stage.stageNumber}
                </span>
              </div>
              <h4 className="text-xs font-bold leading-snug truncate">
                {stage.name}
              </h4>
            </button>
          );
        })}
      </div>

      {/* Active Stage Deep-Dive Showcase */}
      <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-10 shadow-elevated">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Visual Media (6 cols) */}
            <div className="lg:col-span-6 relative aspect-[16/11] rounded-2xl overflow-hidden bg-stone-950 border border-stone-800 shadow-inner flex items-center justify-center group">
              {activeStage.videoSrc ? (
                <video
                  src={activeStage.videoSrc}
                  poster={activeStage.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                />
              ) : (
                <img
                  src={activeStage.image}
                  alt={activeStage.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              )}

              <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full text-white font-mono text-[10px] font-bold border border-white/20">
                {activeStage.badge}
              </div>

              <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-md px-3.5 py-2 rounded-xl text-stone-300 font-mono text-[10px] flex items-center justify-between border border-white/10">
                <span>Botanical: {activeStage.botanicalTerm}</span>
                <span className="text-amber-400 font-bold">SVCM Specimen</span>
              </div>
            </div>

            {/* Narrative Content (6 cols) */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#C58A3A] font-bold block mb-1">
                  STAGE {activeStage.stageNumber} • {activeStage.botanicalTerm}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 leading-tight">
                  {activeStage.headline}
                </h3>
              </div>

              <p className="text-sm text-stone-700 leading-relaxed">
                {activeStage.description}
              </p>

              {/* Key Technical Facts */}
              <div className="space-y-2.5 pt-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-stone-400 font-bold block">
                  TECHNICAL BOTANICAL PROPERTIES:
                </span>
                {activeStage.keyFacts.map((fact, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-[#183C2C] shrink-0 mt-0.5" />
                    <span>{fact}</span>
                  </div>
                ))}
              </div>

              {/* Navigation CTA to Next Stage */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="font-mono text-xs text-stone-500">
                  Step {activeStage.id} of {stages.length}
                </span>

                <button
                  type="button"
                  onClick={() => {
                    const nextId = activeStage.id < stages.length ? activeStage.id + 1 : 1;
                    setActiveStageId(nextId);
                  }}
                  className="flex items-center gap-1.5 text-xs font-semibold text-[#183C2C] hover:text-[#0F2F22] cursor-pointer"
                >
                  <span>Next: {stages[activeStage.id < stages.length ? activeStage.id : 0].name}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
