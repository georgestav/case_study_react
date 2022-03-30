import React, { useEffect } from "react";

function Comparison({ compareEstates }) {
	/* 
        As the functions execute for both components, 
        check the value of the last selected listing and if it is matching the id of [0] indexed
        item compare against the [1] indexed item.

        else compare [0] indexed item against [1] indexed
    */

	const estimateFloorArea = (compareEstate) => {
		if (compareEstate.id === compareEstates[0].id) {
			// "first", compareEstate.building_area
			// "second", compareEstates[1].building_area
			if (compareEstate.building_area > compareEstates[1].building_area) {
				return "negative";
			} else {
				return "positive";
			}
		} else {
			// "first", compareEstates[0].building_area
			// "second", compareEstates[1].building_area
			if (
				compareEstates[0].building_area <
				compareEstates[1].building_area
			) {
				return "negative";
			} else {
				return "positive";
			}
		}
	};

	const estimateLandArea = (compareEstate) => {
		if (compareEstate.id === compareEstates[0].id) {
			// "first", compareEstate.land_area
			// "second", compareEstates[1].land_area
			if (compareEstate.land_area < compareEstates[1].land_area) {
				return "negative";
			} else {
				return "positive";
			}
		} else {
			// "first", compareEstates[0].land_area
			// "second", compareEstates[1].land_area
			if (compareEstates[0].land_area > compareEstates[1].land_area) {
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
			if (compareEstate.prize_czk > compareEstates[1].prize_czk) {
				return "negative";
			} else {
				return "positive";
			}
		} else {
			// "first", compareEstates[0].prize_czk
			// "second", compareEstates[1].prize_czk
			if (compareEstates[0].prize_czk < compareEstates[1].prize_czk) {
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
			<>
				{compareEstates.map((compareEstate) => {
					return (
						<div
							key={compareEstate.id}
							className="selected__estate__card"
						>
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
										compareEstates.length > 1
											? estimatePrice(compareEstate)
											: ""
									}`}
								>
									<div className="properties">Price</div>
									<div className="properties--price">
										{compareEstate.prize_czk} Kc
									</div>
								</div>
								<div className="properties__container">
									<div className="properties">Locality</div>
									<div className="properties--locality">
										{compareEstate.locality}
									</div>
								</div>
								<div
									className={`properties__container ${
										compareEstates.length > 1
											? estimateFloorArea(compareEstate)
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
											? estimateLandArea(compareEstate)
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
									<div className="agency--name">
										{compareEstate.company_name}
									</div>
								</div>
								{/* properties__container close tag */}
							</div>
							{/* .selected__estate__details close tag */}
						</div>
					);
				})}
			</>
		);
	}
}

export default Comparison;
