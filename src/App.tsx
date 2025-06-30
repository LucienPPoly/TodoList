import { createContext, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import InputField from "./components/InputField";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <InputField
        placeholder="TODO"
        onSumbit={() => console.log()}
      ></InputField>

      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
