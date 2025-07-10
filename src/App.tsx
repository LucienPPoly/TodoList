import { createContext, useRef, useState, type FormEvent } from "react";
import "./App.css";
import Button from "./components/Button";
import InputField from "./components/InputField";
import styled from "styled-components";
import { CgRadioCheck } from "react-icons/cg";
import { CgCheckO } from "react-icons/cg";

const ListElement = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 15px;
`;

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [dones, setDones] = useState<string[]>([]);
  const [showDone, setShowDone] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);

  function updateShow() {
    setShowDone(!showDone);
  }

  function addNewTask(task: string) {
    if (nameRef.current !== null) {
      console.log(nameRef.current.value);
      setTodos([...todos, task]);
    }
  }

  function taskDone(task: string) {
    setDones([...dones, task]);
    setTodos(todos.filter((elem) => elem !== task));
  }

  return (
    <>
      <InputField
        placeholder="TODO"
        onSumbit={() => {
          if (nameRef.current && nameRef.current.value) {
            //if not null
            addNewTask(nameRef.current.value);
            nameRef.current.value = "";
          }
        }}
        inputRef={nameRef}
      ></InputField>

      <ul className="todo">
        {todos.map((task, index) => {
          return (
            <ListElement key={index} onClick={() => taskDone(task)}>
              <CgRadioCheck className="radio"></CgRadioCheck>
              {task}
            </ListElement>
          );
        })}
      </ul>

      <button className="show-done" onClick={updateShow}>
        {showDone ? "Hide" : "Show"}
      </button>

      {showDone && (
        <ul className="done">
          {dones.map((task, index) => {
            return (
              <ListElement key={index}>
                <CgCheckO />
                {task}
              </ListElement>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default App;
