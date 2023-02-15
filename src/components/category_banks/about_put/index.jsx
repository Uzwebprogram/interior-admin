import { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RaitingPut , RaitingGet, UploadImage} from "../../../redux/raiting";
import CommonBtn from "../../common/CommonBtn";
import ModalCommon from "../../common/Modal/Modal";
import { Wrapper } from "./styled-index";

function AboutPut({ openPut, handleClosePut, HandlePut }) {
  const dispatch = useDispatch();
  const titleUzRef = useRef();
  const titleEnRef = useRef();
  const titleRuRef = useRef();
  const typeRetingRef = useRef();
  const data = useSelector(state => state.ratingabout?.RaitingGet?.data)
  const data2 = useSelector(state => state.banks.BanksGet?.data)
  const dataClient = useSelector(state => state.banks.uploadImages)
  const [changeBanks , setChangeBanks] = useState();
  const HandleChange =  async (e) => {
    await dispatch(UploadImage(e))
  }
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      bank_id : changeBanks,
      raiting : titleUzRef.current.value,
      prognoz : titleEnRef.current.value,
      update_date : titleRuRef.current.value,
      sertifikat: dataClient.data,
      type_reting : typeRetingRef.current.value
    };
    await dispatch(RaitingPut({ body, id:HandlePut }));
    dispatch(RaitingGet());
    handleClosePut();
  };
  return (
    <>
      <ModalCommon height={370} width={340} open={openPut} handleClose={handleClosePut}>
        <Wrapper>
          <h3>изменить</h3>
          <form onSubmit={HandleSubmit}>
          {dataClient.Loading == true ? 
                <span className="loading">loading...</span>
              :<>
              <input type="file" id="file" onChange={HandleChange}/>
              <label for="file" class="custom-file-upload">
                  <span className="span-download"><ion-icon  name="cloud-download-outline"></ion-icon></span>
              загрузить изображение
              </label>
              </>}
            <select onChange={(e) => setChangeBanks(e.target.value)}>
              {data2.map((elem , index) =>
                <option key={index} value={elem.bank_id}>
                  {elem.companyname}
                </option>
              )}
            </select>
            {data.map(elem => elem.id == HandlePut ? 
       <>
                <input type="text" placeholder={elem.raiting}  ref={titleUzRef} />
                <input type="text" placeholder={elem.prognoz}   ref={titleRuRef} />
                <input type="text" placeholder={elem.update_date}   ref={titleEnRef} />
                <input type="text" placeholder={elem.type_reting} required ref={typeRetingRef} />

       </>     
        :null)}
                <CommonBtn type={"submit"} style={{marginTop : "20px"}}>Добавить</CommonBtn>
          </form>
        </Wrapper>
      </ModalCommon>
    </>
  );
}
export default AboutPut;
