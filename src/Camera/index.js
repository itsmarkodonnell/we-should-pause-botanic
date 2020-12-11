import React, { useState, useEffect } from "react";
import html2canvas from "html2canvas";

import styled from "styled-components";
import Webcam from "react-webcam";
import { CloseButton } from "./CloseButton";
import { LottiePlayer } from "./LottiePlayer";
import { TakeScreenshotButton } from "./TakeScreenshotButton";

const WebcamStyled = styled(Webcam)`
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  opacity: 1;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  height: 300px;
  width: 300px;
  z-index: 0;
`;

export const WebcamComponent = ({ index }) => {
  
  const [downloading, setDownloading] = useState(false);
  const videoConstraints = {
    facingMode: "environment",
    width: 300,
    heigth: 300,
    aspectRatio: 4 / 4,
  };

  function captureVideos() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let videos = document.querySelectorAll("video");
    let w, h;
    const v = videos[0];
    try {
      w = v.videoWidth;
      h = v.videoHeight;
      canvas.width = w;
      canvas.height = h;
      ctx.fillRect(0, 0, w, h);
      ctx.drawImage(v, 0, 0, w, h);
      const a = canvas.toDataURL();
      v.style.backgroundImage = `url(${a})`;
      v.style.backgroundSize = "cover";
      ctx.clearRect(0, 0, w, h); // clean the canvas
    } catch (e) {
      console.log(e);
    }
  }

  function screenshot(useWorkaround = true) {
    setDownloading(true)

    if (useWorkaround) {
      captureVideos();
    }
    html2canvas(document.getElementById("container")).then((canvas) => {
      var link = document.createElement("a");
      link.download = "pause.png";
      link.href = canvas.toDataURL();
      link.click();
      setDownloading(false)
    });
  }

  return (
    <VideoContainer>
      <canvas id="canvas" hidden></canvas>
      <VideoInnerContainer id="container">
        <LottiePlayer width={300} height={300} index={index} />
        <WebcamStyled
          id={"video"}
          audio={false}
          videoConstraints={videoConstraints}
        />
      </VideoInnerContainer>
      <VideoInnerContainer>
        <CloseButton />
      </VideoInnerContainer>
      <VideoInnerContainer>
        <TakeScreenshotButton getScreenshot={screenshot} downloading={downloading} />
      </VideoInnerContainer>

      <img hidden={true} />
    </VideoContainer>
  );
};

const VideoContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
`;

const VideoInnerContainer = styled.div`
  position: absolute;
  height: 100vh;
  margin-left: auto;
  width: 100%;
  margin-right: auto;
  left: 0;
  right: 0;
`;

const ExportedVideoContainer = styled.div`
  height: 400px;
  width: 400px;
`;


function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
