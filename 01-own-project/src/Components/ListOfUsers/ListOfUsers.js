import styles from "./ListOfUsers.module.css";

const ListOfUsers = (props) => {
  const result = props.users.map((user) => (
    <div className={styles["form-control"]}>
      <input
        type="text"
        disabled
        value={user.userName + " (" + user.age + " years old)"}
      />
    </div>
  ));
  return <div>{result}</div>;
};

export default ListOfUsers;
