import React, { useRef } from 'react'
import CommonBtn from '../../common/CommonBtn'
import ModalCommon from '../../common/Modal/Modal'
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from './styled-index';
import { BanksGet, BanksPost , UploadImage } from '../../../redux/banks';
import { useState } from 'react';
function BanksAddForm({Open , HandleClose}) {
    const dispatch = useDispatch();
    const [category , setCategory] = useState();
    const companynameRef = useRef();
    const innRef = useRef();
    const ogrnRef = useRef();
    const kppRef = useRef();
    const countryRef = useRef();
    const dataCategory = useSelector(state => state.categories.CategoriesGet.data)

    const HandleSubmit = async (e) =>{
        e.preventDefault();
        const body = {
          category_id : category,
          companyname : companynameRef.current.value,
          inn : innRef.current.value,
          ogrn : ogrnRef.current.value,
          kpp : kppRef.current.value,
          country : countryRef.current.value,
      };
        await dispatch(BanksPost(body))
        dispatch(BanksGet())
        HandleClose()
      }
 
  return (
    <ModalCommon height={370} width={400} open={Open} handleClose={HandleClose}>
          <>
          <Wrapper onSubmit={HandleSubmit}>
              <h3>Banks добавить</h3>

              <select onChange={(e) => setCategory(e.target.value)} name="" id="">
                {dataCategory.map((elem , index) =>
                  <option  value={elem.category_id} key={index}>
                    {elem.title_ru}
                  </option>
                )}
              </select>
                <input type="text" placeholder='название компании' required ref={companynameRef} />
                <input type="text" placeholder='ИНН' required ref={ogrnRef} />
                <input type="text" placeholder='свидетельство' required ref={innRef} />
                <input type="text" placeholder='дата основания' required ref={kppRef} />
                <input type="text" placeholder='страна' required ref={countryRef} />
                <CommonBtn type={"submit"} style={{marginTop : "20px"}}>Добавить</CommonBtn>
             </Wrapper>
          </>
    </ModalCommon>
  )
}

export default BanksAddForm