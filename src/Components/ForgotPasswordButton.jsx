import React, { useState } from "react";

import ForgotPasswordModal from "./ForgotPasswordModal";
import CreatePasswordModal from "./CreatePasswordModal";
import { Link } from "react-router-dom";

const ForgotPasswordButton = ({ values }) => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showCreatePasswordModal, setShowCreatePasswordModal] = useState(false);

  const openModal = () => {
    if (values.emailusername && !isValidEmail(values.emailusername)) {
      setEmailError("Please enter a valid email");
    } else if (values.emailusername) {
      setEmail(values.emailusername);
      setShowModal(true);
      setEmailError(""); // Clear the error message if no issues
    } else {
      setEmailError("Please enter your email to reset password");
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const closeModal = () => {
    setShowModal(false);
    setEmailError(""); // Clear the email error when modal is closed
  };

  const openCreatePasswordModal = () => {
    setShowCreatePasswordModal(true);
  };

  const closeCreatePasswordModal = () => {
    setShowCreatePasswordModal(false);
  };

  return (
    <div className=" ">
      <div>
        <button className="text-black font-semibold" onClick={openModal}>
          Forgot Password?
        </button>
        {emailError && <p className="text-red-500">{emailError}</p>}
      </div>
      {showModal && (
        <ForgotPasswordModal
          onClose={closeModal}
          openCreatePasswordModal={openCreatePasswordModal}
          email={email}
        />
      )}
      {showCreatePasswordModal && (
        <CreatePasswordModal onClose={closeCreatePasswordModal} />
      )}
    </div>
  );
};

export default ForgotPasswordButton;