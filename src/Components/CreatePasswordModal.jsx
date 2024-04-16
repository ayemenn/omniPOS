import React, { useState } from "react";
import PasswordToggle from "./PasswordToggle";
import { useFormik } from "formik";
import { createPasswordSchema } from "../schemas/createPasswordSchema";
import PasswordChangedModal from "./PasswordChangedModal";
const initialValues = {
    Password: "",
    ConfirmPassword: "",
};

const CreatePasswordModal = ({ onClose }) => {

    const [showPasswordChangedModal, setShowPasswordChangedModal] = useState(false); // State for Password Changed modal

    const [showPassword, setShowPassword] = useState({
        Password: false,
        ConfirmPassword: false,
    });



    const togglePasswordVisibility = (fieldName) => {
        setShowPassword((prevShowPassword) => ({
            ...prevShowPassword,
            [fieldName]: !prevShowPassword[fieldName],
        }));
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({

        initialValues: initialValues,
        validationSchema: createPasswordSchema,

        onSubmit: (values, action) => {
    
            console.log("Form submitted:", values);
            action.resetForm();
            setShowPasswordChangedModal(true);

        },

    });

    return (

        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Overlay */}
            <div className="fixed inset-0 bg-gray-800 opacity-50"></div>

            {/* Modal Content */}
            <div className="bg-white p-7 rounded-xl shadow-md z-10 relative items-start justify-between">
                <h2 className="text-xl text-orange-400 font-bold">Create New Password</h2>
                <p className="text-gray-500 font-serif mt-3 mb-3">
                    Please enter a new password. Your new password
                    <br />
                    must be different from the previous password
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="relative">
                        <input
                            className="w-full p-2 rounded-xl border"
                            type={showPassword.Password ? "text" : "password"}
                            name="Password"
                            placeholder="Password"
                            value={values.Password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <PasswordToggle
                            showPassword={showPassword.Password}
                            togglePasswordVisibility={() => togglePasswordVisibility("Password")}
                        />
                        {errors.Password && touched.Password ? (
                            <p className="text-red-500">{errors.Password}</p>
                        ) : null}
                    </div>
                    <div className="relative">
                        <input
                            className="w-full p-2 mt-2 rounded-xl border"
                            type={showPassword.ConfirmPassword ? "text" : "password"}
                            name="ConfirmPassword"
                            placeholder="Confirm Password"
                            value={values.ConfirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <PasswordToggle
                            showPassword={showPassword.ConfirmPassword}
                            togglePasswordVisibility={() => togglePasswordVisibility("ConfirmPassword")}
                        />
                        {errors.ConfirmPassword && touched.ConfirmPassword ? (
                            <p className="text-red-500">{errors.ConfirmPassword}</p>
                        ) : null}
                    </div>
                    <button
                    type="submit"
                        onClick={handleSubmit}
                        className="p-1 bg-black text-white rounded-xl w-full mt-4"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
            {showPasswordChangedModal && (
                <PasswordChangedModal onClose={() => {
                    setShowPasswordChangedModal(false);
                    onClose(); // Close the PasswordChangedModal and CreatePasswordModal
                }} />
            )}
        </div>
    );
};

export default CreatePasswordModal;
