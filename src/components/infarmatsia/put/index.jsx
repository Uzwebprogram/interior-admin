import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InfarmatsiaGet, InfarmatsiaPut , UploadPdf } from "../../../redux/infarmatsia";
import CommonBtn from "../../common/CommonBtn";
import ModalCommon from "../../common/Modal/Modal";
import { Wrapper } from "./styled-index";

function Put({ openPut, handleClosePut, HandlePut }) {
  const dispatch = useDispatch();
  const PdfSizeRef = useRef();
  const titleUzRef = useRef();
  const titleEnRef = useRef();
  const titleRuRef = useRef();

  const dataClient = useSelector(state => state.infarmatsia.uploadImages)
  const data = useSelector(state => state.infarmatsia.InfarmatsiaGet?.data)
  const HandleChange = async (e) => {
    await dispatch(UploadPdf(e));
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      title_uz : titleUzRef.current.value,
      title_en : titleEnRef.current.value,
      title_ru : titleRuRef.current.value,
      pdf : dataClient.data,
      size : PdfSizeRef.current.value
  }
    await dispatch(InfarmatsiaPut({ body, id: HandlePut }));
    dispatch(InfarmatsiaGet());
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
            {data.map(elem => elem.id == HandlePut ? 
       <>
                <input type="text" placeholder={elem.title_uz}  ref={titleUzRef} />
                <input type="text" placeholder={elem.title_ru}  ref={titleRuRef} />
                <input type="text" placeholder={elem.title_en}  ref={titleEnRef} />
                <input type="text" placeholder={elem.size}   ref={PdfSizeRef} />
       </>     
        :null)}
                <CommonBtn type={"submit"} style={{marginTop : "20px"}}>Добавить</CommonBtn>
          </form>
        </Wrapper>
      </ModalCommon>
    </>
  );
}
export default Put;
