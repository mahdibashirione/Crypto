import { useEffect, useState } from "react";
import ButtonContain from "./common/ButtonContain";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CrypterArticles = () => {
  const [articlesData, setArticlesData] = useState([
    {
      id: 1,
      Link: "/",
      cover: "/svg/articles1.svg",
      title: "چگونه به یک تریدر موفق تبدیل شویم؟",
      text: "امروزه بازار ارز دیجیتال از جذاب‌ترین بازارها برای سرمایه‌گذاری است. برخی افراد در این بازار سودهای زیادی را ....",
      view: 256,
      like: 156,
      writer: "سید حسین یعقوبی",
      date: "1041/06/21",
    },
    {
      id: 2,
      Link: "/",
      cover: "/svg/articles1.svg",
      title: "چگونه به یک تریدر موفق تبدیل شویم؟",
      text: "امروزه بازار ارز دیجیتال از جذاب‌ترین بازارها برای سرمایه‌گذاری است. برخی افراد در این بازار سودهای زیادی را ....",
      view: 256,
      like: 156,
      writer: "سید حسین یعقوبی",
      date: "1041/06/21",
    },
    {
      id: 3,
      Link: "/",
      cover: "/svg/articles1.svg",
      title: "چگونه به یک تریدر موفق تبدیل شویم؟",
      text: "امروزه بازار ارز دیجیتال از جذاب‌ترین بازارها برای سرمایه‌گذاری است. برخی افراد در این بازار سودهای زیادی را ....",
      view: 256,
      like: 156,
      writer: "سید حسین یعقوبی",
      date: "1041/06/21",
    },
    {
      id: 4,
      Link: "/",
      cover: "/svg/articles1.svg",
      title: "چگونه به یک تریدر موفق تبدیل شویم؟",
      text: "امروزه بازار ارز دیجیتال از جذاب‌ترین بازارها برای سرمایه‌گذاری است. برخی افراد در این بازار سودهای زیادی را ....",
      view: 256,
      like: 156,
      writer: "سید حسین یعقوبی",
      date: "1041/06/21",
    },
  ]);
  const [viewArticles, setViewArticles] = useState(2);

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

  useEffect(() => {
    window.innerWidth >= 768 ? setViewArticles(4) : setViewArticles(2);
    window.addEventListener("resize", () => {
      window.innerWidth >= 768 ? setViewArticles(4) : setViewArticles(2);
    });
  }, []);

  return (
    <section className="p-4 mb-8 md:mt-20 lg:mt-32">
      <motion.div
        ref={container}
        variants={animateContaier}
        animate={isInView ? "show" : "hidden"}
        className="container"
      >
        <motion.article
          variants={animateItems}
          className="flex items-center justify-between md:gap-x-4 relative mb-10"
        >
          <div className="flex z-10">
            <p className="md:text-xl lg:text-2xl font-bold">مقالات</p>
            <p className="text-xl md:text-2xl md:-mt-4 lg:text-3xl font-bold text-red-500 -mt-3">
              کریپتر
            </p>
          </div>
          <div className="flex-1">
            <svg
              className="mx-auto md:hidden"
              width="147"
              height="39"
              viewBox="0 0 147 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M145.128 37.066C138.649 29.4478 133.226 25.8904 123.787 25.2036C115.263 24.5834 105.477 28.0433 97.1827 30.42C86.9133 33.3627 67.3634 34.2329 63.3357 20.3101C60.2083 9.49948 68.3275 -1.95656 78.294 2.67196C82.1363 4.45635 83.4459 10.826 81.147 14.8472C78.6641 19.1903 72.6664 20.6884 68.5769 21.2541C57.5939 22.7733 51.925 10.5003 42.5537 7.30558C28.7969 3.38573 9.68907 18.3653 2.11057 23.7507C1.46142 24.212 2.20048 20.6986 2.31065 19.8106C2.71453 16.5553 1.96646 17.9295 1.66109 20.3908C1.46469 21.9738 0.31837 25.249 2.29627 24.5814C3.72325 24.0998 6.57176 24.3042 8.08275 24.4916"
                stroke="#2150F5"
                strokeWidth="2.51656"
                strokeLinecap="round"
                strokeDasharray="6.29 10.07"
              />
            </svg>
            <svg
              className="hidden md:block w-full max-w-full -mt-16"
              width="949"
              height="92"
              viewBox="0 0 949 92"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M947.5 88.5356C899.825 70.7454 848.648 45.6851 787.532 47.0618C732.34 48.305 672.325 60.6681 621.007 69.6904C557.472 80.8608 432.729 89.7217 395.731 54.5797C367.004 27.2928 409.923 -5.47114 477.58 3.30786C503.663 6.69234 517.169 22.9493 505.64 34.2641C493.187 46.485 455.904 52.4309 430.117 55.2902C360.863 62.9693 314.657 32.7043 251.967 27.4836C160.557 21.8381 48.0344 71.8677 3.72181 88.536C-0.0738634 89.9637 10.2863 70.2579 10.2818 67.893C15.5918 51.1551 10.2788 59.5233 7.00943 67.892C7.01741 72.1077 -4.84113 96.1298 7.0168 88.5376C16.857 88.5366 24.6935 88.5656 34.5388 88.5485"
                stroke="#2150F5"
                strokeWidth="2.63175"
                strokeLinecap="round"
                strokeDasharray="6.58 10.53"
              />
            </svg>
          </div>
          <ButtonContain className="bg-secendry-50 hover:shadow-secendry-50 text-base">
            سوالات بیشتر
          </ButtonContain>
        </motion.article>
        <article className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {articlesData.slice(0, viewArticles).map((article, i) => {
            return (
              <div className="col-span-1">
                <motion.a
                  key={article.id}
                  variants={animateItems}
                  href={article.Link}
                  className={`p-6 rounded-lg shadow-primary relative duration-300 block md:rounded-2xl ${
                    (i + 1) % 2 === 0
                      ? "hover:shadow-primary-50"
                      : "hover:shadow-secendry-50"
                  }`}
                >
                  <div className="flex items-stretch gap-2">
                    <div className="w-[40%] rounded-lg overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={article.cover}
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="flex-1">
                      <span
                        className={`${
                          (i + 1) % 2 === 0
                            ? "text-secendry-50"
                            : "text-primary-50"
                        } font-bold line-clamp-1`}
                      >
                        {article.title}
                      </span>
                      <p className="text-xs text-gray-80 leading-7 line-clamp-3 md:text-base md:leading-8">
                        {article.text}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-gray-80 mt-4">
                    {/* writer */}
                    <span className="flex items-center gap-1 text-xs md:text-base">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.93996 13.0005C8.66382 13.0005 8.43996 13.2244 8.43996 13.5005C8.43996 13.7767 8.66382 14.0005 8.93996 14.0005H12.94C13.2161 14.0005 13.44 13.7767 13.44 13.5005C13.44 13.2244 13.2161 13.0005 12.94 13.0005H8.93996Z"
                          fill="#4C5254"
                        />
                        <path
                          d="M9.46934 3.05017L9.52938 3.08484C10.0481 3.38431 10.4807 3.63404 10.7974 3.87847C11.1318 4.13646 11.3971 4.4326 11.5083 4.84738C11.6194 5.26217 11.5377 5.65131 11.3771 6.0419C11.2657 6.31301 11.1019 6.61766 10.9044 6.96518L10.4809 6.71344L10.4754 6.71024L5.85857 4.04469L5.4268 3.79022C5.62686 3.44949 5.80712 3.15847 5.98458 2.9285C6.24258 2.59418 6.53871 2.32883 6.95349 2.21769C7.36828 2.10655 7.75742 2.18828 8.14801 2.34882C8.51806 2.50091 8.95062 2.75067 9.46934 3.05017Z"
                          fill="#4C5254"
                        />
                        <path
                          d="M4.92585 4.65573L2.6072 8.67167C2.40868 9.01487 2.25171 9.28624 2.19355 9.59491C2.13539 9.90358 2.18285 10.2135 2.24287 10.6054L2.25904 10.7113C2.36983 11.4389 2.46115 12.0386 2.59889 12.4934C2.74293 12.969 2.96437 13.3807 3.39988 13.6321C3.8354 13.8836 4.30264 13.8695 4.78657 13.7564C5.24928 13.6483 5.8143 13.4276 6.49978 13.1597L6.59962 13.1208C6.96904 12.9768 7.26113 12.8629 7.49937 12.6582C7.73761 12.4535 7.89414 12.1819 8.0921 11.8384L10.4053 7.83179L9.97268 7.57468L5.35274 4.90735L4.92585 4.65573Z"
                          fill="#4C5254"
                        />
                      </svg>
                      {article.writer}
                    </span>
                    {/* date */}
                    <span className="flex items-center gap-1 text-xs md:text-base">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.37405 3.30344C3.79646 2.99654 4.30572 2.83759 5 2.75527V3.3335C5 3.88578 5.44772 4.3335 6 4.3335C6.55229 4.3335 7 3.88578 7 3.3335V2.6687C7.3094 2.66683 7.64187 2.66683 8 2.66683C8.35813 2.66683 8.6906 2.66683 9 2.6687V3.3335C9 3.88578 9.44772 4.3335 10 4.3335C10.5523 4.3335 11 3.88578 11 3.3335V2.75527C11.6943 2.83759 12.2035 2.99654 12.626 3.30344C12.9089 3.50904 13.1578 3.7579 13.3634 4.04088C13.7396 4.55872 13.8935 5.20708 13.9564 6.16683H2.04356C2.1065 5.20708 2.26038 4.55872 2.63661 4.04088C2.84221 3.7579 3.09107 3.50904 3.37405 3.30344Z"
                          fill="#4C5254"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.00713 7.16668C2 7.6107 2 8.10747 2 8.66683C2 11.1667 2 12.4166 2.63661 13.2928C2.84221 13.5758 3.09107 13.8246 3.37405 14.0302C4.25027 14.6668 5.50018 14.6668 8 14.6668C8.5593 14.6668 9.05602 14.6668 9.5 14.6597L9.5 14.6129C9.49995 14.0449 9.49993 13.6989 9.54719 13.4005C9.80699 11.7602 11.0934 10.4738 12.7337 10.214C13.0321 10.1668 13.3781 10.1668 13.9461 10.1668L13.9929 10.1668C14 9.72285 14 9.22613 14 8.66683C14 8.10747 14 7.61069 13.9929 7.16668L13.9806 7.16683H2.01921L2.00713 7.16668ZM6 8.8335C5.72386 8.8335 5.5 9.05735 5.5 9.3335C5.5 9.60964 5.72386 9.8335 6 9.8335H10C10.2761 9.8335 10.5 9.60964 10.5 9.3335C10.5 9.05735 10.2761 8.8335 10 8.8335H6Z"
                          fill="#4C5254"
                        />
                        <path
                          d="M12.626 14.0302C12.1081 14.4065 11.4598 14.5603 10.5 14.6233C10.5001 14.0164 10.5023 13.7625 10.5349 13.5569C10.7269 12.3446 11.6777 11.3937 12.8901 11.2017C13.0957 11.1692 13.3496 11.1669 13.9564 11.1668C13.8935 12.1266 13.7396 12.7749 13.3634 13.2928C13.1578 13.5758 12.9089 13.8246 12.626 14.0302Z"
                          fill="#4C5254"
                        />
                        <path
                          d="M6.5 1.3335C6.5 1.05735 6.27614 0.833496 6 0.833496C5.72386 0.833496 5.5 1.05735 5.5 1.3335V3.3335C5.5 3.60964 5.72386 3.8335 6 3.8335C6.27614 3.8335 6.5 3.60964 6.5 3.3335V1.3335Z"
                          fill="#4C5254"
                        />
                        <path
                          d="M10.5 1.3335C10.5 1.05735 10.2761 0.833496 10 0.833496C9.72386 0.833496 9.5 1.05735 9.5 1.3335V3.3335C9.5 3.60964 9.72386 3.8335 10 3.8335C10.2761 3.8335 10.5 3.60964 10.5 3.3335V1.3335Z"
                          fill="#4C5254"
                        />
                      </svg>

                      {article.date}
                    </span>
                    {/* view */}
                    <span className="flex items-center gap-1 text-xs md:text-base">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.50004 7.99984C6.50004 7.17141 7.17161 6.49984 8.00004 6.49984C8.82847 6.49984 9.50004 7.17141 9.50004 7.99984C9.50004 8.82826 8.82847 9.49984 8.00004 9.49984C7.17161 9.49984 6.50004 8.82826 6.50004 7.99984Z"
                          fill="#4C5254"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.23453 3.73031C5.28221 2.8725 6.57274 2.1665 8.00004 2.1665C9.42735 2.1665 10.7179 2.8725 11.7656 3.73031C12.819 4.59281 13.6803 5.65227 14.2591 6.45851L14.3068 6.5249C14.6553 7.00906 14.9421 7.40761 14.9421 7.99984C14.9421 8.59207 14.6553 8.99061 14.3068 9.47478L14.2591 9.54116C13.6803 10.3474 12.819 11.4069 11.7656 12.2694C10.7179 13.1272 9.42735 13.8332 8.00004 13.8332C6.57274 13.8332 5.28221 13.1272 4.23453 12.2694C3.18113 11.4069 2.31979 10.3474 1.74099 9.54116L1.69325 9.47478C1.34481 8.99061 1.05798 8.59207 1.05798 7.99984C1.05798 7.40761 1.34481 7.00906 1.69325 6.5249L1.74099 6.45851C2.31979 5.65227 3.18113 4.59281 4.23453 3.73031ZM8.00004 5.49984C6.61933 5.49984 5.50004 6.61912 5.50004 7.99984C5.50004 9.38055 6.61933 10.4998 8.00004 10.4998C9.38075 10.4998 10.5 9.38055 10.5 7.99984C10.5 6.61912 9.38075 5.49984 8.00004 5.49984Z"
                          fill="#4C5254"
                        />
                      </svg>
                      {article.view}
                    </span>
                    {/* like */}
                    <span className="flex items-center gap-1 text-xs md:text-base">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.93287 2.76395C5.81709 2.05617 4.01513 1.38688 2.459 2.97381C-1.235 6.74091 5.09988 14 7.99997 14C10.9001 14 17.235 6.74091 13.541 2.97381C11.9848 1.3869 10.1829 2.05618 9.06712 2.76395C8.43666 3.16388 7.56332 3.16388 6.93287 2.76395ZM11.1626 3.53261C10.9045 3.43452 10.6157 3.56425 10.5176 3.82239C10.4195 4.08052 10.5493 4.3693 10.8074 4.46739C11.0479 4.55877 11.2989 4.7136 11.5511 4.96363C11.8722 5.28205 12.0755 5.63105 12.1888 5.99849C12.2702 6.26237 12.5501 6.41032 12.8139 6.32895C13.0778 6.24758 13.2258 5.96769 13.1444 5.70381C12.982 5.17712 12.6914 4.68599 12.2551 4.25349C11.911 3.91229 11.5431 3.6772 11.1626 3.53261Z"
                          fill="#2D264B"
                        />
                      </svg>
                      {article.like}
                    </span>
                  </div>
                  <span
                    className={`h-1.5 rounded-b-lg absolute w-[80%] top-0 block right-1/2 translate-x-1/2 lg:w-1.5 lg:rounded-r-lg lg:rounded-bl-none lg:h-[80%] lg:left-0 lg:right-auto lg:translate-x-0 lg:top-1/2 lg:-translate-y-1/2 ${
                      (i + 1) % 2 === 0 ? "bg-primary-50" : "bg-secendry-50"
                    }`}
                  ></span>
                </motion.a>
              </div>
            );
          })}
        </article>
      </motion.div>
    </section>
  );
};

export default CrypterArticles;
