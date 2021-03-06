import React, { useEffect, useRef } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

const ErrorModal = (props) => {
  const errorModal = useRef();
  const { onClear, error } = props;

  useEffect(() => {
    const options = {
      onCloseEnd: () => {
        onClear();
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: true,
      startingTop: "4%",
      endingTop: "10%"
    };

    let modalInstance = M.Modal.init(errorModal.current, options);
    modalInstance.open();

    return () => {
      modalInstance.close();
    };
  }, [onClear]);

  return (
    <div ref={errorModal} id="modal1" className="modal">
      <div className="modal-content">
        <h4>An Error Occurred!</h4>
        <p>{error}</p>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          className="modal-close waves-effect waves-green btn-flat"
          onClick={onClear}
        >
          OK
        </a>
      </div>
    </div>
  );
};

export default ErrorModal;
