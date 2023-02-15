import React, { useRef } from 'react'
import CommonBtn from '../../common/CommonBtn'
import ModalCommon from '../../common/Modal/Modal'
import { useDispatch } from 'react-redux';
import { Wrapper } from './styled-index';
import { PressCenterGet, PressCenterPost } from '../../../redux/press-center';
function AdminAddForm({Open , HandleClose}) {
    const dispatch = useDispatch();
    const DescriptionUzRef = useRef();
    const DescriptionEnRef = useRef();
    const DescriptionRuRef = useRef();
    const DataDateRef = useRef();
    const HandleSubmit = async (e) =>{
        e.preventDefault();
        const body = {
          description_uz : DescriptionUzRef.current.value,
          description_en : DescriptionEnRef.current.value,
          description_ru : DescriptionRuRef.current.value,
          data_date : DataDateRef.current.value,
      };
        await dispatch(PressCenterPost(body))
        dispatch(PressCenterGet())
        HandleClose()
      }
 
  return (
    <ModalCommon height={370} width={400} open={Open} handleClose={HandleClose}>
          <>
          <Wrapper onSubmit={HandleSubmit}>
              <h3> добавить</h3>
                <input type="text" placeholder='уз описания' required ref={DescriptionUzRef} />
                <input type="text" placeholder='ру описания' required ref={DescriptionEnRef} />
                <input type="text" placeholder='ен описания' required ref={DescriptionRuRef} />
                <input type="text" placeholder='день месяц год' required ref={DataDateRef} />
                <CommonBtn type={"submit"} style={{marginTop : "20px"}}>Добавить</CommonBtn>
             </Wrapper>
          </>
    </ModalCommon>
  )
}

export default AdminAddForm