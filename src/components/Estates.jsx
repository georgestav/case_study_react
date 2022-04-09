import React from "react";

function Estates({ estates, setCompareEstates, compareEstates }) {
  const estateSelected = (estate) => {
    //1. spead the estates existing in the array from the first selection of estates
    const previousEstate = [...compareEstates]; // [{},{}]
    //2. limit the selection to two estates to compare
    if (compareEstates.length < 2) {
      //4. error handling, avoid clicking same id twice
      if (compareEstates.length > 0 && previousEstate[0].id === estate.id) {
        return;
      }
      previousEstate.push(estate);
    } else {
      return;
    }
    //3. set state of the estates to compare with the array generated above
    setCompareEstates(previousEstate);
  };

  return (
    <>
      {/* start rendering results from the first item selected */}
      {estates.map((estate) => {
        return (
          <div
            className="estate__container"
            key={estate.id}
            onClick={() => estateSelected(estate)}
          >
            <img
              className="estate__image"
              src={estate.images[0]}
              alt={estate.locality}
            />
            <div className="estate__description">
              {`${estate.name_extracted} ${estate.locality}`}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Estates;
