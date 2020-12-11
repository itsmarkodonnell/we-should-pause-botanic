import React from "react";
import Sheet from "react-modal-sheet";
import styled from "styled-components";
import { navigate } from "@reach/router"

import MarkersList from "../data";
import { Button } from "./Button";
export const ModalSheet = ({ isOpen, toggleIsOpen, activePin }) => {
  return (
    <Sheet
      isOpen={isOpen}
      onClose={() => toggleIsOpen(!isOpen)}
      snapPoints={[400, 0]}
      initialSnap={0}
    >
      <Sheet.Container>
        <Sheet.Header>
          <HeaderContainer>
            <HeaderText>
              {activePin !== undefined
                ? `${MarkersList[activePin].title}`
                : null}
            </HeaderText>
          </HeaderContainer>
        </Sheet.Header>
        <Sheet.Content style={{ paddingRight: "10px", paddingLeft: "10px" }}>
          <Quote>
            {activePin !== undefined ? `${MarkersList[activePin].p1}` : null}
          </Quote>
          {activePin !== undefined ? (
            `${MarkersList[activePin].p2}` !== "" ? (
              <Quote>{MarkersList[activePin].p2}</Quote>
            ) : null
          ) : null}

          <Author>
            <span>- </span>
            {activePin !== undefined
              ? `${MarkersList[activePin].author}`
              : null}
          </Author>
          <ButtonContainer>
            <Button onClick={() => navigate(`/${activePin}`)}>Watch</Button>
          </ButtonContainer>
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
};

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.h2`
  margin-top: 0px;
  margin-bottom: 0px;
`;

const HeaderContainer = styled.div`
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Quote = styled.h4`
  font-style: italic;
  text-align: center;
  margin-right: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: 300;
`;

const Author = styled.h4`
  text-align: center;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: 500;
`;
