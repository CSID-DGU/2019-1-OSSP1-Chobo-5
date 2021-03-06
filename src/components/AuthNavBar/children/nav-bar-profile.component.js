import React, { Component } from "react";
import styled from "styled-components";
import { Dropdown } from "@util-components";
import { Link } from "react-router-dom";

import auth from "solid-auth-client";


export const ImageContainer = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-size: cover;
  overflow: hidden;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  display: ${({ show }) => (show ? "block" : "none")};;`;

export const Img = styled.img`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

export const LoadingImage = styled(ImageContainer)`
  background: #cccccc;
  display:block;
`;


class NavBarProfile extends Component {
  state = {
    imageLoaded: false
  };

  //profile image load
  onImageLoaded = async () => this.setState({ imageLoaded: true });
  logOut = async () => {
    try {
      await auth.logout();
      // remove local storage
      localStorage.removeItem("solid-auth-client");
      // change to login page
      this.props.history.push("/login");
    } catch (error) {
      // console.log(`Error: ${error}`);
    }
  };
  //profile image and dropdown
  render() {
    const { img } = this.props;
    const { imageLoaded } = this.state;

    const profileOpts = [
      {
        label: "로그아웃",
        onClick: this.logOut
      }
    ];

    return img ? (
      <Dropdown actions={profileOpts} className="nav-bar--profile" hover={true}>
      <ImageContainer show={imageLoaded}>
        <Link to="/user/profile">
          <Img
            show={imageLoaded}
            src={img}
            alt="프로필"
            onLoad={this.onImageLoaded}/>
        </Link>
      </ImageContainer>
        {!imageLoaded && <LoadingImage show={true}/>}
      </Dropdown>
    ) : (
      <Dropdown actions={profileOpts} className="nav-bar--profile" hover={true}>
      </Dropdown>
    );
  }
}

export default NavBarProfile;
