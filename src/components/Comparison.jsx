import React, { Fragment, useEffect } from "react";
import Estate from "./Estate";

function Comparison({ compareEstates }) {
  /* 
        As the functions execute for both components, 
        check the value of the last selected listing and if it is matching the id of [0] indexed
        item compare against the [1] indexed item.

        else compare [0] indexed item against [1] indexed
    */

  const estimateArea = (compareEstate, typeOfArea) => {
    if (compareEstate.id === compareEstates[0].id) {
      // "first", compareEstate.prize_czk
      // "second", compareEstates[1].prize_czk
      if (
        Number(compareEstate[typeOfArea]) <
        Number(compareEstates[1][typeOfArea])
      ) {
        return "negative";
      } else {
        return "positive";
      }
    } else {
      //   "first", compareEstates[0].prize_czk;
      //   "second", compareEstates[1].prize_czk;
      if (
        Number(compareEstates[0][typeOfArea]) >
        Number(compareEstates[1][typeOfArea])
      ) {
        return "negative";
      } else {
        return "positive";
      }
    }
  };

  const estimatePrice = (compareEstate) => {
    if (compareEstate.id === compareEstates[0].id) {
      // "first", compareEstate.prize_czk
      // "second", compareEstates[1].prize_czk
      if (
        Number(compareEstate.prize_czk) > Number(compareEstates[1].prize_czk)
      ) {
        return "negative";
      } else {
        return "positive";
      }
    } else {
      //   "first", compareEstates[0].prize_czk;
      //   "second", compareEstates[1].prize_czk;
      if (
        Number(compareEstates[0].prize_czk) <
        Number(compareEstates[1].prize_czk)
      ) {
        return "negative";
      } else {
        return "positive";
      }
    }
  };

  useEffect(() => {}, []);

  if (compareEstates.length === 0) {
    return <></>;
  } else {
    return (
      <Fragment>
        {compareEstates.map((compareEstate) => {
          return (
            <Estate
              key={compareEstate.id}
              compareEstates={compareEstates}
              compareEstate={compareEstate}
              estimatePrice={estimatePrice}
              estimateArea={estimateArea}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default Comparison;
