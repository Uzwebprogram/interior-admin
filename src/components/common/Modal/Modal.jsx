import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";



function ModalCommon({ open, handleClose, children , width , styles , height }){
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: width,
    bgcolor: "#2F66B8",
    border: "2px solid #2F66B8",
    boxShadow: "0px 0px 6px 4px gray",
    borderRadius : "10px",
    overflowY: 'auto',
    height:height,
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
        <Box sx={style} style={styles}>{children}</Box>
      </Modal>
    </>
  );
};

export default ModalCommon;
