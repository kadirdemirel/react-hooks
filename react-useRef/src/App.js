import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const inputRef = useRef();
  const divRef = useRef();
  const [, setDummy] = useState({});
  const value = useRef(0);
  console.log(value);
  const onFocusButton = () => {
    inputRef.current.focus();
  };

  const onDivBorder = () => {
    divRef.current.style.border = "1px solid black";
  };

  const onIncrease = () => {
    setDummy({});
    value.current += 1;
  };

  useEffect(() => {
    console.log(inputRef.current);
  });

  return (
    <div ref={divRef} className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input ref={inputRef} placeholder="name" />
      <button onClick={onFocusButton}>Input'a focus ol</button>
      <button onClick={onDivBorder}>Div'e border ekle</button>
      <button onClick={onIncrease}>Increase Ref value</button>
    </div>
  );
}
