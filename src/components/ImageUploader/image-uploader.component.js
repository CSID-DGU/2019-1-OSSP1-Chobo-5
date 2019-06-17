import React from "react";
import ReactFileReader from "react-file-reader";
import Select from "react-select";
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { components } from "react-select";
import { DefaultButton, PrimaryButton  } from'office-ui-fabric-react';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import {
  ImageUploaderCard, ImageUploaderDetail, ImageWrapper, ImgStyle, ButtonStyle, ShareStyle,
  FriendImageStyle, FriendOptionWrapper, FriendNameStyle, FriendWebIdStyle, ToggleWrapper
} from "./image-uploader.style";

/**
 * Custom style option for the react-select input,
 * show user's image, name, and webId.
 * @param {Props} props Given props.
 */
const Option = (props) => {
  const {data} = props;
  return (
    <components.Option {...props}>
      <FriendOptionWrapper>
        <FriendImageStyle src={data.image} alt="image" />
        <FriendNameStyle>
          {data.label}
        </FriendNameStyle>
        <FriendWebIdStyle>
          ({data.value})
        </FriendWebIdStyle>
      </FriendOptionWrapper>
    </components.Option>
  );
};

/**
 * Image Uploader component.
*/
export const ImageUploader = (props: Props) => {
  return (
    <ImageUploaderCard className="card">
      <ImageUploaderDetail>
        <h4>
          사진 올리기
        </h4>
        <ReactFileReader
          fileTypes={[".png",".jpg",".jpeg"]}
          base64={true}
          multipleFiles={false}
          handleFiles={props.onImageSelection}
        >
        <ImageWrapper>
          {props.image && (
            <ImgStyle src={props.image} alt="image" />
          )}
        </ImageWrapper>
          <DefaultButton>
            사진 고르기
          </DefaultButton>
        </ReactFileReader>
        <div className="input-wrap">
          <TextField
          lable="이미지 설명:"
            multiline rows={3}
            type="text"
            placeholder="여기에 입력하세요..."
            value={props.description}
            onChange={props.onDescriptionChange}
          />
        </div>
        <ToggleWrapper>
        <label>
          공개:
        </label>
        <label className="switch">
          <input
            type="checkbox"
            onChange={props.onPublicChanged}
            checked={props.public}
          />
          <span className="slider round"></span>
        </label>  
          </ToggleWrapper>
        {props.public === false && (
          <ShareStyle>
            <label>
            공개할 사람:
            </label>
            <Select
              value={props.shareValue}
              onChange={props.onSelectedShareOptions}
              options={props.shareOptions}
              isMulti
              placeholder="사진을 공개할 친구를 고르세요..."
              components={{ Option }}
            />
          </ShareStyle>
        )}
        <PrimaryButton 
          disabled={!props.image}
          onClick={props.onUploadClick}
        >
          이미지 올리기
        </PrimaryButton >
      </ImageUploaderDetail>
    </ImageUploaderCard>
  );
};

export default ImageUploader;