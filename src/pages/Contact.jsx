import { motion } from 'framer-motion';
import { Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';

export default function Contact() {
    return (
        <div className="min-h-screen bg-[#050505] pt-32 pb-24">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left Column - Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight mb-6">
                            Let's Create
                        </h1>

                        <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed mb-12">
                            Ready to capture something extraordinary? Whether it's a boxing session,
                            cinematic portrait, or a unique creative vision — I'd love to hear from you.
                        </p>

                        {/* Direct Contact */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xs tracking-[0.3em] uppercase text-white/30 mb-4">
                                    Email
                                </h3>
                                <a
                                    href="mailto:hello@halfrawmotion.com"
                                    className="text-white text-lg md:text-xl font-light hover:text-white/70 transition-colors inline-flex items-center gap-2 group"
                                >
                                    hello@halfrawmotion.com
                                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </div>

                            <div>
                                <h3 className="text-xs tracking-[0.3em] uppercase text-white/30 mb-4">
                                    Social
                                </h3>
                                <div className="space-y-3">
                                    <a
                                        href="https://www.instagram.com/half_raw_motion/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white text-lg font-light hover:text-white/70 transition-colors inline-flex items-center gap-3 group"
                                    >
                                        <Instagram className="w-5 h-5" strokeWidth={1.5} />
                                        @half_raw_motion
                                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                    <br />
                                    <a
                                        href="https://www.facebook.com/photohrm/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white text-lg font-light hover:text-white/70 transition-colors inline-flex items-center gap-3 group"
                                    >
                                        <Facebook className="w-5 h-5" strokeWidth={1.5} />
                                        @photohrm
                                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xs tracking-[0.3em] uppercase text-white/30 mb-4">
                                    Based In
                                </h3>
                                <p className="text-white/60 text-lg font-light">
                                    Montreal, QC, Canada

                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:pt-8"
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}