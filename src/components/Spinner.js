import React from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";

const SpinnerStyled = styled(Loader)`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 50%;
  text-align: center;
`;

const Spinner = () => {
  return (
    <SpinnerStyled
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={10000} //3 secs
    />
  );
};

export default Spinner;
