import { useState } from "react";
import Navlink from "./Navlink";
import navItems from "./nav-items.json";

// https://tailwindui.com/components/application-ui/navigation/navbars
export default function Navbar(props) {
  const [expanded, setExpanded] = useState(false);
  const tabs = JSON.parse(JSON.stringify(navItems));

  const items = tabs.map((elem) => (
    <Navlink label={elem.label} redirect={elem.redirect} items={elem.items} />
  ));

  return (
    <nav className={`bg-transparent ${props.className}`}>
      <div className='container mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <button
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
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
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex-shrink-0 flex items-center'>
              <img
                className='block h-8 w-auto'
                src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
                alt='Workflow'
              />
            </div>
            <div className='hidden sm:block'>
              <div className='flex space-x-4 font-Playfair tracking-wider'>
                {items}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${expanded ? "" : "hidden"}`} id='mobile-menu'>
        <div className='px-2 pt-2 pb-3 mx-2 space-y-1 bg-black bg-opacity-30 text-white rounded font-Playfair'>
          {items}
        </div>
      </div>
    </nav>
  );
}
