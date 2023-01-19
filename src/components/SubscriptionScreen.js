import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { Button, TextField } from "@mui/material";
import {useHistory} from 'react-router-dom'
import axios from 'axios'


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
    const toiPromise = axios.post('',{

    })
    const etPromise = axios.post('',{

    })
    try {
      await setTimeout(()=>{

      },1000)
      // const credentials = await Promise.all([toiPromise,etPromise])
      let credentials=[{
        name:'TOI Subscription',
        vc: `{
          "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://www.w3.org/2018/credentials/examples/v1"
          ],
          "id": "http://example.gov/credentials/3732",
          "type": [
          "VerifiableCredential",
          "UniversityDegreeCredential"
          ],
          "issuer": {
          "id": "did:web:vc.transmute.world"
          },
          "issuanceDate": "2020-03-10T04:24:12.164Z",
          "credentialSubject": {
          "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
          "degree": {
          "type": "BachelorDegree",
          "name": "Bachelor of Science and Arts"
          }
          },
          "proof": {
          "type": "JsonWebSignature2020",
          "created": "2020-03-21T17:51:48Z",
          "verificationMethod": "did:web:vc.transmute.world#_Qq0UL2Fq651Q0Fjd6TvnYE-faHiOpRlPVQcY_-tA4A",
          "proofPurpose": "assertionMethod",
          "jws": "eyJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdLCJhbGciOiJFZERTQSJ9..OPxskX37SK0FhmYygDk-S4csY_gNhCUgSOAaXFXDTZx86CmI5nU9xkqtLWg-f4cqkigKDdMVdtIqWAvaYx2JBA"
          }
          }`
      },
      {
        name:'ET Subscription',
        vc:`{
          "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://www.w3.org/2018/credentials/examples/v1"
          ],
          "id": "http://example.gov/credentials/3732",
          "type": [
          "VerifiableCredential",
          "UniversityDegreeCredential"
          ],
          "issuer": {
          "id": "did:web:vc.transmute.world"
          },
          "issuanceDate": "2020-03-10T04:24:12.164Z",
          "credentialSubject": {
          "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
          "degree": {
          "type": "BachelorDegree",
          "name": "Bachelor of Science and Arts"
          }
          },
          "proof": {
          "type": "JsonWebSignature2020",
          "created": "2020-03-21T17:51:48Z",
          "verificationMethod": "did:web:vc.transmute.world#_Qq0UL2Fq651Q0Fjd6TvnYE-faHiOpRlPVQcY_-tA4A",
          "proofPurpose": "assertionMethod",
          "jws": "eyJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdLCJhbGciOiJFZERTQSJ9..OPxskX37SK0FhmYygDk-S4csY_gNhCUgSOAaXFXDTZx86CmI5nU9xkqtLWg-f4cqkigKDdMVdtIqWAvaYx2JBA"
          }
          }`
      }]
      if(credentials){
        setCredentials(credentials)
        setLoading(false)
        history.replace('/creds')
      }
    } catch (error) {
      setLoading(false)
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
