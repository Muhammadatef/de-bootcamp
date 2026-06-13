"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PipelineNodeProps {
  icon: string;
  label: string;
  /** Stagger index for entrance + pulse delay. */
  index: number;
  animate: boolean;
}

/**
 * Small rounded box with a tool name + emoji + a pulsing cyan dot.
 * Used in the Hero pipeline visual.
 */
export function PipelineNode({ icon, label, index, animate }: PipelineNodeProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { delay: animate ? index * 0.1 : 0 },
        },
      }}
      className={cn(
        "relative flex items-center gap-2.5 rounded-xl border border-border-subtle bg-bg-surface px-4 py-2.5",
        "shadow-[0_0_20px_rgba(0,212,255,0.04)]"
      )}
    >
      <span className="text-lg leading-none">{icon}</span>
      <span className="font-mono text-sm text-text-primary">{label}</span>
      <motion.span
        aria-hidden
        className="ms-auto h-2 w-2 rounded-full bg-cyan"
        animate={
          animate
            ? { scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }
            : { scale: 1, opacity: 1 }
        }
        transition={
          animate
            ? { duration: 2, repeat: Infinity, delay: index * 0.2 }
            : undefined
        }
      />
    </motion.div>
  );
}
