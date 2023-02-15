import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RenkingiGet, RenkingiPut, UploadPdf } from "../../../redux/renking";
import CommonBtn from "../../common/CommonBtn";
import ModalCommon from "../../common/Modal/Modal";
import { Wrapper } from "./styled-index";

function Put({ openPut, handleClosePut,HandlePut }) {
  const dispatch = useDispatch();
  const categoryNameRef = useRef();
  const categoryNameRefRu = useRef();
  const categoryNameRefEn = useRef();

  const PdfSizeRef = useRef();
  const titleUzRef = useRef();
  const titleEnRef = useRef();
  const titleRuRef = useRef();
  const innRef = useRef();
  const ogrnRef = useRef();
  const kppRef = useRef();
  const countryRef = useRef();
  const data = useSelector(state => state.renkingi.RenkingiGet?.data)
  const HandleChange = async (e) => {
    await dispatch(UploadPdf(e));
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      category_name : categoryNameRef.current.value,
      category_name_ru : categoryNameRefRu.current.value,
      category_name_en : categoryNameRefEn.current.value,
      title_uz : titleUzRef.current.value,
      title_en : titleEnRef.current.value,
      title_ru : titleRuRef.current.value,
      data_date : PdfSizeRef.current.value,
      inn : innRef.current.value,
      ogrn : ogrnRef.current.value,
      kpp : kppRef.current.value,
      country : countryRef.current.value,
  }
    await dispatch(RenkingiPut({ body, id:HandlePut }));
    dispatch(RenkingiGet());
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
              <input type="text" placeholder={elem.category_name}  ref={categoryNameRef} />
              <input type="text" placeholder={elem.category_name_ru}  ref={categoryNameRefRu} />
              <input type="text" placeholder={elem.category_name_en}  ref={categoryNameRefEn} />
                <input type="text" placeholder={elem.title_uz}  ref={titleUzRef} />
                <input type="text" placeholder={elem.title_ru}  ref={titleRuRef} />
                <input type="text" placeholder={elem.title_en}  ref={titleEnRef} />
                <input type="text" placeholder={elem.data_date}   ref={PdfSizeRef} />
                <input type="text" placeholder={elem.ogrn} required ref={ogrnRef} />
                <input type="text" placeholder={elem.inn} rrequired ref={innRef} />
                <input type="text" placeholder={elem.kpp}  required ref={kppRef} />
                <input type="text" placeholder={elem.country} required ref={countryRef} />
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
