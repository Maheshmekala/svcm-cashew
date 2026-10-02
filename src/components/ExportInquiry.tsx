import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, MessageSquare, CheckCircle, ShieldCheck, MapPin } from 'lucide-react';
import { SVCMLogo } from './SVCMLogo';

interface ExportInquiryProps {
  selectedGrade?: string;
}

export const ExportInquiry: React.FC<ExportInquiryProps> = ({ selectedGrade = 'W-180' }) => {
  const [grade, setGrade] = useState<string>(selectedGrade);
  const [volume, setVolume] = useState<string>('1 x 20ft FCL Container (~16 MT)');
  const [packaging, setPackaging] = useState<string>('2 x 25 lbs Nitrogen Flush Tins');
  const [port, setPort] = useState<string>('');
  const [buyerName, setBuyerName] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Sync if selectedGrade prop changes
  React.useEffect(() => {
    if (selectedGrade) setGrade(selectedGrade);
  }, [selectedGrade]);

  const gradesList = ['W-180', 'W-210', 'W-240', 'W-320', 'White Splits (JH)', 'CNSL Crude Oil'];
  const volumeOptions = [
    'Trial Consignment (500 kg - 2 MT)',
    '1 x 20ft FCL Container (~16 MT / 700 Cartons)',
    '2 x 40ft FCL Containers (~26 MT / 1150 Cartons)',
    'Custom Volume / Multiple Containers',
  ];
  const packagingOptions = [
    '2 x 25 lbs Nitrogen Flush Tins (Export Standard)',
    '1 x 50 lbs Multilayer Vacuum Barrier Flexi-Pouches',
    'Custom Bulk Bagging / Retail Pack',
  ];

  const generateWhatsAppMessage = () => {
    const text = `*EXPORT ORDER INQUIRY — SRI VENKATESWARA CASHEW MANUFACTURERS*
----------------------------------------
*Buyer Name:* ${buyerName || 'Buyer'}
*Company:* ${company || 'N/A'}
*WhatsApp/Phone:* ${phone || 'N/A'}
*Buyer Email:* ${email || 'N/A'}

*Desired Grade:* ${grade}
*Order Volume:* ${volume}
*Packaging Preference:* ${packaging}
*Destination Port:* ${port || 'FOB Chennai / Vizag'}
*Custom Notes:* ${message || 'Please share current spot pricing & proforma invoice.'}
----------------------------------------
*Origin:* Vetapalem, Prakasam Dist, Andhra Pradesh`;

    return encodeURIComponent(text);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const encoded = generateWhatsAppMessage();
    const url = `https://wa.me/919246467237?text=${encoded}`;
    window.open(url, '_blank');
  };

  const handleEmailSubmit = () => {
    setSubmitted(true);
    const subject = encodeURIComponent(
      `Export Quotation Request: Grade ${grade} - ${company || buyerName || 'Importer'}`
    );
    const body = encodeURIComponent(
      `Dear Sri Venkateswara Cashew Manufacturers,\n\nWe are submitting an official inquiry for export cashew kernels:\n\n` +
        `Grade: ${grade}\n` +
        `Consignment Volume: ${volume}\n` +
        `Packaging: ${packaging}\n` +
        `Destination Port: ${port || 'FOB Indian Port'}\n` +
        `Buyer Name: ${buyerName}\n` +
        `Company: ${company}\n` +
        `Phone/WhatsApp: ${phone}\n\n` +
        `Additional Specifications: ${message}\n\n` +
        `Please provide your current CIF/FOB proforma invoice.\n\n` +
        `Best regards,\n${buyerName}\n${company}`
    );
    window.location.href = `mailto:venkateswaracashew@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="inquiry" className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 w-full max-w-7xl mx-auto">
      <div className="rounded-3xl border border-stone-200/90 bg-white/95 backdrop-blur-xl p-6 sm:p-10 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] relative overflow-hidden">
        {/* Subtle decorative background watermarks */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-200">
          <div className="flex items-start gap-4">
            <SVCMLogo size={40} className="shrink-0" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#b45309] font-bold">
                  DIRECT EXPORT DESK • VETAPALEM
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mt-1">
                Request an Export Quotation (RFQ).
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <motion.a
              href="tel:9246467237"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 rounded-xl bg-stone-100 hover:bg-stone-200 border border-stone-200 px-4 py-2.5 text-xs font-mono font-semibold text-stone-800 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#b45309]" />
              <span>Desk: +91 9246467237</span>
            </motion.a>
          </div>
        </div>

        {/* RFQ Form Grid */}
        <form onSubmit={handleWhatsAppSubmit} className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Column 1 & 2: Order Specifications */}
          <div className="lg:col-span-2 space-y-6">
            {/* Step 1: Grade Selection */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-700 mb-2">
                1. Select Desired Cashew Grade
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {gradesList.map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGrade(g)}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-mono font-semibold transition-all cursor-pointer text-center ${
                      grade === g
                        ? 'bg-stone-900 text-white border-stone-900 shadow-md'
                        : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Volume & Packaging */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-700 mb-2">
                  2. Consignment Volume
                </label>
                <select
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className="w-full rounded-xl border border-stone-300 bg-stone-50 p-3 text-xs font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  {volumeOptions.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-700 mb-2">
                  3. Export Packaging Standard
                </label>
                <select
                  value={packaging}
                  onChange={(e) => setPackaging(e.target.value)}
                  className="w-full rounded-xl border border-stone-300 bg-stone-50 p-3 text-xs font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  {packagingOptions.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 3: Destination Port & Notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-700 mb-2">
                  4. Destination Port (CIF/FOB)
                </label>
                <input
                  type="text"
                  placeholder="e.g. CIF Rotterdam, Dubai Jebel Ali, New York"
                  value={port}
                  onChange={(e) => setPort(e.target.value)}
                  className="w-full rounded-xl border border-stone-300 bg-stone-50 p-3 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Buyer WhatsApp / Direct Phone
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +1 555-0199 or +91 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full rounded-xl border border-stone-300 bg-stone-50 p-3 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* Buyer Contact Rows */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Buyer Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  required
                  className="w-full rounded-xl border border-stone-300 bg-stone-50 p-3 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  placeholder="Trading / Import Firm"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full rounded-xl border border-stone-300 bg-stone-50 p-3 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Buyer Email
                </label>
                <input
                  type="email"
                  placeholder="buyer@importer.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-stone-300 bg-stone-50 p-3 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-700 mb-2">
                Special Specifications or Custom Requirements
              </label>
              <textarea
                rows={2}
                placeholder="Specify preferred delivery dates, private labeling requirements, or contract frequency..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-xl border border-stone-300 bg-stone-50 p-3 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          {/* Column 3: Instant Submission Box */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-[#b45309]" />
                <h3 className="font-bold text-stone-900 text-base">
                  Direct Factory Quote
                </h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed mb-6">
                Quotes are prepared directly by <strong>V. Murali Krishna Murthy</strong> based on live container spot rates and current raw cashew import yields.
              </p>

              {/* Order Summary Pill */}
              <div className="p-3.5 rounded-xl bg-white border border-amber-200/80 space-y-1.5 font-mono text-[11px] mb-6 shadow-sm">
                <div className="flex justify-between">
                  <span className="text-stone-500">Grade:</span>
                  <span className="font-bold text-stone-900">{grade}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Volume:</span>
                  <span className="font-medium text-stone-900 truncate max-w-[170px]">{volume}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Packing:</span>
                  <span className="font-medium text-stone-900 truncate max-w-[170px]">{packaging}</span>
                </div>
                <div className="flex justify-between text-emerald-700 font-semibold pt-1 border-t border-stone-100">
                  <span>Inspection:</span>
                  <span>100% Quality Audited</span>
                </div>
              </div>
            </div>

            {/* Submission Actions */}
            <div className="space-y-3">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#16a34a] hover:bg-[#15803d] text-white py-3.5 px-4 text-xs font-bold transition-all duration-300 shadow-md shadow-emerald-600/20 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Send RFQ via WhatsApp</span>
              </motion.button>

              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleEmailSubmit}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white py-3 px-4 text-xs font-semibold transition-all duration-300 shadow-sm cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Official RFQ Email</span>
              </motion.button>

              {submitted && (
                <div className="flex items-center gap-2 text-emerald-800 text-xs font-mono justify-center mt-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Inquiry dispatched to V. Murali Krishna Murthy</span>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-amber-200/80 text-[10px] text-stone-500 font-mono flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#b45309] shrink-0" />
              <span>Plant: Nayenipalli Industrial Area, Vetapalem-523187</span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
