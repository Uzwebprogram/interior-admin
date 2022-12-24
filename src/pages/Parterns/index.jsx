import React, { useEffect, useState } from 'react'
import HeaderTopCommon from '../../components/common/HeaderTop'
import { WrapperContainer } from '../../style-App'
import { useDispatch } from 'react-redux';
import PartnerComponent from '../../components/partner/index';
import { GetPartner } from '../../redux/partner/index';
function Partner() {
  const [open , setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetPartner())
  }, [])
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)
  return (
    <WrapperContainer>
      <HeaderTopCommon title={"Партнер"} onClick={handleOpen} textBtn={"Партнер добавить"}/>
      <PartnerComponent handleClose={handleClose} open={open}/>
    </WrapperContainer>
  )
}
export default Partner