import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

function ProductsCard() {
  return (
    <div className="px-6 md:px-8 lg:container lg:mx-auto lg:mt-40">
      <div className="flex flex-col  gap-6">
        <div className="w-full h-[600px] md:h-[720px] flex flex-col lg:flex-row lg:items-end lg:justify-center lg:py-0  items-center justify-center md:justify-start gap-8 md:gap-16 py-[55px] px-6 bg-[#D87D4A] text-white rounded-lg lg:h-[560px]">
          <div className="w-[172px] h-[207px] md:w-[197px] md:h-[237px] lg:w-[410px] lg:flex  lg:h-[493px] lg:overflow-hidden">
            <img
              src="https://s3-alpha-sig.figma.com/img/e0c8/6dd2/a7f4c7505f96ce15449ca178ce6b7ad1?Expires=1697414400&Signature=DlrYoubrqj0jurdeYZhN7R9PoQ7SRt-JqZkNQu14ZcAppnwWi~~9fdk6EP551FdKN2PCDh4Q-ycPi8dbYZ1MseieQ36A1uAwgJaHMG900Nx9r~f6Ntk5VbxpQgZYjo9HiwCZdn-9PmrA5RFYKdPvJkG8UfGKv4c0pkgG9EPNdBupONd57oE3~6a5SFRyc5c1EybHmIfvZx0J-hjRC~zfN3ofEmmGJc7WawW4p1~jMJzfarwk0cNkXZ4fvNXBo2jD9jwGKFKTODMZ1kuMYJcCCU8qtZoco8CRyweHspv5kuGFLav-6oTiIRhogV4N5wdvSCaFUEwhOrGKFM7yFl3v7Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="product image"
              className="block -mb-6"
            />
          </div>

          <div className="flex flex-col items-center gap-6 text-center lg:h-full lg:justify-center">
            <h3 className="text-[36px] md:text-[58px] md:leading-[58px] md:tracking-[2px]  font-bold leading-10 tracking-[#1.286px] uppercase ">
              zx9 speaker
            </h3>
            <p className="text-[15px] font-medium leading-6 text-[#ffffffbf] md:w-[349px] ">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button className="w-[160px] h-12 text-white bg-black uppercase font-bold text-[13px] hover:bg-[#4c4c4c]">
              <Link
                onClick={() => {
                  window.scroll(0, 0);
                }}
                className="w-full h-full inline-flex justify-center items-center"
                to={"/speakers/zx9-speaker"}
              >
                See Product
              </Link>
            </button>
          </div>
        </div>

        <div className="w-full h-[320px] rounded-lg bg-[#f1f1f1] bg-card-image-mobile md:bg-card-image-tablet  md:bg-center lg:bg-card-image-desktop bg-right bg-cover">
          <div className="w-full h-full flex flex-col gap-7 justify-center items-start px-6 ">
            <h4 className="uppercase text-[28px] font-bold tracking-[2px] text-black">
              zx7 speaker
            </h4>
            <Button variant="button-2">
              <Link
                onClick={() => {
                  window.scroll(0, 0);
                }}
                className="w-full h-full inline-flex justify-center items-center"
                to={"/speakers/zx7-speaker"}
              >
                See Product
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 ">
          <div className="w-full h-[200px] md:h-[320px] md:flex-1 ">
            <img
              src="https://s3-alpha-sig.figma.com/img/86bb/9423/fa199827480977a028c4dfc1f770ab02?Expires=1697414400&Signature=QTUPgyTi~UsFvmyX0sko3CF6DjDkKz4gynk-uriRiGNM8umxOZiFpR6D-YEYDAYwLr9YiPSE6-QlqURSHEJ2WTmr2uSDdwqm84UIsAzFHfeyLes3ZRdsj05pNM8GTsqex5qN2yiN91gTNnUTNER3AowYX1XWQNhuh1onvPkL4EZMEi4ENLqEoBQ6KWDoSjU9njpW-RtAEqj2ADarXyi9mcM1ryiCjSeUd9mYNp7SbHX09Ewf3wJvh6I55vD4vH~vqwmU3lrBq8LyxpRFNO-odJniL7BFYbqzTmJ9oe4hfaph1ZH6jbol18bK9bbe1LflsdOvHvIHjG3QdBAGV~FI-g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="block w-full h-full object-cover rounded-lg  "
            />
          </div>
          <div className="bg-[#f1f1f1] rounded-lg h-[200px] md:h-[320px] px-6 md:flex-1">
            <div className="flex flex-col gap-8 justify-center w-full h-full">
              <h3 className="text-black text-[28px] tracking-[2px] uppercase font-bold ">
                yx1 earphones
              </h3>
              <Button variant="button-2">
                <Link
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                  className="w-full h-full inline-flex justify-center items-center"
                  to={"/earphones/yx1-earphones"}
                >
                  See Product
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsCard;
