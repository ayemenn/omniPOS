
import React, { useState } from "react";
import PasswordToggle from "./PasswordToggle";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas/signUpschema";
import Imageandtext from "./Imageandtext";
import authStore from "../store";
import { observer } from "mobx-react";

const initialValues = {
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
}

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({

        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            console.log(values);
            authStore.login(values.email);
            action.resetForm();
        },

    });
    return (

        <div className="min-h-screen flex ">
            {/* login container */}
            <div className="flex flex-1">

                {/* form */}
                <div className="sm:w-1/2  px-10 items-center self-center">
                    <h2 className="font-bold text-2xl">Create your account</h2>
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <div>
                            <input className="w-full p-2 mt-8 rounded-xl border "
                                type="text"
                                name="username"
                                placeholder="Add Username"
                                value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.username && touched.username ? (
                                <p className="text-red-500">{errors.username}</p>) : null}
                        </div>

                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <input
                                    className="w-full p-2 rounded-xl border"
                                    type="text"
                                    name="firstname"
                                    placeholder="First name"
                                    value={values.firstname}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.firstname && touched.firstname ? (
                                    <p className="text-red-500">{errors.firstname}</p>) : null}
                            </div>
                            <div className="w-1/2">
                                <input
                                    className="w-full p-2 rounded-xl border"
                                    type="text"
                                    name="lastname"
                                    placeholder="Last name"
                                    value={values.lastname}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.lastname && touched.lastname ? (
                                    <p className="text-red-500">{errors.lastname}</p>) : null}
                            </div>
                        </div>
                        <div>
                            <input className="w-full p-2 rounded-xl border "
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.email && touched.email ? (
                                <p className="text-red-500">{errors.email}</p>) : null}
                        </div>
                        <div className="relative w-full; ">
                            <input className=" w-full p-2  rounded-xl border "
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                            <PasswordToggle showPassword={showPassword} togglePasswordVisibility={togglePasswordVisibility} />
                            {errors.password && touched.password ? (
                                <p className="text-red-500">{errors.password} </p>) : null}
                        </div>
                        <button className="bg-orange-400 rounded-xl text-white py-2">
                            Sign up</button>
                    </form>
                    <div className="flex font-semibold mt-4">
                        Already have an account?
                        <Link to="/" className="ml-2 text-orange-400">
                            Sign in
                        </Link>
                    </div>
                </div>
                <Imageandtext />
            </div>
        </div>
    );
}
export default observer(Signup); 