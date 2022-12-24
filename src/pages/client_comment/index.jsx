import React, { useEffect, useState } from 'react'
import HeaderTopCommon from '../../components/common/HeaderTop'
import { WrapperContainer } from '../../style-App'
import { useDispatch } from 'react-redux';
import YoutubeComponent from '../../components/youtube';
import { GetClient } from '../../redux/client_comment';
import ClientComponent from '../../components/client_comment';
function CilentComment() {
  const [open , setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetClient())
  }, [])
  

  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)
  return (
    <WrapperContainer>
      <HeaderTopCommon title={"Отзывы клиентов"} onClick={handleOpen} textBtn={"Отзывы клиентов добавить"}/>
      <ClientComponent handleClose={handleClose} open={open}/>
    </WrapperContainer>
  )
}
export default CilentComment