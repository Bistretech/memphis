"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CTASection } from "@/components/landing/CTASection";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Lightbulb, Target, Users } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function AboutPageContent() {
  return (
    <div className="container mx-auto px-4 pt-20 pb-16 bg-black">
      <div className="max-w-4xl mx-auto mt-20">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Memphis Capital
        </motion.h1>
        
        <motion.section 
          className="mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-transparent rounded-full" />
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-500" />
            Who Are We
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed pl-8">
            Memphis Capital Kenya Limited is your gateway to strategic business growth. We specialize in unlocking capital, 
            crafting winning strategies, and providing expert financial solutions. With our hands-on approach and deep industry 
            expertise, we empower businesses to thrive and scale with confidence.
          </p>
        </motion.section>

        <motion.section 
          className="mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-transparent rounded-full" />
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-500" />
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed pl-8">
            To empower businesses with strategic expertise and capital solutions that drive sustainable growth and long-term success.
          </p>
        </motion.section>

        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-blue-500" />
            Why Choose Us?
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="strategic-investment" className="bg-black/50 rounded-lg px-6 py-2 border border-neutral-800 hover:border-blue-500/30 transition-colors">
              <AccordionTrigger className="text-lg text-white">Strategic Investment</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our strategic investment approach combines deep market analysis with innovative financial solutions to maximize returns and minimize risks for our clients.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="proven-success" className="bg-black/50 rounded-lg px-6 py-2 border border-neutral-800 hover:border-blue-500/30 transition-colors">
              <AccordionTrigger className="text-lg text-white">Proven Success</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                With a track record of successful investments and business transformations, we bring proven methodologies and results-driven strategies to every engagement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="industry-expertise" className="bg-black/50 rounded-lg px-6 py-2 border border-neutral-800 hover:border-blue-500/30 transition-colors">
              <AccordionTrigger className="text-lg text-white">Industry Expertise</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our team of seasoned professionals brings decades of combined experience across various industries, ensuring deep insights and informed decision-making.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="tailored-solutions" className="bg-black/50 rounded-lg px-6 py-2 border border-neutral-800 hover:border-blue-500/30 transition-colors">
              <AccordionTrigger className="text-lg text-white">Tailored Solutions</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We understand that every business is unique. Our solutions are customized to meet your specific needs, challenges, and growth objectives.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="global-network" className="bg-black/50 rounded-lg px-6 py-2 border border-neutral-800 hover:border-blue-500/30 transition-colors">
              <AccordionTrigger className="text-lg text-white">Global Network</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Leverage our extensive network of industry leaders, investors, and strategic partners to access new opportunities and markets.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.section>

        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-blue-500" />
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Integrity",
                description: "We maintain the highest standards of honesty and transparency in all our dealings."
              },
              {
                title: "Excellence",
                description: "We strive for excellence in every aspect of our service delivery and client relationships."
              },
              {
                title: "Innovation",
                description: "We embrace innovative solutions to address complex business challenges."
              },
              {
                title: "Partnership",
                description: "We build lasting partnerships based on trust, collaboration, and mutual success."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="p-6 rounded-lg bg-black/50 border border-neutral-800 hover:border-blue-500/30 transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-transparent rounded-full" />
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <ArrowRight className="w-6 h-6 text-blue-500" />
            Our Approach
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed pl-8 mb-6">
            We take a comprehensive approach to business advisory, combining deep industry expertise with 
            innovative thinking to deliver tailored solutions for each client. Our team of experienced 
            professionals works closely with you to understand your unique challenges and opportunities.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed pl-8">
            Whether you're seeking strategic guidance, capital investment, or market insights, we provide 
            the expertise and resources needed to help your business thrive in today's competitive environment.
          </p>
        </motion.section>
      </div>

      <CTASection />
    </div>
  );
} 