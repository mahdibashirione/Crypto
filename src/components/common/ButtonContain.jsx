const ButtonContain = ({ children, className }) => {
  return (
    <button
      className={`border rounded-xl py-2 text-sm flex items-center md:text-base px-4 md:px-6 duration-200 active:scale-95 ${className} shadow-transparent shadow-primary bg-primary-50 text-white outline-none ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonContain;
