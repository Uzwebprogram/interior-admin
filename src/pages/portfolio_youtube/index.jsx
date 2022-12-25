import React, { useEffect, useState } from 'react'
import HeaderTopCommon from '../../components/common/HeaderTop'
import { WrapperContainer } from '../../style-App'
import { useDispatch } from 'react-redux';
import YoutubeComponent from '../../components/youtube';
import { GetYoutube } from '../../redux/youtube';
function PortfolioYoutube() {
  const [open , setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetYoutube())
  }, [])
  

  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)
  return (
    <WrapperContainer>
      <HeaderTopCommon title={"You tube информация"} onClick={handleOpen} textBtn={"You tube информация добавить"}/>
      <YoutubeComponent handleClose={handleClose} open={open}/>
    </WrapperContainer>
  )
}
export default PortfolioYoutube