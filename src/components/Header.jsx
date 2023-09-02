import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
import NavLink from "./NavLink";
import Sidebar from "./Sidebar";

const Header = () => {
  const [navData, setNavData] = useState([
    { id: 1, path: "/", title: "صفحه اصلی" },
    { id: 2, path: "/scasv", title: "خرید و فروش ارزدیجیتال" },
    { id: 3, path: "/fwefdasf", title: "قیمت های آنلاین" },
    { id: 4, path: "/fewfsad", title: "مقالات آموزشی" },
    { id: 5, path: "/fewfc", title: "وبلاگ" },
    { id: 6, path: "/greg", title: "ارتباط با ما" },
  ]);
  const [sidebar, setSidebar] = useState(false);

  function handleShowSidebar() {
    setSidebar(true);
  }
  function handleCloseSidebar() {
    setSidebar(false);
  }

  return (
    <header className="py-2 px-1 fixed w-full top-0 right-0 z-30">
      <nav className="container p-4 rounded-xl flex items-center justify-between bg-white shadow">
        <button onClick={handleShowSidebar} className="lg:hidden">
          <FiAlignJustify className="text-3xl text-primary-70" />
        </button>
        <Link to="/">
          <img
            className="h-[30px]"
            src="/svg/کریپتر.svg"
            alt="کریپتر | Crypter"
          />
        </Link>
        <ul className="hidden lg:flex items-center gap-6 text-sm text-gray-70">
          {navData.map((item) => (
            <li key={item.id}>
              <NavLink data={item} />
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Link
            to="/profile"
            className="flex items-center gap-2 bg-primary-50 rounded-lg p-[7px] lg:p-3 lg:rounded-xl text-gray-5 hover:scale-[0.97] duration-300 hover:shadow-primary-50 shadow-transparent shadow-primary"
          >
            <span className="hidden lg:block text-sm font-semibold">
              ورود / ثبت نام
            </span>
            <img
              className="lg:hidden"
              src="/svg/Profile1.svg"
              alt="icon-profile"
            />
            <img
              className="hidden lg:block"
              src="/svg/Profile2.svg"
              alt="icon-profile"
            />
          </Link>
          <Link
            to="/profile"
            className="flex items-center gap-2 bg-secendry-50 rounded-lg p-[7px] lg:p-3 lg:rounded-xl text-gray-5 hover:scale-[0.97] duration-300 hover:shadow-secendry-50 shadow-transparent shadow-primary"
          >
            <span className="hidden lg:block text-sm font-semibold">
              پشتیبانی
            </span>
            <img
              className="lg:hidden"
              src="/svg/Headphone2.svg"
              alt="icon-profile"
            />
            <img
              className="hidden lg:block"
              src="/svg/Headphone1.svg"
              alt="icon-profile"
            />
          </Link>
        </div>
        <Sidebar
          isShow={sidebar}
          handleCloseSidebar={handleCloseSidebar}
          data={navData}
        />
      </nav>
    </header>
  );
};

export default Header;
