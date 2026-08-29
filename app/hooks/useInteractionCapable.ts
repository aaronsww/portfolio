"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  const pointerMq = window.matchMedia("(pointer: coarse)");
  const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
  pointerMq.addEventListener("change", callback);
  motionMq.addEventListener("change", callback);
  return () => {
    pointerMq.removeEventListener("change", callback);
    motionMq.removeEventListener("change", callback);
  };
}

function getSnapshot() {
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return !coarse && !reduced;
}

function getServerSnapshot() {
  return false;
}

/** True when the device has a fine pointer and hasn't asked for reduced motion — gates cursor/magnetic effects. */
export function useInteractionCapable() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
