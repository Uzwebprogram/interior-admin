import { useState } from "react";
import { useDispatch } from "react-redux";
import { BanksDelete, BanksGet } from "../../redux/banks";
import { VoprosDelete, VoprosGet } from "../../redux/vopros";
import AboutPut from "./about_put";
import BanksAddForm from "./banks_post";
import CategoryPut from "./category_put";
import Delete from "./delete";
import AboutDelete from "./delete_about";
import DeleteBanks from "./delete_banks";
import AdminAddForm from "./post";
import BankAddAboutForm from "./post_bank_about";
import Put from "./put";
import TableAdd from "./table";
function CategoryBanksComponent({
  open,
  handleClose,
  open2,
  handleClose2,
  open3,
  handleClose3,
  idCategory,
  idCategorydelete,
  handleClose4,
  open4,
  open5,
  handleClose5,
  idCategorydelete5,
  open6,
  handleClose6,
}) {
  const dispatch = useDispatch();
  const [adminId, setAdminId] = useState();
  const [openDelete, setOpenDelete] = useState(false);
  const [openAddAbout, setOpenAddAbout] = useState(false);
  const handleCloseDelete = () => setOpenDelete(false);
  const handleCloseAddAbout = () => setOpenAddAbout(false);
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
  const onClickAddAbout = (e) => {
    setAdminId(e.target.id);
    setOpenAddAbout(true);
  };

  const HandleDelete = async () => {
    await dispatch(BanksDelete(adminId));
    dispatch(BanksGet());
    handleCloseDelete();
  };
  return (
    <>
      <AdminAddForm Open={open} HandleClose={handleClose} />
      <BanksAddForm Open={open2} HandleClose={handleClose2} />
      <TableAdd
        onClickDelete={handleDeleteModal}
        onClickPut={handlePutModal}
        onClickAddAbout={onClickAddAbout}
      />
      <Delete
        HandleId={idCategorydelete}
        openDelete={open4}
        handleCloseDelete={handleClose4}
      />
      <Put
        HandlePut={adminId}
        openPut={openPut}
        handleClosePut={handleClosePut}
      />
      <CategoryPut
        HandlePut={idCategory}
        openPut={open3}
        handleClosePut={handleClose3}
      />
      <DeleteBanks
        openDelete={openDelete}
        handleCloseDelete={handleCloseDelete}
        HandleDelete={HandleDelete}
      />
      <BankAddAboutForm
        AboutId={adminId}
        Open={openAddAbout}
        HandleClose={handleCloseAddAbout}
      />
      <AboutDelete
        HandleId={idCategorydelete5}
        openDelete={open5}
        handleCloseDelete={handleClose5}
      />
      <AboutPut
        HandlePut={idCategory}
        openPut={open6}
        handleClosePut={handleClose6}
      />
    </>
  );
}

export default CategoryBanksComponent;
