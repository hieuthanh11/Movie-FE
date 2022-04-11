import { Typography } from "@mui/material";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./style";
const Loading = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => {
    return state.LoadingReducer;
  });
  return (
    <Fragment>
      {isLoading ? (
        <div className={styles.root}>
          <img
            width={600}
            height={600}
            src='../../assets/img/loading.gif'
            alt='loading'
          />
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default Loading;
