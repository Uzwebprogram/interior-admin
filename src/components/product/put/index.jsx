import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetSingle,
  PutSingle,
  UploadImage,
  UploadImage2,
} from "../../../redux/before_after/index";
import ModalCommon from "../../common/Modal/Modal";
import { Wrapper } from "./styled-index";

function Put({ openPut, handleClosePut, HandlePut }) {
  const dispatch = useDispatch();
  const single_titleUz = useRef();
  const single_titleRu = useRef();
  const single_titleEn = useRef();
  const single_descriptionUz = useRef();
  const single_descriptionRu = useRef();
  const single_descriptionEn = useRef();
  const data = useSelector((state) => state.single);
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
    const body = {
      single_img1: dataSingle.data,
      single_img2: dataSingle2.data,
      single_title_uz: single_titleUz.current.value,
      single_title_ru: single_titleRu.current.value,
      single_title_en: single_titleEn.current.value,
      single_description_uz: single_descriptionUz.current.value,
      single_description_ru: single_descriptionRu.current.value,
      single_description_en: single_descriptionEn.current.value,
    };
    await dispatch(PutSingle({ body, id: HandlePut }));
    dispatch(GetSingle());
    handleClosePut();
  };
  return (
    <>
      <ModalCommon width={340} open={openPut} handleClose={handleClosePut}>
        <Wrapper>
          <h3>изменить</h3>
          <form onSubmit={HandleSubmit}>
            {data.getSingle?.Data.map((elem) =>
              elem.single_id == HandlePut ? (
                <>
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
                    placeholder={elem.single_title_uz}
                    ref={single_titleUz}
                  />
                  <input
                    type="text"
                    placeholder={elem.single_title_ru}
                    ref={single_titleRu}
                  />
                  <input
                    type="text"
                    placeholder={elem.single_title_en}
                    ref={single_titleEn}
                  />
                  <input
                    type="text"
                    placeholder={elem.single_description_uz}
                    ref={single_descriptionUz}
                  />
                  <input
                    type="text"
                    placeholder={elem.single_description_ru}
                    ref={single_descriptionRu}
                  />
                  <input
                    type="text"
                    placeholder={elem.single_description_en}
                    ref={single_descriptionEn}
                  />
                  <button type="submit" value={elem.single_id}>
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
