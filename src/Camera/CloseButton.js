import React from 'react';
import styled from "styled-components";
import { navigate } from "@reach/router"

const Button = styled.button`
  position: absolute;
  overflow: hidden;
  background-color: Transparent;
  outline: none;
  background-repeat: no-repeat;
  border: none;
  padding: 2rem;
  z-index: 100;
`;

const CloseSvg = styled.svg`
  height: 2rem;
  width: 2rem;
  color: #fff;
  overflow: hidden;
`;
export const CloseButton = () => {
  return (
    <Button onClick={() => navigate('/')}>
      <CloseSvg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </CloseSvg>
    </Button>
  )
}
