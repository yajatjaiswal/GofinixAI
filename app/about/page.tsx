"use client"

import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="container min-h-screen pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6">About GOFINIX AI</h1>
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-lg text-muted-foreground">
            GOFINIX AI is at the forefront of AI-powered business automation, offering cutting-edge solutions that transform how businesses handle communications, sales, and customer support.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="text-muted-foreground">
            We're dedicated to making advanced AI technology accessible to businesses of all sizes. Our goal is to automate repetitive tasks, boost efficiency, and drive growth through intelligent automation.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose GOFINIX AI?</h2>
          <ul className="space-y-4 text-muted-foreground">
            <li>• Industry-leading AI technology</li>
            <li>• 24/7 automated operations</li>
            <li>• Customizable solutions</li>
            <li>• Seamless integration</li>
            <li>• Dedicated support team</li>
          </ul>
        </div>
      </motion.div>
    </div>
  )
}