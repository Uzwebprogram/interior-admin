import ModalCommon from "../../common/Modal/Modal"
import { Wrapper } from "./styled-index"

function Delete({openDelete , handleCloseDelete,HandleDelete }) {
    return(
        <>
    <ModalCommon  width={340} open={openDelete} handleClose={handleCloseDelete}>
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