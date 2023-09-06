const ButtonOutline = ({ children, className }) => {
  return (
    <button
      className={`border rounded-xl py-2 text-sm flex items-center md:text-base px-4 md:px-6 duration-200 active:scale-95 ${className} shadow-transparent shadow-primary outline-none ${
        !className
          ? "text-primary-50 border-primary-50 hover:bg-primary-50 hover:text-white hover:shadow-primary-50"
          : null
      }`}
    >
      {children}
    </button>
  );
};

export default ButtonOutline;
