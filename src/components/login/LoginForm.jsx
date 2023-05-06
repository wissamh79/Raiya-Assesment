import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../context";
import axios from "../../api/axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schema";
import { motion } from "framer-motion";
import { variantsContainer, variantsItem } from "../motion";
import { LOGIN_URL } from "../../constants/api";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { state, dispatch } = useApp();
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
      setIsLoading(true);
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
    } finally {
      setIsLoading(true);
    }
  };

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className=" flex flex-col  items-center justify-center w-full h-fit space-y-7"
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
          className="w-full text-black  text-base border border-black font-semibold rounded py-2 px-3"
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
          className={` relative flex flex-col items-center border border-black justify-center w-full  rounded shadow-xl  `}
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
        className=" flex items-center justify-center  w-full capitalize  p-3 bg-button space-x-4 rounded shadow-xl  hover:shadow-2xl  disabled:text-gray-300 disabled:bg-violet-500"
        type="submit"
        variants={variantsItem}
      >
        {isLoading ? (
          <AiOutlineLoading3Quarters size={25} className="animate-spin" />
        ) : (
          <span className="capitalize text-white text-base font-medium">
            Sign in
          </span>
        )}
      </motion.button>
    </motion.form>
  );
};

export default LoginForm;
