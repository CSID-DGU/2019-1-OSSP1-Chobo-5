import styled from "styled-components";

export const ImagesWrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: #E6F1F7;
  padding: 10px 0;

  h3 {
    color: #666666;
    span {
      font-weight: bold;
    }
    a {
      font-size: 1.9rem;
    }
  }
`;

export const ImagesCard = styled.div`
  margin: 30px auto;

  //Overriding the style guide card flexbox settings
  max-width: 80% !important;
  flex-direction: row !important;
  flex-wrap: nowrap;
  justify-content:flex-start;
  padding: 10px 0 !important; //a style guide bug temporary fix
  background-color: white;

  align-items: center;

  h4{
    color: black;
  }

  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  .row{
  flex-direction: row;
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 1em;
min-width: 200px;
div{
  width:100%;
}
.borde{
  
border-width:1px;
border-color : grey;
border-style:solid;
}

`

export const ImageContainer =  styled.div`
  background-image: ${({image}) => image ? `url(${image})`: '#cccccc'};
  background-size: cover;
  background-position: center center;
  width: 100px;
  height: 10em;
  margin-bottom: 1em;
  
  
  &:hover {
    filter:brightness(1.2);
    transition:.1s;
  }

  `;

export const ImagesDetail = styled.div`
  padding: 1rem 3.5rem;
  width: 100%;
  max-width: 900px;

  p,
  li {
    color: #666666;
  }
  ul {
    list-style: disc;
    margin: 0 18px;
  }
`;

export const GridItem = styled.div`
  min-width: 250px;
  cursor: pointer;
`;

export const CreatorLabel = styled.p`
  opacity:0.7;
  text-align: center;
  margin: 0 auto;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;
  word-break: break-all;
  :hover{
    overflow: visible; 
    white-space: normal;
    height:auto;  /* just added this line */
  }
`;

export const NoImagesLabelStyle = styled.label`
  text-align: center;
`;