import "./Button.css";
import { CgAdd } from "react-icons/cg";

interface Props {
  onClick: () => void;
}

const Button = ({ onClick }: Props) => {
  return <CgAdd onClick={onClick} className="btn-add" />;
};

export default Button;
