export const PageTransitionVariants = {
  hidden: { opacity: 0, y: 200 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: 'easeInOut',
      duration: 0.35,
    },
  },
};

export const LeftSidebarVariants = {
  hidden: { opacity: 0, x: 100 },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: {
      ease: 'easeInOut',
      duration: 0.35,
    },
  },
};
