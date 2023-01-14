import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { GetProjects, PutProjects, UploadImage } from "../../../redux/projects";
import ModalCommon from "../../common/Modal/Modal"
import { Wrapper } from "./styled-index"

function Put({openPut , handleClosePut , HandlePut }) {
    const dispatch = useDispatch();
    const data = useSelector(state => state.projects)
    const project_title_uz_usref = useRef();
    const project_title_en_usref = useRef();
    const project_title_ru_usref = useRef();
    const project_description_ru_usref = useRef();
    const project_description_en_usref = useRef();
    const project_description_uz_usref = useRef();
    const dataProject = useSelector(state => state.projects?.uploadProjects)
    const [interior2, setInterior2]= useState("")

    const HandleChange =  async (e) => {
      await dispatch(UploadImage(e))
    }
    const HandleInterior2 = (e) => {
      setInterior2(e.target.value)
    }

    const HandleSubmit =  async(e) =>{
        e.preventDefault();
        const body = {
           project_title_uz : project_title_uz_usref.current.value,
           project_title_ru : project_title_ru_usref.current.value,
           project_title_en : project_title_en_usref.current.value,
           project_description_ru : project_description_ru_usref.current.value,
           project_description_en : project_description_en_usref.current.value,
           project_description_uz : project_description_uz_usref.current.value,
           project_img : dataProject.data,
           category_id : interior2,
        }
        await dispatch(PutProjects({body , id:HandlePut}))
        dispatch(GetProjects())
        handleClosePut()
      }
    return(
        <>
    <ModalCommon  width={340} open={openPut} handleClose={handleClosePut}>
          <Wrapper>
          <h3>изменить</h3>
                <form onSubmit={HandleSubmit}>
                {dataProject.Loading == true ? 
                <span className="loading">loading...</span>
              :<>
              <input type="file" id="file" onChange={HandleChange}/>
              <label for="file" class="custom-file-upload">
                  <span className="span-download"><ion-icon  name="cloud-download-outline"></ion-icon></span>
              загрузить изображение
              </label>
              </>}
                {data.getProjects?.Data.map(elem => elem.project_id == HandlePut ?
                <>

                <input type="text" placeholder={elem.project_title_uz} ref={project_title_uz_usref} />
                              <select onChange={HandleInterior2}>
                        <option value="default" selected disabled>Выбор типа</option>
                        <option value="1">коммерческие</option>
                        <option value="2">жилые</option>
                </select>
                <input type="text" placeholder={elem.project_title_en} ref={project_title_en_usref} />
                <input type="text" placeholder={elem.project_title_ru} ref={project_title_ru_usref} />
                <input type="text" placeholder={elem.project_description_en} ref={project_description_en_usref} />
                <input type="text" placeholder={elem.project_description_ru}  ref={project_description_ru_usref} />
                <input type="text" placeholder={elem.project_description_uz}  ref={project_description_uz_usref} />
                <button type="submit" value={elem.tube_id}>изменить</button>
                </>
          :null)}
                </form>
          </Wrapper>
      </ModalCommon>
        </>
    )
}
export default Put