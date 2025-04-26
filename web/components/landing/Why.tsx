"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, Globe, BriefcaseBusiness, ArrowRight } from "lucide-react";

const reasons = [
  {
    icon: Rocket,
    title: "Entrepreneurial DNA",
    description: "We've built, funded, and exited ventures. We understand your journey because we've lived it, turning challenges into triumphs."
  },
  {
    icon: Globe,
    title: "Global Network, Local Insight",
    description: "Leverage our international connections, perfectly balanced with deep, nuanced expertise in African markets for strategic advantage."
  },
  {
    icon: BriefcaseBusiness,
    title: "Holistic Partnership",
    description: "From initial strategy through execution and beyond – we are your dedicated partners at every critical stage of growth."
  },
];

export function WhyMemphisSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white relative">
      {/* Refined border elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-neutral-200"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-neutral-200"></div>
      
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header - more refined */}
        <div className="max-w-2xl mx-auto text-center mb-20 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-blue-600 uppercase tracking-widest text-sm font-medium mb-4"
          >
            Why Memphis Capital
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light text-neutral-900 tracking-tight mb-6"
          >
            Expertise meets <span className="font-medium">exceptional execution</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-neutral-600"
          >
            We combine industry expertise with an entrepreneurial mindset to deliver exceptional results for ambitious businesses.
          </motion.p>
        </div>

        {/* Featured spotlight area - elegant and refined */}
        <div className="mb-24 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Large image - more sophisticated styling */}
            <div className="lg:col-span-3 relative">
              {/* Elegant frame */}
              <div className="p-1 bg-gradient-to-tr from-neutral-200 via-white to-neutral-100 rounded-lg shadow-sm">
                <div className="aspect-[16/10] overflow-hidden rounded-lg relative">
                  <img 
                    src="https://img.freepik.com/free-photo/front-view-stacked-coins-with-dirt-plant_23-2148803904.jpg?t=st=1745686650~exp=1745690250~hmac=7acafba80ff284cadcdfad64ad20fa8e1a19391f6b0f558063c0a4cb1ebc7b1d&w=900" 
                    alt="Strategic business meeting" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent"></div>
                  
                  {/* Stat badges - more refined */}
                  <div className="absolute bottom-0 left-0 right-0 px-8 py-6 flex justify-between">
                    <div className="bg-white/90 backdrop-blur-sm px-5 py-3 rounded shadow-sm">
                      <p className="text-2xl font-semibold text-neutral-900">10<span className="text-blue-600">+</span></p>
                      <p className="text-xs text-neutral-600 font-medium">Years Experience</p>
                    </div>
                    
                    <div className="bg-white/90 backdrop-blur-sm px-5 py-3 rounded shadow-sm">
                      <p className="text-2xl font-semibold text-neutral-900">50<span className="text-blue-600">+</span></p>
                      <p className="text-xs text-neutral-600 font-medium">Successful Exits</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* First reason - featured - more elegant presentation */}
            <div className="lg:col-span-2">
              <div className="h-full flex flex-col lg:justify-center">
                <div className="flex items-center mb-6">
                  <div className="h-px w-10 bg-blue-600 mr-4"></div>
                  <span className="text-sm text-blue-600 uppercase tracking-wider font-medium">Our Foundation</span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-medium text-neutral-900 mb-5">
                  {reasons[0].title}
                </h3>
                
                <p className="text-neutral-600 mb-8 leading-relaxed">
                  {reasons[0].description}
                </p>
                
                <a 
                  href="/about" 
                  className="inline-flex items-center text-neutral-800 border-b border-neutral-300 hover:border-blue-600 hover:text-blue-600 transition-colors pb-1 self-start group"
                >
                  <span className="font-medium">Read our story</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other reasons - refined layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-16">
          {reasons.slice(1).map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.2) }}
                className="flex"
              >
                <div className="mr-6 flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                    <Icon className="h-6 w-6 text-blue-600" strokeWidth={1.5} />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-neutral-900 mb-3">{reason.title}</h3>
                  <p className="text-neutral-600">{reason.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>        
      </div>
    </section>
  );
}