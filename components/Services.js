import { cardItem } from "../utils/card";
import Cards from "./Cards";

const Services = () => {
  return (
    <section className="min-h-screen bg-gray-50 lg:grid lg:grid-cols-2 lg:items-center">
      <div className="px-5 py-4 md:flex md:justify-center">
        <img src="/images/UndrawOne.svg" alt="" className="h-96" />
      </div>
      <div className="mt-5 px-4 space-y-3 md:grid md:grid-cols-2 md:items-center md:px-8 md:gap-5 md:space-y-0">
        {cardItem.map((card) => (
          <Cards
            key={card.id}
            header={card.header}
            img={card.image}
            text={card.text}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
