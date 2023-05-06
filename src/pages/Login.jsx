import { useApp } from "../context";
import LoginForm from "../components/login/LoginForm";
import QrCode from "../components/login/QrCode";
import { motion } from "framer-motion";
import { variantsContainer, variantsItem } from "../components/motion";
import contentP from "../assets/website-content-sections-p.svg";
import contentB from "../assets/website-content-sections-b.svg";
const Login = () => {
  const { theme } = useApp();

  return (
    <section className="w-full h-screen md:h-full flex  items-center justify-evenly">
      {theme === "dark"
        ? contentP && (
            <img
              src={contentP}
              className=" hidden  md:block w-[40%] select-none "
            />
          )
        : contentB && (
            <img
              src={contentB}
              className=" hidden md:block w-[40%] select-none "
            />
          )}
      <div className="flex flex-col  w-[90%] md:w-[75%] lg:w-[50%] h-full md:h-[70%] items-center justify-center space-y-2 md:space-y-4">
        <h1 className=" select-none text-xl font-bold text-center title-font capitalize  border-b-2  w-full py-2 pb-4 px-2 mb-0 md:mb-2">
          Sign in{" "}
        </h1>
        <motion.div
          variants={variantsContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-center  md:items-start justify-evenly w-full h-[70%] sm:h-full md:h-fit pt-3 md:pt-6 space-y-4 md:space-y-0"
        >
          {/* Login */}
          <motion.div className="  w-full md:w-[50%] " variants={variantsItem}>
            <LoginForm />
          </motion.div>

          {/* OR */}
          <motion.div
            variants={variantsItem}
            className="flex md:flex-col  items-center justify-center w-full md:w-10 md:h-full space-x-2 md:space-x-0 md:space-y-2"
          >
            <div className="w-full md:w-0.5 h-0.5 md:h-[50%] bg-gray-300" />
            <span className="text-base md:text-lg font-bold text-center title-font capitalize  ">
              OR
            </span>
            <div className="w-full md:w-0.5 h-0.5 md:h-[50%] bg-gray-300" />
          </motion.div>
          {/* QR */}
          <QrCode item={variantsItem} />
        </motion.div>
      </div>
    </section>
  );
};

export default Login;
