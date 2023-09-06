import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ButtonOutline from "./common/ButtonOutline";
import { FiArrowLeft } from "react-icons/fi";
import { BiCaretUp } from "react-icons/bi";
import ButtonContain from "./common/ButtonContain";

const OnlinePrices = () => {
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
    <section className="w-full max-w-primary mx-auto px-4 py-12 md:py-8 rounded-t-3xl bg-gradient-to-b from-gray-60 to-white">
      <motion.div
        ref={container}
        animate={isInView ? "show" : "hidden"}
        variants={animateContaier}
        className="container"
      >
        <motion.article
          variants={animateItems}
          className="flex items-center justify-between md:gap-x-4 relative mb-8"
        >
          <div className="flex z-10">
            <p className="md:text-xl lg:text-2xl">قیمت های</p>
            <p className="md:text-2xl md:-mt-4 lg:text-3xl font-semibold text-red-500 -mt-3">
              آنلاین
            </p>
          </div>
          <div className="flex-1 md:static md:w-auto absolute w-[80%] -top-1/2 -translate-y-1/4 md:translate-x-0 md:translate-y-0 right-1/2  translate-x-1/2">
            <img
              className="w-full"
              src="/svg/linerDash.svg"
              loading="lazy"
              alt=""
            />
          </div>
          <ButtonOutline>
            تمام قیمت ها
            <FiArrowLeft className="mr-2" />
          </ButtonOutline>
        </motion.article>
        <article className="w-full">
          <ul className="w-full bg-white rounded-2xl md:rounded-3xl overflow-hidden select-none">
            {/* title */}
            <motion.li
              variants={animateItems}
              className="bg-gray-50 border-b-2 border-gray-60 text-gray-90 flex py-2"
            >
              <div className="w-1/3 md:w-1/5 flex justify-center">
                رمز ارزها
              </div>
              <div className="w-1/3 md:w-1/5 flex justify-center">
                قیمت لحظه ای
              </div>
              <div className="w-1/3 md:w-1/5 justify-center hidden md:flex">
                حجم در 34 ساعت
              </div>
              <div className="w-1/3 md:w-1/5 justify-center hidden md:flex">
                تغییرات
              </div>
              <div className="w-1/3 md:w-1/5 flex justify-center">معامله</div>
            </motion.li>
            {/* crypto list */}
            {[0, 1, 2, 3, 4, 5].map((crypto) => {
              return (
                <motion.li
                  variants={animateItems}
                  className="border-b-2 border-dashed border-gray-60 text-gray-90 flex py-2"
                >
                  {/* crypto Logo */}
                  <div className="w-1/3 md:w-1/5 flex justify-center">
                    <span className="block w-10 h-10 rounded-full bg-primary-30 md:w-14 md:h-14"></span>
                  </div>
                  {/* crypto Price */}
                  <div className="w-1/3 md:w-1/5 items-center flex justify-center">
                    <p className="text-primary-50">
                      <span className="font-semibold">98,254</span> ریال
                    </p>
                  </div>
                  {/* crypto Volume */}
                  <div className="w-1/3 md:w-1/5 items-center justify-center hidden md:flex">
                    <p className="text-sm font-semibold">255,659,348,453</p>
                  </div>
                  {/* crypto Status */}
                  <div
                    className={`text-green-500 w-1/3 md:w-1/5 items-center justify-center hidden md:flex`}
                  >
                    (iso) <span className="font-semibold mx-1">0.23</span>
                    <BiCaretUp />
                  </div>
                  {/* crypto Transaction */}
                  <div className="w-1/3 md:w-1/5 items-center flex justify-center">
                    <ButtonContain className="md:text-sm hover:shadow-primary-90">
                      خرید/فروش
                    </ButtonContain>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </article>
      </motion.div>
    </section>
  );
};

export default OnlinePrices;
