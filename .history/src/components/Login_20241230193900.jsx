import React from "react";
import guitar from "../assets/guitar.png";
import googlePng from "../assets/google.png";
import phonePng from "../assets/phone.png";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../Firebase";
import { useAuth } from "./AuthProvider";

export const Login = (props) => {
  const{login} = useAuth()
  const googleSignin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-zinc-950 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all  sm:w-96 sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <h1
                onClick={() => props.setLoginPop(false)}
                className="cursor-pointer font-semibold text-3xl "
              >
                X
              </h1>
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <div className="mt-2 ">
                    <img src={guitar} alt="" className="w-20 h-20 ml-32" />
                    <p className="text-base font-medium mt-5 text-center">
                      Help as to become one of the safest place <br /> to buy
                      and sell
                    </p>
                    <div className="flex border-2 border-black p-2 rounded-md mt-12 cursor-pointer">
                      <img src={phonePng} alt="" className="w-6 h-6" />
                      <h1 className="font-semibold ml-11 ">
                        continue with Phone
                      </h1>
                    </div>
                    <div
                      onClick={googleSignin}
                      className="flex border border-gray-300 p-2 rounded-md mt-12 cursor-pointer"
                    >
                      <img src={googlePng} alt="" className="w-6 h-6" />
                      <h1 className="font-semibold ml-11 ">
                        continue with Google
                      </h1>
                    </div>
                    <h1 className="text-center mt-4 ">OR</h1>
                    <h1 className="text-center mt-4 underline cursor-pointer">
                      Login with Email
                    </h1>
                    <h1 className="text-center mt-32 text-xs">
                      All your personal details are safe with us.
                    </h1>
                    <h1 className="text-center mt-4 text-xs">
                      If you Continue, you are accepting{" "}
                      <span className="text-blue-500">
                        OLX Terms and <br /> conditions and privacy policy
                      </span>
                    </h1>
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