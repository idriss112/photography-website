import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-[#050505]">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1920&q=90"
                    alt="Boxing photography"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="max-w-4xl"
                >
                    <motion.p
                        initial={{ opacity: 0, letterSpacing: '0.3em' }}
                        animate={{ opacity: 1, letterSpacing: '0.5em' }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                        className="text-white/50 text-xs md:text-sm tracking-[0.5em] uppercase mb-8"
                    >
                        Boxing Photography & Cinematic Portraits
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-none mb-6"
                    >
                        <span className="block">Raw.</span>
                        <span className="block mt-2 md:mt-4">Intense.</span>
                        <span className="block mt-2 md:mt-4 text-white/80">Unfiltered.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="text-white/40 text-lg md:text-xl font-light mt-8 max-w-xl mx-auto leading-relaxed"
                    >
                        Capturing the unfiltered emotion and intensity of motion
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-12"
                    >
                        <Link
                            to={createPageUrl('Portfolio')}
                            className="px-10 py-4 bg-white text-black text-sm tracking-[0.2em] uppercase hover:bg-white/90 transition-all duration-300"
                        >
                            View Work
                        </Link>
                        <Link
                            to={createPageUrl('Contact')}
                            className="px-10 py-4 border border-white/30 text-white text-sm tracking-[0.2em] uppercase hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                        >
                            Contact
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-px h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent"
                />
            </motion.div>
        </section>
    );
}