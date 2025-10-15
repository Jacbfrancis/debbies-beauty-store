import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { easeInOut, motion } from "motion/react";
import { Categories } from "../constants/categories";

function FeaturedCategories() {
  const [currentIndex, setCurrentIndex] = useState(null);

  return (
    <div className="mt-12 px-6 lg:px-20">
      <h1 className="text-center text-[1.8rem] mb-14 lg:text-[2.2rem]">
        Featured Categories
      </h1>

      <div className="flex justify-between items-start gap-8 overflow-x-scroll [scrollbar-width:none] whitespace-nowrap lg:gap-0 lg:px-30">
        {Categories.map((category, index) => (
          <motion.div
            key={index}
            className="flex flex-col justify-center items-center"
            onMouseOver={() => setCurrentIndex(index)}
            onMouseOut={() => setCurrentIndex(null)}
          >
            <span className="rounded-full bg-[#fa6384] flex justify-center items-center w-[6rem] lg:w-[8rem] mb-3">
              <motion.img
                initial={{ scale: 1 }}
                animate={currentIndex === index ? { scale: 0.9 } : { scale: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full rounded-full"
                src={category.icon}
                alt=""
              />
            </span>
            <p>{category.category}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedCategories;
