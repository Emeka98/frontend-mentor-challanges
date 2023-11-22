import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../../context/DataContext";
import Button from "../Button";

function Header() {
  const {
    isDarkMode,
    setIsDarkMode,
    setSearchTitle,
    searchTitle,
    detailedSeach,
    setDetailedSearch,
    location,
    setLocation,
    isFullTime,
    setIsFullTime,
  } = useData();

  return (
    <header className="bg-light-grey dark:bg-midnight">
      <div className="w-full h-[136px]  bg-image-mobile md:rounded-bl-[100px]   ">
        <div className="md:mx-auto md:container">
          <div className="flex flex-col px-6 pt-9">
            <div className="flex justify-between ">
              <Link to={"/"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="115"
                  height="32"
                  viewBox="0 0 115 32"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.4496 23.5485C9.57942 23.9023 8.63373 24.0792 7.61248 24.0792C6.15355 24.0792 4.84833 23.7228 3.69682 23.0099C2.54531 22.297 1.64129 21.3201 0.984776 20.0792C0.328259 18.8383 0 17.4257 0 15.8416C0 14.2574 0.328259 12.8449 0.984776 11.604C1.64129 10.363 2.54531 9.38614 3.69682 8.67327C4.84833 7.9604 6.15355 7.60396 7.61248 7.60396C8.59204 7.60396 9.50387 7.7703 10.348 8.10297C11.1921 8.43564 11.9424 8.89769 12.5989 9.48911V0H17.1007V23.7624H12.849L12.7396 22.0515C12.083 22.6957 11.3197 23.1947 10.4496 23.5485ZM5.78361 18.899C6.53391 19.7122 7.48222 20.1188 8.62852 20.1188C9.77482 20.1188 10.7231 19.7122 11.4734 18.899C12.2237 18.0858 12.5989 17.0667 12.5989 15.8416C12.5989 14.6165 12.2237 13.5974 11.4734 12.7842C10.7231 11.971 9.77482 11.5644 8.62852 11.5644C7.48222 11.5644 6.53391 11.971 5.78361 12.7842C5.0333 13.5974 4.65815 14.6165 4.65815 15.8416C4.65815 17.0667 5.0333 18.0858 5.78361 18.899ZM28.8868 24.0792C29.9705 24.0792 31.1038 23.8997 32.2866 23.5406C33.4694 23.1815 34.6652 22.5215 35.874 21.5604L33.1541 18.2653C32.5706 18.8251 31.9219 19.2818 31.208 19.6356C30.4942 19.9894 29.5954 20.1663 28.5116 20.1663C27.5008 20.1663 26.6176 19.8918 25.8621 19.3426C25.1066 18.7934 24.5881 18.0805 24.3068 17.204H36.4993V15.8257C36.4993 14.231 36.1449 12.8158 35.4363 11.5802C34.7277 10.3446 33.7612 9.37294 32.5367 8.66535C31.3122 7.95776 29.9132 7.60396 28.3397 7.60396C26.7557 7.60396 25.3411 7.9604 24.0958 8.67327C22.8505 9.38614 21.8683 10.3578 21.1492 11.5881C20.4302 12.8185 20.0707 14.2205 20.0707 15.7941C20.0707 17.3888 20.4458 18.8119 21.1961 20.0634C21.9464 21.3149 22.9833 22.297 24.3068 23.0099C25.6302 23.7228 27.1569 24.0792 28.8868 24.0792ZM24.213 14.6693H31.8724C31.6535 13.7399 31.2054 12.9901 30.5281 12.4198C29.8507 11.8495 29.0379 11.5644 28.0896 11.5644C27.1308 11.5644 26.2998 11.8548 25.5964 12.4356C24.893 13.0165 24.4318 13.7611 24.213 14.6693ZM54.319 7.92079H49.5827L46.9723 15.6356C46.8264 16.0581 46.657 16.6495 46.4643 17.4099C46.2715 18.1703 46.1125 18.862 45.9875 19.4851H45.925C45.8208 18.862 45.6775 18.165 45.4951 17.3941C45.3127 16.6231 45.1486 16.037 45.0027 15.6356L42.1734 7.92079H37.2808L43.7678 23.7624H48.1446L54.319 7.92079ZM60.212 4.37228C59.7535 4.83696 59.1491 5.06931 58.3988 5.06931C57.6485 5.06931 57.0441 4.83696 56.5856 4.37228C56.127 3.90759 55.8978 3.29505 55.8978 2.53465C55.8978 1.77426 56.127 1.16172 56.5856 0.69703C57.0441 0.232343 57.6485 0 58.3988 0C59.1491 0 59.7535 0.232343 60.212 0.69703C60.6706 1.16172 60.8998 1.77426 60.8998 2.53465C60.8998 3.29505 60.6706 3.90759 60.212 4.37228ZM54.8817 32C56.7471 32 58.1748 31.4957 59.1647 30.4871C60.1547 29.4785 60.6497 28.0343 60.6497 26.1545V7.92079H56.1479V25.6317C56.1479 26.3815 55.9108 26.9703 55.4367 27.398C54.9625 27.8257 54.3607 28.0396 53.6312 28.0396C53.0893 28.0396 52.5318 27.9182 51.9587 27.6752V31.4139C52.9487 31.8046 53.923 32 54.8817 32ZM75.9997 23.0099C74.7492 23.7228 73.3216 24.0792 71.7167 24.0792C70.1119 24.0792 68.6816 23.7228 67.4259 23.0099C66.1702 22.297 65.1802 21.3201 64.456 20.0792C63.7317 18.8383 63.3696 17.4257 63.3696 15.8416C63.3696 14.2574 63.7317 12.8449 64.456 11.604C65.1802 10.363 66.1702 9.38614 67.4259 8.67327C68.6816 7.9604 70.1119 7.60396 71.7167 7.60396C73.3216 7.60396 74.7492 7.9604 75.9997 8.67327C77.2502 9.38614 78.2376 10.363 78.9619 11.604C79.6861 12.8449 80.0482 14.2574 80.0482 15.8416C80.0482 17.4257 79.6861 18.8383 78.9619 20.0792C78.2376 21.3201 77.2502 22.297 75.9997 23.0099ZM71.7167 20.1188C70.5704 20.1188 69.6221 19.7122 68.8718 18.899C68.1215 18.0858 67.7464 17.0667 67.7464 15.8416C67.7464 14.6165 68.1215 13.5974 68.8718 12.7842C69.6221 11.971 70.5704 11.5644 71.7167 11.5644C72.863 11.5644 73.8113 11.971 74.5616 12.7842C75.3119 13.5974 75.6871 14.6165 75.6871 15.8416C75.6871 17.0667 75.3119 18.0858 74.5616 18.899C73.8113 19.7122 72.863 20.1188 71.7167 20.1188ZM96.4299 23.0099C95.2836 23.7228 93.9758 24.0792 92.5065 24.0792C91.4956 24.0792 90.5525 23.9023 89.6772 23.5485C88.8018 23.1947 88.0359 22.6957 87.3794 22.0515L87.2699 23.7624H83.0182V0H87.5201V9.48911C88.1766 8.89769 88.9269 8.43564 89.771 8.10297C90.6151 7.7703 91.5269 7.60396 92.5065 7.60396C93.9758 7.60396 95.2836 7.9604 96.4299 8.67327C97.5762 9.38614 98.4776 10.363 99.1342 11.604C99.7907 12.8449 100.119 14.2574 100.119 15.8416C100.119 17.4257 99.7907 18.8383 99.1342 20.0792C98.4776 21.3201 97.5762 22.297 96.4299 23.0099ZM91.4904 20.1188C90.3441 20.1188 89.3958 19.7122 88.6455 18.899C87.8952 18.0858 87.5201 17.0667 87.5201 15.8416C87.5201 14.6165 87.8952 13.5974 88.6455 12.7842C89.3958 11.971 90.3441 11.5644 91.4904 11.5644C92.6367 11.5644 93.585 11.971 94.3353 12.7842C95.0856 13.5974 95.4608 14.6165 95.4608 15.8416C95.4608 17.0667 95.0856 18.0858 94.3353 18.899C93.585 19.7122 92.6367 20.1188 91.4904 20.1188ZM111.905 23.4851C110.967 23.8812 109.93 24.0792 108.794 24.0792C107.721 24.0792 106.609 23.8891 105.457 23.5089C104.306 23.1287 103.204 22.5426 102.151 21.7505L104.277 18.3129C105.173 18.9149 105.999 19.3927 106.754 19.7465C107.51 20.1003 108.185 20.2772 108.779 20.2772C109.237 20.2772 109.607 20.1716 109.889 19.9604C110.17 19.7492 110.311 19.4799 110.311 19.1525C110.311 18.6772 110.047 18.2917 109.521 17.996C108.995 17.7003 108.388 17.4099 107.7 17.1248C106.971 16.8185 106.239 16.4726 105.504 16.0871C104.769 15.7017 104.154 15.2026 103.659 14.5901C103.164 13.9776 102.917 13.1855 102.917 12.2139C102.917 10.8726 103.441 9.76898 104.488 8.90297C105.535 8.03696 107.018 7.60396 108.935 7.60396C109.873 7.60396 110.86 7.72277 111.897 7.9604C112.934 8.19802 113.88 8.58086 114.734 9.10891L112.749 12.5782C112.291 12.2719 111.694 12 110.959 11.7624C110.225 11.5248 109.602 11.4059 109.091 11.4059C108.8 11.4059 108.479 11.4667 108.13 11.5881C107.781 11.7096 107.606 11.9446 107.606 12.2931C107.606 12.6838 107.849 13.0059 108.333 13.2594C108.818 13.5129 109.394 13.7716 110.06 14.0356C110.78 14.3208 111.519 14.6561 112.28 15.0416C113.041 15.4271 113.684 15.9393 114.211 16.5782C114.737 17.2172 115 18.0541 115 19.0891C115 20.1241 114.719 21.0165 114.156 21.7663C113.593 22.5162 112.843 23.0891 111.905 23.4851Z"
                    fill="white"
                  />
                </svg>
              </Link>

              <button onClick={() => setIsDarkMode(!isDarkMode)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="112"
                  height="24"
                  viewBox="0 0 112 24"
                  fill="none"
                >
                  <rect x="36" width="48" height="24" rx="12" fill="white" />
                  {isDarkMode ? (
                    <circle cx="73" cy="12" r="7" fill="#5964E0" />
                  ) : (
                    <circle cx="48" cy="12" r="7" fill="#5964E0" />
                  )}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 5.36491C9.67033 5.36491 9.38775 5.07034 9.38775 4.72667V2.83649C9.38775 2.49282 9.67033 2.19824 10 2.19824C10.3297 2.19824 10.6122 2.49282 10.6122 2.83649V4.72667C10.6122 5.07034 10.3297 5.36491 10 5.36491ZM6.40172 7.95241C7.31472 7.10241 8.60365 6.55241 10 6.55241C11.3963 6.55241 12.6853 7.07741 13.5983 7.95241C14.5113 8.80241 15.102 10.0024 15.102 11.3024C15.102 12.6024 14.5113 13.8024 13.5983 14.6524C12.6853 15.5024 11.3963 16.0524 10 16.0524C8.60365 16.0524 7.31472 15.5274 6.40172 14.6524C5.48872 13.8024 4.89796 12.6024 4.89796 11.3024C4.89796 10.0024 5.46187 8.80241 6.40172 7.95241ZM3.0593 5.71033L4.54178 7.14803C4.83827 7.40943 5.26954 7.40943 5.51213 7.14803C5.78167 6.88663 5.78167 6.46839 5.51213 6.20699L4.02965 4.76929C3.76011 4.50789 3.32884 4.50789 3.0593 4.76929C2.78976 5.03069 2.78976 5.44893 3.0593 5.71033ZM0.658124 10.9066H2.60718C2.96156 10.9066 3.26531 11.1806 3.26531 11.5003C3.26531 11.82 2.96156 12.0941 2.60718 12.0941H0.658124C0.303749 12.0941 0 11.82 0 11.5003C0 11.1806 0.303749 10.9066 0.658124 10.9066ZM5.51213 15.8526C5.24259 15.5912 4.81132 15.5912 4.54178 15.8526L3.0593 17.2903C2.78976 17.5517 2.78976 17.97 3.0593 18.2314C3.32884 18.4928 3.76011 18.4928 4.02965 18.2314L5.51213 16.7937C5.78167 16.5323 5.78167 16.114 5.51213 15.8526ZM10 17.6357C10.3297 17.6357 10.6122 17.9303 10.6122 18.274V20.1642C10.6122 20.5078 10.3297 20.8024 10 20.8024C9.67033 20.8024 9.38775 20.5078 9.38775 20.1642V18.274C9.38775 17.9303 9.67033 17.6357 10 17.6357ZM16.9407 17.2903L15.4582 15.8526C15.1617 15.5912 14.7305 15.5912 14.4879 15.8526C14.2183 16.114 14.2183 16.5323 14.4879 16.7937L15.9704 18.2314C16.2399 18.4928 16.6712 18.4928 16.9407 18.2314C17.2102 17.97 17.2102 17.5517 16.9407 17.2903ZM16.7347 11.5003C16.7347 11.1806 17.0384 10.9066 17.3928 10.9066H19.3419C19.6963 10.9066 20 11.1806 20 11.5003C20 11.82 19.6963 12.0941 19.3419 12.0941H17.3928C17.0384 12.0941 16.7347 11.82 16.7347 11.5003ZM14.4879 7.14803C14.7574 7.40943 15.1887 7.40943 15.4582 7.14803L16.9407 5.71033C17.2102 5.44893 17.2102 5.03069 16.9407 4.76929C16.6712 4.50789 16.2399 4.50789 15.9704 4.76929L14.4879 6.20699C14.2183 6.46839 14.2183 6.88663 14.4879 7.14803Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M106 6C104.358 6 102.842 6.69474 101.768 7.76842C100.663 8.84211 100 10.3579 100 12C100 13.6421 100.695 15.1579 101.768 16.2316C102.842 17.3368 104.358 18 106 18C107.642 18 109.158 17.3053 110.232 16.2316C111.305 15.1579 112 13.6421 112 12C112 11.8147 111.991 11.631 111.974 11.4494C111.867 12.369 111.438 13.2044 110.821 13.8211C110.105 14.5368 109.095 15 108 15C106.905 15 105.895 14.5579 105.179 13.8211C104.463 13.1053 104 12.0947 104 11C104 9.90526 104.442 8.89474 105.179 8.17895C105.895 7.46316 106.905 7 108 7C108.716 7 109.397 7.18933 109.982 7.52669C108.929 6.56718 107.519 6 106 6Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Input Area */}

            <div className="w-full h-20 rounded-md mt-7 overflow-hidden relative md:hidden z-30  ">
              <input
                className="w-full  h-full pl-6 pr-28 outline-none text-dark-blue text-base font-normal dark:bg-dark-blue dark:text-white dark:placeholder:text-[rgba(255, 255, 255, 0.50)]  "
                type="text"
                placeholder="Filter by title..."
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
              />
              {/* Filter */}
              <button
                className="w-5 h-5 absolute right-[88px] top-[30px] md:hidden "
                onClick={() => setDetailedSearch(!detailedSeach)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M19.1076 1.50591e-06H0.860224C0.538187 -0.000593357 0.243138 0.175089 0.0960199 0.454871C-0.0531279 0.738422 -0.0269509 1.07987 0.163593 1.33883L6.84866 10.5411C6.85089 10.5443 6.85333 10.5473 6.85556 10.5504C7.09845 10.8709 7.22995 11.2591 7.23056 11.6579V19.1605C7.22914 19.3825 7.31842 19.5961 7.47853 19.7537C7.63884 19.9112 7.85677 20 8.08405 20C8.19951 19.9998 8.31396 19.9774 8.4207 19.934L12.1772 18.5345C12.5136 18.4339 12.7371 18.1236 12.7371 17.75V11.6579C12.7377 11.2591 12.8692 10.8709 13.1118 10.5504C13.1141 10.5473 13.1165 10.5443 13.1187 10.5411L19.804 1.33864C19.9946 1.07987 20.0207 0.73862 19.8716 0.45507C19.7247 0.175089 19.4294 -0.000593357 19.1076 1.50591e-06Z"
                    fill="#6E8098"
                  />
                </svg>
              </button>
              {/* Search */}
              <button className="w-12 h-12 absolute top-4 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <rect width="48" height="48" rx="5" fill="#5964E0" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27.3533 26.549H28.2603L33.9529 32.2531L32.2531 33.9529L26.549 28.2603V27.359L26.2353 27.0453C24.9405 28.1576 23.2578 28.8307 21.4153 28.8307C17.3198 28.8307 14 25.5109 14 21.4153C14 17.3198 17.3198 14 21.4153 14C25.5109 14 28.8306 17.3198 28.8306 21.4153C28.8306 23.2578 28.1576 24.9405 27.0396 26.2353L27.3533 26.549ZM16.2817 21.4153C16.2817 24.2503 18.5804 26.549 21.4153 26.549C24.2503 26.549 26.549 24.2503 26.549 21.4153C26.549 18.5804 24.2503 16.2817 21.4153 16.2817C18.5804 16.2817 16.2817 18.5804 16.2817 21.4153Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>

            {/* Desktop İnput Area */}

            <div className="w-full h-20 rounded-md mt-7 overflow-hidden bg-white dark:bg-dark-blue hidden md:flex z-50 ">
              {/* Title */}
              <div className="flex-1 h-full relative border-r-[1px] border-[#6e809833] ">
                <label
                  className="absolute top-1/2 -translate-y-1/2 left-6"
                  htmlFor="title"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.024 15.0588H17.1123L23.9435 21.9037L21.9037 23.9435L15.0588 17.1123V16.0308L14.6824 15.6544C13.1286 16.9891 11.1093 17.7968 8.89842 17.7968C3.98374 17.7968 0 13.8131 0 8.89842C0 3.98374 3.98381 0 8.89842 0C13.813 0 17.7968 3.98374 17.7968 8.89842C17.7968 11.1093 16.9891 13.1286 15.6475 14.6824L16.024 15.0588ZM2.73799 8.89842C2.73799 12.3003 5.49651 15.0588 8.89842 15.0588C12.3003 15.0588 15.0588 12.3003 15.0588 8.89842C15.0588 5.49651 12.3003 2.73799 8.89842 2.73799C5.49651 2.73799 2.73799 5.49651 2.73799 8.89842Z"
                      fill="#5964E0"
                    />
                  </svg>
                </label>
                <input
                  className="h-full w-full pl-14 outline-none text-dark-blue text-base font-normal dark:bg-dark-blue dark:text-white dark:placeholder:text-[rgba(255, 255, 255, 0.50)]"
                  id="title"
                  placeholder="Filter by title..."
                  type="text"
                  value={searchTitle}
                  onChange={(e) => setSearchTitle(e.target.value)}
                />
              </div>
              {/* Location */}
              <div className="flex-1 h-full relative border-r-[1px]  border-[#6e809833]  ">
                <label
                  className="absolute top-1/2 -translate-y-1/2 left-6"
                  htmlFor="location"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.024 15.0588H17.1123L23.9435 21.9037L21.9037 23.9435L15.0588 17.1123V16.0308L14.6824 15.6544C13.1286 16.9891 11.1093 17.7968 8.89842 17.7968C3.98374 17.7968 0 13.8131 0 8.89842C0 3.98374 3.98381 0 8.89842 0C13.813 0 17.7968 3.98374 17.7968 8.89842C17.7968 11.1093 16.9891 13.1286 15.6475 14.6824L16.024 15.0588ZM2.73799 8.89842C2.73799 12.3003 5.49651 15.0588 8.89842 15.0588C12.3003 15.0588 15.0588 12.3003 15.0588 8.89842C15.0588 5.49651 12.3003 2.73799 8.89842 2.73799C5.49651 2.73799 2.73799 5.49651 2.73799 8.89842Z"
                      fill="#5964E0"
                    />
                  </svg>
                </label>
                <input
                  className="h-full w-full pl-14 outline-none text-dark-blue text-base font-normal dark:bg-dark-blue dark:text-white dark:placeholder:text-[rgba(255, 255, 255, 0.50)]"
                  id="location"
                  placeholder="Filter by location..."
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              {/* Full time or Part */}
              <div className="flex-1 h-full relative  flex gap-4 items-center justify-center px-6 py-3 ">
                <input
                  className=" "
                  id="checkbox"
                  type="checkbox"
                  value={isFullTime}
                  onChange={() => setIsFullTime(!isFullTime)}
                />

                <label
                  className="text-base font-bold text-dark-blue dark:text-white "
                  htmlFor="checkbox"
                >
                  Full Time
                </label>

                <div className="ml-auto">
                  <Button variant="primary" customStyle="w-20 ">
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
