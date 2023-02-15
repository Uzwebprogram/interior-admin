import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NewsPut , UploadImage, NewsGet} from "../../../redux/news";
import CommonBtn from "../../common/CommonBtn";
import ModalCommon from "../../common/Modal/Modal";
import { Wrapper } from "./styled-index";

function Put({ openPut, handleClosePut, HandlePut }) {
  const dispatch = useDispatch();
  const DescriptionUzRef = useRef();
  const DescriptionEnRef = useRef();
  const DescriptionRuRef = useRef();
  const DataDateRef = useRef();
  const data = useSelector(state => state.news?.NewsGet?.data)

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const body = {
        description_uz : DescriptionUzRef.current.value,
        description_en : DescriptionEnRef.current.value,
        description_ru : DescriptionRuRef.current.value,
        data_date : DataDateRef.current.value
    };
    await dispatch(NewsPut({ body, id: HandlePut }));
    dispatch(NewsGet());
    handleClosePut();
  };
  return (
    <>
      <ModalCommon height={370} width={340} open={openPut} handleClose={handleClosePut}>
        <Wrapper>
          <h3>изменить</h3>
          <form onSubmit={HandleSubmit}>
            {data.map(elem => elem.id == HandlePut ? 
       <>
                <input type="text" placeholder={elem.description_uz}  ref={DescriptionUzRef} />
                <input type="text" placeholder={elem.description_en}  ref={DescriptionEnRef} />
                <input type="text" placeholder={elem.description_ru}  ref={DescriptionRuRef} />
                <input type="text" placeholder={elem.data_date} required ref={DataDateRef} />
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
