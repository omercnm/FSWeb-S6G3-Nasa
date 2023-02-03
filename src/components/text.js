import React from "react";
import styled, { css } from "styled-components";

const SC_section = styled.section`
  width: 80vw;
  margin: auto;
`;

const SC_p = styled.p`
  font-family: Helvetica;
  ${(props) =>
    props.omer &&
    css`
      color: red;
    `};
`;

const Text = (props) => {
  const { copyright, date, explanation } = props.data;
  return (
    <SC_section>
      <h2>{copyright}</h2>
      <h3>{date}</h3>
      <SC_p omer>{explanation}</SC_p>
    </SC_section>
  );
};
export default Text;
