import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UslugiyPut , UploadImage, UslugiyGet} from "../../../redux/uslugi";
import CommonBtn from "../../common/CommonBtn";
import ModalCommon from "../../common/Modal/Modal";
import { Wrapper } from "./styled-index";

function Put({ openPut, handleClosePut, HandlePut }) {
  const dispatch = useDispatch();
  const titleUzRef = useRef();
  const titleEnRef = useRef();
  const titleRuRef = useRef();
  const DescriptionUzRef = useRef();
  const DescriptionEnRef = useRef();
  const DescriptionRuRef = useRef();
  const dataClient = useSelector(state => state.uslugiy.uploadImages)
  const data = useSelector(state => state.uslugiy?.UslugiyGet?.data)
  const HandleChange = async (e) => {
    await dispatch(UploadImage(e));
  };
  const HandleSubmit = async (e) => {
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
    await dispatch(UslugiyPut({ body, id: HandlePut }));
    dispatch(UslugiyGet());
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
                <input type="text" placeholder={elem.title_ru}   ref={titleRuRef} />
                <input type="text" placeholder={elem.title_en}   ref={titleEnRef} />
                <input type="text" placeholder={elem.description_uz}  ref={DescriptionUzRef} />
                <input type="text" placeholder={elem.description_en}  ref={DescriptionEnRef} />
                <input type="text" placeholder={elem.description_ru}  ref={DescriptionRuRef} />
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
