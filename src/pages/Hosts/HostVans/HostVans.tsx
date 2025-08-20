import { Link, useParams } from "react-router-dom";

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

const HostVans = ({ vans }: Props) => {
  return (
    <div className="bg-[#FFF7ED] px-6 pt-4 pb-10">
      <h1 className="text-[32px] font-bold">Your listed vans</h1>
      {vans
        .filter((van) => van.price > 65)
        .map((van) => (
          <Link key={van.id} to={`/host/vans/${van.id}`}>
            <div className="bg-white py-5 px-6 mt-6 flex justify-between rounded-lg">
              <div className="flex gap-x-4">
                <img
                  src={van.imageUrl}
                  alt={`Image of ${van.name}`}
                  className="w-[65.88px] h-[65.88px] rounded-sm"
                />
                <div className="text-xl">
                  <h1 className="font-semibold">{van.name}</h1>
                  <span className="text-[#4D4D4D]">${van.price}/day</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default HostVans;
