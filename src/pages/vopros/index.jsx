import React, { useEffect, useState } from 'react'
import HeaderTopCommon from '../../components/common/HeaderTop'
import { WrapperContainer } from '../../style-App'
// import { adminGet } from '../../redux/admin_add/index';
// import { useDispatch } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import UslugiyComponent from '../../components/uslugiy';
import { VoprosGet } from '../../redux/vopros';
import VoprosComponent from '../../components/vopros';

function  Vopros() {
  const [open , setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(VoprosGet())
  }, [])
  


  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)
  return (
    <WrapperContainer>
      <HeaderTopCommon title={"FAQ"} onClick={handleOpen} textBtn={"FAQ добавить"}/>
      <VoprosComponent handleClose={handleClose} open={open}/>
    </WrapperContainer>
  )
}
export default Vopros