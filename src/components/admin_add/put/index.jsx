import ModalCommon from "../../common/Modal/Modal"
import { Wrapper } from "./styled-index"

function Put({openPut , handleClosePut }) {
    return(
        <>
    <ModalCommon  width={340} open={openPut} handleClose={handleClosePut}>
          <Wrapper>
          <h3>изменить нельзя!</h3>
          {/* <button onClick={HandlePut}>ok</button> */}
          </Wrapper>
      </ModalCommon>
        </>
    )
}
export default Put