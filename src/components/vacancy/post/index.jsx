import React, { useRef } from "react";
import CommonBtn from "../../common/CommonBtn";
import ModalCommon from "../../common/Modal/Modal";
import { useDispatch } from "react-redux";
import { Wrapper } from "./styled-index";
import { GetVacancy, PostVacancy } from "../../../redux/vacancy/index";
function AdminAddForm({ Open, HandleClose }) {
  const dispatch = useDispatch();
  const vakancyTitleUzUsref = useRef();
  const vakancyTitleRuUsref = useRef();
  const vakancyTitleEnUsref = useRef();
  const vakancyDescriptionUzUsref = useRef();
  const vakancyDescriptionRuUsref = useRef();
  const vakancyDescriptionEnUsref = useRef();
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const vakancy_title_uz = vakancyTitleUzUsref.current.value;
    const vakancy_title_ru = vakancyTitleRuUsref.current.value;
    const vakancy_title_en = vakancyTitleEnUsref.current.value;

    const vakancy_description_uz = vakancyDescriptionUzUsref.current.value;
    const vakancy_description_ru = vakancyDescriptionRuUsref.current.value;
    const vakancy_description_en = vakancyDescriptionEnUsref.current.value;

    await dispatch(
      PostVacancy({
        vakancy_title_uz,
        vakancy_title_ru,
        vakancy_title_en,
        vakancy_description_uz,
        vakancy_description_ru,
        vakancy_description_en
      })
    );
    dispatch(GetVacancy());
    HandleClose();
  };

  return (
    <ModalCommon open={Open} handleClose={HandleClose}>
      <>
        <Wrapper onSubmit={HandleSubmit}>
          <h3>Вакансии добавить</h3>
          
          <input type="text" placeholder="имя уз" required ref={vakancyTitleUzUsref} />
          <input type="text" placeholder="имя ру" required ref={vakancyTitleRuUsref} />
          <input type="text" placeholder="имя  ен" required ref={vakancyTitleEnUsref} />
          <input
            type="text"
            placeholder="описание уз"
            required
            ref={vakancyDescriptionUzUsref}
          />
          <input
            type="text"
            placeholder="описание ру"
            required
            ref={vakancyDescriptionRuUsref}
          />
          <input
            type="text"
            placeholder="описание ен"
            required
            ref={vakancyDescriptionEnUsref}
          />
          <CommonBtn type={"submit"} style={{ marginTop: "20px" }}>
            Добавить
          </CommonBtn>
        </Wrapper>
      </>
    </ModalCommon>
  );
}

export default AdminAddForm;
