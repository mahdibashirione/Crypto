import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const WhyCrypter = () => {
  const container = useRef();
  const isInView = useInView(container, { once: true });

  const animateContaier = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.4,
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };
  const animateItems = {
    hidden: { y: -50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="p-4 my-12">
      <motion.div
        ref={container}
        animate={isInView ? "show" : "hidden"}
        variants={animateContaier}
        className="container"
      >
        <motion.article className="mb-8" variants={animateItems}>
          <div className="flex z-10">
            <p className="md:text-xl lg:text-2xl font-semibold">چرا؟</p>
            <p className="text-xl md:text-2xl md:-mt-4 lg:text-3xl font-bold text-red-500 -mt-3">
              کریپتر
            </p>
          </div>
        </motion.article>
        <article className="flex gap-4 items-stretch flex-wrap">
          <motion.div
            variants={animateItems}
            className="flex-1 min-w-[140px] flex flex-col items-center text-primary-40"
          >
            <img src="/svg/why1.svg" alt="" loading="lazy" />
            <p className="font-bold md:text-lg mt-2">اولین در ایران</p>
            <span className="block w-full h-1 rounded-full bg-primary-40 mt-4"></span>
          </motion.div>
          <motion.div
            variants={animateItems}
            className="flex-1 min-w-[140px] flex flex-col items-center text-[#E8B229]"
          >
            <img src="/svg/why2.svg" alt="" loading="lazy" />
            <p className="font-bold md:text-lg mt-2">کمترین کارمز در ایران</p>
            <span className="block w-full h-1 rounded-full bg-[#E8B229] mt-4"></span>
          </motion.div>
          <motion.div
            variants={animateItems}
            className="flex-1 min-w-[140px] flex flex-col items-center text-green-500"
          >
            <img src="/svg/why3.svg" alt="" loading="lazy" />
            <p className="font-bold md:text-lg mt-2">امن ترین بازارها</p>
            <span className="block w-full h-1 rounded-full bg-green-500 mt-4"></span>
          </motion.div>
          <motion.div
            variants={animateItems}
            className="flex-1 min-w-[140px] flex flex-col items-center text-red-500"
          >
            <img src="/svg/why4.svg" alt="" loading="lazy" />
            <p className="font-bold md:text-lg mt-2">ساده ترین رابط کاربری</p>
            <span className="block w-full h-1 rounded-full bg-red-500 mt-4"></span>
          </motion.div>
        </article>
      </motion.div>
    </section>
  );
};

export default WhyCrypter;
