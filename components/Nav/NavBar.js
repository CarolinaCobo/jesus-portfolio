import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Navbar() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/" passHref={true}>
                    <a>
                      <img
                        className="block lg:hidden h-6 w-auto"
                        src="/logo.png"
                        alt="Workflow"
                      />
                    </a>
                  </Link>
                  <Link href="/" passHref={true}>
                    <a>
                      <img
                        className="hidden lg:block h-8 w-auto"
                        src="/logo.png"
                        alt="Workflow"
                      />
                    </a>
                  </Link>
                </div>

                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link href="/#projects-section" passHref={true}>
                    <a className="border-transparent text-gray-500 hover:border-sky-600 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      Portfolio
                    </a>
                  </Link>

                  <Link href="/about" passHref={true}>
                    <a className="border-transparent text-gray-500 hover:border-sky-600 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      About
                    </a>
                  </Link>
                  <Link href="/contact" passHref={true}>
                    <a className="border-transparent text-gray-500 hover:border-sky-600 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      Contact
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-4 space-y-1">
              <Disclosure.Button
                as="a"
                className="border-transparent text-gray-500 hover:border-sky-600 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                <Link href="/" passHref={true}>
                  <a>Home</a>
                </Link>
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/#projects-section"
                className="border-transparent text-gray-500 hover:border-sky-600 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Portfolio
              </Disclosure.Button>
              <Disclosure.Button className="border-transparent text-gray-500 hover:border-sky-600 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                <Link href="/about" passHref={true}>
                  <a>About</a>
                </Link>
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                className="border-transparent text-gray-500 hover:border-sky-600 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                <Link href="/contact" passHref={true}>
                  <a>Contact</a>
                </Link>
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
