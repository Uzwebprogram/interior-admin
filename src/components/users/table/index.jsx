import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Put from "./../../../assets/image/icons-put.png"
import Delete from "./../../../assets/image/icons-delete.png"
import { useSelector } from 'react-redux';
export default function TableAdd({ onClickDelete , onClickPut }) {
  const ClientCommentGetState = useSelector(state => state.users.UsersGet?.data)
    const HeaderRows = [
      {
          id : 3, 
          title : "название компании"
      },
      {
          id : 5, 
          title : "страна",
      },
      {
          id : 3, 
          title : "Эл. адрес"
      },
      {
          id : 5, 
          title : "ИНН",
      },
      {
          id : 3, 
          title : "дата основания"
      },
        {
          id : 5, 
          title : "свидетельство",
        }
    ]
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {HeaderRows.map((elem , index) =>
                <>
            <TableCell align={elem.algin}  key={index}>{elem.title}</TableCell>
                </>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {ClientCommentGetState.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.companyname}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.country}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.email}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.inn}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.kpp}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.ogrn}
              </TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
