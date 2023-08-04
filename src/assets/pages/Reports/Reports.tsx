import { useState } from "react";
import { Select } from "../../components/Select/Select";
import { TableDraft } from "../../components/TableDraft/TableDraft";

export const Reports = () => {
  const [selectIndex, setSelectIndex] = useState<string>("");

  return (
    <div>
      <Select setIndex={setSelectIndex} />
      <TableDraft index={+selectIndex} />
    </div>
  );
};
