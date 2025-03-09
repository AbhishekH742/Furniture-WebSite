import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCloser,
  unsetCloser,
  closer,
  unsetShoppingcart,
  unsetNavbar,
  unsetLogin,
} from "../features/Activity/activity";

const Closer = (props) => {
  const dispatch = useDispatch();
  const close = useSelector(closer);
  const onClose = () => {
    if (close === "closer") {
      dispatch(setCloser());
    } else {
      dispatch(unsetCloser());
      dispatch(unsetShoppingcart());
      dispatch(unsetNavbar());
      dispatch(unsetLogin());
    }
  };

  return (
    <div>
      <div id={close} className="ri-close-line" onClick={onClose}></div>
    </div>
  );
};

export default Closer;
