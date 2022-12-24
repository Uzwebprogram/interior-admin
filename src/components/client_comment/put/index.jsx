import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux"
import { GetClient, PutClient } from "../../../redux/client_comment";
import ModalCommon from "../../common/Modal/Modal"
import { Wrapper } from "./styled-index"

function Put({openPut , handleClosePut , HandlePut }) {
    const dispatch = useDispatch();
    const data = useSelector(state => state.client_comment)
    const titleUz = useRef();
    const titleRu = useRef();
    const titleEn = useRef();
    const titleVideo = useRef();
    const HandleSubmit =  async(e) =>{
        e.preventDefault();
        const body = {
            client_text_uz : titleUz.current.value,
            client_text_ru : titleRu.current.value,
            client_text_en : titleEn.current.value,
            client_video : titleVideo.current.value,
        }
        await dispatch(PutClient({ body  , id:HandlePut}))
        dispatch(GetClient())
        handleClosePut()
      }
    return(
        <>
    <ModalCommon  width={340} open={openPut} handleClose={handleClosePut}>
          <Wrapper>
          <h3>изменить</h3>
                <form onSubmit={HandleSubmit}>
                {data.getClient?.Data.map(elem => elem.client_id == HandlePut ?
                <>
                        <input type="text" ref={titleUz} placeholder={elem.client_text_uz} />
                        <input type="text" ref={titleRu} placeholder={elem.client_text_ru} />
                        <input type="text" ref={titleEn}  placeholder={elem.client_text_en} />
                        <input type="text" ref={titleVideo} placeholder={elem.client_video} />
                        <button type="submit" value={elem.tube_id}>изменить</button>
                </>
          :null)}
                </form>
          </Wrapper>
      </ModalCommon>
        </>
    )
}
export default Put