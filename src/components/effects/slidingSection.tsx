"use client"

import { motion } from "motion/react"

export function RevealSection({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 3,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.section>
  )
}