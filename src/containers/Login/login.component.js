/* eslint-disable constructor-super */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProviderLogin } from "@inrupt/solid-react-components";
import {
  LoginWrapper,
  LoginPanel,
  PanelBody,
  LoginTitle
} from "./login.style.js";
import { CenterContainer } from "@util-components";
import  {DefaultButton} from 'office-ui-fabric-react';

type Props = { history: Object };

type State = {
  idp: String
};
export default class LoginComponent extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      idp: "",
      withWebId: false
    };
  }
  
  render() {
    return (
      <LoginWrapper>
        <CenterContainer>
          <h1>환영합니다!</h1>
          <LoginPanel>
            <PanelBody>
              <LoginTitle> 로그인</LoginTitle>
              <ProviderLogin className="provider-login-component"
                callbackUri={`${window.location.origin}/friends/images`}
              />
            </PanelBody>
              <Link to="/register"> 
              <DefaultButton
               data-automation-id="test"
               allowDisabledFocus={true}
               text="가입하기"
               onClick="/register"></DefaultButton>
               </Link>
             
              <a
                href="https://solid.inrupt.com/get-a-solid-pod"
                rel="noopener noreferrer"
                target="_blank"
                className="link"
              >
                솔리드란?
              </a>
          </LoginPanel>
        </CenterContainer>
      </LoginWrapper>
    );
  }
}
