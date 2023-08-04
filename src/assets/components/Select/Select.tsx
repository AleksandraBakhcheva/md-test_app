import "./Select.scss";
import { SelectProps } from "../../utils/types";
import { reportCategories } from "../../utils/other";

export const Select = (props: SelectProps) => {
  return (
    <>
      <select
        name="reports"
        onChange={(event) => {
          props.setIndex(event.target.value);
        }}
      >
        {reportCategories.map((category, index) => {
          return (
            <option key={index} value={index}>
              {category}
            </option>
          );
        })}
      </select>
    </>
  );
};
