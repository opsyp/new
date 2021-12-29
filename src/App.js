import React, { useState } from "react";

import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {
  //First argument is the state variable that is declared,
  //second is the function that is called to update the state variable!
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, userage) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: username, age: userage, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
};

export default App;
