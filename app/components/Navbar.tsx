"use client";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeButton from "./ThemeButton";

export default function Navbar() {
  let pathname = usePathname() || "/";
  return (
    <Disclosure as="nav" className="bg-navBG dark:bg-black">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between h-20">
              <div className="flex justify-between w-full">
                <div className="flex items-center">
                  <Link href="/">
                    <h1 className="text-2xl font-medium text-white">
                      Timmy{" "}
                      <span className="text-navAccent dark:text-teal-500">
                        Dube
                      </span>
                    </h1>
                  </Link>
                </div>

                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
                  <Link
                    href="/"
                    prefetch
                    className={`${
                      pathname === "/"
                        ? "dark:border-teal-500 text-white dark:text-white h-full inline-flex items-center px-1 pt-1 dark:border-b-2 text-sm font-medium"
                        : "border-transparent text-navAccent dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    }`}
                  >
                    Home
                  </Link>

                  <Link
                    href="/components/Languages"
                    prefetch
                    className={`${
                      pathname === "/components/Languages"
                        ? "dark:border-teal-500 text-white dark:text-white h-full inline-flex items-center px-1 pt-1 dark:border-b-2 text-sm font-medium"
                        : "border-transparent text-navAccent dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    }`}
                  >
                    Languages
                  </Link>

                  <Link
                    href="/components/Projects"
                    prefetch
                    className={`${
                      pathname === "/components/Projects"
                        ? "dark:border-teal-500 text-white dark:text-white h-full inline-flex items-center px-1 pt-1 dark:border-b-2 text-sm font-medium"
                        : "border-transparent text-navAccent dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    }`}
                  >
                    Projects
                  </Link>
                  <ThemeButton />
                </div>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                <ThemeButton />
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 dark:hover:bg-gray-800">
                  {open ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="pt-3 pb-3 space-y-1">
              <Link
                href="/"
                prefetch
                className={`${
                  pathname === "/"
                    ? "bg-teal-50 border-teal-500 text-teal-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800 "
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-2 py-4 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:hover:text-white"
                }`}
              >
                Home
              </Link>
              <Link
                href="/components/Languages"
                prefetch
                className={`${
                  pathname === "/components/Languages"
                    ? "bg-teal-50 border-teal-500 text-teal-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800 "
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:hover:text-white"
                }`}
              >
                Languages
              </Link>
              <Link
                href="/components/Projects"
                prefetch
                className={`${
                  pathname === "/components/Projects"
                    ? "bg-teal-50 border-teal-500 text-teal-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800 "
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:hover:text-white"
                }`}
              >
                Projects
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
