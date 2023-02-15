import React, { useRef } from 'react'
import CommonBtn from '../../common/CommonBtn'
import ModalCommon from '../../common/Modal/Modal'
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from './styled-index';
import { UslugiyGet, UslugiyPost , UploadImage } from '../../../redux/uslugi';
function AdminAddForm({Open , HandleClose}) {
    const dispatch = useDispatch();
    const titleUzRef = useRef();
    const titleEnRef = useRef();
    const titleRuRef = useRef();
    const DescriptionUzRef = useRef();
    const DescriptionEnRef = useRef();
    const DescriptionRuRef = useRef();
    const dataClient = useSelector(state => state.uslugiy.uploadImages)
    const HandleChange =  async (e) => {
      await dispatch(UploadImage(e))
    }
    const HandleSubmit = async (e) =>{
        e.preventDefault();
        const body = {
          title_uz : titleUzRef.current.value,
          title_en : titleEnRef.current.value,
          title_ru : titleRuRef.current.value,
          description_uz : DescriptionUzRef.current.value,
          description_en : DescriptionEnRef.current.value,
          description_ru : DescriptionRuRef.current.value,
          img : dataClient.data,
      };
        await dispatch(UslugiyPost(body))
        dispatch(UslugiyGet())
        HandleClose()
      }
 
  return (
    <ModalCommon height={370} width={400} open={Open} handleClose={HandleClose}>
          <>
          <Wrapper onSubmit={HandleSubmit}>
              <h3> добавить</h3>
              {dataClient.Loading == true ? 
                <span className="loading">loading...</span>
              :<>
              <input type="file" id="file" onChange={HandleChange}/>
              <label for="file" class="custom-file-upload">
                  <span className="span-download"><ion-icon  name="cloud-download-outline"></ion-icon></span>
              загрузить изображение
              </label>
              </>}
                <input type="text" placeholder='уз названия' required ref={titleUzRef} />
                <input type="text" placeholder='ру названия' required ref={titleRuRef} />
                <input type="text" placeholder='ен названия' required ref={titleEnRef} />
                <input type="text" placeholder='уз описания' required ref={DescriptionUzRef} />
                <input type="text" placeholder='ру описания' required ref={DescriptionEnRef} />
                <input type="text" placeholder='ен описания' required ref={DescriptionRuRef} />
                <CommonBtn type={"submit"} style={{marginTop : "20px"}}>Добавить</CommonBtn>
             </Wrapper>
          </>
    </ModalCommon>
  )
}

export default AdminAddForm