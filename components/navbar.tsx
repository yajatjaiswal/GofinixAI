// "use client"

// import * as React from "react"
// import Link from "next/link"
// import { motion } from "framer-motion"
// import { cn } from "@/lib/utils"
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu"
// import { Button } from "@/components/ui/button"
// import { ModeToggle } from "@/components/mode-toggle"
// import { services } from "@/lib/constants"

// export function Navbar() {
//   return (
//     <motion.div
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-lg"
//     >
//       <div className="container flex h-16 items-center">
//         <Link href="/" className="mr-6 flex items-center space-x-2">
//           <span className="text-xl font-bold">GOFINIX AI</span>
//         </Link>
//         <NavigationMenu>
//           <NavigationMenuList>
//             <NavigationMenuItem>
//               <NavigationMenuTrigger>Services</NavigationMenuTrigger>
//               <NavigationMenuContent>
//                 <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
//                   {services.map((service) => (
//                     <li key={service.id}>
//                       <NavigationMenuLink asChild>
//                         <Link
//                           href={`/services/${service.id}`}
//                           className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
//                         >
//                           <div className="text-sm font-medium leading-none">
//                             {service.title}
//                           </div>
//                           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//                             {service.description}
//                           </p>
//                         </Link>
//                       </NavigationMenuLink>
//                     </li>
//                   ))}
//                 </ul>
//               </NavigationMenuContent>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <Link href="/pricing" legacyBehavior passHref>
//                 <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                   Pricing
//                 </NavigationMenuLink>
//               </Link>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <Link href="/about" legacyBehavior passHref>
//                 <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                   About
//                 </NavigationMenuLink>
//               </Link>
//             </NavigationMenuItem>
//           </NavigationMenuList>
//         </NavigationMenu>
//         <div className="ml-auto flex items-center space-x-4">
//           <ModeToggle />
//           <Button asChild>
//             <Link href="/contact">Contact Sales</Link>
//           </Button>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// "use client";

// import * as React from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";
// import { Button } from "@/components/ui/button";
// import { ModeToggle } from "@/components/mode-toggle";
// import { services } from "@/lib/constants";

// export function Navbar() {
//   return (
//     <motion.div
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ type: "spring", stiffness: 80, damping: 12 }}
//       className="sticky top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-lg shadow-lg"
//     >
//       <div className="container flex h-16 items-center">
//         {/* Brand Logo */}
//         <Link href="/" className="mr-6 flex items-center space-x-2">
//           <motion.span
//             className="text-xl font-bold"
//             whileHover={{ letterSpacing: "0.05em", scale: 1.1 }}
//           >
//             GOFINIX AI
//           </motion.span>
//         </Link>

//         {/* Navigation Menu */}
//         <NavigationMenu>
//           <NavigationMenuList>
//             <NavigationMenuItem>
//               <NavigationMenuTrigger>Services</NavigationMenuTrigger>
//               <NavigationMenuContent>
//                 <motion.ul
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="grid w-[600px] gap-3 p-4 md:grid-cols-2"
//                 >
//                   {services.map((service) => (
//                     <motion.li key={service.id} whileHover={{ scale: 1.05 }}>
//                       <NavigationMenuLink asChild>
//                         <Link
//                           href={`/services/${service.id}`}
//                           className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
//                         >
//                           <div className="text-sm font-medium leading-none">
//                             {service.title}
//                           </div>
//                           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//                             {service.description}
//                           </p>
//                         </Link>
//                       </NavigationMenuLink>
//                     </motion.li>
//                   ))}
//                 </motion.ul>
//               </NavigationMenuContent>
//             </NavigationMenuItem>

//             <NavigationMenuItem>
//               <Link href="/pricing" legacyBehavior passHref>
//                 <motion.div whileHover={{ scale: 1.1 }}>
//                   <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                     Pricing
//                   </NavigationMenuLink>
//                 </motion.div>
//               </Link>
//             </NavigationMenuItem>

//             <NavigationMenuItem>
//               <Link href="/about" legacyBehavior passHref>
//                 <motion.div whileHover={{ scale: 1.1 }}>
//                   <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                     About
//                   </NavigationMenuLink>
//                 </motion.div>
//               </Link>
//             </NavigationMenuItem>
//           </NavigationMenuList>
//         </NavigationMenu>

//         {/* Right-side Buttons */}
//         <div className="ml-auto flex items-center space-x-4">
//           <ModeToggle />
//           <motion.div
//             whileHover={{
//               scale: 1.1,
//               boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
//             }}
//           >
//             <Button asChild>
//               <Link href="/contact">Contact Sales</Link>
//             </Button>
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { services } from "@/lib/constants";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 12 }}
      className="sticky top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-lg shadow-lg px-4"
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <motion.span
            className="text-xl font-bold"
            whileHover={{ letterSpacing: "0.05em", scale: 1.1 }}
          >
            GOFINIX AI
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid w-[600px] gap-3 p-4 md:grid-cols-2"
                  >
                    {services.map((service) => (
                      <motion.li key={service.id} whileHover={{ scale: 1.05 }}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={`/services/${service.id}`}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {service.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </motion.li>
                    ))}
                  </motion.ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/pricing" legacyBehavior passHref>
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Pricing
                    </NavigationMenuLink>
                  </motion.div>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      About
                    </NavigationMenuLink>
                  </motion.div>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right-side Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <ModeToggle />
          <motion.div
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            }}
          >
            <Button asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        className={`md:hidden absolute top-16 left-0 w-full bg-background shadow-lg p-5 space-y-4 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Link
          href="/services"
          className="block py-2 text-lg"
          onClick={() => setIsOpen(false)}
        >
          Services
        </Link>
        <Link
          href="/pricing"
          className="block py-2 text-lg"
          onClick={() => setIsOpen(false)}
        >
          Pricing
        </Link>
        <Link
          href="/about"
          className="block py-2 text-lg"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <div className="flex flex-col space-y-2">
          <ModeToggle />
          <Button asChild>
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
