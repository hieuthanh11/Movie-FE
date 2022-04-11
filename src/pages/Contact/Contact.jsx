import { Container, Grid, TextField, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useStyles from "./style";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t, i18n } = useTranslation();
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Container maxWidth='lg'>
        <Grid sx={{ padding: "0 24px" }} container spacing={5}>
          <Grid item md={6}>
            <Typography variant='h5' color='secondary'>
              {t("CONTACT US")}
            </Typography>
            <Typography
              sx={{ margin: "20px 0" }}
              variant='h3'
              color='primary.main'
            >
              {t("GET IN TOUCH")}
            </Typography>
            <Typography variant='p' color='secondary.light'>
              {t(
                "We’d love to talk about how we can work together. Send us a message below and we’ll respond as soon as possible"
              )}
            </Typography>
            <Box component='form'>
              <TextField
                InputLabelProps={{ style: { color: "green" } }}
                margin='normal'
                required
                fullWidth
                label={t("FullName")}
                autoFocus
              />
              <TextField
                InputLabelProps={{ style: { color: "green" } }}
                margin='normal'
                required
                fullWidth
                label='Email'
                autoComplete='email'
                autoFocus
              />
              <TextField
                InputLabelProps={{ style: { color: "green" } }}
                margin='normal'
                required
                fullWidth
                label={t("Subject")}
                autoFocus
              />
              <TextField
                InputLabelProps={{ style: { color: "green" } }}
                margin='normal'
                required
                fullWidth
                autoFocus
                label={t("Message")}
                multiline
                rows={5}
              />
              <Button
                fullWidth
                sx={{ color: "#fff", marginTop: "16px" }}
                className={styles.btn}
              >
                {t("SEND MESSAGE")}
              </Button>
            </Box>
          </Grid>
          <Grid item md={6}>
            <img
              style={{ width: "100%", height: "100%", borderRadius: "20px" }}
              src='../../assets/img/contact.jpg'
              alt='contact'
            />
            <div className={styles.infoArea}>
              <div className={styles.infoItem}>
                <img
                  className={styles.itemImage}
                  src='../../assets/img/item3.png'
                  alt='item'
                />
                <div className={styles.infoContent}>
                  <Typography variant='h6' color='secondary.contrastText'>
                    {t("PHONE NUMBER")}
                  </Typography>
                  <Typography variant='p' color='secondary.contrastText'>
                    +1234 56789
                  </Typography>
                </div>
              </div>
              <div className={styles.infoItem}>
                <img
                  className={styles.itemImage}
                  src='../../assets/img/item4.png'
                  alt='item'
                />
                <div className={styles.infoContent}>
                  <Typography variant='h6' color='secondary.contrastText'>
                    EMAIL
                  </Typography>
                  <Typography variant='p' color='secondary.contrastText'>
                    Info@gmail.com
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;
