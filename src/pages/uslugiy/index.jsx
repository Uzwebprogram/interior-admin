import React, { useEffect, useState } from 'react'
import HeaderTopCommon from '../../components/common/HeaderTop'
import { WrapperContainer } from '../../style-App'
// import { adminGet } from '../../redux/admin_add/index';
// import { useDispatch } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import UslugiyComponent from '../../components/uslugiy';
import { UslugiyGet } from '../../redux/uslugi';
function Uslugiy() {
  const [open , setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(UslugiyGet())
  }, [])
  


  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)
  return (
    <WrapperContainer>
      <HeaderTopCommon title={"Услуги"} onClick={handleOpen} textBtn={"Услуги добавить"}/>
      <UslugiyComponent handleClose={handleClose} open={open}/>
    </WrapperContainer>
  )
}
export default Uslugiy