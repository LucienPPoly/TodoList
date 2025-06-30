import React from "react";
import "./InputField.css";
import { CgAdd } from "react-icons/cg";

interface Props {
  placeholder: string;
  onSumbit: () => void;
}

const InputField = ({ placeholder, onSumbit }: Props) => {
  return (
    <form>
      <input
        type="text"
        placeholder={placeholder}
        className="input-field"
      ></input>
      <CgAdd onClick={onSumbit} className="btn-add" />
    </form>
  );
};

export default InputField;
