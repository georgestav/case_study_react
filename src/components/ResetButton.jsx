import React, { Fragment } from "react";

function ResetButton({ setCompareEstates, compareEstates }) {
  const handleReset = () => {
    setCompareEstates([]);
  };

  if (compareEstates.length === 2) {
    return (
      <Fragment>
        <div className="resetButton__container">
          <button className="resetButton" onClick={handleReset}>
            Reset comparison
          </button>
        </div>
      </Fragment>
    );
  } else {
    return <Fragment />;
  }
}

export default ResetButton;
