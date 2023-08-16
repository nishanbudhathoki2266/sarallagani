import Accordion from "./Accordion/Accordion";

const plans = [
  {
    id: 1,
    plan: "Saral Rating",
    planDescription:
      "Saral Rating takes in 16 different factors to give you an idea of how the company is performing and what you can expect in the future",
  },
  {
    id: 2,
    plan: "Pro Ratings",
    planDescription:
      "Pro Ratings gives you an indication of how healthy the bank is in terms of major indicators. We have rigorously tested it and is 80% accurate",
  },
  {
    id: 3,
    plan: "Mutual Fund Analysis",
    planDescription:
      "Ever wondered what the big fish are doing? Get access to how the mutual fund have been performing and how they are strategizing",
  },
  {
    id: 4,
    plan: "Advanced Screener",
    planDescription:
      "Do you feel exhausted to go through all the listed companies to find 5 investable companies? Well you don’t have to anymore. With our advanced screener, you can find companies on the go",
  },
  {
    id: 5,
    plan: "Company Statistics",
    planDescription:
      "Just having financials is not enough. Access all the information; be it product information or the industry information. Stay ahead with simplified statistics on the go",
  },
  {
    id: 6,
    plan: "Economy Highlights",
    planDescription:
      "Ever wondered how the market would react based on economic activities? Well, be up to date on the economic matters with descriptive report of economic highlights",
  },
];

function Card() {
  return (
    <div className=" h-auto w-10/12 sm:max-w-md md:max-w-lg lg:max-w-md p-6 rounded-2xl border-1 shadow-xl flex flex-col justify-center">
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

      <Accordion plans={plans} />

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
