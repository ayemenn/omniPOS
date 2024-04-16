import React, { useState } from "react";


const ForgotPasswordModal = ({ onClose, openCreatePasswordModal, email }) => {
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationError, setVerificationError] = useState(false);

  const correctVerificationCode = ""; // testing only

  const handleVerify = () => {
    if (verificationCode === correctVerificationCode) {
      onClose();
      openCreatePasswordModal();
      setVerificationError(false); // Clear the error when verification is successful
    } else {
      setVerificationError(true); // Display error if verification code is incorrect
    }
  };

  const handleResendCode = () => {
    if (email) {
      // logic here to resend the verification code to the entered email
      console.log(`Resending verification code to ${email}`);
      setVerificationCode(""); // Clear the verification code when resending
      setVerificationError(false); // Clear the error when resending
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-gray-800 opacity-50"></div>

      {/* Modal Content */}
      <div className="bg-white p-4 rounded-xl shadow-md z-10 relative items-start justify-between">
        <div className="flex justify-between space-x-8 mb-4">
          <h2 className="text-xl text-orange-400 font-bold">POSy</h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition duration-300"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <h2 className="font-bold text-xl">Enter Verification code</h2>
        <p className="mb-4">We have sent a verification code to <br/>{email}</p>
        <div className="flex space-x-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <input
              key={index}
              className={`border rounded-md p-2 w-12 text-center ${
                verificationError ? "border-red-500" : ""
              }`}
              type="text" 
              maxLength={1}
              value={verificationCode[index] || ""}
              onChange={(e) => {
                const newCode = [...verificationCode];
                newCode[index] = e.target.value;
                setVerificationCode(newCode);
                setVerificationError(false); // Clear error when input changes
              }}
            />
          ))}
        </div>
        {verificationError && (
          <p className="text-red-500 text-sm mt-1">
            Incorrect verification code. Please try again.
          </p>
        )}
        <button onClick={handleResendCode} className="mt-2 font-bold text-orange-400 text-sm">
          Send the code again
        </button>
        <button onClick={handleVerify} className="p-1 bg-black text-white rounded-xl w-full mt-4">
          Verify
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
