const ButtonOutline = ({ children, className }) => {
  return (
    <button
      className={`text-yellow border-yellow border-2 rounded-xl py-2 text-sm font-bold md:text-base px-6 duration-200 hover:bg-yellow hover:text-gray-90 active:scale-95 ${className} shadow-transparent hover:shadow-yellow shadow-primary`}
    >
      {children}
    </button>
  );
};

export default ButtonOutline;
