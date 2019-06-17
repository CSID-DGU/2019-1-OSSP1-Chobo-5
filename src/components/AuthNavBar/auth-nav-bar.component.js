import React from "react";

import { NavBar } from "@components";

import { NavBarProfile } from "./children";

const navigation = [
  {
    id: "friends-images",
    iconName:"PhotoCollection",
    label: "친구 사진",
    to: "/friends/images"
  },
  {
    id: "user-images",
    iconName:"FabricPictureLibrary",
    label: "내 사진",
    to: "/user/images"
  },
  {
    id: "upload-image",
    iconName:"CloudUpload",
    label: "사진 올리기",
    to: "/user/upload"
  },
  {
    id: "profile",
    iconName:"ContactCard",
    label: "프로필",
    to: "/user/profile"
  }
];

//navigation bar menu
const AuthNavBar = props => {
  return (
    <NavBar
      navigation={navigation}
      toolbar={[
        {
          component: () => <NavBarProfile {...props} />,
          label: "프로필",
          id: "profile"
        }
      ]}
    />
  );
};

export default AuthNavBar;
