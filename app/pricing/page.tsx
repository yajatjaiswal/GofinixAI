"use client"

import { motion } from "framer-motion"
import { services } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="container min-h-screen pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Transparent Pricing for Every Need</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect plan for your business. All plans include 24/7 support and our core AI features.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="rounded-lg border bg-card p-6 shadow-lg backdrop-blur-lg">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{service.subtitle}</p>
              
              <div className="space-y-6">
                {service.pricing.map((tier) => (
                  <div
                    key={tier.name}
                    className="rounded-md border p-4 backdrop-blur-sm"
                  >
                    <div className="font-semibold">{tier.name}</div>
                    <div className="text-2xl font-bold my-2">${tier.price}/mo</div>
                    <ul className="text-sm space-y-2 mb-4">
                      {tier.features.map((feature, index) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                    <Button asChild className="w-full">
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}