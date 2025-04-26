"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  TrendingUp,
  DollarSign,
  Handshake,
  Search,
  ArrowRight,
  ChevronRight
} from "lucide-react";

const services = [
  {
    id: "strategy",
    icon: TrendingUp,
    title: "Business Strategy",
    description: "Transform challenges into opportunities with our data-driven strategic guidance, focusing on sustainable growth and market positioning.",
    accentColor: "bg-blue-600",
    textAccent: "text-blue-600"
  },
  {
    id: "sourcing",
    icon: DollarSign,
    title: "Capital Sourcing",
    description: "Access our extensive network of investors and funding solutions tailored precisely to your unique growth needs and financial structure.",
    accentColor: "bg-indigo-600",
    textAccent: "text-indigo-600"
  },
  {
    id: "advisory",
    icon: Handshake,
    title: "Transaction Advisory",
    description: "Receive expert guidance throughout the entirety of your transaction lifecycle, from initiation to successful post-merger integration.",
    accentColor: "bg-teal-600",
    textAccent: "text-teal-600"
  },
  {
    id: "research",
    icon: Search,
    title: "Market Research",
    description: "Gain critical competitive advantages with our in-depth market intelligence, trend analysis, and customer insights.",
    accentColor: "bg-cyan-600",
    textAccent: "text-cyan-600"
  },
];



const ServicesSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <section ref={sectionRef} className="bg-white py-24 md:py-32 lg:py-36 relative">
      {/* Simple border lines instead of fancy elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-neutral-200"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-neutral-200"></div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Title */}
        <div className="mb-20 md:mb-24 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-blue-600 uppercase tracking-widest text-sm font-medium mb-4"
          >
            Our Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light text-neutral-900"
          >
            Specialized expertise for discerning enterprises
          </motion.h2>
        </div>

        {/* Services Grid - Simplified */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative p-7 border-t border-neutral-200"
            >
              <div className="flex items-start space-x-5">
                <div className={`h-12 w-12 rounded-md ${service.accentColor} bg-opacity-10 flex items-center justify-center flex-shrink-0`}>
                  <service.icon size={22} className={service.textAccent} strokeWidth={1.5} />
                </div>

                <div>
                  <h3 className="text-xl font-medium text-neutral-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
