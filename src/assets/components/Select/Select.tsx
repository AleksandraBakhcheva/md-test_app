import { SelectProps } from "../../utils/types";
import { reportCategories } from "../../utils/other";

export const Select = (props: SelectProps) => {
  return (
    <>
      <select
        name="statistics"
        onChange={(evt) => {
          props.setIndex(evt.target.value);
        }}
      >
        {reportCategories.map((category, index) => {
          return (
            <option value={index} key={index}>
              {category}
            </option>
          );
        })}
      </select>
    </>
  );
};
