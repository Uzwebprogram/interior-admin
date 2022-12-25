import React, { useEffect, useState } from 'react'
import HeaderTopCommon from '../../components/common/HeaderTop'
import { WrapperContainer } from '../../style-App'
import { useDispatch } from 'react-redux';
import CalculateComponent from '../../components/calculate/index';
import { GetCalculate } from '../../redux/calculate/index';
function Partner() {
  const [open , setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCalculate())
  }, [])
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)
  return (
    <WrapperContainer>
      <HeaderTopCommon title={"Рассчитать проект"} onClick={handleOpen} isBtn={false}/>
      <CalculateComponent handleClose={handleClose} open={open}/>
    </WrapperContainer>
  )
}
export default Partner