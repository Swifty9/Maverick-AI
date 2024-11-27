import { motion } from "framer-motion";
import { ScrollSection } from "../components/ScrollSection";
import { Footer } from "../components/Footer";
import { Shield, Zap, Users } from "lucide-react";
import {Link} from "react-router-dom";

export function About() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <ScrollSection className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-10" />
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-40"
          >
            <source src="https://www.apple.com/105/media/us/mac-pro/2019/466faaf3-8832-4c68-903f-74f86f58e0e5/anim/hero/large.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-20 text-center space-y-6 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Pioneering AI Safety
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-neutral-200 font-medium"
          >
            Building the future of content moderation through advanced artificial intelligence
          </motion.p>
        </div>
      </ScrollSection>

      {/* Our Story Section */}
      <ScrollSection className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold">Our Story</h2>
              <p className="text-xl text-neutral-400">
                Founded in 2024, Maverick AI emerged from a simple yet powerful idea: 
                to make the internet a safer place for everyone. Our team of AI researchers 
                and engineers came together with a shared vision of transforming content 
                moderation through cutting-edge artificial intelligence.
              </p>
              <p className="text-xl text-neutral-400">
                Today, we're proud to be at the forefront of AI safety, helping platforms 
                of all sizes maintain healthy online communities.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { number: "100M+", label: "Content Pieces Processed" },
                { number: "99.9%", label: "Accuracy Rate" },
                { number: "1000+", label: "Platforms Protected" },
                { number: "24/7", label: "Real-time Protection" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-neutral-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </ScrollSection>

      {/* Our Values */}
      <ScrollSection className="py-32 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              At Maverick AI, our values guide everything we do, from developing new features 
              to supporting our customers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Safety First",
                description: "We prioritize user safety and content integrity above all else."
              },
              {
                icon: Zap,
                title: "Innovation",
                description: "Constantly pushing the boundaries of what's possible with AI technology."
              },
              {
                icon: Users,
                title: "Community",
                description: "Building and supporting healthy online communities through advanced moderation."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 p-8 rounded-xl text-center hover:bg-white/10 transition-all duration-300"
              >
                <value.icon className="w-12 h-12 text-purple-400 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="text-neutral-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* Team Section */}
      <ScrollSection className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold mb-6">Backed by Experts</h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              Our team brings together expertise from leading tech companies and research institutions, 
              united by the mission to create safer online spaces.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "AI Research", "Engineering", "Safety", "Ethics"
            ].map((expertise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 p-6 rounded-xl text-center"
              >
                <div className="text-lg font-semibold text-purple-400 mb-2">{expertise}</div>
                <div className="text-sm text-neutral-400">Expert Team</div>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* CTA Section */}
      <ScrollSection className="py-32 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-neutral-400 mb-8">
            Join the growing number of platforms using Maverick AI to create safer online communities.
          </p>
          <Link to="/contact">
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Us
            </button>
          </Link>
        </div>
      </ScrollSection>

      <Footer />
    </main>
  );
}
