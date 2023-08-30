import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const NavLink = ({ data }) => {
  const { pathname } = useLocation();
  const textAline = {
    show: { width: 50 },
    hidden: { width: 0 },
  };

  return (
    <>
      <Link
        to={data.path}
        className={`${
          pathname === data.path
            ? "text-primary-50 font-bold text-base mb-2 lg:mb-0"
            : "text-gray-70 text-sm"
        } pb-2 lg:pb-4 relative duration-300`}
      >
        {data.title}
        <motion.span
          initial={{ width: 0 }}
          variants={textAline}
          animate={pathname === data.path ? "show" : "hidden"}
          className="block bg-primary-50 h-1.5 rounded-full absolute bottom-0 right-1/2 translate-x-1/2"
        ></motion.span>
      </Link>
    </>
  );
};

export default NavLink;
