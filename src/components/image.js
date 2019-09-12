import React from "react";
import styled from 'styled-components';

// const StyledImg = styled.img`
//   max-width: 500px;
// `;
const ImgDiv = styled.div`
img{
    max-width: 500px;   
}
`



const Img = (props) => {
  return (
    <ImgDiv>
      <img src={props.imgUrl} alt="APOD" />
    </ImgDiv>
  );
};

export default Img;