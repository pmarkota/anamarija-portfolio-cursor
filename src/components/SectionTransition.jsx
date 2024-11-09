export const SectionTransition = ({ isTop = true }) => {
  return (
    <div
      className={`absolute ${isTop ? "top-0" : "bottom-0"} left-0 w-full h-32 
        bg-gradient-to-b ${
          isTop ? "from-white to-transparent" : "from-transparent to-white"
        }
        dark:${isTop ? "from-dark-primary" : "to-dark-primary"} 
        pointer-events-none z-10`}
    />
  );
};
