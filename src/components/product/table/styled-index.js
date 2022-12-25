import styled from "styled-components";

export const Section = styled.div`
  margin: 0 auto;
  width: 100%;

  .ant-tabs-tab-btn {
    color: #fff;
    text-transform: uppercase;
  }

  /* .postion-div {
    position: relative;
    img{
      width: 100%;
      height: 100%;
    }
  } */
  .crud-div {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: #F0F0F0;
    padding: 5px;
    border-radius: 3px;

    button{
      margin: 0 10px;
    }
  }
`;
