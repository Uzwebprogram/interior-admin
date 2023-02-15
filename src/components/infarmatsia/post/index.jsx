import React, { useRef } from 'react'
import CommonBtn from '../../common/CommonBtn'
import ModalCommon from '../../common/Modal/Modal'
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from './styled-index';
import { InfarmatsiaGet, InfarmatsiaPost , UploadPdf } from '../../../redux/infarmatsia/index';
function AdminAddForm({Open , HandleClose}) {
    const dispatch = useDispatch();
    const categoryNameRef = useRef();
    const PdfSizeRef = useRef();
    const titleUzRef = useRef();
    const titleEnRef = useRef();
    const titleRuRef = useRef();
    const dataClient = useSelector(state => state.metadologiya.uploadImages)
    const HandleChange =  async (e) => {
      await dispatch(UploadPdf(e))
    }
    const HandleSubmit = async (e) =>{
        e.preventDefault();
        const body = {
          title_uz : titleUzRef.current.value,
          title_en : titleEnRef.current.value,
          title_ru : titleRuRef.current.value,
          pdf : dataClient.data,
          size : PdfSizeRef.current.value
      };
        await dispatch(InfarmatsiaPost(body))
        dispatch(InfarmatsiaGet())
        HandleClose()
      }
 
  return (
    <ModalCommon height={370} width={400} open={Open} handleClose={HandleClose}>
          <>
          <Wrapper onSubmit={HandleSubmit}>
              <h3>Раскрытие информации добавить</h3>
              {dataClient.Loading == true ? 
                <span className="loading">loading...</span>
              :<>
              <input type="file" id="file" onChange={HandleChange}/>
              <label for="file" class="custom-file-upload">
                  <span className="span-download"><ion-icon  name="cloud-download-outline"></ion-icon></span>
              загрузить фотографий
              </label>
              </>}
                <input type="text" placeholder='уз названия' required ref={titleUzRef} />
                <input type="text" placeholder='ру названия' required ref={titleRuRef} />
                <input type="text" placeholder='ен названия' required ref={titleEnRef} />
                <input type="text" placeholder='pdf size' required ref={PdfSizeRef} />
                <CommonBtn type={"submit"} style={{marginTop : "20px"}}>Добавить</CommonBtn>
             </Wrapper>
          </>
    </ModalCommon>
  )
}

export default AdminAddForm