"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { services } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"

export default function ServicePage() {
  const params = useParams()
  const service = services.find((s) => s.id === params.id)

  if (!service) {
    notFound()
  }

  return (
    <div className="container min-h-screen pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-2">{service.title}</h1>
        <p className="text-xl text-muted-foreground mb-8">{service.subtitle}</p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-lg text-muted-foreground mb-6">{service.description}</p>

            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="space-y-3 mb-6">
              {service.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <span className="text-primary">•</span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-4">Perfect For</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {service.targetAudience.map((audience, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-primary/10 text-sm"
                >
                  {audience}
                </span>
              ))}
            </div>

            <Button asChild size="lg">
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Pricing Plans</h2>
            <div className="space-y-6">
              {service.pricing.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="rounded-lg border bg-card p-6"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">{tier.name}</h3>
                    <div className="text-2xl font-bold">${tier.price}/mo</div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <span className="text-primary">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}