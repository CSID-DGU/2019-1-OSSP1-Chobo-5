import React from "react";
import { LogoutButton } from "@inrupt/solid-react-components";
import isLoading from "@hocs/isLoading";
import {DefaultButton} from 'office-ui-fabric-react';
import {
  WelcomeWrapper,
  WelcomeCard,
  WelcomeLogo,
  WelcomeProfile,
  WelcomeDetail,
  ImageContainer,
  ImageWrapper,
  AppFolderStyle,
  AppFolderLabel
} from "./welcome.style";

/**
 * Welcome/Profile component.
 * @param {Props} props Given props.
 */
const WelcomePageContent = props => {
  return (
    <WelcomeWrapper>
      <WelcomeCard className="card">
        <WelcomeLogo>
          <img src="/img/Chobo.svg" alt="Chobo" />
          {props.appFolder && (
            <AppFolderStyle>
              <AppFolderLabel>앱 폴더: </AppFolderLabel>
              <AppFolderLabel>{props.appFolder}</AppFolderLabel>
              <DefaultButton onClick={props.onChangeAppFolderClick}>폴더 바꾸기</DefaultButton>
            </AppFolderStyle>
          )}
        </WelcomeLogo>
        <WelcomeProfile>
          <h3>
            <span>{props.name}</span>
          </h3>
          <ImageWrapper>
            {props.image && (
              <ImageContainer
                image={props.image}
              />
            )}
          </ImageWrapper>
          <p>
             <LogoutButton class = "ProfileLogout" />
          </p>
        </WelcomeProfile>
      </WelcomeCard>
      <WelcomeCard className="card">
        <WelcomeDetail>
          <h3>
            Welcome to Chobo!
          </h3>
          <p>
            SSolid를 이용한 SNS입니다.
          </p>
        </WelcomeDetail>
      </WelcomeCard>
    </WelcomeWrapper>
  );
};

export default isLoading(WelcomePageContent);
