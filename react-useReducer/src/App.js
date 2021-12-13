import { useReducer } from "react";
import { reducer } from "./reducer";
import "./styles.css";

export default function App() {
  const initialState = {
    data: "",
    loading: false,
    error: ""
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, loading, error } = state;
  const fetchDog = () => {
    dispatch({ type: "FETCH_START" });

    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.message });
      })
      .catch(() => {
        dispatch({ type: "FETCH_ERROR" });
      });
  };
  return (
    <div className="App">
      <button onClick={fetchDog} disabled={loading}>
        Fetch Dog
      </button>
      {data && (
        <div>
          <img src={data} alt="Random Dog" />
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}
