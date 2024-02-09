import { useDispatch, useSelector } from 'react-redux'
import './App.css'

function App() {
  const {custom} = useSelector(s => s);
  const dispatch = useDispatch()
  return (
    <>
      <h1 style={{ color: "red" }}>{JSON.stringify(custom.c)}</h1>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          dispatch({ type: "IncrementByValue",payload:5});
        }}
      >
        Add 5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        Sub
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrementByValue",payload:5 });
        }}
      >
        Sub 5
      </button>
    </>
  );
}

export default App
