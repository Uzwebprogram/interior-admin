import React, { useEffect, useState } from 'react'
import HeaderTopCommon from '../../components/common/HeaderTop'
import { WrapperContainer } from '../../style-App'
import { useDispatch } from 'react-redux';
import VacancyComponent from '../../components/vacancy/index';
import { GetVacancy } from '../../redux/vacancy';
function Team() {
  const [open , setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetVacancy())
  }, [])
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)
  return (
    <WrapperContainer>
      <HeaderTopCommon title={"Вакансии"} onClick={handleOpen} textBtn={"Вакансии добавить"}/>
      <VacancyComponent handleClose={handleClose} open={open}/>
    </WrapperContainer>
  )
}
export default Team