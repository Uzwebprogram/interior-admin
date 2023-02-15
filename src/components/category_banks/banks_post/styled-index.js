import styled from "styled-components";

export const Wrapper = styled.form`
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
    input::placeholder{
        color: whitesmoke;
    }
    input[type="file"] {
    display: none;
}
select{
    padding: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    option{
        color: black;
    }
}
label{
    border-style: dotted;
    text-align: center;
    padding: 10px 10px 15px 10px;
    cursor: pointer;
}
.loading{
    position: absolute;
    text-align: center;
    background-color: #FFD700;
    padding-top: 20px;
    padding-bottom: 25px;
    width: 90%;
    margin-top: 2px;
}
.span-download{
    font-size: 22px;
    position: relative;
    top: 7px;
    margin-right: 5px;
}
`