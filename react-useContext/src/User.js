import React, { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
const User = ({ user, changeColor }) => {
  const change = useContext(UserContext);

  return (
    <div style={{ background: user.color }}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      Color:{" "}
      <input
        value={user.color}
        onChange={(e) => change.changeColor(user.id, e.target.value)}
      />
    </div>
  );
};

export default User;
