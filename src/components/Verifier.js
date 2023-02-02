import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, CircularProgress } from "@mui/material";
import QRModal from "./QRModal";
import axios from "axios";
import { BASE_URL } from "./config";
const style = {
  // position: "absolute",
  display: "flex",
  justifyContent: "center",
  // alignItems: "center",
  top: "50%",
  left: "50%",
  // transform: "translate(-50%, -50%)",
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

function Verifier({ match, history, location }) {
  const [vc, setVc] = useState("");
  const [loading, setLoading] = useState("");
  const [data, setData] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [login, setLogin] = useState(false);

  const verifyCredential = (vcParam, base64 = false) => {
    try {
      if (base64) vcParam = atob(vcParam);
      let vcJson = null
      let url = ""
      let body = null
      console.log('param',vcParam)
      if(base64){
      const presentation = JSON.parse(vcParam);
       vcJson = presentation.verifiableCredential
       url = "/vc/presentation/verify"
       body = {
        presentation:presentation
       }
      }
      else{
        vcJson = JSON.parse(vcParam)
        url = "/vc/verify"
        body={
          credential:vcJson
        }
      }
      if (
        (vcJson?.type?.[1] === "Economic Times+ Subscription" &&
          match.params.service === "et") ||
        (vcJson?.type?.[1] === "Times Of India+ Subscription" &&
          match.params.service === "toi") ||
          (vcJson?.type?.[1] === "Cricbuzz+ Subscription" &&
          match.params.service === "cricbuzz") ||
        (vcJson?.type?.[1] === "Gaana+ Subscription" &&
          match.params.service === "gaana")
      ) {
        setLoading(true);
        axios
          .post(BASE_URL + url, body)
          .then((res) => {
            setLoading(false);
            if (res.data.verified === "true") {
              setLogin(true);
              setVc("")
            } else {
              setLoading(false);
              setVc("")
              alert("Invalid Subscription Credential1");
            }
          });
      } else {
        setLoading(false);
        setVc("")
        alert(JSON.stringify(vcJson)+"-"+match.params.service);
      }
      setLoading(false);
    } catch (error) {
      console.error(error)
      setLoading(false);
      setVc("")
      alert("Some Error Occured While Verifying");
    }
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const vcParam = queryParams.get("vp");
    if (vcParam) {
      verifyCredential(vcParam,true);
    }
  }, []);

  useEffect(() => {
    if (vc) {
      verifyCredential(vc);
    }
  }, [vc]);

  useEffect(() => {
    if (login) {
      setTimeout(() => {
        if (match.params.service === "toi")
          window.location = "https://timesofindia.indiatimes.com/";
        else if (match.params.service === "et")
          window.location = "https://economictimes.indiatimes.com/?from=mdr";
        else if (match.params.service === "gaana")
          window.location = "https://gaana.com";
        else if (match.params.service === "cricbuzz")
          window.location = "https://www.cricbuzz.com/";
      }, 1500);
    }
  }, [login]);

  const getServiceDisplayName = (service) => {
    switch (service) {
      case "toi":
        return "Times Of India+";
      case "et":
        return "Economic Times+";
      case "gaana":
        return "Gaana+";
      case "cricbuzz":
          return "Cricbuzz+";
      default:
        return "";
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Box sx={style}>
        <Box sx={innerContent}>
          {!getServiceDisplayName(match.params.service) && history.replace("/")}
          {!login && (
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Welcome to {getServiceDisplayName(match.params.service)}{" "}
            </Typography>
          )}
          {!loading && !login && (
            <Button
              onClick={() => setOpenModal(true)}
              variant="contained"
              sx={{ width: "200px", mt: 2 }}
            >
              {" "}
              Scan Subscription Credential To Login
            </Button>
          )}
          {openModal && (
            <QRModal
              setVc={setVc}
              setOpenModal={setOpenModal}
              setData={setData}
              data={data}
            />
          )}

          {loading && <CircularProgress />}
          {login && <Typography variant="h3">Login Successful!!!</Typography>}
          {login && (
            <>
              <CircularProgress />
              <Typography variant="h3">Loading Prime Content...</Typography>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Verifier;
