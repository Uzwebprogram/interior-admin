import React, { useRef } from 'react'
import CommonBtn from '../../common/CommonBtn'
import ModalCommon from '../../common/Modal/Modal'
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from './styled-index';
import {CategoriesGet, CategoriesPost } from '../../../redux/category';
function AdminAddForm({Open , HandleClose}) {
    const dispatch = useDispatch();
    const titleUzRef = useRef();
    const titleEnRef = useRef();
    const titleRuRef = useRef();
    const HandleSubmit = async (e) =>{
        e.preventDefault();
        const body = {
          title_uz : titleUzRef.current.value,
          title_en : titleEnRef.current.value,
          title_ru : titleRuRef.current.value,
      };
        await dispatch(CategoriesPost(body))
        dispatch(CategoriesGet())
        HandleClose()
      }
 
  return (
    <ModalCommon height={370} width={400} open={Open} handleClose={HandleClose}>
          <>
          <Wrapper onSubmit={HandleSubmit}>
              <h3>Category добавить</h3>
                <input type="text" placeholder='уз названия' required ref={titleUzRef} />
                <input type="text" placeholder='ру названия' required ref={titleRuRef} />
                <input type="text" placeholder='ен названия' required ref={titleEnRef} />
                <CommonBtn type={"submit"} style={{marginTop : "20px"}}>Добавить</CommonBtn>
             </Wrapper>
          </>
    </ModalCommon>
  )
}

export default AdminAddForm