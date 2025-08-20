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
const Photos = ({ vans }: Props) => {
  const {id: param} = useParams();
  return (
    <>
      {vans
        .filter(({ id }) => id === param)
        .map(({ imageUrl, name }) => (
          <div className="w-[103px] h-[101.55511474609375px]">
            <img src={imageUrl} alt={`Image of ${name}`} />
          </div>
        ))}
    </>
  );
};

export default Photos;
