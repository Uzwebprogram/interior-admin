import React, { useRef } from 'react'
import CommonBtn from '../../common/CommonBtn'
import ModalCommon from '../../common/Modal/Modal'
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from './styled-index';
import { GetClient, PostClient } from '../../../redux/client_comment';
import { GetTeam, PostTeam, UploadImage } from '../../../redux/team';
function AdminAddForm({Open , HandleClose}) {
    const dispatch = useDispatch();
    const team_nameUsref = useRef();
    const team_positionUsref = useRef();
    const dataClient = useSelector(state => state.team.uploadTeam)
    const HandleChange =  async (e) => {
      await dispatch(UploadImage(e))
    }
    const HandleSubmit = async (e) =>{
        e.preventDefault();
        const team_name = team_nameUsref.current.value
        const team_position = team_positionUsref.current.value
        const team_img = dataClient.data
        await dispatch(PostTeam({team_name , team_position , team_img}))
        dispatch(GetTeam())
        HandleClose()
      }
 
  return (
    <ModalCommon open={Open} handleClose={HandleClose}>
          <>
          <Wrapper onSubmit={HandleSubmit}>
              <h3>Админ добавить</h3>
              <input type="file" id="file" onChange={HandleChange}/>
                <label for="file" class="custom-file-upload">
                    <span className="span-download"><ion-icon  name="cloud-download-outline"></ion-icon></span>
                загрузить изображение
                </label>
                <input type="text" placeholder='имя' required ref={team_nameUsref} />
                <input type="text" placeholder='направелния' required ref={team_positionUsref} />
                <CommonBtn type={"submit"} style={{marginTop : "20px"}}>Добавить</CommonBtn>
             </Wrapper>
          </>
    </ModalCommon>
  )
}

export default AdminAddForm