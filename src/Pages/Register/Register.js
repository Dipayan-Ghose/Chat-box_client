/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from "react";
import { authContext } from "../../Components/Auth/Auth";
import { toast } from "react-hot-toast";


const Register = () => {
  const {registerUser}= useContext(authContext);
const [error, setError]= useState('');

const handleRegistration=(e)=>{
e.preventDefault();
const form= e.target;
const name= form.name.value;
const email= form.email.value;
const password= form.password.value;
console.log(name,email,password);

registerUser(email, password)
   .then((res) => {
        const user = res.user;
        console.log(user);
        toast.success(`Welcome ${user?.displayName}`, {
          position: "bottom-center",
          autoClose: 1500,
        });
        form.reset();
       
      })
      .catch((error) => {
        console.error(error);
      setError(error.message)
      });
    }
  return (

    <div>
      <div className="px-4 pb-24 mx-auto max-w-7xl">
        
        <div className="w-full py-6 mx-auto md:w-3/5 lg:w-2/5">
          <h1 className="mb-1 text-xl font-medium text-center text-gray-800 md:text-3xl">
            Create your Free Account
          </h1>
          
          <form onSubmit={handleRegistration} className="mt-8 space-y-4">
            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">
                Name
              </span>
              <input
                className="form-input"
                type="text"
                name="name"
                placeholder="Your full name"
                required
              />
            </label>
            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">
                Your Email
              </span>
              <input
                className="form-input"
                type="email"
                placeholder="Dayana@carly.com"
                name="email"
                inputmode="email"
                required
              />
            </label>
            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">
                Create a password
              </span>
              <input
                className="form-input"
                type="password"
                name="password"
                placeholder="••••••••"
                required
              />
            </label>
            <input
              type="submit"
              className="w-full btn bg-green-500 btn-lg"
              value="Sign Up"
            />
          </form>

          <p className="my-5 text-xs font-medium text-center text-gray-700">
            By clicking "Sign Up" you agree to our
            <a href="#" className="text-green-700 hover:text-green-900">
              Terms of Service
            </a>
            and
            <a href="#" className="text-green-700 hover:text-green-900">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
