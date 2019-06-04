import styled from "styled-components";
import { GradientBackground, Panel } from "@util-components";

export const LoginWrapper = styled(GradientBackground)`
  padding: 0px 0;
  h1 {
    color: #000000;
  }
`;

export const LoginPanel = styled(Panel)`
border-radius: 0px;
`;
export const PanelBody = styled.div`
  display: grid;
  flex-direction: column;
  
  .provider-login-component {
    
    div[role=option] {
      text-align: left !important;
      padding-left: 20px;
    }
    form{
      div{
  border-radius:0;
      }
      button{
  border-radius:0;
}
    }
  }
`;

export const LoginTitle = styled.span`
  color: #656e75;
  font-family: Segoe UI;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1.2px;
  line-height: 19px;
  text-align: center;
  position: relative;
  margin: 30px 0;
  display: inline-block;
  width: 100%;

  &::before,
  &::after {
    width: 37%;
    content: "";
    background: #656e75;
    height: 1px;
    position: absolute;
    box-sizing: border-box;
    top: 50%;
  }

  &::before {
    right: 0;
  }

  &::after {
    left: 0;
  }
`;