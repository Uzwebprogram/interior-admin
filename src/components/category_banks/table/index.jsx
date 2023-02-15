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
export default function TableAdd({ onClickDelete , onClickPut , onClickAddAbout }) {
  const ClientCommentGetState = useSelector(state => state.banks.BanksGet?.data)
   const DateFormat = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join("/");
  };
    const HeaderRows = [

        {
            id : 2, 
            title : "название компании"
        },
        {
          id : 3, 
          title : "ИНН"
      },
      {
        id : 3, 
        title : "свидетельство"
    },
    {
      id : 3, 
      title : "дата основания "
  },
  {
    id : 3, 
    title : "страна"
},
{
  id : 3, 
  title : "дата"
},
{
  id : 3, 
  title : "информация о рейтинге"
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
              key={row.bank_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {row.companyname}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.inn}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.ogrn}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.kpp}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.country}
              </TableCell>
              <TableCell component="th" scope="row">
                {DateFormat(row.date)}
              </TableCell>
              <TableCell component="th" scope="row">
              <button style={{background : "green" , color:"white", padding:"10px", border : "none" , cursor :"pointer"}} id={row.bank_id} onClick={onClickAddAbout}>	информация о рейтинге Добавить</button>
              </TableCell>
              <TableCell align="right"><button style={{background : "white" , border : "none" , cursor :"pointer"}} id={row.bank_id} onClick={onClickPut}><img id={row.bank_id} src={Put} width={25} height={25} alt="" /></button> <button style={{background : "white" , border : "none" , cursor :"pointer"}} id={row.bank_id}  onClick={onClickDelete}><img id={row.bank_id} src={Delete} width={25} height={25} alt="" /></button></TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
