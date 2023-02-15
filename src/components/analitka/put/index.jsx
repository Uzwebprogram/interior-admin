import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnalitikaGet, AnalitikaPut, UploadImage } from "../../../redux/analitka";
import CommonBtn from "../../common/CommonBtn";
// import { GetClient, PutClient } from "../../../redux/client_comment";
// import { GetTeam, PutTeam, UploadImage } from "../../../redux/team";
import ModalCommon from "../../common/Modal/Modal";
import { Wrapper } from "./styled-index";

function Put({ openPut, handleClosePut, HandlePut }) {
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
        data_date : data_region.current.value,
        img : dataClient.data,
        category_name : catogeroyNameRef.current.value
    };
    await dispatch(AnalitikaPut({ body, id: HandlePut }));
    dispatch(AnalitikaGet());
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
            {data.analitikaGet?.data.map(elem => elem.id == HandlePut ? 
       <>
                <input type="text" placeholder={elem.category_name}  ref={catogeroyNameRef} />
                <input type="text" placeholder={elem.title_uz}  ref={titleUzRef} />
                <input type="text" placeholder={elem.title_ru}   ref={titleRuRef} />
                <input type="text" placeholder={elem.title_en}   ref={titleEnRef} />
                <input type="text" placeholder={elem.description_uz}  ref={DescriptionUzRef} />
                <input type="text" placeholder={elem.description_en}  ref={DescriptionEnRef} />
                <input type="text" placeholder={elem.description_ru}  ref={DescriptionRuRef} />
                <input type="text" placeholder={elem.data_date}   ref={data_region} />
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
