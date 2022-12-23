import React, { useRef } from 'react'
import CommonBtn from '../../common/CommonBtn'
import ModalCommon from '../../common/Modal/Modal'
import { useDispatch } from 'react-redux';
import { Wrapper } from './styled-index';
import { useSelector } from 'react-redux';
import { PostYoutube } from '../../../redux/youtube';
function AdminAddForm({Open , HandleClose}) {
    const dispatch = useDispatch();
    const titleUzUsref = useRef();
    const titleRuUsref = useRef();
    const titleEnUsref = useRef();

    const videoUrlUsref = useRef();
    const addAdmin = useSelector(state => state.youtube)
    const HandleSubmit = (e) =>{
        e.preventDefault();
        const tube_title_uz = titleUzUsref.current.value
        const tube_title_ru = titleRuUsref.current.value
        const tube_title_en = titleEnUsref.current.value
        const tube_video = videoUrlUsref.current.value
        dispatch(PostYoutube({tube_title_uz , tube_title_ru , tube_title_en , tube_video}))
      }
      if (addAdmin.postYoutube.Success == true) {
        window.location.reload();
    }
  return (
    <ModalCommon open={Open} handleClose={HandleClose}>
          <>
          <Wrapper onSubmit={HandleSubmit}>
              <h3>Админ добавить</h3>
                <input type="text" placeholder='названия уз' required ref={titleUzUsref} />
                <input type="text" placeholder='названия ру' required ref={titleRuUsref} />
                <input type="text" placeholder='названия ен' required ref={titleEnUsref} />
                <input type="text" placeholder='youtube линк' required ref={videoUrlUsref} />
                <CommonBtn type={"submit"} style={{marginTop : "20px"}}>Добавить</CommonBtn>
             </Wrapper>
          </>
    </ModalCommon>
  )
}

export default AdminAddForm