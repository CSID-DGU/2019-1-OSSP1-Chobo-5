import styled from 'styled-components';

export const PageNotFoundWrapper = styled.section`
    display: flex;
    flex-direction: row-reverse;
    background-image: url('/img/notFound1.svg');
    background-repeat: no-repeat;
    height: 100%;

    
    @media only screen and (max-width: 900px) {
      background-image: url('/img/notFound.svg');
      background-size: 70%;
    }
`;


export const PageNotFoundContent = styled.div`
  max-width: 54%;
  margin: 100px 40px 0 50px;
  
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  
  @media only screen and (max-width: 900px) {
    max-width: 100%;
    margin: 20px 40px;
    text-align: center;
  }
  
  @media only screen and (max-width: 600px) {
    img {
      width: 100%;
    }
  }
`;
