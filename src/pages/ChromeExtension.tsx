import { motion } from "framer-motion";
import { Chrome, Shield, Zap, Users, CheckCircle, ArrowRight } from "lucide-react";

export function ChromeExtension() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent"
            >
              Maverick <span className="text-purple-400">AI</span> Extension
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-neutral-300"
            >
              Real-time content moderation right in your browser
            </motion.p>
          </div>

          {/* Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-20"
          >
            <a
              href="https://chrome.google.com/webstore"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm px-6 py-3 rounded-full transition-all duration-300"
            >
              <Chrome className="w-6 h-6 text-purple-400" />
              <span className="font-medium">Download for Chrome</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Real-time Protection",
                description: "Instant content analysis and moderation as you browse"
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Powered by advanced AI for quick, accurate results"
              },
              {
                icon: Users,
                title: "Community Safety",
                description: "Keep your online spaces safe and welcoming"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-neutral-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="space-y-12">
            {[
              "Install the extension from Chrome Web Store",
              "Configure your moderation preferences",
              "Browse with confidence knowing content is being monitored",
              "Receive instant alerts for potentially harmful content"
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-purple-400/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                </div>
                <span className="text-lg text-neutral-200">{step}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 