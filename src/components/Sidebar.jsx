import { motion } from "framer-motion";
import NavLink from "./NavLink";
import { useEffect } from "react";

const Sidebar = ({ data, isShow, handleCloseSidebar }) => {
  let screenWidth = window.innerWidth;

  const container = {
    hidden: { right: screenWidth - screenWidth * 2 },
    show: {
      right: 0,
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.15,
      },
    },
  };
  const item = {
    hidden: { y: -20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
    },
  };

  window.addEventListener("resize", () => {
    window.innerWidth < 1024 && (screenWidth = window.innerWidth);
  });

  return (
    <motion.aside
      initial={{ right: screenWidth - screenWidth * 2 }}
      animate={isShow ? "show" : "hidden"}
      variants={container}
      className="bg-white fixed overflow-y-auto top-0 z-30 lg:hidden w-screen h-screen pr-8"
    >
      <motion.button
        variants={item}
        onClick={handleCloseSidebar}
        className="my-14"
      >
        <img src="/svg/Logout.svg" alt="logout-button" />
      </motion.button>
      <ul className="flex flex-col items-center gap-y-6">
        {data.map((dataItem) => {
          return (
            <motion.li
              onClick={handleCloseSidebar}
              key={dataItem.id}
              variants={item}
            >
              <NavLink data={dataItem} />
            </motion.li>
          );
        })}
      </ul>
    </motion.aside>
  );
};

export default Sidebar;
