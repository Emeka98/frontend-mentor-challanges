import React from "react";

import section2Img from "@/assets/icons/illustration-2.svg?url";
import Link from "next/link";
import Image from "next/image";
import SectionOne from "@/components/SectionOne";
import IconArrow from "@/assets/icons/icon-arrow.svg";
import IconQuotes from "@/assets/icons/icon-quotes.svg";
import avatarImg from "@/assets/avatar-testimonial.jpg";

function MainContent() {
  return (
    <main className="">
      {/* section 1 */}
      <SectionOne />
      {/* section 2 */}

      <section className="mt-[100px] md:mt-[180px] bg-[#F8F8FE]  ">
        <div className="flex flex-col lg:flex-row gap-10  relative py-[90px] lg:py-[160px] px-6 container mx-auto">
          <div className="absolute -top-12 left-0 right-0 bottom-0 bg-curve-mobile md:bg-curve-desktop bg-no-repeat bg-contain -z-10"></div>

          <div className=" relative w-full h-[225px] lg:max-w-[542px] lg:h-[409px] lg:order-2 ">
            <Image src={section2Img} alt="Section two image" fill />
          </div>
          <div className="flex flex-col gap-6 lg:flex-1">
            <h3 className="text-[#07043B] text-center lg:text-[40px] lg:text-start   font-semibold text-base leading-6">
              Stay productive, wherever you are
            </h3>
            <div className="flex flex-col gap-4 items-center lg:items-start ">
              <p className="text-[#615f7e] text-center lg:text-start lg:text-base lg:max-w-[55ch] text-sm leading-5">
                Never let location be an issue when accessing your files. Fylo
                has you covered for all of your file storage needs.
              </p>
              <p className="text-[#615f7e] text-center lg:text-start  text-sm  lg:max-w-[55ch] lg:text-base leading-5">
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required!
              </p>

              <Link
                href="/"
                className="inline-flex items-center gap-2  border-b border-solid border-[#3da08f] pb-1.5  "
              >
                <p className="text-[#3da08f] text-xs leading-normal font-normal ">
                  See how Fylo Works
                </p>
                <IconArrow />
              </Link>
            </div>

            <div className="bg-white px-6 mx-6 lg:mx-0 py-5 mt-10 max-w-[356px]">
              <div className="flex flex-col gap-3 ">
                <IconQuotes />
                <p className="text-[#07043b] text-[10px] leading-[18px] tracking-[0.385px] ">
                  Fylo has improved our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
                </p>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full overflow-hidden relative">
                    <Image src={avatarImg} alt="avatar's of kyle burton" fill />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <h4 className="text-[9px] tracking-[0.45px] text-[#07043b]">
                      Kyle Burton
                    </h4>
                    <p className="text-[#07043b] text-[6px] leading-3 tracking-[0.3px]">
                      Founder & CEO , Huddle
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MainContent;
