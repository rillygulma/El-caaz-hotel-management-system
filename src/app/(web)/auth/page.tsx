"use client";

import { signUp } from "next-auth-sanity/client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react";
import toast from "react-hot-toast";


const defaultFormData = {
  name: "",
  email: "",
  password: "",
};

const Auth = () => {
  const [formData, setFormData] = useState(defaultFormData);

  const inputStyles =
    "border border-gray-300 sm:text-sm text-black rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-tertiary w-full"; // Full width for responsiveness

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const { data: session } = useSession();

  const handleNavigation = () => {
    if (session) {
      window.location.href = '/'; // Direct navigation using `window.location.href`
    }
  };

  useEffect(() => {
    if (session) handleNavigation();
  }, [session]);

  const loginHandler = async () => {
    try {
      await signIn();
      handleNavigation();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const user = await signUp(formData);
      if (user) {
        toast.success("Success. Please Sign in");
      }
    } catch (error) {
       console.log(error);
      toast.error("Something went wrong");
    } finally {
      setFormData(defaultFormData);
    }
  };

  return (
    <section className="container mx-auto flex items-center justify-center h-screen">
      <div className="p-8 space-y-6 bg-white shadow-lg rounded-lg border border-gray-200 w-full max-w-md md:max-w-lg lg:max-w-xl">
        <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
            Create an account
          </h1>
          <p>OR</p>
          <span className="inline-flex items-center">
            <AiFillGithub onClick={loginHandler} className="mr-3 text-4xl cursor-pointer text-black dark:text-white" />{" "}
            |
            <FcGoogle onClick={loginHandler} className="ml-3 text-4xl cursor-pointer" />
          </span>
        </div>
        <form className="grid gap-4 md:gap-6" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="FirstName LastName"
              required
              className={inputStyles}
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="name@email.com"
              required
              className={inputStyles}
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="********"
              required
              className={inputStyles}
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="bg-tertiary-dark focus:outline-none font-medium rounded-lg text-sm px-5 py-3 text-center"
          >
            Sign Up
          </button>
        </form>

        <button
          onClick={loginHandler}
          className="text-blue-700 underline hover:text-blue-900"
        >
          Login
        </button>
      </div>
    </section>
  );
};

export default Auth;
