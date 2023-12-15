export const animation = {
   hidden: {
      opacity: 0,
   },
   visible: (custom) => ({
      opacity: 1,
      transition: { delay: custom * 0.9 },
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
      transition: { duration: 0.9 }, // Adjust the duration as needed
   },
}
