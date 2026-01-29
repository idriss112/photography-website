import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from './Lightbox';

const portfolioSections = {
  boxing: [
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/a6afe69dc__DSC3167.jpg', title: 'Ready', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/8739f5a7f__DSC3590.jpg', title: 'The Referee', aspect: 'wide' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/eda8e43b8__DSC36531.jpg', title: 'Front Row', aspect: 'wide' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/45fe9794b__DSC3679.jpg', title: 'Crowd Energy', aspect: 'wide' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/6b5890ee4__DSC3782.jpg', title: 'Guard', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/f74bcf7f3__DSC3999.jpg', title: 'Team Unity', aspect: 'wide' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/ef7f7bed0__DSC6276_1.jpg', title: 'In Red', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/b69956588__DSC6328_1.jpg', title: 'The Exchange', aspect: 'wide' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/d73a823c8__DSC6567_1.jpg', title: 'Victory', aspect: 'wide' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/d239d6ad1__DSC6622_1.jpg', title: 'Celebration', aspect: 'wide' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/93f8c33a0__DSC7464.jpg', title: 'The Detail', aspect: 'square' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/bfb0a5515__DSC7720.jpg', title: 'Judging', aspect: 'wide' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/1894ee742__DSC7721.jpg', title: 'Face Off', aspect: 'wide' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/0ee1169ec__DSC7872.jpg', title: 'Champions', aspect: 'wide' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/655749085__DSC7876.jpg', title: 'Pride', aspect: 'wide' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/5a0a6f607__DSC7887.jpg', title: 'Team Photo', aspect: 'wide' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/b9c8f2548_DSC032981.jpg', title: 'Training', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/50942f887_DSC033931.jpg', title: 'Heavy Bag', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/67734a20e_DSC034171.jpg', title: 'Power', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/be3e80190_DSC03828_2.jpg', title: 'Wrapping', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/8403618ca_DSC03877_2.jpg', title: 'Seated', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/1f24d9e5d_DSC03879_21.jpg', title: 'Checking Wraps', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/1975defa2_DSC03880_2.jpg', title: 'Focus', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/563ec5838_DSC03899_2.jpg', title: 'Glove Touch', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/45a409910_DSC03920_1.jpg', title: 'In Position', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/ee8ead764_DSC03932_2.jpg', title: 'Gloved Up', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/bd7171ba9_DSC03941_2.jpg', title: 'Shadow', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/29441dafb_DSC03944_3.jpg', title: 'Practice', aspect: 'wide' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/6fc916be4_DSC03967_2.jpg', title: 'Light & Dark', aspect: 'wide' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/dfc5e3a0f_DSC03968_2.jpg', title: 'Strike', aspect: 'wide' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/cedf07219_DSC03969_2.jpg', title: 'Speed Bag', aspect: 'square' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/8200d71ed_DSC03977_2.jpg', title: 'Crowd Scene', aspect: 'wide' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/16aeace67_DSC03981_2.jpg', title: 'Hanging Bag', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/65666021e_DSC03983_2.jpg', title: 'Equipment', aspect: 'wide' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/135565e86_DSC04001_2.jpg', title: 'The Stance', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/58103a5e6_DSC04008_2.jpg', title: 'Training Day', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/2d014f70d_DSC04018_2.jpg', title: 'Bag Work', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/952a7f0de_DSC04028_1.jpg', title: 'Kick', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/1b1d71776_DSC04030_1.jpg', title: 'Combination', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/55cb1abdd_DSC04150_2.jpg', title: 'Meditation', aspect: 'square' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/98695f310_DSC04169_2.jpg', title: 'Rest', aspect: 'square' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/751e70f23_DSC04171_2.jpg', title: 'Tired', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/7ec8c8c9c_DSC04208_2.jpg', title: 'Break Time', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/4638049c6_DSC04209_2.jpg', title: 'Catching Breath', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/44aa82327_DSC04223_2.jpg', title: 'Moment', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/c397945c8_DSC04224_2.jpg', title: 'Reflection', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/6320d660f_DSC04272_2.jpg', title: 'Aftermath', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/49d419473_DSC07184.jpg', title: 'Group Session', aspect: 'wide' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/74bd0dfb3_DSC07187.jpg', title: 'Focused', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/27216f80a_DSC07311.jpg', title: 'Team', aspect: 'wide' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/5ce6cc471_DSC07516.jpg', title: 'Planning', aspect: 'wide' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/c7c5959c6_DSC07597.jpg', title: 'Coach', aspect: 'wide' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/0758eb5ac_DSC07627_1.jpg', title: 'Photography', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/72fd94e4a_DSC07780_1.jpg', title: 'Defense', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/2465e18f0_DSC078101.jpg', title: 'Training Round', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/0be152fed_DSC07904.jpg', title: 'Equipment Ready', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/bcad9e6f1_DSC07933_1.jpg', title: 'Squad', aspect: 'wide' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/1776bd6c8_DSC08276.jpg', title: 'In Motion', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/dcfd8f87c_IMG_59991.jpg', title: 'Working the Bag', aspect: 'tall' }
  ],
  portraits: [
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/c99f81fa9_DSC03487_11.jpg', title: 'The Writer', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/28efeadf0_DSC03586_1.jpg', title: 'Genuine Smile', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/da8f39b4d_DSC03599_1.jpg', title: 'Side Profile', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/53fe0ddf1_DSC03600_1.jpg', title: 'In Thought', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/c2b2ebf60_DSC03617_3.jpg', title: 'The Call', aspect: 'square' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/42d31170e_DSC03654_3.jpg', title: 'Seated Pose', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/b85ab89fe_DSC03703_2.jpg', title: 'Vibrant', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/5f039cf83_DSC03704_2.jpg', title: 'Dancing', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/8a00842f4_DSC086331.jpg', title: 'Relaxed', aspect: 'wide' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/1016e0297_DSC08636.jpg', title: 'Architectural', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/6960f2fdc_DSC086391.jpg', title: 'Frame', aspect: 'square' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/7d375c1bb_DSC08661.jpg', title: 'Distinguished', aspect: 'square' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/3736de419_DSC08729_11.jpg', title: 'Poised', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/506429808_DSC087901.jpg', title: 'Seated', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/1d33718f1_DSC088121.jpg', title: 'Connection', aspect: 'wide' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/44e3932e8_DSC08904.jpg', title: 'Elegance', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/ad1ee8154_DSC089051.jpg', title: 'Side Glance', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/58de203a5_DSC08946.jpg', title: 'Turned Away', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/d079993ec_DSC089541.jpg', title: 'Laughter', aspect: 'wide' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/f743f28a9_DSC089581.jpg', title: 'On the Stool', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/f1914434d_DSC089661.jpg', title: 'Couple', aspect: 'wide' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/5e7e52eb0_DSC09070.jpg', title: 'Game Face', aspect: 'tall' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/7ab4fcb16_DSC09197.jpg', title: 'Natural Light', aspect: 'wide' }
  ]
};

export default function PortfolioGrid() {
  const [activeSection, setActiveSection] = useState('boxing');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const imagesPerPage = 12;
  const portfolioImages = portfolioSections[activeSection];
  const totalPages = Math.ceil(portfolioImages.length / imagesPerPage);
  
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const paginatedImages = portfolioImages.slice(startIndex, endIndex);

  const openLightbox = (index) => {
    const actualIndex = startIndex + index;
    setCurrentIndex(actualIndex);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length);
  };

  return (
    <>
      <div className="flex items-center gap-12 mb-12 md:mb-16">
        <button
          onClick={() => {
            setActiveSection('boxing');
            setCurrentPage(1);
          }}
          className={`text-lg md:text-xl font-light tracking-wide transition-all duration-300 relative ${
            activeSection === 'boxing' ? 'text-white' : 'text-white/30 hover:text-white/60'
          }`}
        >
          Boxing
          {activeSection === 'boxing' && (
            <motion.div
              layoutId="activeSection"
              className="absolute -bottom-2 left-0 right-0 h-px bg-white"
              transition={{ duration: 0.3 }}
            />
          )}
        </button>
        <button
          onClick={() => {
            setActiveSection('portraits');
            setCurrentPage(1);
          }}
          className={`text-lg md:text-xl font-light tracking-wide transition-all duration-300 relative ${
            activeSection === 'portraits' ? 'text-white' : 'text-white/30 hover:text-white/60'
          }`}
        >
          Portraits
          {activeSection === 'portraits' && (
            <motion.div
              layoutId="activeSection"
              className="absolute -bottom-2 left-0 right-0 h-px bg-white"
              transition={{ duration: 0.3 }}
            />
          )}
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeSection}-${currentPage}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6"
        >
          {paginatedImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="break-inside-avoid group cursor-pointer relative overflow-hidden"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{
                    aspectRatio: image.aspect === 'tall' ? '3/4' : image.aspect === 'wide' ? '4/3' : '1/1'
                  }}
                />
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
                
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-sm tracking-[0.3em] uppercase font-light">
                    {image.title}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-6 mt-16 md:mt-24"
        >
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className={`text-sm tracking-[0.2em] uppercase font-light transition-all duration-300 ${
              currentPage === 1 ? 'text-white/20 cursor-not-allowed' : 'text-white/50 hover:text-white'
            }`}
          >
            Previous
          </button>

          <div className="flex items-center gap-4">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`relative text-sm font-light transition-all duration-300 ${
                  currentPage === pageNum ? 'text-white' : 'text-white/30 hover:text-white/60'
                }`}
              >
                {pageNum}
                {currentPage === pageNum && (
                  <motion.div
                    layoutId="activePage"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-white"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className={`text-sm tracking-[0.2em] uppercase font-light transition-all duration-300 ${
              currentPage === totalPages ? 'text-white/20 cursor-not-allowed' : 'text-white/50 hover:text-white'
            }`}
          >
            Next
          </button>
        </motion.div>
      )}

      <Lightbox
        images={portfolioImages}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
}