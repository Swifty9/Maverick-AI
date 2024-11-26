import { motion } from "framer-motion";
import { ContactForm } from "../components/ContactForm";

export function Contact() {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <main className="container mx-auto px-6 py-20">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-yellow-500 text-transparent bg-clip-text">
                   Get In Touch With Us
                </h1>
                <p className="text-xl text-gray-300 mb-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                </p>
            </div>

            <motion.div
                className="max-w-xl mx-auto bg-white/5 p-6 rounded-lg shadow-md"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5 }}
            >
                <ContactForm />
            </motion.div>
        </main>
    );
}
