import { useDispatch, useSelector } from "react-redux";
import { PostImages, UploadImage } from "../../../redux/images_product";
import { GetProduct } from "../../../redux/products";
import CommonBtn from "../../common/CommonBtn";
import ModalCommon from "../../common/Modal/Modal"
import { Wrapper } from "./styled-index"



function ImagesUpload({openAddImage , handleImagesAdd , handleImagesClose}) {
    const dataProduct = useSelector((state) => state.images.uploadImages);
    const dispatch = useDispatch();
    const HandleChange =  async(e) =>{
        await dispatch(UploadImage(e));
    }
        const HandleSubmit = async (e) =>{  
            e.preventDefault();
            const body = {
                product_id: handleImagesAdd,
                image : dataProduct.data
            }
            await dispatch(PostImages(body))
            handleImagesClose()
            dispatch(GetProduct())
        }
    return(
        <>
      <ModalCommon  width={340} open={openAddImage} handleClose={handleImagesClose}>
                <Wrapper>
                <form onSubmit={HandleSubmit}>
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
          <CommonBtn type={"submit"} style={{ marginTop: "200px" , width:"100%" }}>
            Добавить
          </CommonBtn>
                </form>
                </Wrapper>
      </ModalCommon>
        </>
    )
}

export default ImagesUpload