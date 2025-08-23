import { useRouteError } from "react-router-dom";

interface ErrorProps {
  message: string;
  statusText: string;
  status: number;
}

function isErrorProps(error: unknown): error is ErrorProps {
  return (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    "statusText" in error &&
    "status" in error
  );
}
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="bg-[#FFF7ED] py-10 px-6">
      <h1 className="font-bold text-[32px]">{isErrorProps(error) && error.message}</h1>
    </div>
  );
};

export default Error;
