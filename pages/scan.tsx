import { Container, Card, CardContent, Grid, TextField, Button } from "@mui/material";
import { message } from "antd";
import { makeStyles } from "@mui/styles";
import NavigationBar from "../components/NavigationBar/Navigationbar";
import QRCode from "qrcode";
import { QrReader } from "react-qr-reader";
import { useState } from "react";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import { parseCookies } from "nookies";


const Scanner = () => {

  const success = () => {
    message.success('Successfully recorded Date!!!');
  };

  const jwt = parseCookies().jwt;

  const [text, setText] = useState("");
  const [imgURL, setImgURL] = useState("");
  const classes = useStyles();
  const [data, setData] = useState('No result');

  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(text);
      setImgURL(response)
    }
    catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <div className={classes.body}>
        <div className={classes.containerWidth} >
          <Container className={classes.container}>
            <Card>
              <h2 className={classes.title}>Generate Download and Scan</h2>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xl={6} lg={6}>
                    <TextField onChange={(e) => setText(e.target.value)} label="Enter text here" />
                    <Button className={classes.btn} variant="contained" color="primary" onClick={() => generateQrCode()}>Generate</Button>
                    {imgURL && (
                      <a href={imgURL} download>
                        <img style={{ width: 200 }} src={imgURL}></img>
                      </a>
                    )}
                  </Grid>
                  <Grid item xl={6} lg={6}>
                    <Button className={classes.btn} variant="contained" color="secondary" >Scan QR code</Button>
                    <QrReader
                      constraints={{}}
                      onResult={(result, error) => {
                        if (!!result) {
                          setData(result.getText());
                          const today = new Date();
                          const dd = String(today.getDate()).padStart(2, '0');
                          const mm = String(today.getMonth() + 1).padStart(2, '0');
                          const yyyy = today.getFullYear();

                          const date = yyyy + '-' + mm + '-' + dd;
                          axios.post("http://localhost:1337/api/records", {
                            data: {
                              entry_time: today.toISOString(),
                              date: date
                            },
                          }, {
                            headers: {
                              Authorization: `Bearer ${jwt}`
                            }
                          }).then(res => {
                            console.log(res);
                            success();
                          });
                        }
                        if (!!error) {
                          console.info(error);
                        }
                      }}
                    />
                    <p>{data}</p>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Container>
        </div>
        <div className={classes.navigationWidth}>
          <NavigationBar />
        </div>
      </div>
      <Footer />
    </div>
  )
}

const useStyles: any = makeStyles((theme: any) => ({
  body: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: "3% 7%"
  },
  container: {
    marginTop: 10
  },
  containerWidth: {
    width: "75%"
  },
  navigationWidth: {
    width: "25%"
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#91d5ff",
    padding: 20
  },
  btn: {
    marginTop: 10,
    marginBottom: 20
  }
}));

export default Scanner;
