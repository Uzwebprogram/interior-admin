import { useDispatch, useSelector } from "react-redux"
import { GetProduct } from "../../../redux/products";
import ModalCommon from "../../common/Modal/Modal"
import {DeleteImages} from "./../../../redux/images_product/index"
import ImagesDelete from "./images-buttons";

function DeleteImage({openDeleteImages , handleImagesDelete , HandleCloseDeletImages}) {
    const GetImages = useSelector(state => state.product.getProduct.Data)

    return(
        <ModalCommon  width={700} open={openDeleteImages} handleClose={HandleCloseDeletImages}>
                <div style={{display:"flex", flexWrap:"wrap"}}>
                {GetImages.map(elem =>
                        handleImagesDelete == elem.product_id ?
                        elem.images.map((elems, index) =>
                            <ImagesDelete elems={elems}/>
                        )
                         :null 
                    )}
                </div>
        </ModalCommon>
    )
}
export default DeleteImage