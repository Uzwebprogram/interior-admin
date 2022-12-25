import React, { useEffect, useState } from 'react'
import HeaderTopCommon from '../../components/common/HeaderTop'
import { WrapperContainer } from '../../style-App'
import { useDispatch } from 'react-redux';
import SingleComponent from '../../components/before_after/index';
import { GetSingle } from '../../redux/before_after/index';
function Team() {
  const [open , setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetSingle())
  }, [])
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)
  return (
    <WrapperContainer>
      <HeaderTopCommon title={"До после"} onClick={handleOpen} textBtn={"До после добавить"}/>
      <SingleComponent handleClose={handleClose} open={open}/>
    </WrapperContainer>
  )
}
export default Team