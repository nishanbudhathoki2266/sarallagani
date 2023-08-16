import { useState } from "react";
import DownArrow from "./Svgs/DownArrow";
import SideArrow from "./Svgs/SideArrow";
// import SideArrow from "./Svgs/SideArrow";

function Accordion({ feature, featureContent }) {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen((currOpenState) => !currOpenState);
  };

  return (
    <div className="flex flex-col w-full items-center text-black-100 mb-2 font-[400] gap-2">
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
          {feature}
        </p>
        <span>
          {isOpen ? (
            <DownArrow onToggle={onToggle} />
          ) : (
            <SideArrow onToggle={onToggle} />
          )}
        </span>
      </div>
      {isOpen && (
        <div className="p-3 border-1 rounded-lg shadow-lg">
          <p className="leading-tighter tracking-tight text-sm">
            {featureContent}
          </p>
        </div>
      )}
    </div>
  );
}

export default Accordion;
