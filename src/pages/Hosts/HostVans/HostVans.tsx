import { Link, useOutletContext } from "react-router-dom";

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

const HostVans = () => {
  const {vans} = useOutletContext<Props>();
  return (
    <div className="bg-[#FFF7ED] px-6 pt-4 pb-10">
      <h1 className="text-[32px] font-bold">Your listed vans</h1>
      {vans
        .filter(({id}) => +id < 4)
        .map(({id, imageUrl, name, price}) => (
          <Link key={id} to={`/host/vans/${id}`}>
            <div className="bg-white py-5 px-6 mt-6 flex justify-between rounded-lg">
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
            </div>
          </Link>
        ))}
    </div>
  );
};

export default HostVans;
