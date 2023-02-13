import React from "react";
import UserProviderContext from "./store/userContext";
import LoginForm from "./component/LoginForm";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "./component/Nav";

export default function App() {
  return (
    <div className="App">
      <UserProviderContext>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </BrowserRouter>
      </UserProviderContext>
    </div>
  );
}

// export default App;
