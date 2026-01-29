import { motion } from 'framer-motion';

export default function About() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="relative overflow-hidden">
                            <img
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695fc470980ee8826b6ec90b/3503aa5b2_IMG_45091.jpg"
                                alt="Behind the scenes"
                                className="w-full object-cover aspect-[3/4]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>

                        <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-white/10" />
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="order-1 lg:order-2"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight mb-8">
                            About
                        </h1>

                        <div className="space-y-6 text-white/60 text-lg leading-relaxed font-light">
                            <p>
                                Half Raw Motion was born from a fascination with the unfiltered moments
                                that exist between the posed and the perfect — those split seconds where
                                emotion transcends the frame and becomes something visceral.
                            </p>

                            <p>
                                My work lives in the intersection of sports photography and cinematic
                                portraiture. I chase the tension in a boxer's stance before the bell,
                                the determination etched into sweat-soaked features, and the raw
                                vulnerability that surfaces in moments of triumph and defeat.
                            </p>

                            <p>
                                Every photograph I create is an attempt to freeze motion while preserving
                                its energy — to capture not just what happened, but how it felt to be there.
                            </p>
                        </div>

                        {/* Philosophy Section */}
                        <div className="mt-16 pt-16 border-t border-white/10">
                            <h2 className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">
                                The Philosophy
                            </h2>

                            <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed">
                                "Half Raw" — the space between
                                <span className="text-white/40"> polished perfection </span>
                                and
                                <span className="text-white/40"> unfiltered reality</span>.
                                Where the most powerful stories exist.
                            </blockquote>
                        </div>

                        {/* Stats/Highlights */}
                        <div className="grid grid-cols-3 gap-8 mt-16">
                            <div>
                                <div className="text-3xl md:text-4xl font-light text-white mb-2">8+</div>
                                <div className="text-xs tracking-[0.2em] uppercase text-white/40">Years</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-light text-white mb-2">200+</div>
                                <div className="text-xs tracking-[0.2em] uppercase text-white/40">Sessions</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-light text-white mb-2">50+</div>
                                <div className="text-xs tracking-[0.2em] uppercase text-white/40">Athletes</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}