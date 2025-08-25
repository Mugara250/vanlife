import React, { useState } from "react";
import {
  useLoaderData,
  useNavigate,
  Form,
  redirect,
  type LoaderFunctionArgs,
  type ActionFunctionArgs,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { loginUser } from "../../api";

interface FormData {
  email: string;
  password: string;
}

interface ErrorProps {
  message: string;
  statusText: string;
  status: number;
}

export function loader({ request }: LoaderFunctionArgs) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const user = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host"
  try {
    const data = await loginUser(user);
    console.log(data);
    localStorage.setItem("loggedIn", "true");
    return { ...redirect(pathname), body: true };
  } catch (error: any) {
    return error.message;
  }
}
const Login = () => {
  const message = useLoaderData();
  const {state} = useNavigation()
  const errorMessage = useActionData();
  return (
    <div className="bg-[#FFF7ED] px-6 py-16">
      <h1 className="text-[32px] font-bold text-center">
        Sign in to your account
      </h1>
      <h3 className="mt-4 text-lg text-center font-bold text-red-600">
        {message}
      </h3>
      {errorMessage && (
        <h3 className="mt-4 text-lg text-center font-bold text-red-600">
          {errorMessage}
        </h3>
      )}
      <Form method="post" replace>
        <div className="mt-8 flex flex-col">
          <input
            type="email"
            placeholder="Email address"
            name="email"
            className="text-[#4D4D4D] text-base bg-white px-2 py-2 border-x-[1px] border-t-[1px] border-gray-400 rounded-t-lg  placeholder:text-[#4D4D4D] placeholder:text-base"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="text-[#4D4D4D] text-base px-2 py-2 border-[1px] border-gray-400 rounded-b-lg bg-white placeholder:text-[#4D4D4D] placeholder:text-base"
          />
        </div>
        <input
          type="submit"
          value={state === "submitting" ? "Loggin in..." : "Log in"}
          disabled={state === "submitting" ? true : false}
          className="bg-[#FF8C38] mt-6 text-base text-white font-bold rounded-xl py-4 px-1.5 w-full cursor-pointer"
        />
        <h2 className="text-base font-medium mt-10 text-center">
          Don't have an account?
          <span className="text-[#FF8C38] pl-1 font-bold">Create one now</span>
        </h2>
      </Form>
    </div>
  );
};

export default Login;
