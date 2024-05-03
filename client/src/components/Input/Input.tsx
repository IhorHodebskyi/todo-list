import { InputProps } from "../../types/types";

const Input = ({ labelTitle, type, name, value, onChange }: InputProps) => {
  return (
    <label className="label-title ">
      {labelTitle}:
      <input type={type} name={name} value={value} onChange={onChange} />
    </label>
  );
};

export default Input;
