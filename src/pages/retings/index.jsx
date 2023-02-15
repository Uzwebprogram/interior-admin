import React, { useEffect, useState } from "react";
import HeaderTopCommon from "../../components/common/HeaderTop";
import { WrapperContainer } from "../../style-App";
// import { adminGet } from '../../redux/admin_add/index';
// import { useDispatch } from 'react-redux';
import { useDispatch, useSelector } from "react-redux";
import CategoryBanksComponent from "../../components/category_banks/index";
import { CategoriesGet } from "../../redux/category";
import { BanksGet } from "../../redux/banks";
import { RaitingGet } from "../../redux/raiting";

function Reting() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [putCategory , setPutCategory] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CategoriesGet());
  }, []);
  useEffect(() => {
    dispatch(BanksGet());
  }, []);
  useEffect(() => {
    dispatch(RaitingGet());
  }, []);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const handleClose2 = () => setOpen2(false);
  const handleClose3 = () => setOpen3(false);
  const handleClose4 = () => setOpen4(false);
  const handleClose5 = () => setOpen5(false);
  const handleClose6 = () => setOpen6(false);
  const handleOpen2 = () => setOpen2(true);
  const categories = useSelector(state => state.categories.CategoriesGet.data)
  const raiting_about = useSelector(state => state.ratingabout.RaitingGet.data)
  const HandleChange = (e) => {
    setPutCategory(e.target.value)
    setOpen3(true)
  }
  const HandleChange2 = (e) => {
    setPutCategory(e.target.value)
    setOpen4(true)
  }
  const HandleChange3 = (e) => {
    setPutCategory(e.target.value)
    setOpen5(true)
  }
  const HandleChange4 = (e) => {
    setPutCategory(e.target.value)
    setOpen6(true)
  }
  return (
    <WrapperContainer>
      <HeaderTopCommon
        title={"рейтинги"}
        onClick2={handleOpen2}
        onClick={handleOpen}
        style={{padding:"15px"}}
        style2={{padding:"15px"}}
        isBtn2={false}
        isInput2={false}
        isInput3={false}
        isInput5={false}
        optionMap2={categories}
        optionMap3={raiting_about}
        optionMap4={raiting_about}
        textBtn2={"Компания добавить"}
        textBtn={"Категоря добавить"}
        optionMap={categories}
        onChange={HandleChange}
        onChange2={HandleChange2}
        onChange3={HandleChange3}
        onChange4={HandleChange4}
        isInput4={false}
      />
      <CategoryBanksComponent
        handleClose2={handleClose2}
        handleClose4={handleClose4}
        handleClose5={handleClose5}
        handleClose6={handleClose6}
        open2={open2}
        handleClose={handleClose}
        open={open}
        open3={open3}
        open4={open4}
        open5={open5}
        open6={open6}
        idCategory={putCategory}
        idCategorydelete={putCategory}
        idCategorydelete5={putCategory}
        handleClose3={handleClose3}
      />
    </WrapperContainer>
  );
}
export default Reting;
