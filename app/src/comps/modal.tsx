import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import styled from '@emotion/styled'

const CustomBackdrop = styled.div`
  opacity: 0.7;
  display:flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  maxWidth: "400px";
  z-index: 1000;
`;

const Container = styled.div({
    position: 'absolute',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    boxShadow: "grey",
    outline: "none",
    width:'100%',
    height:'25%',
    maxWidth: "450px"
})

function getModalStyle() {
    return {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    };
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalBase = ({ children, isOpen, onClose }: Props) => {
  const [modalStyle] = useState(getModalStyle);

  return (
    <>
      <Modal 
        open={isOpen}
        onClose={onClose}
        slots={{ backdrop: CustomBackdrop }}
      >
        <Container style={modalStyle}>
          {children}
        </Container>
      </Modal>
    </>
  );
};

export default ModalBase;