"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function CTASection() {
  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=400&width=1200&text=Nairobi+Financial+District"
          alt="Financial District"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/80 z-10" />
      <div className="absolute inset-0 border border-blue-500/20 rounded-2xl z-20" />

      <div className="relative px-8 py-16 text-center z-30">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to accelerate your business growth?
        </motion.h2>

        <motion.p
          className="text-lg text-blue-100/80 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Contact Memphis Capital today to discover how our strategic expertise and capital solutions can help your
          business thrive.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            href="/contact"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-blue-500/20"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/services"
            className="px-8 py-3 bg-transparent border border-blue-500/50 hover:border-blue-400 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-all hover:bg-blue-500/10"
          >
            Explore Our Services
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
