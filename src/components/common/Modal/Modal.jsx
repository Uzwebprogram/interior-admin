import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

function ModalCommon({ open, handleClose, children , width }){
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: width,
    bgcolor: "#000",
    border: "2px solid #000",
    boxShadow: "0px 0px 10px 10px #ff800b",
    borderRadius : "10px",
    overflowY: 'auto',
    height: '350px',
    p: 2,
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </>
  );
};

export default ModalCommon;
