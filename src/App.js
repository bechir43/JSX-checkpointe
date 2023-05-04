import React from "react";
import "./App.css";
import FullName from "./components/profile/FullName";
import ProfilePhoto from "./components/profile/ProfilePhoto";
import Address from "./components/profile/Address";


function App() {
  return (
    <div className="Card">
      <FullName />
      <ProfilePhoto />
      <Address />
    </div>
  );
}

export default App;
