import { PropsSelect } from "../../types/types";

const Select: React.FC<PropsSelect> = ({ isValue, handelCheng, isLoading }) => {
  return (
    <select value={isValue} onChange={handelCheng} disabled={isLoading}>
      <option value="pending">pending</option>
      <option value="process">process</option>
      <option value="completed">completed</option>
    </select>
  );
};

export default Select;
