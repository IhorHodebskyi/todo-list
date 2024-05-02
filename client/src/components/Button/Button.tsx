import { TypesButton } from "../../types/types";

const Button = ({ title, deleteAsync, isLoading }: TypesButton) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    deleteAsync();
  };

  return (
    <>
      <button type="button" onClick={handleClick} disabled={isLoading}>
        {title}
      </button>
    </>
  );
};

export default Button;
