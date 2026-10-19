export type FadeDirection = "up" | "down" | "left" | "right";

export const fadeIn = (direction: FadeDirection, delay: number) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      // Exits are intentionally fast: the template waits for them before it
      // renders the next page, so a slow exit makes navigation feel broken.
      transition: {
        type: "tween" as const,
        duration: 0.35,
        ease: "easeIn" as const,
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween" as const,
        duration: 1.1,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75] as const,
      },
    },
  };
};
