export const animation = {
   hidden: {
      opacity: 0,
   },
   visible: (custom) => ({
      opacity: 1,
      transition: { delay: custom * 0.3 },
   }),
}

export const textAnimation = {
   hidden: {
      opacity: 0,
      y: 100,
   },
   visible: {
      opacity: 1,
      y: 0,
   },
}
