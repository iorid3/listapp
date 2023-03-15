import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import styled from "@emotion/styled";

const CustomBackdrop = styled.div({
  opacity:0.03,
  background:"#e8e7e6",
  display: "flex",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  maxwidth: "400px",
  zIndex: 1000
})



const Container = styled.div({
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "grey",
  outline: "none",
  width: "100%",
  height: "25%",
  maxWidth: "450px",
  minHeignt: "500px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalBase = ({ children, isOpen, onClose }: Props) => {

  return (
    <>
      <Modal
        open={isOpen}
        onClose={onClose}
        slots={{ backdrop: CustomBackdrop }}
      >
        <Container>{children}</Container>
      </Modal>
    </>
  );
};

export default ModalBase;
