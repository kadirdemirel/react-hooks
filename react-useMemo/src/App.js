import "./styles.css";
import React, { useMemo } from "react";

const users = [
  { id: "a", name: "Robin" },
  { id: "b", name: "Dennis" }
];
export default function App() {
  const [text, setText] = React.useState("");
  const [search, setSearch] = React.useState("");

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleSearch = () => {
    setSearch(text);
  };

  const filteredUsers = useMemo(
    () =>
      users.filter((user) => {
        console.log("Filter function is running ...");
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search]
  );
  console.log(search);
  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleSearch}>
        Search
      </button>

      <List list={filteredUsers} />
    </div>
  );
}
const List = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const ListItem = ({ item }) => {
  return <li>{item.name}</li>;
};
