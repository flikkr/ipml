import { useState, useEffect, Fragment } from "react";
import NavItems from "./NavItems";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import Caret from "../misc/Caret";
import AppRoutes from "../../services/AppRoutes";

const navScrollColor = "bg-gray-900";
const navStaticColor = "bg-transparent";

// https://tailwindui.com/components/application-ui/navigation/navbars
export default function Navbar(params) {
  const [expanded, setExpanded] = useState(false);
  const [scrollState, setScrollState] = useState(navStaticColor);
  const items = getItems(NavItems);

  // handle bg color from scroll offset
  useEffect(() => {
    let listener = document.addEventListener("scroll", (e) => {
      const threshold = 60;
      const offset = document.scrollingElement.scrollTop;

      if (offset > threshold) {
        if (scrollState !== navScrollColor) {
          setScrollState(navScrollColor);
        }
      } else {
        if (scrollState !== navStaticColor) {
          setScrollState(navStaticColor);
        }
      }
    });
    return () => document.removeEventListener("scroll", listener);
  }, [scrollState]);

  return (
    <nav
      className={`w-full transition ease-in-out duration-200 ${scrollState} ${params.className}`}
    >
      <div className='container mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <button
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              onClick={() => setExpanded(!expanded)}
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='block h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              <svg
                className='hidden h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div
            className='flex-1 flex items-center justify-center' /**sm:items-stretch sm:justify-start */
          >
            <div className='flex-shrink-0 flex items-center'>
              <Link to={AppRoutes.home}>
                <img
                  className='block h-8 w-auto'
                  src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
                  alt='Workflow'
                />
              </Link>
            </div>
            <div className='hidden sm:block'>
              <div className='space-x-4 font-Playfair tracking-wider'>
                {items}
              </div>
            </div>
            <div className='flex flex-1 justify-end'>
              <Link className='btn' to={AppRoutes.search}>
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${expanded ? "" : "hidden"}`} id='mobile-menu'>
        <div className='flex flex-col p-0 mx-2 space-y-1 text-white rounded font-Playfair'>
          {items}
        </div>
      </div>
    </nav>
  );
}

function getItems(tabs) {
  return tabs.map((elem) => {
    const showDropdown = elem?.items != null;

    return (
      <Menu as='div' className='relative inline-block'>
        <div>
          <Menu.Button className='block px-3 py-2 rounded-md text-white font-medium'>
            {elem.label}
            {showDropdown && <Caret />}
          </Menu.Button>
        </div>

        {showDropdown && (
          <div className='flex flex-row'>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='absolute left-0 z-10 w-56 mt-2 origin-top-left bg-gray-800 rounded-md shadow-lg p-1'>
                {elem?.items.map((item) => (
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`w-full block p-2 text-left text-sm text-white rounded-md hover:bg-gray-700`}
                        href={item?.target}
                      >
                        {item.label}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </div>
        )}
      </Menu>
    );
  });
}
