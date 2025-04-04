import { Checkbox, Input } from "antd";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { IAuthData, IForm } from "../../../shared/types/types";

import { useNavigate } from "react-router-dom";
import ButtonPrimary from "../../../shared/components/ButtonPrimary/ButtonPrimary";
import { GoogleLogin } from "@react-oauth/google";
import supabase from "../../../../../supabaseClient";

export default function Form({ title, handleAuth, isSignup }: IForm) {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("email is required")
      .matches(
        /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
        "email is not valid"
      ),
    password: yup
      .string()
      .required("password is required")
      .min(8, "password must be at least 8 characters"),
    name: isSignup ? yup.string().required("name is required") : yup.string(),
  });

  const resolver = yupResolver(schema);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver,
  });

  const onSubmit = async (data: IAuthData) => {
    await handleAuth(data);
  };

  const handleSuccess = async (credentialResponse: any) => {
    const { credential } = credentialResponse;

    const { data, error } = await supabase.auth.signInWithIdToken({
      provider: "google",
      token: credential,
    });

    if (error) {
      console.error("Supabase Login Error:", error.message);
    } else {
      console.log("User:", data.user);
    }
  };

  const handleError = () => {
    console.error("Google Login Failed");
  };

  const reactClickHandler = (e: any) => {
    console.log(e);
  };

  return (
    <div className="flex flex-col gap-8">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {isSignup && (
          <>
            <label className="text-form-labels  text-sm ">Name</label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input {...field} placeholder="Type your name" />
              )}
            />
            {errors.name?.message && (
              <p style={{ color: "red" }}>{errors.name?.message}</p>
            )}
          </>
        )}

        <label className="text-gray-600  text-sm ">Email</label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Type your email" />
          )}
        />
        {errors.email?.message && (
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        )}
        <label className="text-gray-600  text-sm">Password</label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input.Password {...field} placeholder="Enter your password" />
          )}
        />
        {errors.password?.message && (
          <p style={{ color: "red" }}>{errors.password?.message}</p>
        )}

        <div className="flex justify-between items-center">
          <Checkbox className="text-sm">Remember for 30 days</Checkbox>
          <a href="#" className="text-purple-700 hover:underline text-sm">
            Forgot password?
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <ButtonPrimary text={title} htmlType={"submit"} />
          <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
        </div>
      </form>
    </div>
  );
}
