import React from "react";
import styled from "styled-components";

const SC_Header = styled.header`
  background-color: ${(props) => (props.omer ? "blue" : "black")};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  h1 {
    color: white;
  }
`;

const SC_Img = styled.img`
  height: 100px;
`;

const Header = (props) => {
  return (
    <SC_Header omer>
      <SC_Img
        img
        src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg "
      />
      <h1>NASA</h1>
    </SC_Header>
  );
};
export default Header;
