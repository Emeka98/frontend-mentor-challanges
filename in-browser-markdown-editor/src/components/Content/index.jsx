import React from "react";
import Markdown from "react-markdown";
import { useData } from "../../context/DataContext";

function Content() {
  const { theme, isActiveAside, markdown } = useData();
  return (
    <div className={`${theme ? "bg-black-900" : "bg-white"} w-full h-full `}>
      {/* Title */}
      <div
        className={`w-full h-[42px] flex justify-between items-center ${
          theme ? "bg-black-900" : "bg-black-200"
        }  px-4 ${isActiveAside ? "ml-[250px] px-5 " : ""}`}
      >
        <h3 className="font-roboto text-sm font-medium leading-normal tracking-[2px]">
          Markdown
        </h3>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.8929 5.20135C15.3811 4.3137 12.5662 -0.140531 7.78409 0.00341151C3.36184 0.115367 0.802861 4.00182 0.107137 5.20135C-0.0357124 5.44877 -0.0357124 5.7536 0.107137 6.00103C0.610937 6.87268 3.30587 11.199 8.01599 11.199H8.21591C12.6382 11.087 15.2051 7.20055 15.8929 6.00103C16.0357 5.7536 16.0357 5.44877 15.8929 5.20135ZM8.17593 9.5996C4.7293 9.67957 2.48219 6.72874 1.77847 5.60119C2.57816 4.3137 4.66533 1.68274 7.86405 1.60278C11.2947 1.51481 13.5498 4.47363 14.2615 5.60119C13.4378 6.88867 11.3747 9.51963 8.17593 9.5996ZM8 2.8023C6.45422 2.8023 5.20111 4.0554 5.20111 5.60119C5.20111 7.14697 6.45422 8.40007 8 8.40007C9.54578 8.40007 10.7989 7.14697 10.7989 5.60119C10.7989 4.0554 9.54578 2.8023 8 2.8023ZM8 6.80071C7.33752 6.80071 6.80048 6.26367 6.80048 5.60119C6.80048 4.93871 7.33752 4.40166 8 4.40166C8.66248 4.40166 9.19952 4.93871 9.19952 5.60119C9.19952 6.26367 8.66248 6.80071 8 6.80071Z"
              fill="#7C8187"
            />
          </svg>
        </button>
      </div>
      <Markdown
        className={`w-full min-h-screen pb-20  pt-4 px-6 flex flex-col gap-6 ${
          theme ? "bg-black-1000" : "bg-white"
        } ${isActiveAside ? "ml-[250px] pl-5 " : ""}`}
        components={{
          h1: ({ node, ...props }) => (
            <h1
              className="font-roboto-slab text-[32px] font-bold leading-normal text-black-700"
              {...props}
            />
          ),
          h2: ({ node, ...props }) => (
            <h2
              className="font-roboto-slab text-[28px] font-light leading-normal text-black-700"
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <h3
              className="font-roboto-slab text-[24px] font-bold leading-normal text-black-700"
              {...props}
            />
          ),
          h4: ({ node, ...props }) => (
            <h4
              className="font-roboto-slab text-[20px] font-bold leading-normal text-black-700"
              {...props}
            />
          ),
          h5: ({ node, ...props }) => (
            <h
              className="font-roboto-slab text-[16px] font-bold leading-normal text-black-700"
              {...props}
            />
          ),
          h6: ({ node, ...props }) => (
            <h6
              className="font-roboto-slab text-[14px] font-bold leading-normal text-orange"
              {...props}
            />
          ),
          p: ({ node, ...props }) => (
            <p
              className="font-roboto-slab text-sm font-normal leading-6 text-black-500"
              {...props}
            />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal pl-4" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc pl-4" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li
              className="text-black-500 font-roboto-slab text-sm font-normal leading-6"
              {...props}
            />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote
              className={`bg-black-200 p-6 rounded border-l-4 border-orange ${
                theme ? "bg-black-800" : "bg-white"
              } `}
              {...props}
            />
          ),

          code: ({ node, ...props }) => (
            <code
              className={`text-black-1000  `}
              {...props}
            />
          ),

          pre : ({node , ...props}) => (
            <pre className="bg-black-200 p-6 text-sm font-normal leading-6 font-roboto-mono" {...props} />
          )
        }}
      >
        {markdown}
      </Markdown>
    </div>
  );
}

export default Content;
