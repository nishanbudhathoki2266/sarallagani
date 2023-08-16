import Accordion from "../components/Accordion";
import Card from "../components/PlanCard";

const DetailCheckout = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-10 p-4">
      <h1 className="text-3xl text-[##000000] text-center font-bold">
        Curate Plan as
        <br />
        Per Your Need
      </h1>
      <div className="flex flex-wrap w-full justify-center items-start -m-4 gap-8">
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default DetailCheckout;
