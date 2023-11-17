import React, { useEffect, useState } from "react";
import Data from "../../../data.json";
import Button from "../Button";
import { Link } from "react-router-dom";
function ProductsInfo({ category }) {
  const filteredItems = Data.filter((item) => item.category === category);
  const [screenSize, setScreenSize] = useState("mobile");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setScreenSize("mobile");
      } else if (window.innerWidth <= 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(screenSize);
  return (
    <section className="flex flex-col gap-[120px] lg:gap-[160px] px-6 mt-16 lg:container lg:mx-auto">
      {/* product */}
      {filteredItems.map((item, index) => (
        <div
          key={item.id}
          className={`flex flex-col lg:flex-row lg:gap-[125px] gap-8 md:items-center mb-20  `}
        >
          <div
            className={`w-full h-[352px] md:h-[560px] lg:flex-1 ${
              index % 2 === 0 ? "lg:order-1" : "lg:order-2"
            }  `}
          >
            <img
              className="rounded-lg w-full h-full object-cover"
              src={item.image[screenSize]}
              alt={item.slug}
            />
          </div>

          <div
            className={`flex flex-col gap-6 items-center text-center lg:text-start lg:items-start lg:gap-4 md:w-[572px] lg:flex-1 ${
              index % 2 === 0 ? "lg:order-2" : "lg:order-1"
            } `}
          >
            <h5 className="text-[#d87d4a] text-[14px]  font-normal leading-normal tracking-[10px] uppercase ">
              New Product
            </h5>
            <h3 className="text-[28px] md:text-[40px]  md:leading-[44px] lg:w-[445px] lg:mb-4  font-bold tracking-[1px] uppercase text-black">
              {item.name}
            </h3>
            <p className="text-[15px] font-medium leading-6 text-[#00000080] lg:w-[445px] lg:mb-6">
              {item.description}
            </p>
            <Button variant="button-1">
              <Link
                className="w-full h-full inline-flex justify-center items-center"
                to={item.slug}
                onClick={() => {
                  window.scroll(0, 0);
                }}
              >
                See Product
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProductsInfo;
