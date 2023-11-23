import React from "react";
import Button from "../Button";
import RightArrow from "../layouts/Navbar/Images/RightArrow";
import { Link } from "react-router-dom";

function index() {
  return (
    <ul className="flex flex-col gap-[68px] md:gap-[10px] md:flex-row md:mt-[108px] mb-[67px] px-6 lg:container lg:mx-auto  ">
      <li className="w-full first:mt-20 md:first:mt-0   bg-[#f1f1f1] pb-6 rounded-lg  ">
        <Link
          to={"/headphones"}
          onClick={() => {
            window.scroll(0, 0);
          }}
          className="flex flex-col items-center bg-"
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/0d2e/6fc8/87d6513c34f10bac56e324f01ec77185?Expires=1698019200&Signature=CO9ClKcw6fFf2oR17h8YD68pENntUk5kWYOWh6cePDnLHh96sd4v2p2kFCEV7~4GrmJiBgzMJQkAwgaAIJhYoUUM6rQ4FjNwQpxi7eZuhZz6R9~tk05X66KSjWDdWTtMXTQyrGACV5pphZu~wOq89gc1ZC-hMf7ytyJT0jN6pm9sI44qvYvo7aj0rMRfScmg70x0t0lCUGtUbPTQxunTTAQcuHRhafaVdFfefq85wSvq~vm-5-rzWtRwmBleE341FTUqYmzyQWKFDqCKKqKPBgxlfEE0DpCCCcdjsB9KL7CO5tlhkSg-pCzce3d8JWeFz-YZ45NIXW3i0nbKM5etXg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="headphones image"
            className="w-[80px] h-[104px] object-cover -mt-14 bg-transparent mb-9"
          />
          <h3 className="mb-4 uppercase text-[#000] text-[15px] font-bold tracking-[1.071px] leading-normal ">
            Headphones
          </h3>
          <Button variant="button-3">
            Shop <RightArrow />
          </Button>
        </Link>
      </li>

      <li className="w-full first:mt-20 bg-[#f1f1f1] pb-6 rounded-lg  ">
        <Link
          to={"/speakers"}
          onClick={() => {
            window.scroll(0, 0);
          }}
          className="flex flex-col items-center bg-"
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/e0c8/6dd2/a7f4c7505f96ce15449ca178ce6b7ad1?Expires=1697414400&Signature=DlrYoubrqj0jurdeYZhN7R9PoQ7SRt-JqZkNQu14ZcAppnwWi~~9fdk6EP551FdKN2PCDh4Q-ycPi8dbYZ1MseieQ36A1uAwgJaHMG900Nx9r~f6Ntk5VbxpQgZYjo9HiwCZdn-9PmrA5RFYKdPvJkG8UfGKv4c0pkgG9EPNdBupONd57oE3~6a5SFRyc5c1EybHmIfvZx0J-hjRC~zfN3ofEmmGJc7WawW4p1~jMJzfarwk0cNkXZ4fvNXBo2jD9jwGKFKTODMZ1kuMYJcCCU8qtZoco8CRyweHspv5kuGFLav-6oTiIRhogV4N5wdvSCaFUEwhOrGKFM7yFl3v7Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="headphones image"
            className="w-[80px] h-[104px] object-cover -mt-14 bg-transparent mb-9"
          />
          <h3 className="mb-4 uppercase text-[#000] text-[15px] font-bold tracking-[1.071px] leading-normal ">
            Speakers
          </h3>
          <Button variant="button-3">
            Shop <RightArrow />
          </Button>
        </Link>
      </li>

      <li className="w-full first:mt-20 bg-[#f1f1f1] pb-6 rounded-lg  ">
        <Link
          to={"/earphones"}
          onClick={() => {
            window.scroll(0, 0);
          }}
          className="flex flex-col items-center bg-"
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/d47b/304d/532a222f08c1500c16aa3ed52c16aa20?Expires=1697414400&Signature=SCuChb0mnhgqpZ5F1XTmyVBn9rq2zH6tJ0CVeowdHYRud9XnmEKlGHgpmhZyAQuU3rauvQoEnxy1TWUiub0UzjfkWmWLvi~t1M~EWG86yE6VpmHt7~38zVBB~m0-icNDBKrbEUNe2frpwBrfTcU7hI5QRnPSVmiPgNVQjB8-lB8DR9D~Dp44ACiOZHHM8VCBOzBvbr7TZg1O9qUUGaOLsfmgj0bHCfIDC6QOjq39DZoX7ZrWZJ0dZGHsixgS9s1sy6d0LLE9KRv7xCaJpJ5FxADmnj5LSB5eL8nilFH8nJ9ci9wW6dRs4DIavLus5rE4LMDGZg3p8NNzMvthOKdqkw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="headphones image"
            className="w-[80px] h-[104px] object-cover -mt-14 bg-transparent mb-9"
          />
          <h3 className="mb-4 uppercase text-[#000] text-[15px] font-bold tracking-[1.071px] leading-normal ">
            EARPHONES
          </h3>
          <Button variant="button-3">
            Shop
            <RightArrow />
          </Button>
        </Link>
      </li>
    </ul>
  );
}

export default index;
