import { useState } from "react";
import { useDispatch } from "react-redux";
import { DeleteVacancy, GetVacancy } from "../../redux/vacancy/index";
import Delete from "./delete";
import AdminAddForm from "./post";
import Put from "./put";
import TableAdd from "./table";
function VacancyComponent({ open, handleClose }) {
  const dispatch = useDispatch();
  const [adminId, setAdminId] = useState();
  const [openDelete, setOpenDelete] = useState(false);
  const handleCloseDelete = () => setOpenDelete(false);
  const handleDeleteModal = (e) => {
    setAdminId(e.target.id);
    setOpenDelete(true);
  };
  const [openPut, setOpenPut] = useState(false);
  const handleClosePut = () => setOpenPut(false);
  const handlePutModal = (e) => {
    setAdminId(e.target.id);
    setOpenPut(true);
  };
  const HandleDelete = async () => {
    await dispatch(DeleteVacancy(adminId));
    dispatch(GetVacancy());
    handleCloseDelete();
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

export default VacancyComponent;
