import React, { useRef, useState } from "react";
import CommonBtn from "../../common/CommonBtn";
import ModalCommon from "../../common/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "./styled-index";
import {
  GetProducts,
  PostProducts,
  UploadImage,
} from "../../../redux/products/index";
function AdminAddForm({ Open, HandleClose }) {
  const dispatch = useDispatch();
  const locationRef = useRef()
  const metrRef = useRef()
  const product_titleUz = useRef();
  const product_titleRu = useRef();
  const product_titleEn = useRef();
  const product_descriptionUz = useRef();
  const product_descriptionRu = useRef();
  const product_descriptionEn = useRef();
  const data_ref = useRef();
  const dataProduct = useSelector((state) => state.product.uploadProducts);
  const [roww, setRoww]= useState("")
  const [interior, setInterior]= useState("")
  const [coll, setColl]= useState("")

  const HandleRow = (e) => {
    setRoww(e.target.value)
  }
  const HandleInterior = (e) => {
    setInterior(e.target.value)
  }
  const HandleCol = (e) => {
    setColl(e.target.value)
  }
 
  const HandleChange = async (e) => {
    await dispatch(UploadImage(e));
  };


  const HandleSubmit = async (e) => {
    e.preventDefault();
    const product_img1 = dataProduct.data;
    const category_id = interior
    const product_title_uz = product_titleUz.current.value;
    const product_title_ru = product_titleRu.current.value;
    const product_title_en = product_titleEn.current.value;
    const product_description_uz = product_descriptionUz.current.value;
    const product_description_ru = product_descriptionRu.current.value;
    const product_description_en = product_descriptionEn.current.value;
    const location = locationRef.current.value;
    const metr = metrRef.current.value;
    const cols = coll;
    const rows = roww;
    const data_date = data_ref.current.value
    await dispatch(
      PostProducts({
       category_id,
       product_img1,
       product_title_uz,
       product_title_en,
       product_title_ru,
       product_description_uz,
       product_description_en,
       product_description_ru,
       location,
       metr,
       rows,
       cols,
       data_date
      })
    );
    dispatch(GetProducts());
    window.location.reload();
    HandleClose();
  };

  return (
    <ModalCommon open={Open} handleClose={HandleClose}>
      <>
        <Wrapper onSubmit={HandleSubmit}>
          <h3>???????????????????????? ?? ?????????? ????????????????</h3>
          {dataProduct.Loading == true ? (
            <span className="loading">loading...</span>
          ) : (
            <>
              <input type="file" id="file" onChange={HandleChange} />
              <label for="file" class="custom-file-upload">
                <span className="span-download">
                  <ion-icon name="cloud-download-outline"></ion-icon>
                </span>
                ?????????????????? 1
              </label>
            </>
          )}
          <br />
          <select onChange={HandleInterior}>
            <option value="default" selected disabled>?????????? ????????</option>
            <option value="1">????????????????????????</option>
            <option value="2">??????????</option>
          </select>
          <br />
          <br />
          <br />
          <select onChange={HandleRow}>
            <option value="rows" selected disabled>Height</option>
            <option value="2">25%</option>
                    <option value="3">50%</option>
                    <option value="6">100%</option>
          </select>
          <br />
          <select onChange={HandleCol}>
            <option value="rows" selected disabled>Width</option>
                    <option value="3">50%</option>
                    <option value="6">100%</option>
          </select>
          <br />
          <input
            type="text"
            placeholder="?????? ????"
            required
            ref={product_titleUz}
          />
          <input
            type="text"
            placeholder="?????? ????"
            required
            ref={product_titleRu}
          />
          <input
            type="text"
            placeholder="?????? ????"
            required
            ref={product_titleEn}
          />
          <input
            type="text"
            placeholder="???????????????? ????"
            required
            ref={product_descriptionUz}
          />
          <input
            type="text"
            placeholder="???????????????? ????"
            required
            ref={product_descriptionRu}
          />
          <input
            type="text"
            placeholder="???????????????? ????"
            required
            ref={product_descriptionEn}
          />
           <input
            type="text"
            placeholder="?????????? ????????????????????????"
            required
            ref={locationRef}
          />
           <input
            type="text"
            placeholder="????????"
            required
            ref={metrRef}
          />

                     <input
            type="text"
            placeholder="??????"
            required
            ref={data_ref}
          />
          <CommonBtn type={"submit"} style={{ marginTop: "20px" }}>
            ????????????????
          </CommonBtn>
        </Wrapper>
      </>
    </ModalCommon>
  );
}

export default AdminAddForm;
