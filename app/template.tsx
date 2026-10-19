"use client";

import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { usePathname } from "next/navigation";

import Transition from "@/components/Transition";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence mode="wait">
        <motion.div key={pathname} className="h-full">
          <Transition />
          {children}
        </motion.div>
      </AnimatePresence>
    </MotionConfig>
  );
}
