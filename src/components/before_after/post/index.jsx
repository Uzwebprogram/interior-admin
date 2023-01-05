import React, { useRef } from "react";
import CommonBtn from "../../common/CommonBtn";
import ModalCommon from "../../common/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "./styled-index";
import {
  GetSingle,
  PostSingle,
  UploadImage,
  UploadImage2,
} from "../../../redux/before_after/index";
function AdminAddForm({ Open, HandleClose }) {
  const dispatch = useDispatch();
  const single_titleUz = useRef();
  const single_titleRu = useRef();
  const single_titleEn = useRef();
  const single_descriptionUz = useRef();
  const single_descriptionRu = useRef();
  const single_descriptionEn = useRef();
  const dataSingle = useSelector((state) => state.single.uploadSingle);
  const dataSingle2 = useSelector((state) => state.single.uploadSingle2);
  const HandleChange = async (e) => {
    await dispatch(UploadImage(e));
  };
  const HandleChange2 = async (e) => {
    await dispatch(UploadImage2(e));
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const single_title_uz = single_titleUz.current.value;
    const single_title_ru = single_titleRu.current.value;
    const single_title_en = single_titleEn.current.value;
    const single_description_uz = single_descriptionUz.current.value;
    const single_description_ru = single_descriptionRu.current.value;
    const single_description_en = single_descriptionEn.current.value;
    const single_img1 = dataSingle.data;
    const single_img2 = dataSingle2.data;
    await dispatch(
      PostSingle({
        single_img1,
        single_img2,
        single_title_uz,
        single_title_ru,
        single_title_en,
        single_description_uz,
        single_description_ru,
        single_description_en,
      })
    );
    dispatch(GetSingle());
    HandleClose();
  };

  return (
    <ModalCommon open={Open} handleClose={HandleClose}>
      <>
        <Wrapper onSubmit={HandleSubmit}>
          <h3>До после добавить</h3>
          {dataSingle.Loading == true ? (
            <span className="loading">loading...</span>
          ) : (
            <>
              <input type="file" id="file" onChange={HandleChange} />
              <label for="file" class="custom-file-upload">
                <span className="span-download">
                  <ion-icon name="cloud-download-outline"></ion-icon>
                </span>
                загрузить до
              </label>
            </>
          )}
          <br />
          {dataSingle2.Loading == true ? (
            <span className="loading">loading...</span>
          ) : (
            <>
              <input type="file" id="file2" onChange={HandleChange2} />
              <label for="file2" class="custom-file-upload">
                <span className="span-download">
                  <ion-icon name="cloud-download-outline"></ion-icon>
                </span>
                загрузить после
              </label>
            </>
          )}
          <input
            type="text"
            placeholder="имя уз"
            required
            ref={single_titleUz}
          />
          <input
            type="text"
            placeholder="имя ру"
            required
            ref={single_titleRu}
          />
          <input
            type="text"
            placeholder="имя ен"
            required
            ref={single_titleEn}
          />
          <input
            type="text"
            placeholder="описание уз"
            required
            ref={single_descriptionUz}
          />
          <input
            type="text"
            placeholder="описание ру"
            required
            ref={single_descriptionRu}
          />
          <input
            type="text"
            placeholder="описание ен"
            required
            ref={single_descriptionEn}
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
