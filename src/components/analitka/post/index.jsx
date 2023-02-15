import React, { useRef } from 'react'
import CommonBtn from '../../common/CommonBtn'
import ModalCommon from '../../common/Modal/Modal'
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from './styled-index';
// import { GetClient, PostClient } from '../../../redux/client_comment';
import { AnalitikaGet, AnalitikaPost, UploadImage } from '../../../redux/analitka';
function AdminAddForm({Open , HandleClose}) {
    const dispatch = useDispatch();
    const catogeroyNameRef = useRef();
    const titleUzRef = useRef();
    const titleEnRef = useRef();
    const titleRuRef = useRef();
    const DescriptionUzRef = useRef();
    const DescriptionEnRef = useRef();
    const DescriptionRuRef = useRef();
    const data_region = useRef();
    const dataClient = useSelector(state => state.analitika.uploadImages)
    const data = useSelector(state => state.analitika)
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
          data_date : data_region.current.value,
          img : dataClient.data,
          category_name : catogeroyNameRef.current.value
      };
        await dispatch(AnalitikaPost(body))
        dispatch(AnalitikaGet())
        HandleClose()
      }
 
  return (
    <ModalCommon height={370} width={400} open={Open} handleClose={HandleClose}>
          <>
          <Wrapper onSubmit={HandleSubmit}>
              <h3>Аналитика добавить</h3>
              {dataClient.Loading == true ? 
                <span className="loading">loading...</span>
              :<>
              <input type="file" id="file" onChange={HandleChange}/>
              <label for="file" class="custom-file-upload">
                  <span className="span-download"><ion-icon  name="cloud-download-outline"></ion-icon></span>
              загрузить изображение
              </label>
              </>}
                <input type="text" placeholder='отрасли имя' required ref={catogeroyNameRef} />
                <input type="text" placeholder='уз названия' required ref={titleUzRef} />
                <input type="text" placeholder='ру названия' required ref={titleRuRef} />
                <input type="text" placeholder='ен названия' required ref={titleEnRef} />
                <input type="text" placeholder='уз описания' required ref={DescriptionUzRef} />
                <input type="text" placeholder='ру описания' required ref={DescriptionEnRef} />
                <input type="text" placeholder='ен описания' required ref={DescriptionRuRef} />
                <input type="text" placeholder='дата газета регион' required ref={data_region} />
                <CommonBtn type={"submit"} style={{marginTop : "20px"}}>Добавить</CommonBtn>
             </Wrapper>
          </>
    </ModalCommon>
  )
}

export default AdminAddForm