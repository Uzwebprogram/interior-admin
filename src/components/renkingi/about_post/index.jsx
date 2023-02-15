import React, { useRef } from 'react'
import CommonBtn from '../../common/CommonBtn'
import ModalCommon from '../../common/Modal/Modal'
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from './styled-index';
import { BanksGet, BanksPost , UploadImage } from '../../../redux/banks';
import { useState } from 'react';
import { AboutGet, AboutPost } from '../../../redux/raiting_about';
function About_Post({Open , HandleClose , AboutId}) {
    const dispatch = useDispatch();
    const titleEnRef = useRef();
    const titleRuRef = useRef();
    const Atribut = useRef();
    const AtributRu = useRef();
    const AtributEn = useRef();
    const titleEn2Ref = useRef();
    const titleRu3Ref = useRef();
    const titleRu4Ref = useRef();
    const HandleSubmit = async (e) =>{
        e.preventDefault();
        const body = {
          renking_id  : AboutId,
          raiting :titleEnRef.current.value ,
          kvartal :titleRuRef.current.value ,
          atribut :Atribut.current.value ,
          atribut_ru :AtributRu.current.value ,
          atribut_en :AtributEn.current.value ,
          god :titleEn2Ref.current.value ,
          sum  :titleRu3Ref.current.value,
          ranges : titleRu4Ref.current.value,
      };
        await dispatch(AboutPost(body))
        dispatch(AboutGet())
        HandleClose()
      }
 
  return (
    <ModalCommon height={370} width={400} open={Open} handleClose={HandleClose}>
          <>
          <Wrapper onSubmit={HandleSubmit}>
              <h3>Banks добавить</h3>
              <input type="text" placeholder="квартал"   ref={titleRuRef} />
                <input type="text" placeholder="%доля"   ref={titleEnRef} />
                <input type="text" placeholder="атрибут уз"  ref={Atribut} />
                <input type="text" placeholder="атрибут ру"  ref={AtributRu} />
                <input type="text" placeholder="атрибут ен"  ref={AtributEn} />
                <input type="text" placeholder="год" ref={titleEn2Ref} />
                <input type="text" placeholder="сумма"   ref={titleRu3Ref} />
                <input type="text" placeholder="ранк"   ref={titleRu4Ref} />
                <CommonBtn type={"submit"} style={{marginTop : "20px"}}>Добавить</CommonBtn>
             </Wrapper>
          </>
    </ModalCommon>
  )
}

export default About_Post