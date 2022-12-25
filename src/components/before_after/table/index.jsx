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
  const SingleGetState = useSelector(
    (state) => state.single.getSingle?.Data
  );
  const HeaderRows = [
    {
      id: 1,
      title: "kартинка До",
    },
    {
      id: 2,
      title: "kартинка После",
    },
    {
      id: 3,
      title: "имя",
    },
    {
      id: 4,
      title: "описание",
    },
    {
      id: 4,
      title: "Удалить и изминеть",
      algin: "right",
    },
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {HeaderRows.map((elem, index) => (
              <>
                <TableCell align={elem.algin} key={index}>
                  {elem.title}
                </TableCell>
              </>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {SingleGetState.map((row) => (
            <TableRow
              key={row.single_id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img src={row.single_img1} width={100} height={60} alt="" />
              </TableCell>
              <TableCell component="th" scope="row">
                <img src={row.single_img2} width={100} height={60} alt="" />
              </TableCell>
              <TableCell component="th" scope="row">
                {row.single_title_ru}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.single_description_ru}
              </TableCell>
              <TableCell align="right">
                <button
                  style={{
                    background: "white",
                    border: "none",
                    cursor: "pointer",
                  }}
                  id={row.single_id}
                  onClick={onClickPut}
                >
                  <img
                    id={row.single_id}
                    src={Put}
                    width={25}
                    height={25}
                    alt=""
                  />
                </button>{" "}
                <button
                  style={{
                    background: "white",
                    border: "none",
                    cursor: "pointer",
                  }}
                  id={row.single_id}
                  onClick={onClickDelete}
                >
                  <img
                    id={row.single_id}
                    src={Delete}
                    width={25}
                    height={25}
                    alt=""
                  />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
