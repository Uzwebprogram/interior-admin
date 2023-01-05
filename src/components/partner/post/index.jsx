import React, { useRef } from "react";
import CommonBtn from "../../common/CommonBtn";
import ModalCommon from "../../common/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "./styled-index";
import {
  GetPartner,
  PostPartner,
  UploadImage,
} from "../../../redux/partner/index";
function AdminAddForm({ Open, HandleClose }) {
  const dispatch = useDispatch();
  const dataPartner = useSelector((state) => state.partner.uploadPartner);
  const HandleChange = async (e) => {
    await dispatch(UploadImage(e));
  };  
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const partners_img = dataPartner.data;
    await dispatch(PostPartner({ partners_img }));  
    dispatch(GetPartner());
    HandleClose();
  };

  return (
    <ModalCommon open={Open} handleClose={HandleClose}>
      <>
        <Wrapper onSubmit={HandleSubmit}>
          <h3>Админ добавить</h3>

          {dataPartner.Loading == true ? (
            <span className="loading">loading...</span>
          ) : (
            <>
              <input type="file" id="file" onChange={HandleChange} />
              <label for="file" class="custom-file-upload">
                <span className="span-download">
                  <ion-icon name="cloud-download-outline"></ion-icon>
                </span>
                загрузить изображение
              </label>
            </>
          )}
          <CommonBtn type={"submit"} style={{ marginTop: "20px" }}>
            Добавить
          </CommonBtn>
        </Wrapper>
      </>
    </ModalCommon>
  );
}

export default AdminAddForm;
