import { useState } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 500px;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  z-index: 2;
`;

export const Modal = ({ children, openModalButtonText }) => {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <>
      <button onClick={() => setShouldShow(true)}>{openModalButtonText}</button>
      {shouldShow && (
        <ModalBackground onClick={() => setShouldShow(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <button
              onClick={(e) => {
                setShouldShow(false);
              }}
            >
              Close Modal
            </button>
            {children}
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
};
