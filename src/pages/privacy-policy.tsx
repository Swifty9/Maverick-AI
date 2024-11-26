import { motion } from 'framer-motion';
import { useState } from 'react';
import { sectionData } from '../components/sectionData';
import { ChevronDown } from 'lucide-react'; // Für den Pfeil

export function PrivacyPolicy() {
    const [visibility, setVisibility] = useState<{ [key: string]: boolean }>(
        Object.fromEntries(sectionData.map((section) => [section.id, false]))
    );

    const toggleVisibility = (sectionId: string) => {
        setVisibility((prev) => ({
            ...prev,
            [sectionId]: !prev[sectionId],
        }));
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="container mx-auto px-6 py-20">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
                    Privacy Policy
                </h1>
                <p className="text-xl text-gray-300 mb-12">
                    This Privacy Policy explains how we collect, use, and protect your information.
                </p>
            </div>

            {sectionData.map((section) => (
                <motion.div
                    key={section.id}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5 }}
                    variants={sectionVariants}
                    className="max-w-4xl mx-auto mt-8 bg-white/5 p-6 rounded-xl transition-transform transform hover:scale-102 hover:shadow-lg hover:bg-white/10 focus:scale-103 focus:shadow-lg cursor-pointer"
                    onClick={() => toggleVisibility(section.id)}
                >
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                            <div
                                className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                                <section.icon className={`h-6 w-6 ${section.color}`} />
                            </div>
                            <h3 className="text-xl font-semibold">{section.title}</h3>
                        </div>
                        <ChevronDown
                            className={`h-6 w-6 text-gray-400 transition-transform ${
                                visibility[section.id] ? 'rotate-180' : ''
                            }`}
                        />
                    </div>
                    <p className="text-gray-400">{section.description}</p>

                    {visibility[section.id] && (
                        <div
                            className="mt-4 text-gray-300"
                            dangerouslySetInnerHTML={{ __html: section.details }}
                        />
                    )}
                </motion.div>
            ))}
        </div>
    );
}


