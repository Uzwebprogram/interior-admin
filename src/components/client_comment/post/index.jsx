import React, { useRef } from 'react'
import CommonBtn from '../../common/CommonBtn'
import ModalCommon from '../../common/Modal/Modal'
import { useDispatch } from 'react-redux';
import { Wrapper } from './styled-index';
import { GetClient, PostClient } from '../../../redux/client_comment';
function AdminAddForm({Open , HandleClose}) {
    const dispatch = useDispatch();
    const titleUzUsref = useRef();
    const titleRuUsref = useRef();
    const titleEnUsref = useRef();
    const videoUrlUsref = useRef();
    const HandleSubmit = async (e) =>{
        e.preventDefault();
        const client_text_uz = titleUzUsref.current.value
        const client_text_ru = titleRuUsref.current.value
        const client_text_en = titleEnUsref.current.value
        const client_video = videoUrlUsref.current.value
        await dispatch(PostClient({client_text_uz , client_text_ru , client_text_en , client_video}))
        dispatch(GetClient())
        HandleClose()
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