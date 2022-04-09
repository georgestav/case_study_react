import React, { Fragment } from "react";

function Estate({
  compareEstates,
  compareEstate,
  estimatePrice,
  estimateArea,
}) {
  return (
    <Fragment>
      <div className="selected__estate__card">
        <img
          className="selected__estate__image"
          src={compareEstate.images[0]}
          alt={compareEstate.locality}
        />

        <div className="selected__estate__details">
          <div className="selected__estate__properties">
            {compareEstate.name}
          </div>
          <div
            className={`properties__container ${
              compareEstates.length > 1 ? estimatePrice(compareEstate) : ""
            }`}
          >
            <div className="properties">Price</div>
            <div className="properties--price">
              {compareEstate.prize_czk} Kc
            </div>
          </div>
          <div className="properties__container">
            <div className="properties">Locality</div>
            <div className="properties--locality">{compareEstate.locality}</div>
          </div>
          <div
            className={`properties__container ${
              compareEstates.length > 1
                ? estimateArea(compareEstate, "building_area")
                : ""
            }`}
          >
            <div className="properties">Floor area</div>
            <div className="properties--floor_area">
              {compareEstate.building_area} m²
            </div>
          </div>
          <div
            className={`properties__container ${
              compareEstates.length > 1
                ? estimateArea(compareEstate, "land_area")
                : ""
            }`}
          >
            <div className="properties">Land area</div>
            <div className="properties--land_area">
              {compareEstate.land_area} m²
            </div>
          </div>
          <div className="properties__container agency">
            <img
              className="properties--logo"
              src={compareEstate.company_logo}
              alt={compareEstate.company_name}
            />
            <div className="agency--name">{compareEstate.company_name}</div>
          </div>
          {/* properties__container close tag */}
        </div>
        {/* .selected__estate__details close tag */}
      </div>
    </Fragment>
  );
}

export default Estate;
