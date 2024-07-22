

import { useNavigate } from "react-router-dom";
const SignUpForm = () => {
    const navigate = useNavigate();
  return (
        <div className="w-full rounded-lg shadow border mt-0 sm:max-w-md xl:p-0 bg-atlysGray-400 border-gray-700 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="flex items-center justify-center gap-2 flex-col">
              <h3 className="text-sm font-medium leading-tight tracking-tight text-atlysGray-200 ">
                  SIGN UP
              </h3>
              <h1 className="text-lg font-semibold leading-tight tracking-tight text-white">
                  Create an account to continue
              </h1>
              </div>
             <form className="space-y-4 md:space-y-6" action="#" onSubmit={() => navigate('/posts', {replace: true})}>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-atlysGray-50">Email</label>
                      <input type="email" name="email" id="email" className="border rounded-md bg-transparent border-atlysGray-300 text-atlysGray-50 text-sm  focus:ring-atlysGray-400 focus:border-atlysGray-500 block w-full p-2.5" placeholder="Enter your email"  />
                  </div>
                  <div>
                      <label htmlFor="username" className="block mb-2 text-sm font-medium text-atlysGray-50">Username</label>
                      <input type="text" name="username" id="username" className="border rounded-md bg-transparent border-atlysGray-300 text-atlysGray-50 text-sm  focus:ring-atlysGray-400 focus:border-atlysGray-500 block w-full p-2.5" placeholder="Choose a preferred username"  />
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-atlysGray-50">Password</label>
                      <input type="password" name="password" id="password" placeholder="Choose a strong password" className="border rounded-md bg-transparent border-atlysGray-300 text-atlysGray-50 text-sm  focus:ring-atlysGray-400 focus:border-atlysGray-500 block w-full p-2.5"  />
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Continue</button>
                  <p className="text-sm font-light text-atlysGray-100 dark:text-gray-400">
                      Already have an account?<span className="font-medium text-sm text-atlysGray-50 hover:underline cursor-pointer" onClick={() => navigate('/login', {replace: true})}>Login →</span>
                  </p>
              </form>
          </div>
      </div>
);
};

export default SignUpForm;
