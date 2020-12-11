import React from "react";
import styled, { css } from "styled-components";

const Circle = styled.button`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  border: none;
  background-color: #f83e3e;
  outline: none;
`;

const CircleLoading = styled.button`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  border: none;
  background-color: #f83e3e;
  opacity: 0.3;
  outline: none;
`;

const CircleRing = styled.div`
  margin-left: auto;
  margin-right: auto;
  top: 70%;
  position: absolute;
  left: 0;
  right: 0;
  border-radius: 50%;
  border-style: solid;
  height: 44px;
  width: 44px;
  border-color: #ff5f5f;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TakeScreenshotButton = ({ getScreenshot, downloading }) => {

  console.log('downloading: ', downloading)
  return (
    <CircleRing onClick={() => getScreenshot()}>
      {downloading ? 
        <CircleLoading /> : <Circle />
      }
    </CircleRing>
  );
};
