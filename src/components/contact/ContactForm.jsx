import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Booking Number Generator Function
const generateBookingNumber = (name) => {
    // Remove spaces and special characters, keep only letters
    const cleanName = name.replace(/[^a-zA-Z]/g, '');

    // Get first 3 letters and convert to uppercase
    let prefix = '';
    if (cleanName.length >= 3) {
        prefix = cleanName.substring(0, 3).toUpperCase();
    } else if (cleanName.length > 0) {
        prefix = (cleanName + 'XXX').substring(0, 3).toUpperCase();
    } else {
        prefix = 'XXX';
    }

    // Generate 5 random numbers (00000 to 99999)
    const randomNumbers = Math.floor(Math.random() * 100000).toString().padStart(5, '0');

    return `${prefix}${randomNumbers}`;
};

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [bookingNumber, setBookingNumber] = useState('');
    const [error, setError] = useState('');

    //  actual EmailJS credentials
    const EMAILJS_SERVICE_ID = 'service_x4fxgq4';
    const EMAILJS_TEMPLATE_ID = 'template_x7ha2ia';
    const EMAILJS_PUBLIC_KEY = 'BGXrLXmiXotzHo0cp';

    //  Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzbIMivF0kZlbKb1oxcQX6hE0pom85-Q0HKJHCUbAm-hKexsd-aeHZR6AnueJVUA8sc/exec';

    const sendToGoogleSheets = async (data) => {
        try {
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            console.log('Data sent to Google Sheets');
            return true;
        } catch (error) {
            console.error('Error sending to Google Sheets:', error);
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            // Generate booking number
            const newBookingNumber = generateBookingNumber(formData.name);
            setBookingNumber(newBookingNumber);

            // Prepare template parameters for EmailJS
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                from_phone: formData.phone,
                message: formData.message,
                booking_number: newBookingNumber,
                to_email: 'your-email@example.com', // Your email where you want to receive messages
            };

            // Send email via EmailJS
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY
            );

            // Send to Google Sheets with booking number
            await sendToGoogleSheets({
                bookingNumber: newBookingNumber,
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                message: formData.message
            });

            // Success - reset form and show success message
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', phone: '', message: '' });

        } catch (error) {
            console.error('Error submitting form:', error);
            setIsSubmitting(false);
            setError('Something went wrong. Please try again or email me directly.');
        }
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
                <p className="text-white/40 mb-6">Thank you for reaching out. I'll get back to you soon.</p>

                {/* Booking Number Display */}
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8 max-w-sm mx-auto">
                    <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-2">
                        Your Booking Number
                    </p>
                    <p className="text-white text-2xl font-light tracking-wider">
                        {bookingNumber}
                    </p>
                    <p className="text-white/30 text-xs mt-3">
                        Save this for your records
                    </p>
                </div>

                <button
                    onClick={() => {
                        setIsSubmitted(false);
                        setBookingNumber('');
                    }}
                    className="mt-8 text-white/50 text-sm tracking-widest uppercase hover:text-white transition-colors"
                >
                    Send Another Message
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            {error && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-start gap-3"
                >
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-red-200 text-sm">{error}</p>
                </motion.div>
            )}

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
                        placeholder="contact@halfrawmotion.com"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <label className="block text-white/40 text-xs tracking-[0.2em] uppercase mb-3">
                        Phone
                    </label>
                    <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 py-4 text-white placeholder:text-white/20 focus:border-white/50 focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors w-full outline-none"
                        placeholder="+1 (514) 123-4567"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
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
                transition={{ duration: 0.5, delay: 0.4 }}
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
