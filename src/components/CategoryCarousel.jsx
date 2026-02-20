// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from "motion/react";
import ProductCategory from "./ProductCategory";
import { useEffect } from "react";

function CategoryCarousel() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start(
      { x: "-130%" },
      {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      }
    );
  }, [controls]);

  return (
    <div
      className="bg-[#fdf5f7] whitespace-nowrap overflow-hidden cursor-pointer hidden md:block"
      onMouseOver={() => controls.stop()}
      onMouseLeave={() =>
        controls.start(
          { x: "-130%" },
          {
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }
        )
      }
    >
      <motion.div
        initial={{ x: 0 }}
        animate={controls}
        className="flex justify-center items-center gap-25"
      >
        <ProductCategory />
        <ProductCategory />
      </motion.div>
    </div>
  );
}

export default CategoryCarousel;
