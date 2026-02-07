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
                                src="https://sjuvtplxpqsjekqwxmml.supabase.co/storage/v1/object/public/About%20section/Best_Photgrapher_Montreal.jpg"
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
                                My name is Hernane Ferreira, and I’m the eye behind Half Raw Motion.
                                Before it became a photography brand, it was a way I saw people. I’ve always been drawn to the moments most overlook the breath before impact, the focus behind tired eyes, the split second when someone is fully present, fully human, and fully in motion. That’s where truth lives. That’s where I aim my camera.
                            </p>

                            <p>
                                Half Raw Motion was born from that obsession, long before it was ever a camera.
                                HALF is the mindset: living as if our goals are already in motion, mentally halfway there because once one summit is reached, the next one is already calling. Progress is the default. Complacency has no place. RAW is the way we see: unfiltered, unstaged, honest. The moments that are too real, too fast, too human to fake sweat, breath, tension, release. Authenticity in motion.
                            </p>

                            <p>
                                And MOTION is where everything comes together.
                                No one is finished. No one is final. The people in front of the lens are not subjects they are individuals in progress, in pursuit, in transformation. Half Raw Motion exists to capture that exact point: raw potential, while it’s still unfolding. These aren’t posed images. They’re moments seized before they disappear. Because opportunity doesn’t wait—and neither do we. More than photography, it’s a philosophy of becoming, documented.
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


                    </motion.div>
                </div>
            </div>
        </div>
    );
}