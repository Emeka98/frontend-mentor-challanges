import React from "react";
import Button from '../Button'
const sectionData = [
  {
    id: 1,
    number: "01",
    title: "Track company-wide progress",
    content:
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    number: "02",
    id: 2,
    title: "Advanced built-in reports",
    content:
      "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  {
    number: "03",
    id: 3,
    title: "Everything you need in one place",
    content:
      "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
];

function Main() {
  return (
    <main className="mt-[93px] ">
      <div className="flex flex-col gap-14 ">
        <section className="flex flex-col items-center gap-[13px] px-6">
          <h3 className="heading-2 text-center">
            What's different about Manage?
          </h3>
          <p className="text-custom text-center">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </section>

        <section className="flex flex-col gap-11 ">
          {sectionData.map((section) => (
            <div className="flex flex-col gap-2 pl-6" key={section.id}>
              <div className="bg-[#FFF0EC] h-[39px] rounded-l-[39px] w-full flex items-center gap-[15px]">
                <Button className="bg-[#F3603C] w-[67px] text-white" >{section.number}</Button>
                <h5 className="text-[#242D52] text-[16px] font-bold leading-normal tracking-[-0.286px] ">{section.title}</h5>
              </div>
              <p className="text-custom pr-6">{section.content}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

export default Main;