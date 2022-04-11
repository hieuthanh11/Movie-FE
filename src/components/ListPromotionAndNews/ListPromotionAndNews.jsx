import { Container, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import useStyles from "./style";
const ListPromotionAndNews = ({ title, start, end, children, dataNew }) => {
  const styles = useStyles();

  return (
    <div>
      <div className={start === 0 && end === 6 ? styles.banner : styles.topic}>
        <Typography variant='h3' color='secondary'>
          {title}
        </Typography>
      </div>
      {start === 0 && end === dataNew.length && (
        <Container>{children}</Container>
      )}
      {start !== 0 && end !== 6 && <>{children}</>}
    </div>
  );
};

export default ListPromotionAndNews;
