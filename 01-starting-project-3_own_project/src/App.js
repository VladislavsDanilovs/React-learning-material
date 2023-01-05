import React from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { useState } from "react";

const App = () => {
  const [userList, setUsersList] = useState([]);
  const saveUserList = (userName, userAge) => {
    setUsersList((prevData) => {
      return [
        ...prevData,
        { id: Math.random() * 10, name: userName, age: userAge },
      ];
    });
  };
  // We can use Fragment (wrapper) to minimize creation of div (avoiding div soup)
  // or if project not supporting this, you can use <React.Fragment>
  return (
    <>
      <AddUser onAddUser={saveUserList}></AddUser>
      <UsersList users={userList}></UsersList>
    </>
  );
};

export default App;
