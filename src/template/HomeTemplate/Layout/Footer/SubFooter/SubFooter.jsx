import { Container, TextField, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useStyles from "./style";
import { useTranslation } from "react-i18next";
const SubFooter = () => {
  const { t, i18n } = useTranslation();
  const styles = useStyles();
  return (
    <Container className={styles.root} maxWidth='lg'>
      <div className={styles.content}>
        <div style={{ zIndex: 99 }}>
          <Typography
            sx={{
              letterSpacing: "5px",
              fontWeight: "bolder",
            }}
            gutterBottom
            color='warning.main'
            variant='h5'
          >
            {t("SUBCRIBE TO CGV")}
          </Typography>
          <Typography
            sx={{ letterSpacing: "5px", fontWeight: "bolder" }}
            variant='h4'
            color='secondary.contrastText'
          >
            {t("TO GET EXCLUSIVE BENIFITS")}
          </Typography>
          <Box component='form'>
            <TextField
              margin='dense'
              required
              size='small'
              label='Your Email Address'
              autoFocus
            />
            <Button
              sx={{ marginTop: "10px" }}
              variant='contained'
              color='warning'
            >
              {t("Subcribe")}
            </Button>
          </Box>
        </div>
      </div>
    </Container>
  );
};

export default SubFooter;
