import React, { useContext, useState } from "react";
import {
  Button,
  Input,
  Label,
  Select,
  ListBox,
  Spinner,
  Alert,
} from "@heroui/react";
import { Controller, useForm } from "react-hook-form";
import ValidationMessage from "../../../components/Shared/ValidationMessage/ValidationMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AppButton from "../../../components/Shared/AppButton/AppButton";
import { loginSchema } from "../../../schemas/LOGIN.schema";
import {AuthContext} from  "../../../context/AuthContext"

export default function Login() {
 
  const [ApiError, setApiError] = useState(null);
  const [SuccessMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  const {token, storeToken, clearToken} = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, touchedFields, isSubmitting, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",

    },
    mode: "onBlur", // Validate on blur
    resolver: zodResolver(loginSchema),
  });


  async function onSubmit(data) {
    try {
      const res = await axios.post(
        "https://route-posts.routemisr.com/users/signin",
        data,
      );


      if (res.status === 200) {
        setApiError("");
        setSuccessMessage("Login Successfull!");
        storeToken(res.data.data.token)
        console.log(res.data.data.token);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        throw new Error(res.error);
      }
    } catch (err) {
      
      setApiError(err.response.data.message);
    }

  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-3xl text-white">
            🚀
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Login Account</h1>
        </div>

        {/* Form Section */}
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
   


            {/* Email */}
            <div className="md:col-span-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 block mb-1.5"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                variant="bordered"
                className="w-full"
                {...register("email")}
              />
              <ValidationMessage field={errors.email} />
            </div>


            {/* Password */}
            <div className="sm:col-span-2">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-gray-700 block mb-1.5"
              >
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="********"
                variant="bordered"
                className="w-full"
                {...register("password",)}
              />
              <ValidationMessage field={errors.password} />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <AppButton type="submit"  isPending={isSubmitting} isDisabled={!isValid}     
            className="w-full md:w-1/2 h-12 text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition"
             >Login</AppButton>
             
          </div>
        </form>

        {ApiError && (
          <Alert
            status="danger"
            className="mt-4 rounded-2xl border border-danger/30 bg-white shadow-lg"
          >
            <Alert.Indicator className="text-danger" />

            <Alert.Content>
              <Alert.Title className="text-danger font-semibold">
                Something went wrong
              </Alert.Title>

              <Alert.Description className="text-gray-600">
                {ApiError}
              </Alert.Description>
            </Alert.Content>
          </Alert>
        )}

        {SuccessMessage && (
          <Alert
            status="success"
            className="mt-4 rounded-2xl border border-success/30 bg-white shadow-lg"
          >
            <Alert.Indicator className="text-success" />

            <Alert.Content>
              <Alert.Title className="font-semibold text-success">
                Registration Successful
              </Alert.Title>

              <Alert.Description className="text-gray-600">
                Login Successful. Redirecting to Home page...
              </Alert.Description>
            </Alert.Content>
          </Alert>
        )}

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="px-3 text-sm text-gray-400 font-medium">OR</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Navigation Footer */}
        <p className="text-center text-gray-500 text-sm">
         Do not have an account?{" "}
          <Link
            to={"/register"}
            className="font-semibold text-blue-600 hover:underline transition"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
