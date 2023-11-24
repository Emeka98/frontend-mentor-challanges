import React, { useState } from "react";
import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";
import { useData } from "../../context/basketContext";
import FormPage from "../../components/FormPage";
import { Link } from "react-router-dom";
import { Backdrop } from "@mui/material";

function Checkout() {
  const { basket } = useData();
  const [success, setSuccess] = useState(false);
  const handleClose = () => {
    setSuccess(false);
  };
  const taxRate = 0.2;
  const fixedTaxAmount = 50;

  const totalPrice = basket.reduce((acc, currentItem) => {
    return acc + currentItem.price;
  }, 0);

  const shortName = (item) => {
    const result = item.split(" ")[0];
    return result;
  };
  return (
    <>
      <Navbar variant="dark" />
      <main className="bg-[#f1f1f1] pb-10 relative ">
        {/* Success */}
        {success && (
          <Backdrop open={success} onClick={handleClose}>
            <div className="p-8 w-[327px] lg:w-[540px] bg-white rounded-lg ">
              <div className="flex flex-col gap-6 ">
                <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <circle fill="#D87D4A" cx="32" cy="32" r="32" />
                    <path
                      stroke="#FFF"
                      strokeWidth="4"
                      d="m20.754 33.333 6.751 6.751 15.804-15.803"
                    />
                  </g>
                </svg>

                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold uppercase leading-7 tracking-[0.857px]">
                    Thank you for your order
                  </h3>
                  <p className="font-medium opacity-50 leading-6 text-[15px]">
                    You will receive an email confirmation shortly.
                  </p>
                </div>

                <div className="flex flex-col lg:flex-row">
                  <div className="w-full bg-[#f1f1f1] lg:w-[246px] rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none px-8 ">
                    <div className="flex flex-col">
                      <div className="flex gap-4 pt-8 pb-3 ">
                        <div className="w-10 h-10 overflow-hidden ">
                          <img
                            className="object-cover"
                            src={basket[0]?.image}
                            alt={basket[0]?.name}
                          />
                        </div>

                        <div className="flex flex-col">
                          <h4 className="text-[15px] font-bold leading-6 ">
                            {shortName(basket[0]?.name)}
                          </h4>
                          <p className="text-[#00000080] leading-6 font-bold text-sm">
                            ${basket[0]?.price.toLocaleString()}
                          </p>
                        </div>

                        <div className="ml-auto">
                          <p className="text-[15px] leading-6 text-[#00000080] ">
                            x{basket[0]?.quantity}
                          </p>
                        </div>
                      </div>

                      {basket.length > 2 && (
                        <span className="w-full h-[1px] bg-[#00000080] mb-3"></span>
                      )}

                      <div>
                        {basket.length > 2 && (
                          <p className="text-xs font-bold tracking-[-0.214px] text-[#00000080] ">{`and ${
                            basket.length - 1
                          } other item(s)`}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="bg-black text-white rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none px-6 lg:w-[198px] py-4">
                    <div className="flex flex-col gap-2">
                      <h3 className="opacity-50 text-[15px] font-medium leading-6  uppercase">
                        Grand Total
                      </h3>
                      <p className="font-bold text-lg uppercase ">
                        {" "}
                        {/* Total Price*/}${" "}
                        {(
                          totalPrice +
                          totalPrice * taxRate +
                          fixedTaxAmount
                        ).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                <button className="uppercase bg-[#d87d4a] w-full py-[15px] text-[13px] font-bold tracking-[1px] mb-8 hover:opacity-50  text-white ">
                  <Link to={"/"}>Back to home</Link>
                </button>
              </div>
            </div>
          </Backdrop>
        )}

        <div className=" lg:container lg:mx-auto ">
          <div className="flex flex-col gap-6  px-6 py-4  ">
            <Link
              to={"/"}
              className="text-[#000000cc] text-[15px] font-medium leading-6  "
            >
              Go Back
            </Link>

            <FormPage success={success} setSuccess={setSuccess} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Checkout;
