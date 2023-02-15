import React, { useEffect, useState } from 'react'
import HeaderTopCommon from '../../components/common/HeaderTop'
import { WrapperContainer } from '../../style-App'
import { useDispatch, useSelector } from 'react-redux';
import PressCenterComponent from '../../components/pressCenter';
import { PressCenterGet } from '../../redux/press-center';

function PressCenter() {
  const [open , setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(PressCenterGet())
  }, [])
  


  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)
  return (
    <WrapperContainer>
      <HeaderTopCommon title={"Пресс-центр"} onClick={handleOpen} textBtn={"Пресс-центр добавить"}/>
      <PressCenterComponent handleClose={handleClose} open={open}/>
    </WrapperContainer>
  )
}
export default PressCenter