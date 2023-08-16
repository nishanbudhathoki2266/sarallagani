import Accordion from "./Accordion";

function Card() {
  return (
    <div className="h-auto w-10/12 sm:max-w-md md:max-w-lg lg:max-w-md p-6 rounded-2xl border-1 shadow-xl flex flex-col justify-center">
      <div className="flex gap-4 items-start">
        <div className="h-12 w-12">
          <img
            src="card-images/application.png"
            alt="image of an application icon"
          />
        </div>
        <div className="flex flex-col gap-6 mb-6">
          <div>
            <h1 className="text-3xl mb-1 font-semibold">Bundle</h1>
            <h2 className="text-sm tracking-widest title-font mb-1 font-medium text-[#696969]">
              Active Investors
            </h2>
          </div>
          <div>
            <h1 className="inline font-bold text-4xl">Rs. 99</h1>
            <span className="font-bold text-lg"> / month</span>
          </div>
        </div>
      </div>
      <h2 className="inline font-bold text-2xl tracking-wide mb-2">Benefits</h2>
      <Accordion />
      <p className="flex items-center text-black-100 mb-2 font-[400] text-md">
        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#4CD263] text-white rounded-full">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            className="w-3 h-3"
            viewBox="0 0 24 24"
          >
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </span>
        Pro Ratings
      </p>
      <p className="flex items-center text-black-100 mb-2 font-[400] text-md">
        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#4CD263] text-white rounded-full">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            className="w-3 h-3"
            viewBox="0 0 24 24"
          >
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </span>
        Mutual Fund Analysis
      </p>
      <p className="flex items-center text-black-100 mb-2 font-[400] text-md">
        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#4CD263] text-white rounded-full">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            className="w-3 h-3"
            viewBox="0 0 24 24"
          >
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </span>
        Advanced Screener
      </p>
      <p className="flex items-center text-black-100 mb-2 font-[400] text-md">
        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#4CD263] text-white rounded-full">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            className="w-3 h-3"
            viewBox="0 0 24 24"
          >
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </span>
        Company Statistics
      </p>
      <p className="flex items-center text-black-100 mb-2 font-[400] text-md">
        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#4CD263] text-white rounded-full">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            className="w-3 h-3"
            viewBox="0 0 24 24"
          >
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </span>
        Economy Highlights
      </p>
      <button className="mt-4 mx-auto text-white text-[20px] tracking-wide bg-black border-0 py-2 rounded-lg px-4">
        Try free for 7 days
      </button>
      <p className="text-[14px] mx-auto text-black mt-4">
        Experience the Greatness
        <span className="text-blue-900 block text-center font-semibold">
          Pay Now
        </span>
      </p>
    </div>
  );
}

export default Card;
