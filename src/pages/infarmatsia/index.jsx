import React, { useEffect, useState } from 'react'
import HeaderTopCommon from '../../components/common/HeaderTop'
import { WrapperContainer } from '../../style-App'
import { useDispatch, useSelector } from 'react-redux';
import MetadologiyaComponent from '../../components/metadalogiya';
import { InfarmatsiaGet } from '../../redux/infarmatsia';
import InfarmatsiaComponent from '../../components/infarmatsia';
function Infarmatsia() {
  const [open , setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(InfarmatsiaGet())
  }, [])
  


  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)
  return (
    <WrapperContainer>
      <HeaderTopCommon title={"Раскрытие информации"} onClick={handleOpen} textBtn={"Раскрытие информации добавить"}/>
      <InfarmatsiaComponent handleClose={handleClose} open={open}/>
    </WrapperContainer>
  )
}
export default Infarmatsia