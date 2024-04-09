import Card from "./Card";
function CardDisplay() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="text-white font-sans text-4xl font-normal text-wrap sm:text-6xl">
          Luxury Homes for Sale
        </h1>
      </div>
      <Card />
    </div>
  );
}

export default CardDisplay;
