import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Import the FaCheckCircle icon from react-icons library

const PasswordChangedModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Overlay */}
            <div className="fixed inset-0 bg-gray-800 opacity-50"></div>

            <div className="bg-white  rounded-xl shadow-md z-10 text-center p-9 relative">
                {/* icon */} 
                <div className=" flex justify-center mb-4">
                    <FaCheckCircle size={48} color="#FFA500" />
                </div>

                <h2 className="text-xl text-orange-400 font-bold pb-4">Password Changed</h2>
                <p className="text-xl text-black font-semibold">
                    Your password has been successfully <br/> changed.
                </p>
                <button onClick={onClose} className="w-full mt-4 bg-black text-white rounded-xl py-2 px-4">
                    Back to Login
                </button>
            </div>
        </div>
    );
};

export default PasswordChangedModal;
