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
  vans: Van[];
}
const Dashboard = () => {
  const {vans} = useOutletContext<Props>();
  return (
    <>
      <div className="bg-[#FFEAD0] px-6 py-5">
        <h1 className="font-bold text-[36px]">Welcome!</h1>
        <div className="mt-3 text-[#4D4D4D] text-base font-medium flex justify-between ">
          <p>
            Income last <span className="font-bold underline">30 days</span>
          </p>
          <h1 className="font-medium text-base">Details</h1>
        </div>
        <h1 className="mt-3 text-[48px] font-extrabold">$2,260</h1>
      </div>
      <div className="px-6 py-6 bg-[#FFDDB2] flex justify-between">
        <h1 className="text-[24px] font-bold">
          Review score
          <span className="text-[#FF8C38] pl-2">&#9733;</span>
          <span className="text-[22px] font-bold">
            5.0<span className="text-[#4D4D4D]">/5</span>
          </span>
        </h1>
        <h1 className="font-medium text-base">Details</h1>
      </div>
      <div className="bg-[#FFF7ED] px-6 pt-8 py-10">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Your listed vans</h1>
          <h1 className="text-base">View all</h1>
        </div>
        {vans.filter(({id}) => +id < 4).map(({id, imageUrl, name, price}) => (
          <div key={id} className="bg-white py-5 px-6 mt-6 flex justify-between rounded-lg">
            <div className="flex gap-x-4">
              <img
                src={imageUrl}
                alt={`Image of ${name}`}
                className="w-[65.88px] h-[65.88px] rounded-sm"
              />
              <div className="text-xl">
                <h1 className="font-semibold">{name}</h1>
                <span className="text-[#4D4D4D]">${price}/day</span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <h1 className="font-medium">Edit</h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
