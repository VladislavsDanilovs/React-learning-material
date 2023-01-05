import { useState } from "react";
import "./App.css";
import ListOfUsers from "./Components/ListOfUsers/ListOfUsers";
import UserForm from "./Components/UserForm/UserForm";

const initialData = [
  {
    id: "e1",
    userName: "Max",
    age: 22,
  },
];

const App = () => {
  const [enteredData, setEnteredData] = useState(initialData);
  const saveUserDataHandler = (user) => {
    setEnteredData((prevData) => {
      return [user, ...prevData];
    });
  };

  return (
    <div>
      <div className="App">
        <UserForm onSaveUserData={saveUserDataHandler}></UserForm>
      </div>
      <div className="App">
        <ListOfUsers users={enteredData}></ListOfUsers>
      </div>
    </div>
  );
};

export default App;
