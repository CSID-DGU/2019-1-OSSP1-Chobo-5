import React from "react";
import isLoading from "@hocs/isLoading";
import {
  ImagesCard, ImagesDetail, ImageWrapper, ImageContainer, GridItem, CreatorLabel,
  NoImagesLabelStyle
} from "./images.style";

/**
 * show image preview card
 * @param props Given props.
 */
const Images = props => {
  console.log(props);
   return (
    <ImagesCard className="card">
      <ImagesDetail>
        <h4>
          {props.headline}
        </h4>
        <section className="row">
          {props.images &&
            props.images.map(image => (
              <GridItem
                key={image.url}
                onClick={() => props.onClick(image)}
                className="col-lg-2 col-md-3 col-sm-4 col-xs-12"
              >
                <ImageWrapper>
                  {image && (
                    <div class ="borde">
                      {props.users && (
                        <CreatorLabel>
                          {props.users.get(image.creator).name};
                        </CreatorLabel>
                      )}
                      <ImageContainer image={image.image} />
                    </div>
                  )}
                </ImageWrapper>
              </GridItem>
          ))}
        </section>
        {(!props.images || props.images.length === 0) && (
          <NoImagesLabelStyle>이미지가 없습니다...</NoImagesLabelStyle>
        )}
      </ImagesDetail>
    </ImagesCard>
  );
};

export default isLoading(Images);
