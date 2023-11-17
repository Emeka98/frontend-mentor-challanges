import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useData } from "../../../context/ThemeContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function FontFamilyBox() {
const {setFont,font , theme}  = useData()

  return (
    <Menu as="div" className="relative inline-block text-left ">
      <div>
        <Menu.Button className={`inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent  text-sm text-gray-900 font-bold ${theme ? 'text-white' : ""} `}>
          {font}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-[#A445ED]"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className={`absolute right-0 z-10 mt-2 w-[183px] origin-top-right rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${theme ? "bg-[#1F1F1F] custom-box-shadow" : "bg-white"} `}>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active ? " text-gray-900" : "text-gray-700",
                    `block px-4 py-2 text-sm  w-full text-left hover:text-[#A445ED] font-bold ${theme ? "text-white hover:bg-gray-900" : "text-gray-900"}`
                  )}
                  onClick={(() => setFont('sans-serif'))}
                >
                  
                  Sans Serif
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active ? " text-gray-900" : "text-gray-700",
                    `block px-4 py-2 text-sm  w-full text-left hover:text-[#A445ED] font-bold ${theme ? "text-white hover:bg-gray-900" : "text-gray-900"}`
                  )}
                  onClick={(() => setFont('serif'))}
                >
                  Serif
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active ? " text-gray-900 " : "text-gray-700",
                    `block px-4 py-2 text-sm  w-full text-left hover:text-[#A445ED] font-bold ${theme ? "text-white hover:bg-gray-900" : "text-gray-900"}`
                  )}
                  onClick={(() => setFont('mono'))}
                >
                  Mono
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default FontFamilyBox;
