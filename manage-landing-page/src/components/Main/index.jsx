import React from "react";
import Button from '../Button'
import Cards from './Cards'
import { sectionData } from "./constant";

function Main() {
  return (
    <main className=" mt-[40px] pt-[43px] bg-header bg-[right_-12rem_top_-14rem] bg-contain md:bg-[left_-6rem_top_10rem] bg-no-repeat ">
      <div className="flex flex-col gap-14 md:gap-[125px] md:flex-row md:container md:mx-auto ">
        <section className="flex flex-col items-center gap-[13px] px-6 md:px-0  md:max-w-[445px] ">
          <h3 className="heading-2 text-center md:text-start">
            What's different about Manage?
          </h3>
          <p className="text-custom text-center md:text-start">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </section>

        <section className="flex flex-col gap-11   ">
          {sectionData.map((section) => (
            <div className="flex flex-col gap-2 pl-6 md:max-w-[540px]" key={section.id}>
              <div className="bg-[#FFF0EC] h-[39px] rounded-l-[39px] w-full flex items-center gap-[15px] md:bg-transparent">
                <Button className="bg-[#F3603C] w-[67px] text-white" >{section.number}</Button>
                <h5 className="text-[#242D52] text-[16px] font-bold leading-normal tracking-[-0.286px] ">{section.title}</h5>
              </div>
              <p className="text-custom pr-6 md:pl-[85px]">{section.content}</p>
            </div>
          ))}
        </section>

   
      </div>

<Cards/>

    </main>
  );
}

export default Main;
