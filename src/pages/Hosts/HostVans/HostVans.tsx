import { Link, useLoaderData, type LoaderFunctionArgs } from "react-router-dom";
import { getHostVans } from "../../../../api";
import { requireAuth } from "../../../../utils";

interface Van {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
}

export async function loader({request}: LoaderFunctionArgs) {
  await requireAuth(request);
  const vans = await getHostVans();
  return vans;
}

const HostVans = () => {
  const vans = useLoaderData() as Van[];
  return (
    <div className="bg-[#FFF7ED] px-6 pt-4 pb-10">
      <h1 className="text-[32px] font-bold">Your listed vans</h1>
      {vans
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
