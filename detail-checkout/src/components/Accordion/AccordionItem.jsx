import React, { Fragment, useRef, useState } from "react";

function AccordionItem({
  plan: { plan, planDescription },
  onToggle,
  open,
  index,
}) {
  //   const [active, setActive] = useState(false);
  //   const [height, setHeight] = useState("0px");
  //   const [rotate, setRotate] = useState(
  //     "transform duration-700 ease rotate-180"
  //   );

  const contentSpace = useRef(null);

  //   function toggleAccordion() {
  //     setActive((prevState) => !prevState);
  //     // @ts-ignore
  //     setHeight(active ? "0px" : `${contentSpace.current.scrollHeight}px`);
  //     setRotate(
  //       active
  //         ? "transform duration-700 ease rotate-180"
  //         : "transform duration-700 ease"
  //     );
  //   }

  return (
    <Fragment>
      <div className="w-full flex justify-between items-center">
        <p className="text-md flex items-center">
          <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#4CD263] text-white rounded-full">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              className="w-4 h-4"
              viewBox="0 0 24 24"
            >
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
          {plan}
        </p>
        <button onClick={() => onToggle(index)}>
          <svg
            className={`w-4 h-4 dark:text-black font-bold inline-block text-3xl hover:cursor-pointer`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 8"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div
          ref={contentSpace}
          className="overflow-hidden shadow-lg rounded-lg transition-max-height duration-700 ease-in-out"
        >
          <p className="leading-tighter tracking-tight text-sm p-2">
            {planDescription}
          </p>
        </div>
      )}
    </Fragment>
  );
}

export default AccordionItem;

// style={{ maxHeight: `${height}` }} - DIV

// ${rotate}  - span className
