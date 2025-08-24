import { useState } from "react";
import { useLoaderData, type LoaderFunctionArgs } from "react-router-dom";

interface FormData {
  email: string;
  password: string;
}

export function loader({ request }: LoaderFunctionArgs) {
  return new URL(request.url).searchParams.get("message");
}

const Login = () => {
  const message = useLoaderData();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  function handleSubmit(event: Event) {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <div className="bg-[#FFF7ED] px-6 py-16">
      <h1 className="text-[32px] font-bold text-center">
        Sign in to your account
      </h1>
      <h2 className="text-2xl text-center font-bold text-red-600">{message}</h2>
      <form className="">
        <div className="mt-8 flex flex-col">
          <input
            type="text"
            placeholder="Email address"
            value={formData?.email}
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
            }
            className="text-[#4D4D4D] text-base bg-white px-2 py-2 border-x-[1px] border-t-[1px] border-gray-400 rounded-t-lg  placeholder:text-[#4D4D4D] placeholder:text-base"
          />
          <input
            type="password"
            placeholder="Password"
            value={formData?.email}
            onChange={(event) => setFormData({...formData, password: event.target.value})}
            className="text-[#4D4D4D] text-base px-2 py-2 border-[1px] border-gray-400 rounded-b-lg bg-white placeholder:text-[#4D4D4D] placeholder:text-base"
          />
        </div>
        <input
          type="submit"
          value="Sign in"
          className="bg-[#FF8C38] mt-6 text-base text-white font-bold rounded-xl py-4 px-1.5 w-full"
        />
        <h2 className="text-base font-medium mt-10 text-center">
          Don't have an account?{" "}
          <span className="text-[#FF8C38] font-bold">Create one now</span>
        </h2>
      </form>
    </div>
  );
};

export default Login;
