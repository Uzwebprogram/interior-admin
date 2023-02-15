import React, { useRef } from 'react'
import CommonBtn from '../../common/CommonBtn'
import ModalCommon from '../../common/Modal/Modal'
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from './styled-index';
import { RaitingGet, RaitingPost, UploadImage } from '../../../redux/raiting';
function BankAddAboutForm({Open , HandleClose , AboutId}) {
    const dispatch = useDispatch();
    const prognozRef = useRef();
    const update_dateRef = useRef();
    const RaitingRef = useRef();
    const typeRetingRef = useRef();
    const dataClient = useSelector(state => state.banks.uploadImages)
    const HandleChange =  async (e) => {
      await dispatch(UploadImage(e))
    }
    const HandleSubmit = async (e) =>{
        e.preventDefault();
        const body = {
          raiting : RaitingRef.current.value,
          bank_id : AboutId,
          prognoz : prognozRef.current.value,
          update_date : update_dateRef.current.value,
          type_reting : typeRetingRef.current.value,
          sertifikat: dataClient.data
      };
        await dispatch(RaitingPost(body))
        dispatch(RaitingGet())
        HandleClose()
      }
 
  return (
    <ModalCommon height={370} width={400} open={Open} handleClose={HandleClose}>
          <>
          <Wrapper onSubmit={HandleSubmit}>
              <h3>информация о рейтинге</h3>
              {dataClient.Loading == true ? 
                <span className="loading">loading...</span>
              :<>
              <input type="file" id="file" onChange={HandleChange}/>
              <label for="file" class="custom-file-upload">
                  <span className="span-download"><ion-icon  name="cloud-download-outline"></ion-icon></span>
              загрузить изображение
              </label>
              </>}
              <input type="text" placeholder='рейтинг' required ref={RaitingRef} />
                <input type="text" placeholder='прогноз' required ref={update_dateRef} />
                <input type="text" placeholder='дата обновления' required ref={prognozRef} />
                <input type="text" placeholder='вид рейтинга' required ref={typeRetingRef} />
                <CommonBtn type={"submit"} style={{marginTop : "20px"}}>Добавить</CommonBtn>
             </Wrapper>
          </>
    </ModalCommon>
  )
}

export default BankAddAboutForm