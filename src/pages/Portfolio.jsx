import { motion } from 'framer-motion';
import PortfolioGrid from '../components/portfolio/PortfolioGrid.jsx';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight mb-6">
            Portfolio
          </h1>
        </motion.div>

        <PortfolioGrid />
      </div>
    </div>
  );
}