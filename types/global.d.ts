declare global {
  interface Window {
    lenis?: {
      scrollTo: (target: string | number, options?: { duration?: number }) => void;
      destroy: () => void;
      raf: (time: number) => void;
    };
  }
}

export {};
