import React, { Component } from "react";
import { withWebId } from "@inrupt/solid-react-components";
import AuthNavBar from "./auth-nav-bar.component";
import data from "@solid/query-ldflex";

// hasPhoto context
const hasPhotoContext = "http://www.w3.org/2006/vcard/ns#hasPhoto";
// img context 
const imgContext = "http://xmlns.com/foaf/0.1/img"

//add image state
class AuthNavBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { image: null };
  }

  getProfileData = async () => {
    try {
      // load user card
      const user = data[this.props.webId];
      /*
       * LDFlex is using JSON-LD so async
       * JSON-LD expanded object returned.
       *  https://github.com/digitalbazaar/jsonld.js
       */
      const userName = await user.name;
      let userImage = await user[imgContext];
      userImage = userImage ? userImage : await user[hasPhotoContext];
      const name = userName ? userName.value : "";
      const image = userImage ? userImage.value : "/img/icon/empty-profile.svg";
      this.setState({
        name,
        image
      });
    } catch (error) {
      console.error(error);
    }
  };

  //check webid and get Profile
  componentDidMount() {
    if (this.props.webId) {
      this.getProfileData();
    }
  }

  //update ProfileData
  componentDidUpdate(prevProps, prevState) {
    if (this.props.webId && this.props.webId !== prevProps.webId) {
      this.getProfileData();
    }
  }

  //navigationBar
  render() {
    const { image } = this.state;
    return <AuthNavBar img={image} {...this.props}/>;
  }
}

export default withWebId(AuthNavBarContainer);
