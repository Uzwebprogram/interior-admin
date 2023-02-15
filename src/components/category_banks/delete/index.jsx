import { useDispatch } from "react-redux"
import { CategoriesDelete, CategoriesGet } from "../../../redux/category"
import ModalCommon from "../../common/Modal/Modal"
import { Wrapper } from "./styled-index"

function Delete({openDelete  , HandleId , handleCloseDelete}) {
  const dispatch = useDispatch();
  const HandleDelete =  async() =>{
    await dispatch(CategoriesDelete(HandleId))
    dispatch(CategoriesGet())
    handleCloseDelete()
  }
    return(
        <>
    <ModalCommon  width={340} height={250} open={openDelete} handleClose={handleCloseDelete}>
          <Wrapper>
          <h3>Вы уверены, что хотите удалить данные?</h3>
          <div className="Buttons">
        <button onClick={HandleDelete}>Да</button>
          <button onClick={handleCloseDelete}>Нет</button>
          </div>
          </Wrapper>
      </ModalCommon>
        </>
    )
}
export default Delete