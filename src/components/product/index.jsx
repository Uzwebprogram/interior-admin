import { useState } from "react";
import { useDispatch } from "react-redux";
import { GetProducts, DeleteProducts } from "../../redux/products";
import Delete from "./delete";
import DeleteImage from "./delete_images";
import DeleteImages from "./delete_images";
import AdminAddForm from "./post";
import ImagesUpload from "./postImage";
import Put from "./put";
import TableAdd from "./table";
function ProductComponent({ open, handleClose }) {
  const dispatch = useDispatch();
  const [adminId, setAdminId] = useState();
  const [openDelete, setOpenDelete] = useState(false);
  const [openImagesAdd , setOpenImagesAdd] = useState(false);
  const [openImagesDelete, setOpenImagesDelete] = useState(false);
  const handleCloseDelete = () => setOpenDelete(false);
  const HandleCloseImages = () => setOpenImagesAdd(false)
  const HandleCloseDeletImages = () => setOpenImagesDelete(false)
  const handleDeleteModal = (e) => {
    setAdminId(e.target.id);
    setOpenDelete(true);
  };
  const handleImagesModal = (e) => {
    setAdminId(e.target.id);
    setOpenImagesAdd(true);
  };
  const handleImagesDelete = (e) => {
    setAdminId(e.target.id);
    setOpenImagesDelete(true);
  };
  const [openPut, setOpenPut] = useState(false);
  const handleClosePut = () => setOpenPut(false);
  const handlePutModal = (e) => {
    setAdminId(e.target.id);
    setOpenPut(true);
  };
  const HandleDelete = async () => {
    await dispatch(DeleteProducts(adminId));
    dispatch(GetProducts());
    handleCloseDelete();
  };

  return (
    <>
      <AdminAddForm Open={open} HandleClose={handleClose} />
      <TableAdd onClickDelete={handleDeleteModal} onClickImages={handleImagesModal} onClickPut={handlePutModal} handleImagesDelete={handleImagesDelete} />
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
      <ImagesUpload
        handleImagesAdd={adminId}
        openAddImage={openImagesAdd}
        handleImagesClose={HandleCloseImages}
      />
      <DeleteImage
      openDeleteImages={openImagesDelete}
        handleImagesDelete={adminId}
        HandleCloseDeletImages={HandleCloseDeletImages}

      />
    </>
  );
}

export default ProductComponent;
