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
const Details = ({ vans }: Props) => {
  const {id: param} = useParams();
  return (
    <>
      {vans
        .filter(({id}) => id === param)
        .map(({name, type, description}) => (
          <div className="text-[14.35px] font-medium flex flex-col gap-y-4">
            <h1>
              <span className="font-bold mr-1">Name:</span>
              {name}
            </h1>
            <h1>
              <span className="font-bold mr-1">Category:</span>
              {type}
            </h1>
            <p>
              <span className="font-bold mr-1">Description:</span>
              {description}
            </p>
            <h1>
              <span className="font-bold mr-1">Visibility:</span>
              Public
            </h1>
          </div>
        ))}
    </>
  );
};

export default Details;
