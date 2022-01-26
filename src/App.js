import React from "react";

import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyles from "./components/styles/GlobalStyles";

function App() {
  return (
    <div>
      <Navbar />
      <GlobalStyles />
      <HomePage />
    </div>
  );
}

export default App;
