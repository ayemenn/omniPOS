import React, { useState } from "react";
import PasswordToggle from "./PasswordToggle";
import { useFormik } from "formik";
import { signinSchema } from "../schemas/signInschema";
import ForgotPasswordButton from "./ForgotPasswordButton";
import { Link } from "react-router-dom";
import authStore from "../store";
import { observer } from "mobx-react";
const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };
  
    const {
      values,
      errors,
      touched,
      handleBlur,
      handleChange,
      handleSubmit,
    } = useFormik({
      initialValues: { emailusername: "", passwordlogin: "" },
      validationSchema: signinSchema,
      onSubmit: (values, action) => {
        console.log("Form submitted:", values);
        authStore.login(values.emailusername);
        action.resetForm();
      },
    });
  
    return (
      <div className="sm:w-1/2 px-10 self-center">
        <h2 className="font-bold text-2xl">Login to your account</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <input
              className="w-full p-2 mt-8 rounded-xl border"
              type="text"
              name="emailusername"
              placeholder="Username or Email"
              value={values.emailusername}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.emailusername && touched.emailusername ? (
              <p className="text-red-500">{errors.emailusername}</p>
            ) : null}
          </div>
  
          <div className="relative w-full">
            <input
              className="w-full p-2 rounded-xl border"
              type={showPassword ? "text" : "password"}
              name="passwordlogin"
              placeholder="Password"
              value={values.passwordlogin}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <PasswordToggle
              showPassword={showPassword}
              togglePasswordVisibility={togglePasswordVisibility}
            />
  
            {errors.passwordlogin && touched.passwordlogin ? (
              <p className="text-red-500">{errors.passwordlogin}</p>
            ) : null}
          </div>
  
          <div className="flex">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe" className="ml-2 font-semibold">
              Remember Me
            </label>
          </div>
          <button className="bg-orange-400 rounded-xl text-white py-2">
            Sign in
          </button>
        </form>
        <div className="flex mb-2 justify-between mt-2">
          <ForgotPasswordButton values={values} />
          <Link to="/signup" className="text-black font-semibold">
            Don't have an account?
          </Link>
        </div>
      </div>
    );
  };
  export default observer(LoginForm);