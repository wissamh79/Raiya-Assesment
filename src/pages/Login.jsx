import { useState } from "react";
import QrCode from "../components/QrCode";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context";
import axios from "../api/axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../components/schema";
import { motion } from "framer-motion";
import { variantsContainer, variantsItem } from "../components/motion";
import { LOGIN_URL } from "../constants/api";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import contentP from "../assets/website-content-sections-p.svg";
import contentB from "../assets/website-content-sections-b.svg";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { state, dispatch, theme } = useApp();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: state.email || "",
      password: state.password || "",
    },
    resolver: yupResolver(loginSchema),
  });
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email: data.email, password: data.password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response.data.accessToken;

      await dispatch({
        type: "INIT",
        data: {
          auth: accessToken,
        },
      });

      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  console.log(errors.email?.message);
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
        <h1 className=" select-none text-xl font-bold text-center title-font capitalize  border-b-2  w-full p-2 mb-0 md:mb-4">
          Sign in{" "}
        </h1>
        <motion.div
          variants={variantsContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-center  md:items-start justify-evenly w-full h-[70%] pt-3 md:pt-6 space-y-4 md:space-y-0"
        >
          <motion.div className="  w-full md:w-[50%] " variants={variantsItem}>
            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              className=" flex flex-col  items-center justify-center w-full  space-y-7"
              variants={variantsContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className={` relative flex flex-col items-center justify-center w-full  rounded shadow-xl  `}
                variants={variantsItem}
              >
                <input
                  {...register("email")}
                  type="text"
                  placeholder="Email"
                  className="w-full text-black  text-base font-semibold rounded py-2 px-3"
                />
                <p className=" text-base font-semibold text-red-300">
                  {errors.email?.message}
                </p>
              </motion.div>
              <motion.div
                className={` relative flex flex-col items-center justify-center w-full  rounded shadow-xl  `}
                variants={variantsItem}
              >
                <div
                  className={` relative flex flex-col items-center justify-center w-full  rounded shadow-xl  `}
                >
                  <input
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className=" w-full text-black  text-base font-semibold rounded py-2 px-3 "
                  />
                  <button
                    className="absolute bottom-2 right-2 text-black"
                    onClick={handleShowPassword}
                  >
                    {showPassword ? (
                      <AiFillEye size={25} />
                    ) : (
                      <AiFillEyeInvisible size={25} />
                    )}
                  </button>
                </div>
                <p className=" text-base font-semibold text-red-300">
                  {errors.password?.message}
                </p>
              </motion.div>

              <motion.button
                className=" w-full capitalize  p-3 bg-button text-white rounded shadow-xl text-base font-medium  cursor-pointer hover:shadow-2xl  disabled:text-gray-300 disabled:bg-violet-500"
                type="submit"
                variants={variantsItem}
              >
                Sign in
              </motion.button>
            </motion.form>
          </motion.div>
          <motion.div
            variants={variantsItem}
            className="flex md:flex-col  items-center justify-center w-full md:w-10 md:h-[70%] space-x-2 md:space-x-0 md:space-y-2"
          >
            <div className="w-full md:w-0.5 h-0.5 md:h-[50%] bg-gray-300" />
            <span className="text-base md:text-lg font-bold text-center title-font capitalize  ">
              OR
            </span>
            <div className="w-full md:w-0.5 h-0.5 md:h-[50%] bg-gray-300" />
          </motion.div>
          <QrCode item={variantsItem} />
        </motion.div>
      </div>
    </section>
  );
};

export default Login;
