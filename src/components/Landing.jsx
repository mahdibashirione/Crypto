import ButtonOutline from "./common/ButtonOutline";

const Landing = () => {
  return (
    <section className="w-full bg-primary-50 mb-12 max-w-primary bg-[url('/svg/businessgraphic.svg')] bg-cover bg-no-repeat mx-auto overflow-hidden rounded-b-3xl">
      <div className="container flex flex-col-reverse md:flex-row md:items-stretch w-full pt-[120px] relative">
        {/* detail */}
        <article className="flex-1 flex flex-col justify-center pr-4 select-none pb-[70px] pt-[40px] md:p-0 mb-14">
          <div className="w-fit">
            <span className="block w-full h-1 rounded-full lg:h-[7px] bg-yellow"></span>
            <span className="block text-gray-5 text-[22px] md:text-[28px] lg:text-[38px]">
              با دعوت از دوستانتان به معامله در
            </span>
            <h2 className="font-bold text-[28px] text-yellow md:text-4xl lg:text-[48px] lg:font-extrabold xl:text-[65px]">
              کــــــریــــپــتــر 30%
            </h2>
          </div>
          <p className="text-gray-5 md:text-lg text-sm lg:text-2xl xl:text-3xl mt-8">
            کــــارمـــزد مـــا در جــیـــب شـــمـــا
          </p>
          <p className="text-gray-5 md:text-lg font-light text-xs lg:text-xl xl:text-2xl mt-3">
            مطمئن ترین ارز دیجیتال در ایران
          </p>
          <ButtonOutline className="w-fit mt-9 lg:mt-14">
            بزن بریم برای دریافت جایزه
          </ButtonOutline>
        </article>
        {/* images */}
        <article className="w-fit mx-auto flex items-center justify-center relative md:pb-16">
          <img
            className="z-10 md:-ml-7 md:w-[300px] lg:w-[438px]"
            alt=""
            src="/svg/Wallet2.svg"
          />
          <span className="block absolute bottom-4 rounded left-4 w-24 h-[400px] md:w-[110px] md:bottom-24 md:left-1 lg:w-[220px] md:h-[1000px] lg:bottom-28 lg:left-3 lg:mx-0 bg-yellow"></span>
        </article>
        <div className="z-10 absolute bottom-0 right-1/2 translate-x-1/2">
          <img className="w-[144px]" src="/svg/heroscroll.png" alt="" />
          <span className="w-1 h-7 block animate-bounce bg-gray-70 absolute bottom-1.5 right-1/2 translate-x-1/2"></span>
        </div>
      </div>
    </section>
  );
};

export default Landing;
