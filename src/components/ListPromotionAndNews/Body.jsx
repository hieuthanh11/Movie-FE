import { Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import useStyles from "./style";
const Body = ({ dataNew, start, end }) => {
  const styles = useStyles();
  return (
    <>
      <div className={styles.listNew}>
        {dataNew.slice(start, end).map((item) => {
          return (
            <div key={item.id} className={styles.newItem}>
              <div className={styles.eventDate}>
                <Typography variant='body2'>{item.day}</Typography>
                <Typography color='secondary.contrastText'>
                  {item.month}
                </Typography>
              </div>
              <div className={styles.control}>
                <img className={styles.img} src={item.image} alt={item.image} />
              </div>
              <div className={styles.content}>
                <div className={styles.title}>
                  <Typography variant='h5' color='secondary.main'>
                    {item.title}
                  </Typography>
                </div>
                <NavLink className={styles.navLink} to='/contact'>
                  <Typography variant='subtitle1' color='warning.main'>
                    {item.subTitle}
                  </Typography>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Body;
