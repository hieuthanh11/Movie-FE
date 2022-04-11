import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CancelIcon from "@mui/icons-material/Cancel";
import { Button } from "@mui/material";
const ModalTrailer = ({ open, handleClose, trailer }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Button
          variant='outlined'
          sx={{ marginY: "20px" }}
          onClick={() => {
            handleClose();
          }}
        >
          <CancelIcon sx={{ fontSize: "40px" }} />
        </Button>
        <iframe
          width='600px'
          height='400px'
          src={trailer}
          frameborder
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        />
      </Box>
    </Modal>
  );
};

export default ModalTrailer;
