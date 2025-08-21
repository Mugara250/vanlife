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
const Photos = () => {
  const { currentVan } = useOutletContext<Props>();
  return (
    <>
      {currentVan
        .map(({ imageUrl, name }) => (
          <div className="w-[103px] h-[101.55511474609375px]">
            <img src={imageUrl} alt={`Image of ${name}`} />
          </div>
        ))}
    </>
  );
};

export default Photos;
