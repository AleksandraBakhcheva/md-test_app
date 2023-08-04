import { TableProps } from "../../utils/types";
import data from "../../data.json";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export const TableDraft = (props: TableProps) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {data[props.index].header.map((title) => (
                <TableCell key={title.id}>{title.caption}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data[props.index].data.map((row, index) => (
              <TableRow key={index}>
                {row.map((item, indx) => (
                  <TableCell key={indx} component="th" scope="row">
                    {item.toString()}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
