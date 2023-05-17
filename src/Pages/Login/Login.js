/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Components/Auth/Auth";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { providerLogin, signInUser } = useContext(authContext);

  const providerGoogle = new GoogleAuthProvider();


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        toast.success(`Welcome ${user?.displayName}`, {
          position: "bottom-center",
          autoClose: 1500,
        });
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error.code);
        setError(error.code);
      });
  };

  const googleSignIn = () => {
    providerLogin(providerGoogle)
      .then((res) => {
        const user = res.user;
        toast.success(`Welcome ${user?.displayName}`, {
          position: "bottom-center",
          autoClose: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      
        <div className="px-0 py-20 mx-auto max-w-7xl sm:px-4">
          <div className="w-full px-4 pt-5 pb-6 mx-auto mt-8 mb-6 bg-white rounded-none shadow-xl sm:rounded-lg sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 sm:px-6">
            <h1 className="mb-4 text-lg font-semibold text-left text-gray-900">
              Log in to your account
            </h1>
            <form onSubmit={handleSubmit} className="mb-8 space-y-4">
              <label className="block">
                <span className="block mb-1 text-xs font-medium text-gray-700">
                  Your Email
                </span>
                <input
                  className="form-input"
                  type="email"
                  placeholder="Ex. james@bond.com"
                  name="email"
                  required
                />
              </label>
              <label className="block">
                <span className="block mb-1 text-xs font-medium text-gray-700">
                  Your Password
                </span>
                <input
                  className="form-input"
                  type="password"
                  placeholder="••••••••"
                  name="password"
                  required
                />
              </label>
              <input
                type="submit"
                className="w-full py-3 mt-1 btn bg-green-400"
                value="Login"
              />
            </form>
            <div className="space-y-8">
              <div className="text-center border-b border-gray-200">
                <span className="p-2 text-xs font-semibold tracking-wide text-gray-600 uppercase bg-white">
                  Or
                </span>
              </div>
              <div className="">
                <a href="#" onClick={googleSignIn} className="py-3 btn btn-icon btn-google">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-1"
                  >
                    <path d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z" />
                  </svg>
                  <span className="sr-only">Continue with</span> Google
                </a>
                
              </div>
            </div>
          </div>
          <p className="mb-4 text-xs text-center text-gray-400">
            <a href="#" className="text-black underline ">
              Create an account <span className="text-red-500"><Link to='/register'>Register</Link></span>
            </a>
            
            
          </p>
        </div>
     
    </div>
  );
};

export default Login;
