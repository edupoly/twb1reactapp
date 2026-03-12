import React from "react";

function Address(props) {
  function handleAddressRef(ev) {
    console.log(props);
    if (ev.key === "Enter") {
      //   props.prf.current.focus();
      props.focusR4();
    }
  }
  return (
    <div className="mybox">
      <h1>Address</h1>
      <input
        type="text"
        ref={props.rf}
        onKeyUp={(ev) => {
          handleAddressRef(ev);
        }}
      />
    </div>
  );
}

export default Address;
