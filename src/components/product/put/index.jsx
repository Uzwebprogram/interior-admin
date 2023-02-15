import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommonBtn from "../../common/CommonBtn";
import {
  GetProduct,
  GetProducts,
  PostProducts,
  PutProducts,
  UploadImage,

} from "../../../redux/products/index";
import ModalCommon from "../../common/Modal/Modal";
import { Wrapper } from "./styled-index";

function Put({ openPut, handleClosePut, HandlePut }) {
  const data = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const locationRef = useRef();
  const metrRef = useRef();
  const stillRef = useRef();
  const designRef = useRef();
  const product_titleUz = useRef();
  const product_titleRu = useRef();
  const product_titleEn = useRef();
  const product_descriptionUz = useRef();
  const product_descriptionRu = useRef();
  const product_descriptionEn = useRef();
  const data_ref = useRef();
  const dataProduct = useSelector((state) => state.product.uploadProducts);
  const [roww, setRoww] = useState(null);
  const [interior, setInterior] = useState(null);
  const [coll, setColl] = useState(null);
  const HandleRow = (e) => {
    setRoww(e.target.value);
  };
  const HandleInterior = (e) => {
    setInterior(e.target.value);
  };
  const HandleCol = (e) => {
    setColl(e.target.value);
  };


  const HandleChange = async (e) => {
    await dispatch(UploadImage(e));
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      product_img1:  dataProduct.data,
      category_id: interior,
      product_title_uz: product_titleUz.current.value,
      product_title_ru: product_titleRu.current.value,
      product_title_en: product_titleEn.current.value,
      product_description_uz: product_descriptionUz.current.value,
      product_description_ru: product_descriptionRu.current.value,
      product_description_en: product_descriptionEn.current.value,
      location: locationRef.current.value,
      metr: metrRef.current.value,
      still: stillRef.current.value,
      design: designRef.current.value,
      cols: coll,
      rows: roww,
      data_date : data_ref.current.value
    };
    await dispatch(PutProducts({ body , id:HandlePut }));
    dispatch(GetProducts());
    // window.location.reload();
    handleClosePut();
  };
  return (
    <>
      <ModalCommon width={340} open={openPut} handleClose={handleClosePut}>
        <Wrapper>
          <h3>изменить</h3>
          <form onSubmit={HandleSubmit}>
            {data.getProduct.Data.map((elem) =>
              elem.product_id == HandlePut ? (
                <>
                  {dataProduct.Loading == true ? (
                    <span className="loading">loading...</span>
                  ) : (
                    <>
                      <input type="file" id="file" onChange={HandleChange} />
                      <label for="file" class="custom-file-upload">
                        <span className="span-download">
                          <ion-icon name="cloud-download-outline"></ion-icon>
                        </span>
                        загрузить 1
                      </label>
                    </>
                  )}
                  <br />
                  <select onChange={HandleInterior}>
                    <option value="default" selected disabled>
                      Выбор типа
                    </option>
                    <option value="1">коммерческие</option>
                    <option value="2">жилые</option>
                  </select>
                  <br />
                  <br />
                  <br />
                  <select onChange={HandleRow}>
                    <option value="rows" selected disabled>
                    Height
                    </option>
                    <option value="2">25%</option>
                    <option value="3">50%</option>
                    <option value="3">75%</option>
                    <option value="6">100%</option>
                  </select>
                  <br />
                  <select onChange={HandleCol}>
                    <option value="rows" selected disabled>
                      Width
                    </option>
                    <option value="2">25%</option>
                    <option value="3">50%</option>
                    <option value="3">75%</option>
                    <option value="6">100%</option>
                  </select>
                  <br />
                  <input
                    type="text"
                    placeholder={elem.product_title_uz}
                    ref={product_titleUz}
                  />
                  <input
                    type="text"
                    placeholder={elem.product_title_ru}
                    ref={product_titleRu}
                  />
                  <input
                    type="text"
                    placeholder={elem.product_title_en}
                    ref={product_titleEn}
                  />
                  <input
                    type="text"
                    placeholder={elem.product_description_uz}
                    ref={product_descriptionUz}
                  />
                  <input
                    type="text"
                    placeholder={elem.product_description_ru}
                    ref={product_descriptionRu}
                  />
                  <input
                    type="text"
                    placeholder={elem.product_description_en}
                    ref={product_descriptionEn}
                  />
                  <input
                    type="text"
                    placeholder={elem.location}
                    ref={locationRef}
                  />
                  <input
                    type="text"
                    placeholder={elem.metr}
                    ref={metrRef}
                  />
                  <input
                    type="text"
                    placeholder={elem.still}
                    ref={stillRef}
                  />
                  <input
                    type="text"
                    placeholder={elem.design}
                    ref={designRef}
                  />
                                    <input
                    type="text"
                    placeholder={elem.data_date}
                    ref={data_ref}
                  />
                  <CommonBtn type={"submit"} value={elem.product_id} style={{ marginTop: "20px" }}>
                    изменить
                  </CommonBtn>
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
