import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Put from "./../../../assets/image/icons-put.png";
import Delete from "./../../../assets/image/icons-delete.png";
import { useSelector } from "react-redux";
export default function TableAdd({ onClickDelete, onClickPut }) {
  const CalculateGetState = useSelector(
    (state) => state.calculate.getCalculate?.Data
  );
  const HeaderRows = [
    {
      id: 1,
      title: "имя",
    },

    {
      id: 2,
      title: "телефонный номер",
    },
    {
      id: 3,
      title: "номер",
    },
    {
      id: 4,
      title: "жилой дом",
    },
    {
      id: 5,
      title: "площадь комнаты",
    },
    {
      id: 6,
      title: "комментарий",
    },
    {
      id: 7,
      title: "время/день",
    },
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {HeaderRows.map((elem, index) => (
              <>
                <TableCell
                  style={{ textAlign: "center" }}
                  align={elem.algin}
                  key={index}
                >
                  {elem.title}
                </TableCell>
              </>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {CalculateGetState.map((row) => (
            <TableRow
              key={row.partners_id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                style={{ textAlign: "center" }}
                component="th"
                scope="row"
              >
                {row.calculate_name}
              </TableCell>
              <TableCell
                style={{ textAlign: "center" }}
                component="th"
                scope="row"
              >
                {row.phone_number}
              </TableCell>
              <TableCell
                style={{ textAlign: "center" }}
                component="th"
                scope="row"
              >
                {row.room_type}
              </TableCell>
              <TableCell
                style={{ textAlign: "center" }}
                component="th"
                scope="row"
              >
                {row.house_type}
              </TableCell>
              <TableCell
                style={{ textAlign: "center" }}
                component="th"
                scope="row"
              >
                {row.room_area}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.coment}
              </TableCell>
              <TableCell
                style={{ textAlign: "center" }}
                component="th"
                scope="row"
              >
                {row.date}
              </TableCell>
              {/* <TableCell align="right">
                <button
                  style={{
                    background: "white",
                    border: "none",
                    cursor: "pointer",
                  }}
                  id={row.partners_id}
                  onClick={onClickPut}
                >
                  <img
                    id={row.partners_id}
                    src={Put}
                    width={25}
                    height={25}
                    alt=""
                  />
                </button>
                <button
                  style={{
                    background: "white",
                    border: "none",
                    cursor: "pointer",
                  }}
                  id={row.partners_id}
                  onClick={onClickDelete}
                >
                  <img
                    id={row.partners_id}
                    src={Delete}
                    width={25}
                    height={25}
                    alt=""
                  />
                </button>
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
