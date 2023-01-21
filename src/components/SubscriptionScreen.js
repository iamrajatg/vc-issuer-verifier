import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { Button, TextField } from "@mui/material";
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import { BASE_URL, ISSUER_DID } from "./config";


const style = {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  height: "80vh",
  bgcolor: "background.paper",
  borderRadius: 10,
  boxShadow: 24,
  p: 4,
};

const innerContent = {
  display: "flex",
  flexDirection: "column",
};

function SubscriptionScreen({ loading, setLoading ,did,setDid,setCredentials}) {
  
  const history=useHistory()
  const issueCredentials = async ()=>{
    if(!did)
    return
    setLoading(true)
    try {
      const toiPromise = axios.post(`${BASE_URL}/vc/issue`,
        {
          "subjectDID":did,
          "issuerDID":ISSUER_DID,
          "duration":"2160",
          "claims":{
              "name":"TOI",
              "url":`${window.location.origin}/subscriptions/toi`
          },
          "type":"Times Of India Subscription"
      }
      )
      const etPromise = axios.post(`${BASE_URL}/vc/issue`,
        {
          "subjectDID":did,
          "issuerDID":ISSUER_DID,
          "duration":"2160",
          "claims":{
              "name":"ET",
              "url":`${window.location.origin}/subscriptions/et`
          },
          "type":"Economic Times Subscription"
      }
      )
    
      const credentials = await Promise.all([toiPromise,etPromise])
      setLoading(false)
      if(credentials){
        setCredentials(credentials)
        setLoading(false)
        history.replace('/creds')
      }
    } catch (error) {
      setLoading(false)
      alert('Error Issuing Credentials,Please Try Again.')
    }
  }


  useEffect(() => {
    const clear = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(clear);
    };
  }, []);

  return (
    <>
    <Box
    >
      <Box sx={style}>
        {loading && <CircularProgress />}
        {!loading && (
          <Box sx={innerContent}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              You have successfully subscribed to Times Prime.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2,mb:5 }}>
              Please provide DID to issue Verifiable Credentials for your
              subscriptions which you can load in your TimesWallet app.
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              You can enter your DID in the input field below
            </Typography>
            <TextField
              placeholder="Enter DID"
              value={did}
              onChange={(e) => {
                setDid(e.target.value);
              }}
            />

            <Typography id="modal-modal-title" variant="h6" component="h2">
              OR
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              You can scan your DID by clicking on button below
            </Typography>
            <Button onClick={()=>history.push('/scandid')} variant="contained" sx={{width:'200px',mt:2}}>Scan DID QR</Button>
            <Button disabled={!did} onClick={issueCredentials} variant="contained" sx={{mt:4}}>ISSUE CREDENTIALS</Button>
          </Box>
        )}
      </Box>
    </Box>
   
    </>
  );
}

export default SubscriptionScreen;
