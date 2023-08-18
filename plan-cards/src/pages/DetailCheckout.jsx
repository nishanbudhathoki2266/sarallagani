import Card from "../components/Card";

const contents = [
  {
    id: 1,
    title: "Bundle",
    subtitle: "Active Investors",
    price: 99,
    image: "card-images/application.png",
    type: "static",
  },
  {
    id: 2,
    title: "Customize",
    subtitle: "Occasional Investors",
    image: "card-images/customization.png",
    type: "dynamic",
  },
];

function DetailCheckout() {
  return (
    <div className="flex sm:container mx-auto justify-center items-center flex-col gap-10 py-4">
      <h1 className="text-3xl text-[##000000] text-center font-bold">
        Curate Plan as
        <br />
        Per Your Need
      </h1>
      <div className="flex flex-wrap w-full justify-center items-start -m-4 gap-8">
        {contents.map((content) => (
          <Card key={content.id} content={content} />
        ))}
      </div>
      <div className="h-96 w-96 flex items-center justify-center">TEST</div>
    </div>
  );
}

export default DetailCheckout;
