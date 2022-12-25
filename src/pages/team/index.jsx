import React, { useEffect, useState } from 'react'
import HeaderTopCommon from '../../components/common/HeaderTop'
import { WrapperContainer } from '../../style-App'
import { useDispatch } from 'react-redux';
import { GetClient } from '../../redux/client_comment';
import TeamComponent from '../../components/team';
import { GetTeam } from '../../redux/team';
function Team() {
  const [open , setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetTeam())
  }, [])
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)
  return (
    <WrapperContainer>
      <HeaderTopCommon title={"Наша команда"} onClick={handleOpen} textBtn={"Наша команда добавить"}/>
      <TeamComponent handleClose={handleClose} open={open}/>
    </WrapperContainer>
  )
}
export default Team