import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
            >
                <CheckCircle className="w-16 h-16 text-white/60 mx-auto mb-6" strokeWidth={1} />
                <h3 className="text-2xl text-white font-light mb-4">Message Sent</h3>
                <p className="text-white/40">Thank you for reaching out. I'll get back to you soon.</p>
                <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-white/50 text-sm tracking-widest uppercase hover:text-white transition-colors"
                >
                    Send Another Message
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <label className="block text-white/40 text-xs tracking-[0.2em] uppercase mb-3">
                        Name
                    </label>
                    <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 py-4 text-white placeholder:text-white/20 focus:border-white/50 focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors w-full outline-none"
                        placeholder="Your name"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <label className="block text-white/40 text-xs tracking-[0.2em] uppercase mb-3">
                        Email
                    </label>
                    <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 py-4 text-white placeholder:text-white/20 focus:border-white/50 focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors w-full outline-none"
                        placeholder="your@email.com"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <label className="block text-white/40 text-xs tracking-[0.2em] uppercase mb-3">
                        Message
                    </label>
                    <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={5}
                        className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 py-4 text-white placeholder:text-white/20 focus:border-white/50 focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors resize-none w-full outline-none"
                        placeholder="Tell me about your project..."
                    />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-white text-black hover:bg-white/90 px-12 py-6 text-sm tracking-[0.2em] uppercase rounded-none transition-all duration-300 disabled:opacity-50"
                >
                    {isSubmitting ? (
                        <span className="flex items-center gap-3">
                            <div className="w-4 h-4 border border-black/30 border-t-black rounded-full animate-spin" />
                            Sending
                        </span>
                    ) : (
                        <span className="flex items-center gap-3">
                            Send Message
                            <Send className="w-4 h-4" />
                        </span>
                    )}
                </Button>
            </motion.div>
        </form>
    );
}