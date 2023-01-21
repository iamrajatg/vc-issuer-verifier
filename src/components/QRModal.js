import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { QrReader } from "react-qr-reader";

const style = {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  // alignItems: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "98vw",
  height: "98vh",
  bgcolor: "background.paper",
  borderRadius: 10,
  boxShadow: 24,
  p: 4,
};

const innerContent = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100%",
};

function QRModal({ setVc,setOpenModal,setData,data}) {

  return (
    <Box sx={{ xIndex: 10 }}>
      <Box sx={style}>
        <Box sx={innerContent}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Scan Credential QR
          </Typography>
          {data && (
            <Button
              onClick={() => {
                setVc(data);
                setOpenModal(false)
              }}
              variant="contained"
              sx={{ width: "200px", mt: 2 }}
            >
              Login From Scanned Credential
            </Button>
          )}
          {!data && (
            <Button
              onClick={() => {
               setOpenModal(false)
              }}
              variant="contained"
              sx={{ width: "200px", mt: 2 }}
            >
              BACK
            </Button>
          )}
          <QrReader
            containerStyle={{ width: "50%" }}
            onResult={(result, error) => {
              if (!!result) {
                setData(result?.text);
              }

              if (!!error) {
                console.info(error);
              }
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default QRModal;
