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
  const adminGetState = useSelector(state => state.adminadd)
    const rows = adminGetState.userGet?.data
    const HeaderRows = [
        {
            id : 1, 
            title : "имя"
        },
        {
            id : 2, 
            title : "Ел.почта"
        },
        {
          id : 3, 
          title : "Удалить",
          algin : "right"
        }
    ]
  return (
    <TableContainer style={{backgroundColor:"#2F66B8"}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {HeaderRows.map((elem , index) =>
                <>
            <TableCell style={{color:"white"}} align={elem.algin}  key={index}>{elem.title}</TableCell>
                </>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell style={{color:"white"}} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{color:"white"}} component="th" scope="row">
                {row.email}
              </TableCell>
              <TableCell align="right"><button style={{background : "transparent" , border : "none" , cursor :"pointer"}} id={row.id}  onClick={onClickDelete}><img id={row.id} src={Delete} width={25} height={25} alt="" /></button></TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
