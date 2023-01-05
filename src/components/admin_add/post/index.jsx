import React, { useRef } from 'react'
import CommonBtn from '../../common/CommonBtn'
import ModalCommon from '../../common/Modal/Modal'
import { useDispatch } from 'react-redux';
import { adminAdd } from '../../../redux/admin_add';
import { Wrapper } from './styled-index';
import { useSelector } from 'react-redux';
function AdminAddForm({Open , HandleClose}) {
    const dispatch = useDispatch();
    const emailUseRef = useRef();
    const passwordUseRef = useRef();
    const addAdmin = useSelector(state => state.adminadd)
    const nameUseRef = useRef();
    const HandleSubmit = (e) =>{
        e.preventDefault();
        const email = emailUseRef.current.value
        const password = passwordUseRef.current.value
        const name = nameUseRef.current.value
        dispatch(adminAdd({email , password , name}))
      }
      if (addAdmin.AddPost.Success == true) {
        window.location.reload();
    }
  return (
    <ModalCommon open={Open} handleClose={HandleClose}>
          <>
          <Wrapper onSubmit={HandleSubmit}>
              <h3>Админ добавить</h3>
                <input type="email" placeholder='email..' required ref={emailUseRef} />
                <input type="name" placeholder='имя' required ref={nameUseRef} />
                <input type="password" placeholder='парол' required ref={passwordUseRef} />
                {addAdmin.AddPost.Error == true ? <p style={{color:"red"}}>Должно быть 8 или более 16 чисел</p> : null}
                <CommonBtn type={"submit"} style={{marginTop : "20px"}}>Добавить</CommonBtn>
             </Wrapper>
          </>
    </ModalCommon>
  )
}

export default AdminAddForm