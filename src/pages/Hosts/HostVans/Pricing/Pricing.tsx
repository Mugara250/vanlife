import { useParams } from "react-router-dom";

interface Van {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
}

interface Props {
  vans: Van[];
}

const Pricing = ({ vans }: Props) => {
  const {id: param} = useParams();
  return (
    <>
      {vans
        .filter(({id}) => id === param)
        .map(({price}) => (
          <div className="text-[24px] font-medium">
            <h1>
              ${price}.00<span className="text-[16px] text-[#4D4D4D]">/day</span>
            </h1>
          </div>
        ))}
    </>
  );
};

export default Pricing;
