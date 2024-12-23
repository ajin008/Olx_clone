import React from "react";
import guitar from "../assets/guitar.png";
import googlePng from "../assets/google.png";
import phonePng from "../assets/phone.png";

export const Login = () => {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <div className="mt-2 ">
                    <img src={guitar} alt="" className="w-20 h-20 ml-44" />
                    <p className="text-base font-medium mt-5">
                      help as to become one of the safest place to buy
                    </p>
                    <div className="flex border-2 border-black p-2 rounded-md mt-12">
                      <img src={phonePng} alt="" className="w-6 h-6" />
                      <h1 className="font-semibold ml-3">continue with</h1>
                    </div>
                    <div className="flex border border-gray-300 p-2 rounded-md mt-12">
                      <img src={googlePng} alt="" className="w-6 h-6" />
                      <h1 className="font-semibold ml-3">continue with</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
