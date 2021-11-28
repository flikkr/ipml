import { useState, useRef, useEffect } from "react";

export default function Navlink(props) {
  const [open, setOpen] = useState(false);
  const hasDropdown = props.items?.length > 0;
  const items = props.items?.map((elem) => (
    <a class='block px-4 py-2 text-sm font-semibold rounded-lg' href='#'>
      {elem.label}
    </a>
  ));
  const wrapperRef = useRef(null);
  useEffect(() => {
    // Alert if clicked on outside of element
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div>
      <a
        href={props.redirect}
        className='block px-3 py-2 rounded-md text-white font-medium'
        onClick={(e) => {
          if (hasDropdown) {
            e.preventDefault();
            setOpen(!open);
          }
        }}
        ref={wrapperRef}
      >
        {props.label}
        {hasDropdown && (
          <svg
            fill='currentColor'
            viewBox='0 0 20 20'
            class='inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1'
          >
            <path
              fill-rule='evenodd'
              d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
              clip-rule='evenodd'
            ></path>
          </svg>
        )}
      </a>
      {open && (
        <div className='relative'>
          <div class='absolute z-30 w-full origin-top-right rounded-md shadow-lg md:w-48'>
            <div class='px-2 py-2 bg-white rounded-md shadow'>{items}</div>
          </div>
        </div>
      )}
    </div>
  );
}
