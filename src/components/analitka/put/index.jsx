import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { GetClient, PutClient } from "../../../redux/client_comment";
// import { GetTeam, PutTeam, UploadImage } from "../../../redux/team";
import ModalCommon from "../../common/Modal/Modal";
import { Wrapper } from "./styled-index";

function Put({ openPut, handleClosePut, HandlePut }) {
  const dispatch = useDispatch();
//   const data = useSelector((state) => state.team);
  const team_nameUsref = useRef();
  const team_positionUsref = useRef();
//   const dataClient = useSelector((state) => state.team.uploadTeam);
  const HandleChange = async (e) => {
    // await dispatch(UploadImage(e));
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      team_name: team_nameUsref.current.value,
      team_position: team_positionUsref.current.value,
    //   team_img: dataClient.data,
    };
    // await dispatch(PutTeam({ body, id: HandlePut }));
    // dispatch(GetTeam());
    handleClosePut();
  };
  return (
    <>
      <ModalCommon width={340} open={openPut} handleClose={handleClosePut}>
        <Wrapper>
          <h3>изменить</h3>
          <form onSubmit={HandleSubmit}>
            {/* {data.getTeam?.Data.map((elem) =>
              elem.team_id == HandlePut ? (
                <>
                  <input type="file" id="file" onChange={HandleChange} />
                  <label for="file" class="custom-file-upload">
                    <span className="span-download">
                      <ion-icon name="cloud-download-outline"></ion-icon>
                    </span>
                    загрузить изображение
                  </label>
                  <input
                    type="text"
                    placeholder={elem.team_name}
                    ref={team_nameUsref}
                  />
                  <input
                    type="text"
                    placeholder={elem.team_position}
                    ref={team_positionUsref}
                  />
                  <button type="submit" value={elem.tube_id}>
                    изменить
                  </button>
                </>
              ) : null
            )} */}
          </form>
        </Wrapper>
      </ModalCommon>
    </>
  );
}
export default Put;
