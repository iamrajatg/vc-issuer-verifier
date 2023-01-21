import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import QRCode from "react-qr-code";
import Typography from "@mui/material/Typography";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LOCAL_ENV } from "./config";

const style = {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  // alignItems: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  height: "90vh",
  bgcolor: "background.paper",
  borderRadius: 10,
  boxShadow: 24,
  p: 4,
  mt:'50px'
};

const innerContent = {
  display: "flex",
  flexDirection: "column",
};

function CredentialsScreen({ credentials }) {
  const renderCredentials = (credentials) => {
    return credentials.map((cred) => {
      cred =  cred.data
      return (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{cred.type?.[1]||cred.type?.[0]||"Credential"}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ mb: 2 }}>
              Scan QR Code from TimesWallet app to load it into Wallet.
            </Typography>
            <div
              style={{
                height: "auto",
                margin: "0 auto",
                maxWidth: 300,
                width: "100%",
              }}
            >
              <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={JSON.stringify(cred)}
                viewBox={`0 0 256 256`}
              />
              <Typography sx={{ mb: 1,mt:1 }}>OR</Typography>

              <a href={`tilwallet://addvc?vc=${btoa(JSON.stringify(cred))}`}>Load in Wallet App</a>
              <br />
              {/* {LOCAL_ENV && <a href={`exp://f2-kng.rajat_gupta94.19000.exp.direct:80/--/addvc?vc=${btoa(JSON.stringify(cred))}`}>
                Load in Wallet App EXPO
              </a>} */}
            </div>
          </AccordionDetails>
        </Accordion>
      );
    });
  };
  return (
    <Box sx={style}>
      <Box sx={innerContent}>
        <Typography sx={{ mb: 2 }}>
          LOAD YOUR SUBSCRIPTIONS CREDENTIALS IN TIMES WALLET TO EASILY ACCESS
          YOUR SUBSCRIPTIONS
        </Typography>
        {renderCredentials(credentials)}
      </Box>
    </Box>
  );
}

export default CredentialsScreen;
