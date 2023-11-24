import React, { useState, useRef, useEffect } from "react";
import Button from "../../Button";
import { Link } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import Products from "../../Products";
//Logo
import Burger from "./Images/Burger";
import Basket from "./Images/Basket";
import Logo from "./Images/Logo";
import { useData } from "../../../context/basketContext";

function Navbar({ variant }) {
  const [isActive, setIsActive] = useState(false);
  const [isBasketActive, setIsBasketActive] = useState(false);
  const { basket, setBasket } = useData();
  const basketRef = useRef(null);
  const totalPrice = basket.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleBasketClose = () => {
    setIsBasketActive(false);
  };
  const handleClose = () => {
    setIsActive(false);
  };

  const shortName = (item) => {
    const result = item.split(" ")[0];
    return result;
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setBasket([...basket]);
    } else {
      const updatedBasket = basket.filter(
        (basketItem) => basketItem.id !== item.id
      );
      setBasket(updatedBasket);
    }
  };

  const handleIncrease = (item) => {
    if (item.quantity < 10) {
      item.quantity += 1;
      setBasket([...basket]);
    }
  };

  const baseClasses = "relative w-full h-[90px] text-white";
  let variantClasses = "";

  if (variant === "dark") {
    variantClasses = "bg-[#000]";
  } else if (variant === "gray") {
    variantClasses = "bg-[#191919]";
  }
  const combinedClasses = `${baseClasses} ${variantClasses} `;

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Eğer tıklanan element basketRef içinde değilse ve isBasketActive true ise
      if (
        basketRef.current &&
        !basketRef.current.contains(event.target) &&
        isBasketActive
      ) {
        setIsBasketActive(false);
      }
    };

    // Document üzerine click event listener ekle
    document.addEventListener("click", handleClickOutside);

    // Component kaldırıldığında event listener'ı temizle
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setIsBasketActive]);
  console.log(basket);

  return (
    <header className={combinedClasses}>
      <div className="flex h-full justify-between items-center px-6 md:justify-start md:gap-[42px] border-b-[1px] border-[#ffffff1b]  lg:justify-between lg:mx-auto lg:container ">
        <Button variant="button-nav" onClick={() => setIsActive(!isActive)}>
          {<Burger />}
        </Button>
        <Link to="/" className="md:mr-auto lg:mr-0">
          {" "}
          {<Logo />}{" "}
        </Link>
        {/* Desktop Nav Bar */}
        <nav className="hidden lg:flex gap-[34px]  ">
          <Link
            to={"/"}
            className="text-white text-[13px] font-bold uppercase tracking-[2px] leading-6 hover:text-[#D87D4A] "
          >
            Home
          </Link>
          <Link
            to={"/headphones"}
            className="text-white text-[13px] font-bold uppercase tracking-[2px] leading-6 hover:text-[#D87D4A]"
          >
            headphones
          </Link>
          <Link
            to={"/speakers"}
            className="text-white text-[13px] font-bold uppercase tracking-[2px] leading-6 hover:text-[#D87D4A]"
          >
            speakers
          </Link>
          <Link
            to={"/earphones"}
            className="text-white text-[13px] font-bold uppercase tracking-[2px] leading-6 hover:text-[#D87D4A]"
          >
            earphones
          </Link>
        </nav>
        <div className="relative ">
          <Button onClick={() => setIsBasketActive(!isBasketActive)}>
            <Basket />
          </Button>

          {isBasketActive ? (
            <div className="">
              <div
                onClick={() => setIsBasketActive(false)}
                className="overlay z-10"
              >
                {" "}
              </div>
              <div
                ref={basketRef}
                className=" absolute  right-0 top-16 w-[270px] sm:w-[327px]  bg-white rounded-lg px-7 py-8 z-20  "
              >
                {basket.length === 0 ? (
                  <div className="">
                    <h3 className="text-black mb-4 font-bold  ">Card</h3>
                    <span className="block w-full h-[1px] bg-gray-400"></span>
                    <p className="text-gray-700 mt-7 text-[15px]">
                      Your card is empty.
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col gap-8 text-black w-full h-full ">
                    <div className="flex gap-4 justify-between">
                      <h3 className="text-lg font-bold uppercase tracking-[1.286px] ">
                        Cart({basket.length})
                      </h3>
                      <button
                        onClick={() => setBasket(Array())}
                        className="text-sm leading-6 underline font-medium text-[#00000080]"
                      >
                        Remove All
                      </button>
                    </div>

                    <div className="flex flex-col gap-6">
                      {basket.map((item) => (
                        <div
                          key={item.id}
                          className="flex gap-4 items-center   "
                        >
                          <div className="h-16 w-16 rounded-lg overflow-hidden">
                            <img
                              src={item.image}
                              className="w-full h-full object-cover"
                              alt={item.name}
                            />
                          </div>
                          <div className="flex flex-col   ">
                            <h3 className="text-base font-bold leading-6 ">
                              {shortName(item.name)}
                            </h3>
                            <p className="text-start text-[#00000080] text-[14px] font-bold ">
                              $ {item.price}
                            </p>
                          </div>
                          <div className="ml-auto">
                            <div className="w-24 h-8 bg-[#f1f1f1] flex gap-5 items-center justify-center">
                              <button
                                onClick={() => handleDecrease(item)}
                                className="inline-flex w-4 h-4 items-center justify-center text-[#00000040] text-[13px] font-bold  "
                              >
                                -
                              </button>
                              <div>{item.quantity}</div>
                              <button
                                onClick={() => handleIncrease(item)}
                                className="inline-flex w-4 h-4 items-center justify-center text-[#00000040] text-[13px] font-bold  "
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between">
                      <h4 className="text-[#00000080] font-medium leading-6 text-[15px]">
                        Total
                      </h4>
                      <p className="text-lg uppercase font-bold leading-normal ">
                        $ {totalPrice.toLocaleString()}
                      </p>
                    </div>

                    <Link
                      to={"/Checkout"}
                      className="bg-[#D87D4A] text-white  hover:bg-[#FBAF85] inline-flex justify-center items-center w-full h-[48px] font-bold mt-auto"
                    >
                      Checkout
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ) : (
            ""
          )}

          {/* </Backdrop> */}
        </div>
      </div>

      {/* Mobile Nav Bar */}
      {
        <Backdrop open={isActive} onClick={handleClose}>
          <nav
            className={`absolute bg-white top-[90px] left-0 right-0 px-6     ${
              isActive ? "block" : "hidden"
            } `}
          >
            <Products />
          </nav>
        </Backdrop>
      }
    </header>
  );
}

export default Navbar;
