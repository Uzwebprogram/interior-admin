import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoriesPut , CategoriesGet} from "../../../redux/category";
import { AboutGet, AboutPut } from "../../../redux/raiting_about";
import CommonBtn from "../../common/CommonBtn";
import ModalCommon from "../../common/Modal/Modal";
import { Wrapper } from "./styled-index";

function AboutPutComponent({ openPut, handleClosePut, HandlePut }) {
  const dispatch = useDispatch();
  const [select , setSelect] = useState(null);
  const titleEnRef = useRef();
  const titleRuRef = useRef();
  const Atribut = useRef();
  const AtributRu = useRef();
  const AtributEn = useRef();
  const titleEn2Ref = useRef();
  const titleRu3Ref = useRef();
  const data = useSelector(state => state.aboutreking?.AboutGet?.data)
  const data2 = useSelector(state => state.renkingi?.RenkingiGet?.data)
  const titleRu4Ref = useRef();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const body = {
        renking_id  : select,
        raiting :titleEnRef.current.value ,
        kvartal :titleRuRef.current.value ,
        atribut :Atribut.current.value ,
        atribut_ru :AtributRu.current.value ,
        atribut_en :AtributEn.current.value ,
        god :titleEn2Ref.current.value ,
        sum  :titleRu3Ref.current.value,
        ranges : titleRu4Ref.current.value
    };
    await dispatch(AboutPut({ body, id:HandlePut }));
    dispatch(AboutGet());
    handleClosePut();
  };
  return (
    <>
      <ModalCommon height={370} width={340} open={openPut} handleClose={handleClosePut}>
        <Wrapper>
          <h3>изменить</h3>
          <form onSubmit={HandleSubmit}>
            <select  onChange={(e) => setSelect(e.target.value)} style={{width:"300px"}}>
              {data2.map((elem , index) => 
                <option key={index} value={elem.id} >
                  {elem.title_ru}
                </option>
              )}
            </select>
            {data.map(elem => elem.id == HandlePut ? 
       <>
                <input type="text" placeholder={elem.kvartal}   ref={titleRuRef} />
                <input type="text" placeholder={elem.raiting}   ref={titleEnRef} />
                <input type="text" placeholder={elem.atribut}  ref={Atribut} />
                <input type="text" placeholder={elem.atribut_ru}  ref={AtributRu} />
                <input type="text" placeholder={elem.atribut_en}  ref={AtributEn} />

                <input type="text" placeholder={elem.god}   ref={titleEn2Ref} />
                <input type="text" placeholder={elem.sum}   ref={titleRu3Ref} />
                <input type="text" placeholder={elem.ranges}   ref={titleRu4Ref} />
       </>     
        :null)}
                <CommonBtn type={"submit"} style={{marginTop : "20px"}}>Добавить</CommonBtn>
          </form>
        </Wrapper>
      </ModalCommon>
    </>
  );
}
export default AboutPutComponent;
