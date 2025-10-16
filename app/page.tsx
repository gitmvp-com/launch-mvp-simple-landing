"use client";

import { useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link as ScrollLink } from 'react-scroll';
import { 
  FaGithub, 
  FaDiscord, 
  FaProductHunt,
  FaXTwitter,
  FaYoutube
} from 'react-icons/fa6';
import { Lock, CreditCard, Moon } from 'lucide-react';
import { TypewriterEffect } from '@/components/TypewriterEffect';

const workflowSteps = [
  {
    title: "Step One",
    description: "First step of your workflow",
  },
  {
    title: "Step Two",
    description: "Second step of your workflow",
  },
  {
    title: "Step Three",
    description: "Third step of your workflow",
  },
  {
    title: "Step Four",
    description: "Fourth step of your workflow",
  }
];

const platforms = [
  { name: 'GitHub', icon: FaGithub },
  { name: 'Discord', icon: FaDiscord },
  { name: 'Product Hunt', icon: FaProductHunt },
  { name: 'X (Twitter)', icon: FaXTwitter },
  { name: 'YouTube', icon: FaYoutube }
];

const workflowSections = [
  {
    id: "overview",
    title: "Overview",
    description: "Everything you need to build modern SaaS applications",
    bgColor: "bg-white dark:bg-[#0B1120]"
  },
  {
    id: "features",
    title: "Features",
    description: "Powerful features to enhance your application",
    bgColor: "bg-slate-50 dark:bg-[#0B1120]",
    metrics: [
      { label: "Components", value: "50+" },
      { label: "TypeScript", value: "100%" },
      { label: "Dark Mode", value: "Built-in" }
    ]
  },
  {
    id: "showcase",
    title: "Showcase",
    description: "See what you can build with this template",
    bgColor: "bg-white dark:bg-[#0B1120]"
  },
  {
    id: "pricing",
    title: "Pricing",
    description: "Simple, transparent pricing for your needs",
    bgColor: "bg-slate-50 dark:bg-[#0B1120]"
  }
];

const featureCards = [
  {
    title: "Dark Mode",
    description: "Built-in theme management with system preference detection",
    icon: <Moon className="h-6 w-6 text-primary" />,
    bgGradient: "from-purple-500/10 to-blue-500/10"
  },
  {
    title: "Animations",
    description: "Smooth animations powered by Framer Motion",
    icon: <CreditCard className="h-6 w-6 text-primary" />,
    bgGradient: "from-green-500/10 to-emerald-500/10"
  },
  {
    title: "Responsive",
    description: "Mobile-first design that works on all devices",
    icon: <Lock className="h-6 w-6 text-primary" />,
    bgGradient: "from-orange-500/10 to-red-500/10"
  }
];

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const { scrollYProgress } = useScroll();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120] relative">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-darker/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 overflow-x-auto hide-scrollbar">
            {workflowSections.map((section, index) => (
              <ScrollLink
                key={section.id}
                to={section.id}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onSetActive={() => setActiveSection(section.id)}
                className="flex items-center cursor-pointer group min-w-fit mx-4 first:ml-0 last:mr-0"
              >
                <div className="relative">
                  <span 
                    className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 transition-all duration-300
                      ${activeSection === section.id 
                      ? 'bg-primary dark:bg-primary-light text-white' 
                      : 'bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light group-hover:bg-primary/20 dark:group-hover:bg-primary-light/20'}`}
                  >
                    {index + 1}
                  </span>
                </div>
                <span 
                  className={`text-sm font-medium transition-colors duration-300 hidden md:block whitespace-nowrap
                    ${activeSection === section.id 
                    ? 'text-primary dark:text-primary-light' 
                    : 'text-slate-600 dark:text-slate-300 group-hover:text-primary dark:group-hover:text-primary-light'}`}
                >
                  {section.title}
                </span>
              </ScrollLink>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="overview" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 to-accent-light/10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative pt-20 pb-16 sm:pb-24">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">
                <span className="block">Modern Landing Page</span>
                <span className="block text-primary dark:text-primary-light">MVP Template</span>
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
                A beautiful, responsive landing page with dark mode and smooth animations.
              </p>
              
              <div className="mt-10 flex gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 primary-button shadow-lg hover:shadow-xl"
                >
                  Get Started
                </motion.button>
                <button className="px-8 py-3 secondary-button shadow-lg hover:shadow-xl">
                  Learn More
                </button>
              </div>
            </div>

            {/* Preview Section */}
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative">
                <pre className="relative rounded-xl bg-slate-900 p-8 shadow-2xl">
                  <code className="text-sm sm:text-base text-slate-100">
                    <TypewriterEffect text={`// 🚀 Modern MVP Template\nimport { useTheme } from 'next-themes';\n\nexport const App = () => {\n  const { theme } = useTheme();\n  \n  return (\n    <div className="app">\n      <h1>Launch Your MVP</h1>\n      <p>{theme} mode active</p>\n    </div>\n  );\n};`} />
                  </code>
                </pre>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {workflowSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 1, y: 0 }}
                    className="relative p-4 bg-white/5 dark:bg-neutral-dark border border-slate-200 dark:border-slate-700/50 backdrop-blur-sm rounded-xl shadow-lg hover:border-primary/50 dark:hover:border-primary/50 transition-colors"
                  >
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary dark:bg-primary-light text-white rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <div className="ml-8">
                      <h3 className="font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <motion.section
        id="features"
        className="py-20 bg-slate-50 dark:bg-[#0B1120]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        onViewportEnter={() => setActiveSection("features")}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Features</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Powerful features to enhance your application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-xl bg-gradient-to-br ${card.bgGradient} border border-white/10 backdrop-blur-sm`}
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{card.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Showcase Section */}
      <motion.section
        id="showcase"
        className="py-20 bg-white dark:bg-[#0B1120]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        onViewportEnter={() => setActiveSection("showcase")}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Showcase</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              See what you can build with this template
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
            {platforms.map((platform, i) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-primary/50 transition-colors"
              >
                <platform.icon className="w-12 h-12 mb-3 text-primary" />
                <span className="text-sm text-slate-600 dark:text-slate-300">{platform.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        id="pricing"
        className="py-20 bg-slate-50 dark:bg-[#0B1120]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        onViewportEnter={() => setActiveSection("pricing")}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Pricing</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Simple, transparent pricing for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[{ name: 'Starter', price: '$9', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
              { name: 'Pro', price: '$29', features: ['All Starter features', 'Feature 4', 'Feature 5', 'Priority support'], popular: true },
              { name: 'Enterprise', price: '$99', features: ['All Pro features', 'Feature 6', 'Custom solutions', 'Dedicated support'] }].map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-xl border ${plan.popular ? 'border-primary bg-gradient-to-br from-primary/5 to-accent/5' : 'border-white/10 bg-white/5'} backdrop-blur-sm`}
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-primary mb-6">{plan.price}<span className="text-lg text-slate-600 dark:text-slate-300">/mo</span></div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-slate-600 dark:text-slate-300">
                      <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg transition-all ${plan.popular ? 'primary-button' : 'secondary-button'}`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="relative py-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 to-accent-light/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white dark:bg-neutral-dark rounded-xl shadow-xl p-12 border border-slate-200 dark:border-slate-700">
            <div className="text-center">
              <motion.h2 
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                className="text-3xl font-bold text-slate-900 dark:text-white"
              >
                Ready to Get Started?
              </motion.h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                Start building your next project today
              </p>
              
              <div className="mt-10 flex gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 primary-button shadow-lg hover:shadow-xl"
                >
                  Get Started Now
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 secondary-button shadow-lg hover:shadow-xl"
                >
                  Contact Sales
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
