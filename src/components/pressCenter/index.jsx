
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { PressCenterDelete, PressCenterGet } from '../../redux/press-center';
import Delete from './delete';
import AdminAddForm from './post';
import Put from './put';
import TableAdd from './table';
function PressCenterComponent({open , handleClose}) {
  const dispatch = useDispatch();
  const [adminId , setAdminId] = useState();
  const [openDelete , setOpenDelete] = useState(false);
  const handleCloseDelete = () => setOpenDelete(false)
  const handleDeleteModal = (e) => {
   setAdminId(e.target.id)
   setOpenDelete(true)
  }
  const [openPut , setOpenPut] = useState(false);
  const handleClosePut = () => setOpenPut(false)
  const handlePutModal = (e) => {
   setAdminId(e.target.id)
   setOpenPut(true)
  }
  const HandleDelete =  async() =>{
    await dispatch(PressCenterDelete(adminId))
    dispatch(PressCenterGet())
    handleCloseDelete()
  }

  return (
      <>
      <AdminAddForm Open={open} HandleClose={handleClose}/>
      <TableAdd onClickDelete={handleDeleteModal} onClickPut={handlePutModal} />
      <Delete
      HandleDelete={HandleDelete}
      openDelete={openDelete}
      handleCloseDelete={handleCloseDelete}
/>
<Put
      HandlePut={adminId}
      openPut={openPut}
      handleClosePut={handleClosePut}
/>
      </>
  )
}

export default PressCenterComponent