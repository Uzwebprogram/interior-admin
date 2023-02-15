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
  const ClientCommentGetState = useSelector(state => state.infarmatsia.InfarmatsiaGet?.data)
    const HeaderRows = [
        {
            id : 1, 
            title : "Картинка"
        },
        {
            id : 2, 
            title : "названия"
        },
        {
          id : 5, 
          title : "Удалить и изминеть",
          algin : "right"
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
                
                <a href={row.pdf} target="_blank"><img src={row.pdf} width={60} height={60}  alt="" /></a>
              </TableCell>
              <TableCell component="th" scope="row">
                {row.title_ru}
              </TableCell>

              <TableCell align="right"><button style={{background : "white" , border : "none" , cursor :"pointer"}} id={row.id} onClick={onClickPut}><img id={row.id} src={Put} width={25} height={25} alt="" /></button> <button style={{background : "white" , border : "none" , cursor :"pointer"}} id={row.id}  onClick={onClickDelete}><img id={row.id} src={Delete} width={25} height={25} alt="" /></button></TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
