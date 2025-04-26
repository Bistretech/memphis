"use client";

import { ArrowRight, Calendar, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-white relative">
      {/* Simple border elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-neutral-200"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-neutral-200"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex items-center mb-6">
                  <div className="h-px w-10 bg-blue-600 mr-4"></div>
                  <span className="text-sm text-blue-600 uppercase tracking-wider font-medium">Ready to Grow?</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-neutral-900 mb-6 leading-tight">
                  Let's Build Your <span className="font-medium">Success Story</span> Together
                </h2>
                
                <p className="text-lg text-neutral-600 mb-10 max-w-2xl">
                  Schedule a complimentary consultation to explore how our strategic insights and capital network can elevate your business.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700 text-white border-none transition-colors px-8 py-3 h-auto text-base font-medium"
                  >
                    <Calendar className="mr-3 h-5 w-5" />
                    <span>Let's work Together</span>
                  </Button>                 
                  
                </div>
              </motion.div>
            </div>
            
            {/* Right Checklist */}
            <div className="relative">
              <div className="border border-neutral-200 rounded-lg p-10 bg-neutral-50">
                <motion.div 
                  className="space-y-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }}
                >
                  <h3 className="text-xl font-medium text-neutral-900 mb-6">What to expect:</h3>
                  
                  {[
                    "Personalized Strategy Session",
                    "Clear Growth Opportunities",
                    "Funding Pathway Analysis",
                    "Actionable Next Steps"
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-start gap-4"
                      variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                    >
                      <div className="mt-1">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      </div>
                      <div>
                        <p className="text-neutral-800">{item}</p>
                        <p className="text-sm text-neutral-500 mt-1">
                          {i === 0 && "Understand your business goals and challenges"}
                          {i === 1 && "Identify untapped market potential"}
                          {i === 2 && "Explore ideal capital structures"}
                          {i === 3 && "Develop a customized implementation plan"}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              
              {/* Subtle decorative elements */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-neutral-200 rounded-lg -z-10"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}