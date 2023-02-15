import React, { useEffect, useState } from "react";
import HeaderTopCommon from "../../components/common/HeaderTop";
import { WrapperContainer } from "../../style-App";
import { useDispatch, useSelector } from "react-redux";
import { RenkingiGet } from "../../redux/renking";
import RenkingComponent from "../../components/renkingi";
import { AboutGet } from "../../redux/raiting_about";
function Renkingi() {
  const [open, setOpen] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [putCategory, setPutCategory] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(RenkingiGet());
  }, []);
  useEffect(() => {
    dispatch(AboutGet());
  }, []);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const handleClose2 = () => setOpen3(false);
  const handleClose3 = () => setOpen4(false);
  const renking = useSelector((state) => state.aboutreking.AboutGet.data);
  const HandleChange = (e) => {
    setPutCategory(e.target.value);
    setOpen3(true);
  };
  const HandleChange2 = (e) => {
    setPutCategory(e.target.value);
    setOpen4(true);
  };
  return (
    <WrapperContainer>
      <HeaderTopCommon
        title={"Рэнкинги "}
        onClick={handleOpen}
        textBtn={"Рэнкинги добавить"}
        isInput6={false}
        style6={{ padding: "15px" }}
        onChange5={HandleChange}
        optionMap5={renking}
        isInput7={false}
        style7={{ padding: "15px" }}
        onChange6={HandleChange2}
        optionMap6={renking}
      />
      <RenkingComponent handleClose={handleClose}
      handleClose2={handleClose2}
      handleClose3={handleClose3}
      open3={open3}
      open4={open4}
              idCategory={putCategory}
              idCategorydelete={putCategory}
      open={open} />
    </WrapperContainer>
  );
}
export default Renkingi;
