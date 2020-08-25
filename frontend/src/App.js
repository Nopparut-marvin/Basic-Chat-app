import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login";
import Chat from "./components/Chat";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login}></Route>
      <Route path="/chat" component={Chat}></Route>
    </BrowserRouter>
  );
};
export default App;
