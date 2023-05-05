import ThemeToggle from "./ThemeToggle";

import { AiOutlineLogout } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { useApp } from "../context";
import { motion } from "framer-motion";
import { variantsContainer, variantsItem } from "./motion";

const Header = () => {
  const { state, dispatch } = useApp();

  const navigate = useNavigate();
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      dispatch({
        type: "INIT",
        data: {
          auth: "",
        },
      });

      sessionStorage.removeItem("auth");

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.header
      variants={variantsContainer}
      initial="hidden"
      animate="visible"
      className="sticky  flex  items-center justify-between h-[50px] w-full   py-2"
    >
      <motion.h1
        variants={variantsItem}
        className="select-none font-signature text-2xl md:text-3xl text-accent tracking-wider capitalize font-bold"
      >
        Raiya Group
      </motion.h1>

      <motion.div
        variants={variantsItem}
        className="flex items-center space-x-4 text-black dark:text-white  py-1 "
      >
        <ThemeToggle />
        {state?.auth && (
          <button onClick={handleLogout} className="  ">
            <AiOutlineLogout size={30} />
          </button>
        )}
      </motion.div>
    </motion.header>
  );
};

export default Header;
