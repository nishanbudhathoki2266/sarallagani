import { Fragment, useState } from "react";
import Accordion from "./Accordion";
import { plans } from "../data/plans";

function Card({ content }) {
  const [customizedPrice, setCustomizedPrice] = useState(0);

  const handlePriceChange = (price) => {
    setCustomizedPrice(price);
  };

  return (
    <div className=" h-auto w-10/12 sm:max-w-md md:max-w-lg lg:max-w-md p-6 rounded-2xl border-1 shadow-xl flex flex-col justify-center">
      <div className="flex gap-4 items-start">
        <div className="h-12 w-12">
          <img src={content.image} alt={`Image of ${content.title}`} />
        </div>
        <div className="flex flex-col gap-6 mb-6">
          <div>
            <h1 className="text-3xl mb-1 font-semibold">{content.title}</h1>
            <h2 className="text-sm tracking-widest title-font mb-1 font-medium text-[#696969]">
              {content.subtitle}
            </h2>
          </div>
          <div>
            <h1 className="inline font-bold text-4xl">
              Rs. {content.price ? content.price : customizedPrice}
            </h1>
            <span className="font-bold text-lg"> / month</span>
          </div>
        </div>
      </div>
      <h2 className="inline font-bold text-2xl tracking-wide mb-2">Benefits</h2>

      <Accordion handlePriceChange={handlePriceChange}>
        {plans.map((plan, index) => (
          <Fragment key={plan.id}>
            <div className="w-full flex justify-between items-center">
              <span className="text-md flex items-center gap-2">
                {content.type === "static" ? (
                  <Accordion.StaticPlanCheckbox />
                ) : (
                  <Accordion.CustomizedPlanCheckbox index={index} />
                )}
                <Accordion.Title title={plan.plan} />
              </span>
              <Accordion.Toggler index={index} />
            </div>
            <Accordion.Content
              description={plan.planDescription}
              index={index}
            />
          </Fragment>
        ))}
      </Accordion>

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
