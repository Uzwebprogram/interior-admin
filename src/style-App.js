import styled, { createGlobalStyle } from "styled-components";

export const Main = styled.div`
  display: flex;
`;
export const GlobalStyle = createGlobalStyle`
  html{
    scroll-behavior:smooth
    }
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    overflow-x: hidden;
    background-color: white;
    color: white;
  }
`;

export const WrapperContainer = styled.div`
  width: 80%;
  margin-left: auto;
  padding: 30px;
`;
