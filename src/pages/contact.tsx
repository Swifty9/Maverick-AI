import { motion } from "framer-motion";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer.tsx";

export function Contact() {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow container mx-auto px-6 py-20">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-yellow-500 text-transparent bg-clip-text">
                        Get In Touch With Us
                    </h1>
                    <p className="text-xl text-gray-300 mb-12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <motion.div
                    className="max-w-2xl mx-auto bg-white/5 backdrop-blur-md p-8 rounded-xl shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5 }}
                >
                    <ContactForm />
                </motion.div>
            </main>
            <Footer />
        </div>
    );
}
