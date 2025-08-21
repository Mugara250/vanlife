import { useOutletContext } from "react-router-dom";

interface Van {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
}

interface Props {
  currentVan: Van[];
}

const Pricing = () => {
  const { currentVan } = useOutletContext<Props>();
  console.log(currentVan);
  return (
    <>
      {currentVan
        .map(({id, price}) => (
          <div key={id} className="text-[24px] font-medium">
            <h1>
              ${price}.00<span className="text-[16px] text-[#4D4D4D]">/day</span>
            </h1>
          </div>
        ))}
    </>
  );
};

export default Pricing;
