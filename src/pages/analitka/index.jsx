import React, { useEffect, useState } from 'react'
import HeaderTopCommon from '../../components/common/HeaderTop'
import { WrapperContainer } from '../../style-App'
// import { adminGet } from '../../redux/admin_add/index';
// import { useDispatch } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import AnalitkaComponent from '../../components/analitka';
import { AnalitikaGet } from '../../redux/analitka';
function Analitka() {
  const [open , setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AnalitikaGet())
  }, [])
  


  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)
  return (
    <WrapperContainer>
      <HeaderTopCommon title={"Аналитика"} onClick={handleOpen} textBtn={"Аналитика добавить"}/>
      <AnalitkaComponent handleClose={handleClose} open={open}/>
    </WrapperContainer>
  )
}
export default Analitka