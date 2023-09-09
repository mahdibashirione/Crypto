import ButtonContain from "./common/ButtonContain";
import { BiCaretDown } from "react-icons/bi";

const ExchangeCalculator = () => {
  return (
    <section>
      <div className="container select-none mb-8">
        {/* header */}
        <article className="px-4 flex gap-x-2 justify-between md:justify-start">
          <div className="flex">
            <p className="text-sm md:text-xl lg:text-2xl whitespace-nowrap">
              ماشین حساب آنلاین
            </p>
            <p className="md:text-2xl md:-mt-4 lg:text-3xl font-semibold text-red-500 -mt-3">
              معامله
            </p>
          </div>
          <div>
            <svg
              className="hidden md:block w-full max-w-[636px]"
              height="172"
              viewBox="0 0 636 172"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M634.567 40.2491C613.27 34.4553 493.184 -9.8403 422.336 37.2155C406.421 46.1447 392.926 52.1614 387.91 64.0696C377.71 88.2824 441.438 74.0627 452.018 51.9911C473.211 7.77635 418.398 -11.9832 350.874 12.4811C319.642 23.7966 292.697 42.6902 281.162 62.5734C275.743 71.9147 274.839 84.8112 295.424 81.0524C341.233 72.6875 360.789 33.9887 334.223 22.1714C291.454 3.14655 126.101 20.7748 35.1145 129.403C19.1963 147.357 3.72008 171.145 10.9522 168.591C25.2395 163.546 48.5 130.5 40 143.5C24.981 158.339 19.7287 162.28 12.056 170.103C8.48976 173.74 6.00002 150.5 1.50002 137.5"
                stroke="#466DF7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="5 8"
              />
            </svg>
            <svg
              className="md:hidden -mt-6 -mr-8"
              width="139"
              height="105"
              viewBox="0 0 139 105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M138 1.49999C129.85 1.42959 79.329 -3 78.2745 19.7724C77.3929 24.3186 76.0345 27.6343 79.329 32.2214C86.0275 41.5485 98.0179 30.8136 92.2652 22.1947C80.7411 4.92895 57.8609 3.06635 48.8484 17.7002C44.6798 24.4688 44.6704 33.4756 49.3 41.4224C51.475 45.1558 56.2921 49.7113 60.4928 46.5332C69.841 39.4607 60.0321 24.2573 48.0627 22.5774C28.7932 19.8729 -9.88633 41.0435 7.69278 87.006C10.3555 94.6828 15.4322 104.343 16.4236 102.799C18.382 99.7478 15.8494 86.7368 15.3853 90.4389C17.0724 96.9533 16.3648 99.8104 17.322 103.223C17.7669 104.809 4.15431 102.011 1.43227 101.983"
                stroke="#2150F5"
                strokeWidth="2"
                strokeLinecap="round"
                stroke-dasharray="7.96 5.96"
              />
            </svg>
          </div>
        </article>
        {/* detail */}
        <article className="w-full py-6 flex items-center overflow-hidden">
          {/* right */}
          <div className="flex-1 hidden md:flex items-center justify-center">
            <img
              className="object-cover max-h-[450px]"
              src="/svg/WalletExchange.svg"
              alt=""
            />
          </div>
          {/* left */}
          <div className="md:flex-1 w-full flex justify-center items-center">
            <div className="w-full max-w-[380px] relative flex px-4">
              {/* card */}
              <div className="p-4 lg:p-8 from-white/50 to-gray-50/80 bg-gradient-to-tr backdrop-blur-[2px] w-full rounded-2xl border-2 border-gray-60 relative mt-4 z-10 mx-auto">
                <div className="w-full flex items-center justify-between mb-10">
                  <span className="font-bold text-2xl leading-9 text-primary-50">
                    مبادله
                  </span>
                  <button className="duration-200 active:scale-95">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 15.9999C13 14.3431 14.3432 12.9999 16 12.9999C17.6569 12.9999 19 14.3431 19 15.9999C19 17.6568 17.6569 18.9999 16 18.9999C14.3432 18.9999 13 17.6568 13 15.9999Z"
                        fill="#466DF7"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.447 4.30965C12.7542 -0.270859 19.2457 -0.27086 20.5529 4.30965C20.9579 5.72886 22.416 6.57067 23.8476 6.21182C28.468 5.05365 31.7137 10.6754 28.4005 14.0978C27.374 15.1581 27.374 16.8418 28.4005 17.9021C31.7137 21.3245 28.468 26.9462 23.8476 25.7881C22.416 25.4292 20.9579 26.271 20.5529 27.6902C19.2457 32.2707 12.7542 32.2707 11.447 27.6902C11.042 26.271 9.58391 25.4292 8.15233 25.7881C3.53189 26.9462 0.286152 21.3245 3.59938 17.9021C4.62594 16.8418 4.62594 15.1581 3.59938 14.0978C0.286153 10.6754 3.53189 5.05365 8.15233 6.21182C9.58391 6.57067 11.042 5.72886 11.447 4.30965ZM16 10.9999C13.2386 10.9999 11 13.2385 11 15.9999C11 18.7614 13.2386 20.9999 16 20.9999C18.7614 20.9999 21 18.7614 21 15.9999C21 13.2385 18.7614 10.9999 16 10.9999Z"
                        fill="#466DF7"
                      />
                    </svg>
                  </button>
                </div>
                {/* in */}
                <div className="relative">
                  <label
                    htmlFor=""
                    className="absolute ring-0 -top-6 text-sm text-primary-50"
                  >
                    مبلغ پرداختی
                  </label>
                  <div className="mt-2 relative">
                    <input
                      inputMode="decimal"
                      type="text"
                      className="outline-none p-4 pl-[73px] border-none text-xs w-full bg-gray-50 shadow-primary rounded-xl focus:shadow-primary-50 duration-200"
                      placeholder="مبلغ مورد نظر خود را وارد کنید"
                    />
                    <button className="absolute top-0 left-0 h-full flex items-center gap-x-1 px-4">
                      <BiCaretDown className="text-gray-90" />
                      <span className="text-red-500 font-bold">IRT</span>
                    </button>
                  </div>
                </div>
                {/* replace */}
                <button className="duration-200 active:scale-95 mx-auto block my-2">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.5512 8.1272C31.3455 8.00494 30.4999 8.99602 30.4999 9.99999V38C30.4999 38.8284 31.1714 39.5 31.9999 39.5C32.8283 39.5 33.4999 38.8284 33.4999 38L33.4999 11.7269C33.5283 11.7491 33.5573 11.772 33.5869 11.7958C34.2322 12.314 34.9992 13.0847 36.1388 14.2345L38.9345 17.0552C39.5177 17.6436 40.4674 17.6479 41.0558 17.0647C41.6442 16.4815 41.6484 15.5318 41.0653 14.9434L38.2086 12.0611C37.1458 10.9888 36.2594 10.0944 35.4654 9.4567C34.6325 8.78785 33.7573 8.27911 32.6909 8.14318C32.6444 8.13726 32.5978 8.13193 32.5512 8.1272Z"
                      fill="#18CE2A"
                    />
                    <path
                      d="M17.4999 10C17.4999 9.17158 16.8283 8.50001 15.9999 8.50001C15.1715 8.50001 14.4999 9.17158 14.4999 10L14.4999 35.8726C14.4714 35.8505 14.4424 35.8275 14.4129 35.8037C13.7676 35.2855 13.0005 34.5148 11.861 33.365L9.06526 30.5443C8.48209 29.9559 7.53236 29.9517 6.94396 30.5348C6.35557 31.118 6.35133 32.0677 6.9345 32.6561L9.79114 35.5384C10.8539 36.6107 11.7403 37.5051 12.5344 38.1428C13.3672 38.8117 14.2425 39.3204 15.3089 39.4563C16.6101 39.6222 17.4999 38.5431 17.4999 37.4973L17.4999 10Z"
                      fill="#18CE2A"
                    />
                    <path
                      d="M32.5512 8.1272C31.3455 8.00494 30.4999 8.99602 30.4999 9.99999V38C30.4999 38.8284 31.1714 39.5 31.9999 39.5C32.8283 39.5 33.4999 38.8284 33.4999 38L33.4999 11.7269C33.5283 11.7491 33.5573 11.772 33.5869 11.7958C34.2322 12.314 34.9992 13.0847 36.1388 14.2345L38.9345 17.0552C39.5177 17.6436 40.4674 17.6479 41.0558 17.0647C41.6442 16.4815 41.6484 15.5318 41.0653 14.9434L38.2086 12.0611C37.1458 10.9888 36.2594 10.0944 35.4654 9.4567C34.6325 8.78785 33.7573 8.27911 32.6909 8.14318C32.6444 8.13726 32.5978 8.13193 32.5512 8.1272Z"
                      stroke="#18CE2A"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M17.4999 10C17.4999 9.17158 16.8283 8.50001 15.9999 8.50001C15.1715 8.50001 14.4999 9.17158 14.4999 10L14.4999 35.8726C14.4714 35.8505 14.4424 35.8275 14.4129 35.8037C13.7676 35.2855 13.0005 34.5148 11.861 33.365L9.06526 30.5443C8.48209 29.9559 7.53236 29.9517 6.94396 30.5348C6.35557 31.118 6.35133 32.0677 6.9345 32.6561L9.79114 35.5384C10.8539 36.6107 11.7403 37.5051 12.5344 38.1428C13.3672 38.8117 14.2425 39.3204 15.3089 39.4563C16.6101 39.6222 17.4999 38.5431 17.4999 37.4973L17.4999 10Z"
                      stroke="#18CE2A"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                {/* out */}
                <div className="relative">
                  <label
                    htmlFor=""
                    className="absolute ring-0 -top-6 text-sm text-primary-50"
                  >
                    مبلغ دریافتی
                  </label>
                  <div className="mt-2 relative">
                    <input
                      inputMode="decimal"
                      type="text"
                      className="outline-none p-4 pl-0 border-none text-xs w-full bg-gray-50 shadow-primary rounded-xl focus:shadow-primary-50 duration-200"
                      placeholder="...."
                    />
                    <button className="absolute top-0 left-0 h-full flex items-center gap-x-1 px-4">
                      <BiCaretDown className="text-gray-90" />
                      <span className="text-primary-50 font-bold">USDt</span>
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-x-4 justify-center mt-6 text-primary-50">
                  <p>0.000102 تتر</p>
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
                      d="M9.85608 7.97217C9.95842 7.97217 10.0583 8.00157 10.1418 8.05632L15.4405 11.5274C15.6639 11.6738 15.7171 11.9604 15.5593 12.1676C15.5289 12.2075 15.4918 12.2427 15.4494 12.2717L10.1508 15.9098C9.93093 16.0608 9.62078 16.0178 9.45802 15.814C9.39488 15.7349 9.3608 15.6391 9.3608 15.5406L9.3608 13.2003L5.029 13.2003C1.94188 13.2165 0.265537 11.8017 -3.56307e-08 8.95566C0.26825 9.21613 1.44067 10.753 5.029 10.753C7.42122 10.753 8.86517 10.7275 9.3608 10.6765L9.3608 8.43148C9.3608 8.1778 9.58254 7.97217 9.85608 7.97217Z"
                      fill="#466DF7"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.54176 0.186017C6.6049 0.265109 6.63898 0.360918 6.63898 0.459329L6.63898 2.79972L10.9708 2.79972C14.0579 2.78345 15.7342 4.19832 15.9998 7.04432C15.7315 6.78385 14.5591 5.247 10.9708 5.247C8.57856 5.247 7.13461 5.2725 6.63898 5.32344L6.63898 7.5685C6.63898 7.82218 6.41725 8.02781 6.1437 8.02781C6.04136 8.02781 5.94153 7.99841 5.85794 7.94366L0.559288 4.47255C0.335872 4.32617 0.282704 4.03958 0.440527 3.83238C0.470929 3.79247 0.508003 3.75731 0.550351 3.72824L5.84898 0.0901994C6.06885 -0.0607557 6.379 -0.0178596 6.54176 0.186017Z"
                      fill="#466DF7"
                    />
                  </svg>
                  <p>1 تومان</p>
                </div>
                <ButtonContain className="w-full flex justify-center py-3 mt-2 bg-secendry-50 font-bold border-secendry-50 shadow-primary hover:shadow-secendry-50">
                  تبادل کن
                </ButtonContain>
              </div>
              {/* background card */}
              <img
                className="absolute md:-left-0 lg:-left-16 lg:-top-8 -top-6 -left-14 z-0"
                src="/svg/CartBank.svg"
                loading="lazy"
                alt=""
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ExchangeCalculator;
