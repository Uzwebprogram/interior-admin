import { useDispatch } from "react-redux";
import { DeleteImages } from "../../../../redux/images_product";
import { GetProduct } from "../../../../redux/products";


function ImagesDelete({elems}) {
    const dispatch = useDispatch();
    const HandleDelete= async (e) =>{
       await dispatch(DeleteImages(e.target.value))
       dispatch(GetProduct())
    }
    return(
        <>
            <div style={{display:"flex" , flexDirection:"column"}}>
            <img src={elems.image} width={200} heigh={200} alt="" />
            <button onClick={HandleDelete} style={{marginBottom:"20px" , backgroundColor:"red" ,color:"white" , cursor:"pointer"}} value={elems.img_id}>удалить картинка</button>
</div>
  
        </>
    )
}
export default ImagesDelete