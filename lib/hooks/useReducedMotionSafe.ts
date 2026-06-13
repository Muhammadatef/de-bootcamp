"use client";

import { useReducedMotion } from "framer-motion";

/**
 * Thin wrapper around framer-motion's useReducedMotion that always returns
 * a boolean (never null). When true, animations should render their final
 * state immediately.
 */
export function useReducedMotionSafe(): boolean {
  return useReducedMotion() ?? false;
}
