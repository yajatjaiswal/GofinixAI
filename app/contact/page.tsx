"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  return (
    <div className="container min-h-screen pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6">Contact Sales</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Ready to transform your business with AI? Fill out the form below and our team will get back to you within 24 hours.
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Doe" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@company.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input id="company" placeholder="Company Name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your needs..."
              className="min-h-[150px]"
            />
          </div>

          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </motion.div>
    </div>
  )
}