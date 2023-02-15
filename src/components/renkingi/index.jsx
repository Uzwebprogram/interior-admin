/* eslint-disable react/jsx-pascal-case */

import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { RenkingiDelete, RenkingiGet } from '../../redux/renking';
import About_Post from './about_post';
import AboutPutComponent from './about_put';
import Delete from './delete';
import About_Delete from './delete_about';
import AdminAddForm from './post';
import Put from './put';
import TableAdd from './table';
function RenkingiComponent({open , handleClose , idCategory , idCategorydelete , handleClose2 , handleClose3 , open3 , open4}) {
  const dispatch = useDispatch();
  const [adminId , setAdminId] = useState();
  const [openDelete , setOpenDelete] = useState(false);
  const [openAddAbout, setOpenAddAbout] = useState(false);
  const handleCloseDelete = () => setOpenDelete(false)
  const handleCloseAddAbout = () => setOpenAddAbout(false);

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
  const onClickAddAbout = (e) => {
    setAdminId(e.target.id);
    setOpenAddAbout(true);
  };

  const HandleDelete =  async() =>{
    await dispatch(RenkingiDelete(adminId))
    dispatch(RenkingiGet())
    handleCloseDelete()
  }

  return (
      <>
      <AdminAddForm Open={open} HandleClose={handleClose}/>
        
      <TableAdd onClickDelete={handleDeleteModal} onClickPut={handlePutModal} onClickAddAbout={onClickAddAbout} />
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
<About_Delete
        HandleId={idCategorydelete}
        openDelete={open4}
        handleCloseDelete={handleClose3}
/>
<AboutPutComponent
        HandlePut={idCategory}
        openPut={open3}
        handleClosePut={handleClose2}
/>
<About_Post
       AboutId={adminId}
       Open={openAddAbout}
       HandleClose={handleCloseAddAbout}
/>
      </>
  )
}

export default RenkingiComponent