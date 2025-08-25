import { redirect } from "react-router-dom";

export async function requireAuth(request: Request) {
  const pathname = new URL(request.url).pathname;
  const isLoggedIn = localStorage.getItem("loggedIn") === "true" ? true : false;
  console.log(pathname);
  if (!isLoggedIn) {
    const response = redirect(
      `/login?message=You must log in first.&redirectTo=${pathname}`
    );
    throw { ...response, body: true };
  }
}
