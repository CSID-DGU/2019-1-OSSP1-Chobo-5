import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import  {DefaultButton, PrimaryButton} from 'office-ui-fabric-react';

import { Pagebackground, CenterContainer } from "@util-components";
import {
  RegisterWrapper,
  RegisterPanel,
  PanelHeader,
  PanelBody,
  Actions
} from "./register.style";
import { ProviderItem } from "./children";

type Provider = {};

type Register = {
  provider: String
};

type Props = {
  providers: Array<Provider>,
  history: Object,
  t: Function
};

type State = {
  register: Register,
  canContinue: false
};

class RegisterComponent extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      canContinue: false,
      register: {
        provider: ""
      }
    };
  }

  next = () => {
    const { canContinue } = this.state;
    if (canContinue) {
      window.location =
        this.state.register.provider +
        "?returnToUrl=" +
        window.location.protocol +
        "//" +
        window.location.host +
        "/register/success";
    }
  };

  selectProvider = e => {
    const { register } = this.state;
    this.setState({
      register: { ...register, provider: e.target.value },
      canContinue: true
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { canContinue } = this.state;
    console.log("Can Continue", canContinue);
    if (canContinue) {
      window.location =
        this.state.register.provider +
        "?returnToUrl=" +
        window.location.protocol +
        "//" +
        window.location.host +
        "/register/success";
    }
  };

  render() {
    const {
      canContinue,
      register: { provider }
    } = this.state;
    const { providers } = this.props;

    return (
      <Pagebackground>
        <CenterContainer>
          <RegisterWrapper>
            <h1>환영합니다!</h1>
            <form onSubmit={this.onSubmit}>
              <RegisterPanel>
                <PanelHeader className="panel-header">
                  <h2>공급자 정하기</h2>
                  <div className="progress-bar" />
                </PanelHeader>
                <PanelBody className="panel-body">
                  <Fragment>
                    <a
                      href="https://solid.inrupt.com/how-it-works"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      공급자가 무엇인가요?
                    </a>
                    <Link to="/login" className="a-with-spacing">
                      솔리드 계정이 이미 있습니다.
                    </Link>
                    <ul>
                      {providers.map((providerData, i) => (
                        <ProviderItem
                          data={providerData}
                          key={i}
                          onSelect={this.selectProvider}
                          radioName="providerRadio"
                          id={`radio-${i}`}
                          checked={providerData.registerLink === provider}
                        />
                      ))}
                    </ul>
                  </Fragment>
                </PanelBody>
                <Actions className="actions">
                  <PrimaryButton
                    className="btn-solid"
                    onClick={this.next}
                    type="submit"
                    disabled={!canContinue}
                  >
                    다음
                  </PrimaryButton>
                  
              <Link to="/login"> 
                  <DefaultButton
                    className= "btn-back"
                    onClick="/login"
                  >
                    이전
                  </DefaultButton>
                  </Link>
                </Actions>
              </RegisterPanel>
            </form>
          </RegisterWrapper>
        </CenterContainer>
      </Pagebackground>
    );
  }
}

export default RegisterComponent;
