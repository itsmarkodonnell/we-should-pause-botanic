import React, { useEffect, useState } from "react";
import { Storage } from "aws-amplify";
import styled from "styled-components";
import Spinner from "../components/Spinner";
import Lottie from "react-lottie";

export const LottiePlayer = ({ width, height, index }) => {
  const [isDownloaded, toggleIsDownloaded] = useState();
  const [downloadedJsonFile, setJsonFile] = useState();

  useEffect(() => {
    (async () => {
      await Storage.get(`${index}.json`, {
        download: true,
      })
        .then(async (file) => {
          const jsonFile = await new Response(file.Body).json();
          setJsonFile(jsonFile);
          toggleIsDownloaded(true);
        })
        .catch((err) => console.log("dead: ", err));
    })();
  }, []);

  return (
    <Background>
      {isDownloaded ? (
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid meet",
            },
            animationData: downloadedJsonFile,
          }}
          height={height}
          width={width}
          speed={2}
        />
      ) : (
        <Spinner />
      )}
    </Background>
  );
};

const Background = styled.div`
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  opacity: 1;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 50;
`;
