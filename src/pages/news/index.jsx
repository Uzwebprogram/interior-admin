import React, { useEffect, useState } from 'react'
import HeaderTopCommon from '../../components/common/HeaderTop'
import { WrapperContainer } from '../../style-App'
import { useDispatch, useSelector } from 'react-redux';
import NewsComponent from '../../components/news';
import { NewsGet } from '../../redux/news';

function News() {
  const [open , setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(NewsGet())
  }, [])
  


  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)
  return (
    <WrapperContainer>
      <HeaderTopCommon title={"Новости"} onClick={handleOpen} textBtn={"Новости добавить"}/>
      <NewsComponent handleClose={handleClose} open={open}/>
    </WrapperContainer>
  )
}
export default News