import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { QrReader } from "react-qr-reader";
import { useHistory } from "react-router-dom";

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

function QRScreen({ setDid }) {
  const [data, setData] = useState("");
  const history = useHistory();

  return (
    <Box sx={{ xIndex: 10 }}>
      <Box sx={style}>
        <Box sx={innerContent}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Scan DID QR
          </Typography>
          <QrReader
            containerStyle={{ width: "35%" }}
            onResult={(result, error) => {
              if (!!result) {
                setData(result?.text);
              }

              if (!!error) {
                console.info(error);
              }
            }}
          />
          <p>{data}</p>
          {data && (
            <Button
              onClick={() => {
                setDid(data);
                history.replace(`/subscription`);
              }}
              variant="contained"
              sx={{ width: "200px", mt: 2 }}
            >
              Load Scanned DID
            </Button>
          )}
          {!data && (
            <Button
              onClick={() => {
                history.replace(`/subscription`);
              }}
              variant="contained"
              sx={{ width: "200px", mt: 2 }}
            >
              BACK
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default QRScreen;
