"use client";

import { motion } from "framer-motion";
import { 
  Lightbulb, 
  Handshake, 
  LineChart, 
  DollarSign, 
  Search, 
  Target, 
  BarChart3, 
  FileCheck 
} from "lucide-react";

const services = [
  {
    category: "Strategic Advisory",
    description: "We provide actionable insights and business strategy consulting to help companies navigate challenges and unlock growth. Our expertise includes:",
    items: [
      {
        icon: Lightbulb,
        title: "Business Strategy Consulting",
        description: "Tailored plans to drive sustainable growth and profitability."
      },
      {
        icon: Handshake,
        title: "Deal Origination & Structuring",
        description: "We design and execute value-driven deals that maximize returns."
      },
      {
        icon: LineChart,
        title: "Transaction Advisory",
        description: "Expert support throughout mergers, acquisitions, and business restructures."
      }
    ]
  },
  {
    category: "Financial Solutions",
    description: "Our financial services ensure your business has the capital and tools to thrive:",
    items: [
      {
        icon: DollarSign,
        title: "Capital Sourcing & Fundraising",
        description: "We connect you with investors and financing options suited to your needs."
      },
      {
        icon: BarChart3,
        title: "Advanced Financial Modelling",
        description: "Accurate models for better decision-making and future planning."
      },
      {
        icon: FileCheck,
        title: "Client Due Diligence",
        description: "Rigorous assessments to mitigate risks and ensure informed investments."
      }
    ]
  },
  {
    category: "Market Research & Analysis",
    description: "We offer deep insights into market trends, competitive landscapes, and growth opportunities:",
    items: [
      {
        icon: Search,
        title: "Market Research",
        description: "Data-driven research to support your strategic decisions and expansion plans."
      },
      {
        icon: Target,
        title: "Competitive Analysis",
        description: "In-depth analysis of your market position and competitors to inform growth strategies."
      }
    ]
  }
];

const testimonial = {
  quote: "Memphis Capital has been a game-changer for our business. Their investment and strategic guidance helped us scale faster than we ever imagined. Beyond funding, they provided invaluable insights that refined our business model and positioned us for long-term success. We couldn't have asked for a better partner in our growth journey.",
  author: "Co-Founder & CEO",
  company: "Carogiv Limited"
};

export default function ServicesPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-white">
            We provide a wide range of Services
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-white mb-8">
            How can we help you?
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed">
            At Memphis Capital, we provide a comprehensive suite of financial and advisory services designed to help startups and businesses secure funding, optimize operations, and achieve sustainable growth. From deal origination to investor preparedness, we ensure that every company we work with is positioned for long-term success.
          </p>
        </motion.div>
      </section>

      {/* Services Sections */}
      <section className="container mx-auto px-4 py-20">
        {services.map((service, index) => (
          <motion.div
            key={service.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-24"
          >
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-8 bg-blue-400 rounded-full"></span>
              {service.category}
            </h2>
            <p className="text-neutral-400 mb-8 max-w-3xl">
              {service.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.items.map((item, itemIndex) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: (index * 0.2) + (itemIndex * 0.1) }}
                    className="p-6 rounded-lg bg-black/50 border border-neutral-800 hover:border-blue-400/30 transition-colors"
                  >
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-neutral-400">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </section>

      {/* Testimonial Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="text-4xl text-blue-400 mb-8">"</div>
          <p className="text-2xl font-light text-white mb-8 italic">
            {testimonial.quote}
          </p>
          <div className="text-neutral-400">
            <p className="font-medium">{testimonial.author}</p>
            <p>{testimonial.company}</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}