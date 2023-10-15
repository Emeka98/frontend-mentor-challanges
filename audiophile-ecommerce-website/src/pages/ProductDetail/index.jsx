import React from "react";
import { useParams, Link } from "react-router-dom";
import Data from "../../../data.json";
import Button from "../../components/Button";
import { useData } from "../../context/basketContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductDetail() {
  const { id } = useParams();
  const { basket, setBasket, numberOfProduct, setNumberOfProduct } = useData();
  const filteredData = Data.filter((item) => item.slug === id);
  const data = filteredData[0];
  const parts = location.pathname.split("/");
  const cleanPathname = `/${parts[1]}`;

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const addToCart = () => {
    const updatedBasketItem = {
      id: data.id,
      image: data.image.mobile,
      name: data.name,
      quantity: numberOfProduct,
      price: data.price,
    };

    toast.success("Product added to cart ", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    const existingItem = basket.find((item) => item.id === data.id);
    if (existingItem) {
      existingItem.quantity += numberOfProduct;
      const updatedBasket = [...basket];
      setBasket(updatedBasket);
    } else {
      const updatedBasket = [...basket, updatedBasketItem];
      setBasket(updatedBasket);
    }
  };

  const handleDecrease = () => {
    if (numberOfProduct > 0) setNumberOfProduct((prev) => prev - 1);
  };

  const handleIncrease = () => {
    if (numberOfProduct > 0 && numberOfProduct !== 10)
      setNumberOfProduct((prev) => prev + 1);
  };

  return (
    <main className=" flex flex-col gap-6 mt-4 px-6  ">
      <Link
        to={cleanPathname}
        className="text-[#00000080] text-[15px] font-medium leading-6 mt-4 md:mt-8 lg:container lg:mx-auto "
      >
        Go Back
      </Link>
      {/* Product */}
      <section className="flex flex-col gap-8 md:flex-row md:gap-[70px] lg:gap-[125px] lg:container lg:mx-auto ">
        <div className="w-full h-[327px] md:w-[281px] lg:w-[540px] lg:h-[560px] ">
          <img
            className="w-full h-full object-contain"
            src={data.image.mobile}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-6 md:w-[339px] lg:w-[445px]">
          <h4 className="text-[#d87d4a] text-[14px]  font-normal leading-normal tracking-[10px] uppercase ">
            NEW PRODUCT
          </h4>
          <h3 className="text-[28px] md:text-[40px]  md:leading-[44px] lg:w-[445px] lg:mb-4  font-bold tracking-[1px] uppercase text-black">
            {data.name}
          </h3>
          <p className="text-[15px] font-medium leading-6 text-[#00000080] lg:w-[445px] lg:mb-6">
            {data.description}
          </p>
          <p className="text-black text-[18px] font-bold tracking-[1.286px] uppercase">{`$ ${data.price.toLocaleString()}`}</p>

          <div className="flex gap-4  w-full h-12 ">
            <div className="w-[120px] h-full bg-[#f1f1f1] flex gap-5 items-center justify-center">
              <button
                onClick={handleDecrease}
                className="inline-flex w-4 h-4 items-center justify-center text-[#00000040] text-[13px] font-bold  "
              >
                -
              </button>
              <div>{numberOfProduct}</div>
              <button
                onClick={handleIncrease}
                className="inline-flex w-4 h-4 items-center justify-center text-[#00000040] text-[13px] font-bold  "
              >
                +
              </button>
            </div>

            <Button onClick={addToCart} variant="button-1">
              Add To Cart
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="flex flex-col gap-20 lg:flex-row lg:gap-[125px] lg:container lg:mx-auto lg:mt-40 ">
        <div className="flex flex-col gap-8 lg:w-[635px]">
          <h3 className="text-black text-[32px] font-bold tracking-[1.143px] uppercase leading-9">
            Features
          </h3>
          <p className="text-[15px] font-medium leading-6 text-[#00000080]">
            {data.features}
          </p>
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:gap-40 lg:flex-col lg:gap-8 lg:flex-1 ">
          <h4 className=" text-black text-[24px] font-bold leading-9 tracking-[0.857px] uppercase">
            In the box
          </h4>
          <ul className="flex flex-col gap-2">
            {data.includes.map((i, n) => (
              <li className="inline-flex gap-6  items-center" key={n}>
                <span className="text-[#d87d4a] text-[15px] font-bold leading-6">
                  {i.quantity}
                </span>
                <p className="text-[15px] text-[#00000080] font-medium leading-6 ">
                  {i.item}
                </p>{" "}
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* Images */}
      <section className="grid grid-rows-4 grid-cols-1 gap-6 mt-20 md:grid-cols-3 md:grid-rows-2 lg:grid-flow-row-dense  lg:container lg:mx-auto lg:h-[592px]  ">
        <div className=" w-full h-full rounded-lg overflow-hidden  ">
          <img
            src={data.gallery.first.mobile}
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
        <div className=" w-full h-full  rounded-lg md:row-start-2 overflow-hidden  ">
          <img
            src={data.gallery.second.mobile}
            className="object-cover h-full w-full"
            alt=""
          />
        </div>
        <div className=" w-full h-full rounded-lg row-span-2 md:col-span-2 overflow-hidden  ">
          <img
            src={data.gallery.third.mobile}
            className="object-cover h-full w-full"
            alt=""
          />
        </div>
      </section>

      {/* Also Like */}
      <section className="flex flex-col gap-10 md:gap-14  my-20 lg:container lg:mx-auto">
        <h3 className="text-black text-[24px] font-bold leading-9 tracking-[#0.857px] uppercase text-center">
          you may also like
        </h3>
        <div className="flex flex-col gap-14 md:flex-row md:gap-3 ">
          {data.others.map((other, i) => (
            <div className="flex-1 flex flex-col gap-8 items-center " key={i}>
              <div className="w-full h-[120px] md:h-[318px] rounded-lg overflow-hidden">
                <img
                  src={other.image.mobile}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <h3 className="text-center font-bold text-[24px] tracking-[1.714px] uppercase ">
                {other.name}
              </h3>
              <Button onClick={scrollToTop} variant="button-1">
                <Link
                  className=" h-full w-full inline-flex justify-center items-center  "
                  to={other.link}
                >
                  See product
                </Link>{" "}
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Tostify */}

      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </main>
  );
}

export default ProductDetail;
