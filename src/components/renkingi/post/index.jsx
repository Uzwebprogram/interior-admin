import React, { useRef } from 'react'
import CommonBtn from '../../common/CommonBtn'
import ModalCommon from '../../common/Modal/Modal'
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from './styled-index';
import { RenkingiGet, RenkingiPost , UploadPdf } from '../../../redux/renking/index';
function AdminAddForm({Open , HandleClose}) {
    const dispatch = useDispatch();
    const categoryNameRef = useRef();
    const categoryNameRefRu = useRef();
    const categoryNameRefEn = useRef();

    const PdfSizeRef = useRef();
    const titleUzRef = useRef();
    const titleEnRef = useRef();
    const titleRuRef = useRef();
    const innRef = useRef();
    const ogrnRef = useRef();
    const kppRef = useRef();
    const countryRef = useRef();

    const HandleSubmit = async (e) =>{
        e.preventDefault();
        const body = {
          category_name : categoryNameRef.current.value,
          category_name_ru : categoryNameRefRu.current.value,
          category_name_en : categoryNameRefEn.current.value,
          title_uz : titleUzRef.current.value,
          title_en : titleEnRef.current.value,
          title_ru : titleRuRef.current.value,
          data_date : PdfSizeRef.current.value,
          inn : innRef.current.value,
          ogrn : ogrnRef.current.value,
          kpp : kppRef.current.value,
          country : countryRef.current.value,
      };
        await dispatch(RenkingiPost(body))
        dispatch(RenkingiGet())
        HandleClose()
      }
 
  return (
    <ModalCommon height={370} width={400} open={Open} handleClose={HandleClose}>
          <>
          <Wrapper onSubmit={HandleSubmit}>
              <h3> добавить</h3>
 
              <input type="text" placeholder='название категории уз' required ref={categoryNameRef} />
              <input type="text" placeholder='название категории ру' required ref={categoryNameRefRu} />
              <input type="text" placeholder='название категории ен' required ref={categoryNameRefEn} />
                <input type="text" placeholder='уз названия' required ref={titleUzRef} />
                <input type="text" placeholder='ру названия' required ref={titleRuRef} />
                <input type="text" placeholder='ен названия' required ref={titleEnRef} />
                <input type="text" placeholder='число год месяц' required ref={PdfSizeRef} />
                <input type="text" placeholder='свидетельство' required ref={ogrnRef} />
                <input type="text" placeholder='ИНН' required ref={innRef} />
                <input type="text" placeholder='дата основания ' required ref={kppRef} />
                <input type="text" placeholder='страна' required ref={countryRef} />
                <CommonBtn type={"submit"} style={{marginTop : "20px"}}>Добавить</CommonBtn>
             </Wrapper>
          </>
    </ModalCommon>
  )
}

export default AdminAddForm