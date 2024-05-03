import { TypesButton } from "../../types/types";

const Button = ({ title, onClick, disabled, type }: TypesButton) => {
  return (
    <>
      <button type={type} onClick={onClick} disabled={disabled}>
        {title}
      </button>
    </>
  );
};

export default Button;
