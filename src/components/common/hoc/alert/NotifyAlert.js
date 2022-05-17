import React from "react";

import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import Toast from "./Toast";
import { notifyAction } from "../../redux/actions/notyfy";

const NotifyAlert = () => {
  const state = useSelector((state) => state);
  const { notify } = state;
  //   console.log(typeof notType);
  const dispatch = useDispatch();
  const handelShow = () => {
    dispatch(notifyAction({}));
  };
  return (
    <div>
      {notify.loading && <Loading />}
      {notify.success && (
        <Toast
          msg={notify.success}
          handelSHow={handelShow}
          bgColor="bg-success"
        />
      )}
      {notify.error && (
        <Toast msg={notify.error} handelSHow={handelShow} bgColor="bg-danger" />
      )}
    </div>
  );
};

NotifyAlert.propTypes = {
  notType: PropTypes.object,
};

export default NotifyAlert;
