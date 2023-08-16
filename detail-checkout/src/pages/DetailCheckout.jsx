import AccordionV2 from "../components/Accordion-v2";
import Card from "../components/PlanCard";

const DetailCheckout = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-10 py-4 md:px-4">
      <h1 className="text-3xl text-[##000000] text-center font-bold">
        Curate Plan as
        <br />
        Per Your Need
      </h1>
      <div className="flex flex-wrap w-full justify-center items-start -m-4 gap-8">
        <Card />
        <Card />
      </div>
      <AccordionV2 />
      <div className="h-96 w-96 flex items-center justify-center">TEST</div>
    </div>
  );
};

export default DetailCheckout;
