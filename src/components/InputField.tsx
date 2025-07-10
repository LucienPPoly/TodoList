import React, { type FormEvent } from "react";
import "./InputField.css";
import { CgAdd } from "react-icons/cg";

interface Props {
  placeholder: string;
  onSumbit: () => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

const InputField = ({ placeholder, onSumbit, inputRef }: Props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSumbit();
      }}
    >
      <input
        type="text"
        placeholder={placeholder}
        className="input-field"
        ref={inputRef}
      ></input>
      <CgAdd onClick={onSumbit} className="btn-add" />
    </form>
  );
};

export default InputField;
