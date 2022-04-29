/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import axios from "axios";
import { LockClosedIcon } from "@heroicons/react/solid";
import { useSelector, useDispatch } from "react-redux";
import { storageService } from "../../utils/helpers";
import { login } from "../../redux/thunk";
import { LoginPayLoad } from "../../redux/reducer/authentication/types";
import { makeStyles } from "@material-ui/core";

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loginInfo, setLoginInfo] = React.useState<LoginPayLoad>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = loginInfo;
    dispatch(login(body));
  };

  return (
    <div className="App">
      <div className="min-h-screen flex items-center justify-center py-12 px-[38px] lg:px-8 bg-black">
        <div className="max-w-md w-full space-y-8">
          <div className="flex items-center justify-center flex-col">
            <img
              className="w-[56%]"
              style={{ height: "50%", marginBottom: "30px" }}
              src="/media/illustrations/login_page_illustration.svg"
              alt="No Event"
            />
            <h3 className="mt-6 text-center text-[23px] font-[500] text-[#cac6c6]">
              Have an account?{" "}
              <span className="font-[700] text-[#757575]">Sign in</span>
            </h3>
            <p className="mt-2 text-center text-sm" style={{ color: "grey" }}>
              or{" "}
              <span className="text-[#f4f4f4] cursor-pointer underline">
                Sign up
              </span>
            </p>
          </div>
          <form
            className="mt-8 space-y-6"
            action="#"
            autoComplete="off"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="false"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-900 rounded-t-md focus:outline-none focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={(e) =>
                    setLoginInfo({ ...loginInfo, email: e.target.value })
                  }
                  style={{
                    background: "#2a2a2a",
                    borderColor: "#535353",
                    color: "grey",
                  }}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="false"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-900 rounded-b-md focus:outline-none focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={(e) =>
                    setLoginInfo({ ...loginInfo, password: e.target.value })
                  }
                  style={{
                    background: "#2a2a2a",
                    borderColor: "#535353",
                    color: "grey",
                  }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm"
                  style={{ color: "grey" }}
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm"></div>
            </div>

            <div>
              <button
                type="submit"
                style={{ backgroundColor: "yellowgreen" }}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    style={{ color: "black" }}
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  header: {
    color: "#cac6c6",
  },
  regularFont: {
    color: "grey",
  },
});
