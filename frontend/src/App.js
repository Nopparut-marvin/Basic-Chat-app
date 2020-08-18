import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import login from "./components/login";
const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={login}></Route>
    </BrowserRouter>
  );
};
export default App;
