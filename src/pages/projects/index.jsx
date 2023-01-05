import React, { useEffect, useState } from 'react'
import HeaderTopCommon from '../../components/common/HeaderTop'
import { WrapperContainer } from '../../style-App'
import { useDispatch } from 'react-redux';
import YoutubeComponent from '../../components/youtube';
import { GetProjects } from '../../redux/projects';
import ProjectsComponent from '../../components/Projects';
function Projects() {
  const [open , setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetProjects())
  }, [])
  

  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)
  return (
    <WrapperContainer>
      <HeaderTopCommon title={"Наши работы"} onClick={handleOpen} textBtn={"Наши работы добавить"}/>
      <ProjectsComponent handleClose={handleClose} open={open}/>
    </WrapperContainer>
  )
}
export default Projects