import React, { useEffect, useState } from 'react'
import HeaderTopCommon from '../../components/common/HeaderTop'
import { WrapperContainer } from '../../style-App'
import { useDispatch, useSelector } from 'react-redux';
import UsersComponent from '../../components/users';
import { UsersGet } from '../../redux/users';

function Users() {
  const [open , setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(UsersGet())
  }, [])
  
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)
  return (
    <WrapperContainer>
      <HeaderTopCommon title={"Зарегистрированные компании"} onClick={handleOpen}  style={{backgroundColor: "white"}}/>
      <UsersComponent handleClose={handleClose} open={open}/>
    </WrapperContainer>
  )
}
export default Users