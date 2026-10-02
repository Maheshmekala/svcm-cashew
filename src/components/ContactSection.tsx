import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, CheckCircle, Mail, MapPin, Copy, ExternalLink } from 'lucide-react';
import { SVCMLogo } from './SVCMLogo';

interface ContactSectionProps {
  selectedGrade?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedGrade = 'W-180' }) => {
  const [grade, setGrade] = useState<string>(selectedGrade);
  const [volume, setVolume] = useState<string>('1 x 20ft FCL Container (~16 MT)');
  const [packaging, setPackaging] = useState<string>('2 x 25 lbs Nitrogen Flush Tins (Export Standard)');
  const [destinationPort, setDestinationPort] = useState<string>('');
  const [buyerName, setBuyerName] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submittedSuccess, setSubmittedSuccess] = useState<boolean>(false);
  const [copiedNotice, setCopiedNotice] = useState<boolean>(false);

  // Synchronize when selectedGrade changes from parent
  useEffect(() => {
    if (selectedGrade) setGrade(selectedGrade);
  }, [selectedGrade]);

  const gradesList = [
    'W-180 (King of Cashews)',
    'W-210 (Jumbo Wholes)',
    'W-240 (Large Wholes)',
    'W-320 (Standard Export Wholes)',
    'White Splits (JH)',
    'Large White Pieces (LWP)',
  ];

  const volumeOptions = [
    '1 x 20ft FCL Container (~16 MT / 700 Cartons)',
    '1 x 40ft FCL Container (~26 MT / 1150 Cartons)',
    'Trial Consignment (500 kg to 2 MT)',
    'Multiple Containers / Forward Supply Contract',
  ];

  const packagingOptions = [
    '2 x 25 lbs Nitrogen Flush Tins (Export Standard)',
    '1 x 50 lbs Vacuum Barrier Flexi-Pouches',
    'Custom Bulk Bagging / Retail Pack Specification',
  ];

  const validateForm = () => {
    const errs: { [key: string]: string } = {};
    if (!buyerName.trim()) errs.buyerName = 'Please enter your name.';
    if (!company.trim()) errs.company = 'Please enter your company or firm name.';
    if (!phone.trim()) errs.phone = 'Please provide a valid phone or WhatsApp number.';
    if (!email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid email address.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const constructRFQSummary = () => {
    return (
      `*EXPORT RFQ — SRI VENKATESWARA CASHEW MANUFACTURERS*\n` +
      `----------------------------------------\n` +
      `*Buyer Name:* ${buyerName}\n` +
      `*Company / Trading House:* ${company}\n` +
      `*Phone / WhatsApp:* ${phone}\n` +
      `*Email:* ${email}\n\n` +
      `*Desired Grade:* ${grade}\n` +
      `*Consignment Volume:* ${volume}\n` +
      `*Packaging Standard:* ${packaging}\n` +
      `*Destination Port:* ${destinationPort || 'FOB Chennai / Visakhapatnam'}\n` +
      `*Specific Inquiries:* ${message || 'Please provide current spot FOB/CIF proforma invoice.'}\n` +
      `----------------------------------------\n` +
      `*Factory Origin:* Nayenipalli Ind. Area, Vetapalem - 523 187, Andhra Pradesh, India`
    );
  };

  const handleWhatsAppDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmittedSuccess(true);
    const summary = constructRFQSummary();
    const encoded = encodeURIComponent(summary);
    const url = `https://wa.me/919246467237?text=${encoded}`;
    window.open(url, '_blank');
  };

  const handleEmailDispatch = () => {
    if (!validateForm()) return;

    setSubmittedSuccess(true);
    const subject = encodeURIComponent(
      `Commercial RFQ: Cashew Grade ${grade} - ${company || buyerName}`
    );
    const body = encodeURIComponent(
      `Dear Sri Venkateswara Cashew Manufacturers,\n\n` +
        `We are submitting an official inquiry for export cashew kernels:\n\n` +
        `Grade Required: ${grade}\n` +
        `Consignment Volume: ${volume}\n` +
        `Packaging Preference: ${packaging}\n` +
        `Target Destination Port: ${destinationPort || 'FOB Indian Seaport'}\n\n` +
        `Buyer Contact Information:\n` +
        `Name: ${buyerName}\n` +
        `Company: ${company}\n` +
        `Phone/WhatsApp: ${phone}\n` +
        `Email: ${email}\n\n` +
        `Additional Instructions / Specifications:\n` +
        `${message || 'Kindly issue current CIF/FOB proforma invoice with sailing dates.'}\n\n` +
        `Best regards,\n${buyerName}\n${company}`
    );
    window.location.href = `mailto:venkateswaracashew@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleCopySummary = () => {
    const summary = constructRFQSummary();
    navigator.clipboard.writeText(summary);
    setCopiedNotice(true);
    setTimeout(() => setCopiedNotice(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 w-full max-w-7xl mx-auto border-t border-stone-200">
      <div className="rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-10 md:p-12 shadow-elevated relative overflow-hidden">
        {/* Decorative ambient background accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-stone-200">
          <div>
            <div className="inline-flex items-center gap-2 border border-stone-200 bg-[#FAF8F2] px-3.5 py-1.5 rounded-full shadow-subtle mb-3">
              <SVCMLogo size={18} />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A5A35] font-bold">
                COMMERCIAL INQUIRIES &amp; RFQ DESK
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1C1917]">
              Request an Export{' '}
              <span className="italic text-[#183C2C]">Commercial Quotation.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-2xl">
              Submit your consignment parameters directly to our factory desk. We issue official proforma invoices with spot market pricing within 2 to 4 business hours.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-emerald-800 font-semibold bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-xl">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Factory Export Desk Active</span>
          </div>
        </div>

        {/* Form & Company Contact Split */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive RFQ Form (7 cols) */}
          <form onSubmit={handleWhatsAppDispatch} className="lg:col-span-7 space-y-5">
            {/* Buyer Identity Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                  Buyer Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  placeholder="e.g. David Henderson"
                  className={`w-full rounded-xl border bg-stone-50/60 p-3 text-xs sm:text-sm text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#183C2C] transition-all ${
                    errors.buyerName ? 'border-red-400 bg-red-50/30' : 'border-stone-300'
                  }`}
                />
                {errors.buyerName && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.buyerName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                  Company / Trading Firm <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Henderson Commodity Trading"
                  className={`w-full rounded-xl border bg-stone-50/60 p-3 text-xs sm:text-sm text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#183C2C] transition-all ${
                    errors.company ? 'border-red-400 bg-red-50/30' : 'border-stone-300'
                  }`}
                />
                {errors.company && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.company}</p>
                )}
              </div>
            </div>

            {/* Telecommunication Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. procurement@henderson.com"
                  className={`w-full rounded-xl border bg-stone-50/60 p-3 text-xs sm:text-sm text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#183C2C] transition-all ${
                    errors.email ? 'border-red-400 bg-red-50/30' : 'border-stone-300'
                  }`}
                />
                {errors.email && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                  Phone / WhatsApp <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +971 50 123 4567"
                  className={`w-full rounded-xl border bg-stone-50/60 p-3 text-xs sm:text-sm text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#183C2C] transition-all ${
                    errors.phone ? 'border-red-400 bg-red-50/30' : 'border-stone-300'
                  }`}
                />
                {errors.phone && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Consignment Specifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                  Cashew Grade Selection
                </label>
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="w-full rounded-xl border border-stone-300 bg-stone-50/60 p-3 text-xs sm:text-sm text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#183C2C] transition-all cursor-pointer"
                >
                  {gradesList.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                  Order Volume / Consignment Size
                </label>
                <select
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className="w-full rounded-xl border border-stone-300 bg-stone-50/60 p-3 text-xs sm:text-sm text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#183C2C] transition-all cursor-pointer"
                >
                  {volumeOptions.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                  Packaging Format
                </label>
                <select
                  value={packaging}
                  onChange={(e) => setPackaging(e.target.value)}
                  className="w-full rounded-xl border border-stone-300 bg-stone-50/60 p-3 text-xs sm:text-sm text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#183C2C] transition-all cursor-pointer"
                >
                  {packagingOptions.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                  Target Destination Seaport
                </label>
                <input
                  type="text"
                  value={destinationPort}
                  onChange={(e) => setDestinationPort(e.target.value)}
                  placeholder="e.g. Jebel Ali, Rotterdam, or FOB Chennai"
                  className="w-full rounded-xl border border-stone-300 bg-stone-50/60 p-3 text-xs sm:text-sm text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#183C2C] transition-all"
                >
                </input>
              </div>
            </div>

            {/* Custom Notes / Specifications */}
            <div>
              <label className="block text-xs font-mono font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                Specific Inquiries or Additional Instructions
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Mention any custom packing requirements, target delivery windows, or payment terms (LC/TT)..."
                className="w-full rounded-xl border border-stone-300 bg-stone-50/60 p-3 text-xs sm:text-sm text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#183C2C] transition-all"
              />
            </div>

            {/* Form Dispatch Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#16a34a] hover:bg-[#15803d] text-white p-3.5 text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Send RFQ via WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleEmailDispatch}
                className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#183C2C] hover:bg-[#0F2F22] text-white p-3.5 text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer"
              >
                <Mail className="w-4 h-4 text-amber-300" />
                <span>Submit Official Email RFQ</span>
              </button>
            </div>

            {/* Success Banner if Submitted */}
            <AnimatePresence>
              {submittedSuccess && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Your export RFQ details have been compiled and sent to the export desk.</span>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="flex items-center gap-1 font-mono text-[11px] font-bold text-emerald-800 bg-emerald-100/70 hover:bg-emerald-200 px-2.5 py-1 rounded-lg transition-colors cursor-pointer shrink-0"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedNotice ? 'Copied!' : 'Copy Summary'}</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </form>

          {/* Right Column: Verified Factory Contacts & Coordinates (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#FAF8F2] border border-stone-200 p-6 sm:p-8 space-y-6">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A5A35] font-bold block mb-1">
                FACTORY PROVENANCE
              </span>
              <h3 className="text-xl font-bold text-stone-900">
                Sri Venkateswara Cashew Manufacturers
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Quality Cashew Exporters &amp; Importers
              </p>
            </div>

            {/* Physical Address */}
            <div className="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-subtle space-y-1.5 text-xs text-stone-700">
              <div className="flex items-center gap-2 font-mono font-bold text-stone-900 text-[11px]">
                <MapPin className="w-4 h-4 text-[#C58A3A]" />
                <span>MANUFACTURING PLANT ADDRESS</span>
              </div>
              <p className="leading-relaxed pl-6">
                Nayenipalli Industrial Area, Sarvodaya Colony, Vetapalem - 523 187, Prakasam District, Andhra Pradesh, India.
              </p>
            </div>

            {/* Proprietor & Telecommunication Directory */}
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3.5 rounded-2xl bg-white border border-stone-200/90 shadow-subtle">
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block">
                  PROPRIETOR &amp; COMMERCIAL HEAD
                </span>
                <span className="font-sans font-bold text-sm text-stone-900 block mt-0.5">
                  V. Murali Krishna Murthy
                </span>
              </div>

              <div className="space-y-2 pt-1">
                <a
                  href="tel:9246467237"
                  className="flex items-center justify-between p-3 rounded-xl bg-white border border-stone-200 hover:border-amber-400 transition-colors"
                >
                  <span className="text-stone-500">Cell:</span>
                  <span className="font-bold text-stone-900">+91 9246467237</span>
                </a>

                <a
                  href="tel:9246467406"
                  className="flex items-center justify-between p-3 rounded-xl bg-white border border-stone-200 hover:border-amber-400 transition-colors"
                >
                  <span className="text-stone-500">Mobile:</span>
                  <span className="font-bold text-stone-900">+91 9246467406</span>
                </a>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-stone-200 text-stone-700">
                  <span className="text-stone-500">Office Landline:</span>
                  <span className="font-bold">08594-246237 / 246897</span>
                </div>

                <a
                  href="mailto:venkateswaracashew@gmail.com"
                  className="flex items-center justify-between p-3 rounded-xl bg-white border border-stone-200 hover:border-amber-400 transition-colors"
                >
                  <span className="text-stone-500">Official Email:</span>
                  <span className="font-bold text-stone-900 truncate max-w-[210px]">
                    venkateswaracashew@gmail.com
                  </span>
                </a>
              </div>
            </div>

            {/* Direct WhatsApp Badge */}
            <a
              href="https://wa.me/919246467237"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-[#16a34a] hover:bg-[#15803d] text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Chat Directly on WhatsApp</span>
              </div>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
