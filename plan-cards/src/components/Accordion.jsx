import { Fragment, createContext, useContext, useRef, useState } from "react";

const AccordionContext = createContext();

// eslint-disable-next-line react/prop-types
const Accordion = ({ children, handlePriceChange }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedPlans, setSelectedPlans] = useState([]);

  //   Set active accordion
  const handleActiveAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  //   Set selected plans
  const handleSelectedPlans = (index) => {
    setSelectedPlans((currPlans) => [...currPlans, index]);
  };

  const handleRemovedPlans = (index) => {
    setSelectedPlans((currPlans) =>
      currPlans.filter((currPlan) => currPlan !== index)
    );
  };

  const price = selectedPlans.length * 20;

  handlePriceChange(price);

  return (
    <AccordionContext.Provider
      value={{
        activeIndex,
        setActiveIndex,
        handleActiveAccordion,
        handleSelectedPlans,
        handleRemovedPlans,
      }}
    >
      {/* Here make it w-full later */}
      <div className="flex flex-col w-full justify-between items-center text-black-100 mb-2  font-[400] gap-2">
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

const StaticPlanCheckbox = () => {
  return (
    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-white rounded-full bg-[#4CD263]">
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
  );
};

const CustomizedPlanCheckbox = ({ index }) => {
  const checkboxRef = useRef(null);
  const { handleSelectedPlans, handleRemovedPlans } =
    useContext(AccordionContext);

  const handleCheckPlans = (index) => {
    const isChecked = checkboxRef.current.checked;
    if (isChecked) {
      handleSelectedPlans(index);
    }
    if (!isChecked) {
      handleRemovedPlans(index);
    }
  };

  return (
    <input
      type="checkbox"
      ref={checkboxRef}
      onChange={() => handleCheckPlans(index)}
      className="h-5 w-5"
    />
  );
};

const Toggler = ({ index }) => {
  const { handleActiveAccordion, activeIndex } = useContext(AccordionContext);
  return (
    <svg
      className={`w-4 h-4 dark:text-black font-bold inline-block text-3xl hover:cursor-pointer rotate-180 ${
        activeIndex === index ? "rotate-[-180]" : ""
      } transition-transform duration-500 ease-in`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 8"
      onClick={() => handleActiveAccordion(index)}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
      />
    </svg>
  );
};

const Title = ({ title }) => {
  return <Fragment>{title}</Fragment>;
};

const Content = ({ description, index }) => {
  const { activeIndex } = useContext(AccordionContext);

  //   setting contentRef for making controlled element
  const contentRef = useRef(null);

  //   deriving an active state -> to keep track of which item is active or should open
  const active = activeIndex === index;

  return (
    <div
      ref={contentRef}
      style={{
        maxHeight: `${active ? `${contentRef.current.scrollHeight}px` : "0px"}`,
      }}
      className="overflow-hidden shadow-lg rounded-lg transition-max-height duration-500 ease-in"
    >
      <p className="leading-tighter tracking-tight text-sm p-2">
        {description}
      </p>
    </div>
  );
};

Accordion.Title = Title;
Accordion.Content = Content;
Accordion.StaticPlanCheckbox = StaticPlanCheckbox;
Accordion.CustomizedPlanCheckbox = CustomizedPlanCheckbox;
Accordion.Title = Title;
Accordion.Toggler = Toggler;

export default Accordion;
