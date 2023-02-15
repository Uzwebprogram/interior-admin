import React, { useEffect, useState } from 'react'
import HeaderTopCommon from '../../components/common/HeaderTop'
import { WrapperContainer } from '../../style-App'
// import { adminGet } from '../../redux/admin_add/index';
// import { useDispatch } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import UslugiyComponent from '../../components/uslugiy';
import { UslugiyGet } from '../../redux/uslugi';
import MetadologiyaComponent from '../../components/metadalogiya';
import { MetadalogiyaGet } from '../../redux/metadalogiya';
function Metadalogiya() {
  const [open , setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MetadalogiyaGet())
  }, [])
  


  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)
  return (
    <WrapperContainer>
      <HeaderTopCommon title={"Методология"} onClick={handleOpen} textBtn={"Методология добавить"}/>
      <MetadologiyaComponent handleClose={handleClose} open={open}/>
    </WrapperContainer>
  )
}
export default Metadalogiya