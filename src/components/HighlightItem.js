import { useEffect, useState } from "react";

export default function HighlightItem(params) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className='bg-gray-800 p-3 rounded-md'
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className='flex flex-row items-center'>
        <div className='bg-red-400 rounded-full w-10 h-10 mr-3'></div>
        <h6>{params.title}</h6>
      </div>
      <div
        className={`text-left mt-5 ease-in-out ${
          expanded ? "max-h-96" : " max-h-0"
        }`}
        style={{ transition: "max-height" }}
      >
        <p>
          Exercitation et eu ipsum quis quis duis et sunt incididunt magna.
          Aliquip velit fugiat cillum minim est minim dolore ipsum nulla sit.
          Sit ea proident ipsum tempor non. Sint esse ut laboris dolor laboris
          eu. Velit voluptate ex ex do officia. Esse id ea consequat anim.
        </p>
      </div>
    </div>
  );
}
