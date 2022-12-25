import React from 'react'
import CommonBtn from '../CommonBtn'
import { Wrapper } from './styled-index'

function HeaderTopCommon({title ,textBtn , style , onClick, isBtn}) {
  return (
    <Wrapper>
        <h3>{title}</h3>
       {
        isBtn === false ? null :  <CommonBtn style={style} onClick={onClick}>{textBtn}</CommonBtn>
       }
    </Wrapper>
  )
}

export default HeaderTopCommon