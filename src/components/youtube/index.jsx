import { useState } from "react";
import { useDispatch } from "react-redux";
import { adminDelete } from "../../redux/admin_add";
import { DeleteYoutube, PutYoutube } from "../../redux/youtube";
import Delete from "./delete";
import AdminAddForm from "./post";
import Put from "./put";
import TableAdd from "./table";
function YoutubeComponent({ open, handleClose }) {
  const dispatch = useDispatch();
  const [adminId, setAdminId] = useState();
  const [openDelete, setOpenDelete] = useState(false);
  const handleCloseDelete = () => setOpenDelete(false);
  const handleDeleteModal = (e) => {
    setAdminId(e.target.id);
    console.log(e.target.id);
    setOpenDelete(true);
  };
  console.log(adminId);
  const [openPut, setOpenPut] = useState(false);
  const handleClosePut = () => setOpenPut(false);
  const handlePutModal = (e) => {
    setAdminId(e.target.id);
    setOpenPut(true);
  };
  const HandleDelete = () => {
    dispatch(DeleteYoutube(adminId));
  };

  return (
    <>
      <AdminAddForm Open={open} HandleClose={handleClose} />
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
  );
}

export default YoutubeComponent;
