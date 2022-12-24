import React, { useRef } from 'react'
import CommonBtn from '../../common/CommonBtn'
import ModalCommon from '../../common/Modal/Modal'
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from './styled-index';
import { GetProjects, PostProjects, UploadImage } from '../../../redux/projects';
function AdminAddForm({Open , HandleClose}) {
    const dispatch = useDispatch();
    const dataProject = useSelector(state => state.projects?.uploadProjects)
    const project_title_uz_usref = useRef();
    const project_title_en_usref = useRef();
    const project_title_ru_usref = useRef();
    const project_description_ru_usref = useRef();
    const project_description_en_usref = useRef();
    const project_description_uz_usref = useRef();
    const HandleChange =  async (e) => {
      await dispatch(UploadImage(e))
    }
    const HandleSubmit = async (e) =>{
        e.preventDefault();
        const project_title_uz = project_title_uz_usref.current.value
        const project_title_ru = project_title_ru_usref.current.value
        const project_title_en = project_title_en_usref.current.value
        const project_description_ru = project_description_ru_usref.current.value
        const project_description_en = project_description_en_usref.current.value
        const project_description_uz = project_description_uz_usref.current.value
        const project_img = dataProject.data
        await dispatch(PostProjects({project_title_uz , project_title_ru , project_title_en , project_description_ru, project_description_en, project_description_uz , project_img}))
        dispatch(GetProjects())
        HandleClose()
      }
 
  return (
    <ModalCommon open={Open} handleClose={HandleClose}>
          <>
          <Wrapper onSubmit={HandleSubmit}>
              <h3>Админ добавить</h3>
              {dataProject.Loading == true ? 
                <span className="loading">loading...</span>
              :<>
              <input type="file" id="file" onChange={HandleChange}/>
              <label for="file" class="custom-file-upload">
                  <span className="span-download"><ion-icon  name="cloud-download-outline"></ion-icon></span>
              загрузить изображение
              </label>
              </>}

                <input type="text" placeholder='уз названия' required ref={project_title_uz_usref} />
                <input type="text" placeholder='ен названия' required ref={project_title_en_usref} />
                <input type="text" placeholder='ру названия' required ref={project_title_ru_usref} />
                <input type="text" placeholder='ен описания' required ref={project_description_en_usref} />
                <input type="text" placeholder='ру описания' required ref={project_description_ru_usref} />
                <input type="text" placeholder='уз описания' required ref={project_description_uz_usref} />
                  <CommonBtn type={"submit"} style={{marginTop : "20px"}}>Добавить</CommonBtn>
             </Wrapper>
          </>
    </ModalCommon>
  )
}

export default AdminAddForm