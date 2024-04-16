import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import { Provider } from "mobx-react";
import authStore from "./store";

const App = () => {
  return (
    <Provider authStore={authStore}>
      <Routes>

        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </Provider>
  );
};

export default App;
