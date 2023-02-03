import React from "react";
import styled from "styled-components";

const SC_main = styled.main`
  background-color: #191970;
  width: 80%;
  margin: auto;
  padding: 5% 10%;
`;

const SC_img = styled.img`
  border-radius: 35px;
  max-height: 40vh;
  margin: auto;
`;

const Img = (props) => {
  return (
    <SC_main>
      <SC_img src={props.url} alt={props.title} />
    </SC_main>
  );
};
export default Img;
