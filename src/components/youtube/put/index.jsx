import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux"
import { GetYoutube, PutYoutube } from "../../../redux/youtube";
import ModalCommon from "../../common/Modal/Modal"
import { Wrapper } from "./styled-index"

function Put({openPut , handleClosePut , HandlePut }) {
    const dispatch = useDispatch();
    const data = useSelector(state => state.youtube)
    const titleUz = useRef();
    const titleRu = useRef();
    const titleEn = useRef();
    const titleVideo = useRef();
    const HandleSubmit =  async(e) =>{
        e.preventDefault();
        const body = {
            tube_title_uz : titleUz.current.value,
            tube_title_ru : titleRu.current.value,
            tube_title_en : titleEn.current.value,
            tube_video : titleVideo.current.value,
        }
        await dispatch(PutYoutube({ body  , id:HandlePut}))
        dispatch(GetYoutube())
      }
    return(
        <>
    <ModalCommon  width={340} open={openPut} handleClose={handleClosePut}>
          <Wrapper>
          <h3>изменить</h3>
                <form onSubmit={HandleSubmit}>
                {data.getYoutube?.Data.map(elem => elem.tube_id == HandlePut ?
                <>
                        <input type="text" ref={titleUz} placeholder={elem.tube_title_uz} />
                        <input type="text" ref={titleRu} placeholder={elem.tube_title_ru} />
                        <input type="text" ref={titleEn}  placeholder={elem.tube_title_en} />
                        <input type="text" ref={titleVideo} placeholder={elem.tube_video} />
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