import SignInForm from "../components/forms/SignInForm";
import Logo from "/Logo.png"

const Login = () => {
  return (
 <section className="bg-gray-50 dark:bg-atlysGray-500">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src={Logo} alt="logo" />    
      </a>
    <SignInForm />
    </div>
</section>
);
};

export default Login;
