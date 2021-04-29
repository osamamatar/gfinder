import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
export const Alert = ({ alert }) => {
  const alertcontext = useContext(AlertContext);
  return (
    alertcontext.alert !== null && (
      <div className={`alert alert-${alertcontext.alert.type}`}>
        <i className='fas fa-info-circle'></i> {alertcontext.alert.msg}
      </div>
    )
  );
};
