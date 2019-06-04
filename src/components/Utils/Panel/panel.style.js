import styled from "styled-components";

export const PanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132), 0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108);
  min-width: 420px;
  min-height: 403px;
  position: relative;
  margin: auto;
  padding: 40px;
  text-align: center;
  & > h1,
  & > h2 {
    padding: 0;
    margin: 0;
  }

  @media screen and (max-width: 992px) {
    width: auto;
  }
`;
