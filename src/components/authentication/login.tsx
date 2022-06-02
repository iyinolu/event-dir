/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import { CircularProgress } from "@material-ui/core";
import { LoginProps } from "../types";

export default function Login({
  login,
  loginInProgress,
  loginInfo,
  loginInfoSetter,
}: LoginProps) {
  return (
    <div className="App">
      <div className="min-h-screen flex items-center justify-center py-12 px-[38px] lg:px-8 bg-black md:max-w-[1024px] md:min-w-[1024px] mx-auto my-0">
        <div className="flex w-full space-y-8 md:items-center flex-col md:flex-row">
          <div className="flex flex-1 flex-col items-center justify-center">
            <div className="mb-[36px] md:mb-[90px] self-center md:self-start">
              <h1 className="text-[#e7f0fe] text-[28px] md:text-[41px]">📁 Events Directory</h1>
              <p className="text-[#808080] text-[12px] md:text-[16px]">..the productivity app you always wanted.</p>
            </div>
            <img
              className="w-[56%] self-center md:self-start"
              style={{ height: "50%", marginBottom: "30px" }}
              src="/media/illustrations/login_page_illustration.svg"
              alt="No Event"
            />
          </div>
          <form
            className="flex-1 mt-8 space-y-6 bg-[#393939] md:min-w-[483px] md:max-w-[483px] p-[26px] rounded-[10px]"
            action="#"
            autoComplete="off"
            onSubmit={(e) => login(e)}
          >
            <div>
              <h3 className="mt-2 text-center text-[17px] md:text-[23px] font-[500] text-[#cac6c6]">
                Have an account?{" "}
                <span className="font-[700] text-[#757575]">Sign in</span>
              </h3>
            </div>

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
                    loginInfoSetter({ ...loginInfo, email: e.target.value })
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
                    loginInfoSetter({ ...loginInfo, password: e.target.value })
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
                  {loginInProgress ? (
                    <CircularProgress
                      thickness={5}
                      style={{ height: "19px", width: "19px", color: "black" }}
                    />
                  ) : (
                    <LockClosedIcon
                      style={{ color: "black" }}
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  )}
                </span>
                Signin
              </button>
              <p
                className="mt-[22px] float-left text-center text-sm"
                style={{ color: "grey" }}
              >
                or{" "}
                <span className="text-[#f4f4f4] cursor-pointer underline">
                  Signup
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}