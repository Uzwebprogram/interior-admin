import React, { useEffect, useState } from 'react'
import HeaderTopCommon from '../../components/common/HeaderTop'
import { WrapperContainer } from '../../style-App'
import AdminAddForm from '../../components/admin_add';
import { adminDelete, adminGet } from '../../redux/admin_add/index';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import TableAdd from '../../components/admin_add/table';
function AddAdmin() {
  const adminGetState = useSelector(state => state.adminadd)
  const [open , setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(adminGet())
  }, [])
  
  const handleDelete = (e) => {
    dispatch(adminDelete(e.target.value))
  }
  if (adminGetState.AdminDelete.Success === true) {
      window.location.reload();
  }
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)
  return (
    <WrapperContainer>
      <HeaderTopCommon title={"Админ"} onClick={handleOpen} textBtn={"Админ добавить"}/>
      <AdminAddForm handleClose={handleClose} open={open}/>
      <TableAdd/>
    </WrapperContainer>
  )
}
export default AddAdmin