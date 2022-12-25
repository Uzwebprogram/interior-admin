import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetVacancy, PutVacancy } from "../../../redux/vacancy/index";
import ModalCommon from "../../common/Modal/Modal";
import { Wrapper } from "./styled-index";

function Put({ openPut, handleClosePut, HandlePut }) {
    console.log(HandlePut);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.vacancy);
  console.log(data);
  const vakancyTitleUzUsref = useRef();
  const vakancyTitleRuUsref = useRef();
  const vakancyTitleEnUsref = useRef();
  const vakancyDescriptionUzUsref = useRef();
  const vakancyDescriptionRuUsref = useRef();
  const vakancyDescriptionEnUsref = useRef();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      vakancy_title_uz: vakancyTitleUzUsref.current.value,
      vakancy_title_ru: vakancyTitleRuUsref.current.value,
      vakancy_title_en: vakancyTitleEnUsref.current.value,
      vakancy_description_uz: vakancyDescriptionUzUsref.current.value,
      vakancy_description_ru: vakancyDescriptionRuUsref.current.value,
      vakancy_description_en: vakancyDescriptionEnUsref.current.value,
    };
    await dispatch(PutVacancy({ body, id:HandlePut }));
    dispatch(GetVacancy());
    handleClosePut();
  };
  return (
    <>
      <ModalCommon width={340} open={openPut} handleClose={handleClosePut}>
        <Wrapper>
          <h3>изменить</h3>
          <form onSubmit={HandleSubmit}>
            {data.getVacancy?.Data.map((elem) =>
              elem.vakancy_id == HandlePut ? (
                <>
                  <input
                    type="text"
                    placeholder={elem.vakancy_title_uz}
                    required
                    ref={vakancyTitleUzUsref}
                  />
                   <input
                    type="text"
                    placeholder={elem.vakancy_title_ru}
                    required
                    ref={vakancyTitleRuUsref}
                  />
                   <input
                    type="text"
                    placeholder={elem.vakancy_title_en}
                    required
                    ref={vakancyTitleEnUsref}
                  />
                  <input
                    type="text"
                    placeholder={elem.vakancy_description_uz}
                    required
                    ref={vakancyDescriptionUzUsref}
                  />
                  <input
                    type="text"
                    placeholder={elem.vakancy_description_ru}
                    required
                    ref={vakancyDescriptionRuUsref}
                  />
                  <input
                    type="text"
                    placeholder={elem.vakancy_description_en}
                    required
                    ref={vakancyDescriptionEnUsref}
                  />
                  <button type="submit" value={elem.vakancy_id}>
                    изменить
                  </button>
                </>
              ) : null
            )}
          </form>
        </Wrapper>
      </ModalCommon>
    </>
  );
}
export default Put;
