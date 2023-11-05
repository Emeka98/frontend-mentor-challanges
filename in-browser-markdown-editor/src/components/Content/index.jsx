import React, { useState, useEffect } from "react";
import Markdown from "react-markdown";
import { useData } from "../../context/DataContext";

function Content() {
  const {
    theme,
    isActiveAside,
    isMarkdown,
    setIsMarkdown,
    markdown,
    setMarkdown,
    activePage,
    data,
    setData,
  } = useData();

  return (
    <div className={`${theme ? "bg-black-900" : "bg-white"} w-full h-full `}>
      {/* Title */}
      <div
        className={`w-full h-[42px] flex justify-between items-center ${
          theme ? "bg-black-900" : "bg-black-200"
        }  px-4 ${isActiveAside ? "ml-[250px] px-5 " : ""}`}
      >
        <h3
          className={`font-roboto text-sm font-medium leading-normal tracking-[2px] ${
            theme ? "text-white" : "text-black-500"
          } `}
        >
          {isMarkdown ? "  Preview" : "Markdown"}
        </h3>
        <button onClick={() => setIsMarkdown(!isMarkdown)}>
          {isMarkdown ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="15"
              viewBox="0 0 17 15"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.72864 0.604575C2.52783 0.403762 2.23514 0.325336 1.96082 0.398838C1.68651 0.472341 1.47224 0.686606 1.39874 0.960922C1.32524 1.23524 1.40366 1.52793 1.60447 1.72874L6.06156 6.18583C5.48253 7.26296 5.67812 8.59232 6.54284 9.45704C7.40757 10.3218 8.73692 10.5173 9.81406 9.93832L14.2711 14.3954C14.4198 14.5453 14.6221 14.6296 14.8332 14.6296C15.0443 14.6296 15.2467 14.5453 15.3953 14.3954C15.5452 14.2468 15.6295 14.0444 15.6295 13.8333C15.6295 13.6222 15.5452 13.4199 15.3953 13.2712L2.72864 0.604575ZM8.49989 8.68749C7.84405 8.68749 7.31239 8.15583 7.31239 7.49999V7.44458L8.54739 8.67957L8.49989 8.68749ZM16.3136 7.10416C15.807 6.22541 13.0124 1.81583 8.28614 1.95833C7.40933 1.98433 6.54387 2.16386 5.72906 2.48874L6.97989 3.73958C7.41977 3.62386 7.87116 3.55748 8.32572 3.54166C11.722 3.45458 13.9545 6.38374 14.6591 7.49999C14.1509 8.29347 13.5414 9.01735 12.8461 9.65333L14.0416 10.7696C14.9463 9.92987 15.7225 8.96158 16.3453 7.89583C16.4771 7.64526 16.465 7.3434 16.3136 7.10416ZM8.67406 11.4583C5.26989 11.5375 3.03739 8.61624 2.34072 7.49999C2.83668 6.70887 3.43272 5.98511 4.11406 5.34666L2.95822 4.23041C2.06469 5.07232 1.29921 6.0405 0.686141 7.10416C0.544724 7.3491 0.544724 7.65088 0.686141 7.89583C1.18489 8.75874 3.85281 13.0417 8.51572 13.0417H8.71364C9.59045 13.0156 10.4559 12.8361 11.2707 12.5112L10.0199 11.2604C9.58002 11.3761 9.12862 11.4425 8.67406 11.4583Z"
                fill="#7C8187"
              />
            </svg>
          ) : (
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
          )}
        </button>
      </div>

      {isMarkdown ? (
        <Markdown
          className={`w-full lg:mx-auto lg:max-w-[672px] min-h-screen pb-20   pt-4 px-6 flex flex-col gap-6 ${
            theme ? "bg-black-1000" : "bg-white"
          } `}
          components={{
            h1: ({ node, ...props }) => (
              <h1
                className={`font-roboto-slab text-[32px] font-bold leading-normal ${
                  theme ? "text-white" : "text-black-700"
                }`}
                {...props}
              />
            ),
            h2: ({ node, ...props }) => (
              <h2
                className={`font-roboto-slab text-[28px] font-light leading-normal ${
                  theme ? "text-white" : "text-black-700"
                }`}
                {...props}
              />
            ),
            h3: ({ node, ...props }) => (
              <h3
                className={`font-roboto-slab text-[24px] font-bold leading-normal ${
                  theme ? "text-white" : "text-black-700"
                }`}
                {...props}
              />
            ),
            h4: ({ node, ...props }) => (
              <h4
                className={`font-roboto-slab text-[20px] font-bold leading-normal ${
                  theme ? "text-white" : "text-black-700"
                }`}
                {...props}
              />
            ),
            h5: ({ node, ...props }) => (
              <h5
                className={`font-roboto-slab text-[16px] font-bold leading-normal ${
                  theme ? "text-white" : "text-black-700"
                }`}
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
                className={`${
                  theme ? "text-white" : "text-black-1000"
                } text-[13px] leading-6 font-normal font-roboto-mono  `}
                {...props}
              />
            ),

            pre: ({ node, ...props }) => (
              <pre
                className={`p-6 text-sm font-normal leading-6 font-roboto-mono ${
                  theme ? "bg-black-800 " : "bg-black-200 "
                }`}
                {...props}
              />
            ),
          }}
        >
          {data.content}
        </Markdown>
      ) : (
        <div className="flex min-h-screen p-6">
          <pre
            className={`min-h-screen w-full flex-1 border-r border-r-black-300  ${
              isActiveAside ? "ml-[250px]" : ""
            } `}
          >
            <textarea
              name="text"
              id="text"
              className={`min-h-full w-full appearance-none outline-none border-none resize-none lg:p-4 ${
                theme ? "bg-black-1000 text-black-400" : "bg-white"
              } `}
              value={data.content}
              onChange={(e) => {
                const updatedData = { ...data, content: e.target.value };
                setData(updatedData);
              }}
            ></textarea>
          </pre>
          <div className="hidden md:block flex-1">
            <Markdown
              className={`w-full min-h-screen pb-20   pt-4 px-6 flex flex-col gap-6  ${
                theme ? "bg-black-1000" : "bg-white"
              } `}
              components={{
                h1: ({ node, ...props }) => (
                  <h1
                    className={`font-roboto-slab text-[32px] font-bold leading-normal ${
                      theme ? "text-white" : "text-black-700"
                    }`}
                    {...props}
                  />
                ),
                h2: ({ node, ...props }) => (
                  <h2
                    className={`font-roboto-slab text-[28px] font-light leading-normal ${
                      theme ? "text-white" : "text-black-700"
                    }`}
                    {...props}
                  />
                ),
                h3: ({ node, ...props }) => (
                  <h3
                    className={`font-roboto-slab text-[24px] font-bold leading-normal ${
                      theme ? "text-white" : "text-black-700"
                    }`}
                    {...props}
                  />
                ),
                h4: ({ node, ...props }) => (
                  <h4
                    className={`font-roboto-slab text-[20px] font-bold leading-normal ${
                      theme ? "text-white" : "text-black-700"
                    }`}
                    {...props}
                  />
                ),
                h5: ({ node, ...props }) => (
                  <h5
                    className={`font-roboto-slab text-[16px] font-bold leading-normal ${
                      theme ? "text-white" : "text-black-700"
                    }`}
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
                    className={`${
                      theme ? "text-white" : "text-black-1000"
                    } text-[13px] leading-6 font-normal font-roboto-mono  `}
                    {...props}
                  />
                ),

                pre: ({ node, ...props }) => (
                  <pre
                    className={`p-6 text-sm font-normal leading-6 font-roboto-mono ${
                      theme ? "bg-black-800 " : "bg-black-200 "
                    }`}
                    {...props}
                  />
                ),
              }}
            >
              {data.content}
            </Markdown>
          </div>
        </div>
      )}
    </div>
  );
}

export default Content;
