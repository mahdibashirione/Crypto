import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const CrypterMarkets = () => {
  const [marketData, setmarketData] = useState([
    {
      id: 1,
      icon: "/svg/markets1.svg",
      faName: "تتر",
      enName: "USDT",
      price: "517,500",
      status: "up",
      numberStatus: "0.41",
    },
    {
      id: 2,
      icon: "/svg/markets2.svg",
      faName: "دوج",
      enName: "DOGE",
      price: "104,665",
      status: "down",
      numberStatus: "0.25",
    },
    {
      id: 3,
      icon: "/svg/markets3.svg",
      faName: "کاردانو",
      enName: "ADA",
      price: "98,254",
      status: "up",
      numberStatus: "0.65",
    },
    {
      id: 4,
      icon: "/svg/markets4.svg",
      faName: "ریپل",
      enName: "XRP",
      price: "454,540",
      status: "down",
      numberStatus: "0.42",
    },
  ]);
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
    <section className="px-4 mb-16">
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
            <p className="md:text-xl lg:text-2xl">بازارهای</p>
            <p className="md:text-2xl md:-mt-4 lg:text-3xl font-semibold text-red-500 -mt-3">
              کریپتر
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
          <div className="p-1 rounded-lg bg-primary-50 flex gap-x-2">
            <span className="text-xs md:text-sm lg:text-base bg-white px-2 rounded-md text-primary-50 font-semibold py-1">
              ریال IR
            </span>
            <span className="text-xs md:text-sm lg:text-base py-1 text-white">
              تتر USDT
            </span>
          </div>
        </motion.article>
        <article>
          <ul className="flex flex-wrap items-stretch gap-x-2 gap-y-4 lg:gap-x-6">
            {marketData.map((data) => {
              return (
                <motion.li
                  variants={animateItems}
                  className="select-none flex-1 min-w-[140px] py-4 px-2 rounded-[49px] bg-primary-50 flex flex-col items-center justify-center gap-y-2"
                >
                  <div className="w-16 h-16 lg:w-[104px] lg:h-[104px] rounded-full bg-gray-5">
                    <img
                      className="w-full h-full object-cover"
                      src={data.icon}
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <span className="text-[#E5AE1F] font-semibold">
                    {data.faName}
                    {data.enName}
                  </span>
                  <p className="text-white font-semibold">{data.price} ریال</p>
                  <p
                    className={`text-sm ${
                      data.status === "up" ? "text-green-500" : "text-[#F5A870]"
                    } flex items-center`}
                  >
                    (150) {data.numberStatus}
                    {data.status === "up" ? (
                      <FaCaretUp className="text-xl" />
                    ) : (
                      <FaCaretDown className="text-xl" />
                    )}
                  </p>
                </motion.li>
              );
            })}
          </ul>
        </article>
      </motion.div>
    </section>
  );
};

export default CrypterMarkets;
