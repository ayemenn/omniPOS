import React from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

const PasswordToggle = ({ showPassword, togglePasswordVisibility }) => {
    return (
        <div className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer text-gray-500">
            {showPassword
                ? <AiOutlineEyeInvisible onClick={togglePasswordVisibility} />
                : <AiOutlineEye onClick={togglePasswordVisibility} />}
        </div>
    );
};

export default PasswordToggle;
