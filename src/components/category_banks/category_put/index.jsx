import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoriesPut , CategoriesGet} from "../../../redux/category";
import CommonBtn from "../../common/CommonBtn";
import ModalCommon from "../../common/Modal/Modal";
import { Wrapper } from "./styled-index";

function CategoryPut({ openPut, handleClosePut, HandlePut }) {
  const dispatch = useDispatch();
  const titleUzRef = useRef();
  const titleEnRef = useRef();
  const titleRuRef = useRef();
  const data = useSelector(state => state.categories?.CategoriesGet?.data)
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const body = {
        title_uz : titleUzRef.current.value,
        title_en : titleEnRef.current.value,
        title_ru : titleRuRef.current.value,
    };
    await dispatch(CategoriesPut({ body, id: HandlePut }));
    dispatch(CategoriesGet());
    handleClosePut();
  };
  return (
    <>
      <ModalCommon height={370} width={340} open={openPut} handleClose={handleClosePut}>
        <Wrapper>
          <h3>изменить</h3>
          <form onSubmit={HandleSubmit}>

            {data.map(elem => elem.category_id == HandlePut ? 
       <>
                <input type="text" placeholder={elem.title_uz}  ref={titleUzRef} />
                <input type="text" placeholder={elem.title_ru}   ref={titleRuRef} />
                <input type="text" placeholder={elem.title_en}   ref={titleEnRef} />
       </>     
        :null)}
                <CommonBtn type={"submit"} style={{marginTop : "20px"}}>Добавить</CommonBtn>
          </form>
        </Wrapper>
      </ModalCommon>
    </>
  );
}
export default CategoryPut;
