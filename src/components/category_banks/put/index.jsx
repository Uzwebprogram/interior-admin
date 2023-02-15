import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BanksPut , UploadImage, BanksGet} from "../../../redux/banks";
import CommonBtn from "../../common/CommonBtn";
import ModalCommon from "../../common/Modal/Modal";
import { Wrapper } from "./styled-index";

function Put({ openPut, handleClosePut, HandlePut }) {
  const dispatch = useDispatch();
  const [category , setCategory] = useState();
  const companynameRef = useRef();
  const innRef = useRef();
  const ogrnRef = useRef();
  const kppRef = useRef();
  const countryRef = useRef();
  const dataBanks = useSelector(state => state.banks.BanksGet.data)
  const dataCategory = useSelector(state => state.categories.CategoriesGet.data)

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      category_id : category,
      companyname : companynameRef.current.value,
      inn : innRef.current.value,
      ogrn : ogrnRef.current.value,
      kpp : kppRef.current.value,
      country : countryRef.current.value,
    };
    await dispatch(BanksPut({ body, id: HandlePut }));
    dispatch(BanksGet());
    handleClosePut();
  };
  return (
    <>
      <ModalCommon height={370} width={340} open={openPut} handleClose={handleClosePut}>
        <Wrapper>
          <h3>изменить</h3>
          <form onSubmit={HandleSubmit}>
              <select onChange={(e) => setCategory(e.target.value)} name="" id="">
                {dataCategory.map((elem , index) =>
                  <option  value={elem.category_id} key={index}>
                    {elem.title_ru}
                  </option>
                )}
              </select>
                  {dataBanks.map((elem , index) => elem.bank_id == HandlePut ? 
                  <>
                <input key={index} type="text" placeholder={elem.companyname}  ref={companynameRef} />
                <input key={index} type="text" placeholder={elem.inn}  ref={innRef} />
                <input key={index} type="text" placeholder={elem.ogrn}  ref={ogrnRef} />
                <input key={index} type="text" placeholder={elem.kpp}  ref={kppRef} />
                <input key={index} type="text" placeholder={elem.country}  ref={countryRef} />
                  </>:null
                  )}
                <CommonBtn type={"submit"} style={{marginTop : "20px"}}>Добавить</CommonBtn>
          </form>
        </Wrapper>
      </ModalCommon>
    </>
  );
}
export default Put;
