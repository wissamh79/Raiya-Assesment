// import { useRouteError } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();
  // const error = useRouteError();
  // id="error-page"
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen space-y-5">
      <h1 className="text-xl font-bold text-center title-font capitalize ">
        Oops!
      </h1>
      <p className="text-lg font-semibold text-center title-font capitalize  ">
        Sorry, an unexpected error has occurred.
      </p>

      <button
        class=" flex items-center justify-center space-x-4 w-[25%] capitalize  p-3 bg-button text-white rounded shadow-xl text-base font-medium  cursor-pointer hover:shadow-2xl  disabled:text-gray-300 disabled:bg-violet-500"
        onClick={() => navigate(-1)}
      >
        <AiOutlineArrowLeft className="animate-bounce" size={25} />
        <span>Go back</span>
      </button>
      {/* <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
    </div>
  );
};

export default ErrorPage;
