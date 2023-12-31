import "./TableDraft.scss";
import data from "../../data.json";
import { TableProps } from "../../utils/types";
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
      <TableContainer sx={{ maxWidth: 900 }} component={Paper}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {data[props.index].header.map((title) => (
                <TableCell
                  sx={{
                    backgroundColor: "success.main",
                    color: "white",
                  }}
                  key={title.id}
                  align="center"
                >
                  {title.caption}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data[props.index].data.map((row, index) => (
              <TableRow key={index}>
                {row.map((item: any, indx) => (
                  <TableCell
                    key={indx}
                    component="th"
                    scope="row"
                    align={
                      typeof item === "number"
                        ? "right"
                        : typeof item === "boolean"
                        ? "center"
                        : "left"
                    }
                  >
                    {item.hasOwnProperty("d") ? (
                      <span className="d-property">{item.d}</span>
                    ) : (
                      item.toString()
                    )}
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
