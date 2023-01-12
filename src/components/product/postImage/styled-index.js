import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
    flex-direction: column;
    h3{
        margin-bottom: 15px;
        font-size: 24px;
    }
    input{
        border: none;
        padding: 15px;
        border-bottom: 2px solid white;
        color: white;
        
        background-color: transparent;
        margin-top: 15px;
    }
    input[type="file"] {
    display: none;
}
label{
    border-style: dotted;
    text-align: center;
    padding: 100px 90px 100px 90px;
    position: relative;
    top: 90px;
    cursor: pointer;
}
.loading{
    text-align: center;
    background-color: #FFD700;
    padding: 100px 90px 100px 90px;
    position: relative;
    top: 90px;
    margin-top: 2px;
}
.span-download{
    font-size: 22px;
    position: relative;
    top: 7px;
    margin-right: 5px;
}
`