import React from "react";
import icon_filter from "../../assets/images/icons/filterIcon.svg";
import icon_menu from "../../assets/images/icons/menuIcon.svg";
import icon_list from "../../assets/images/icons/listIcon.svg";
import { Form } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { DATA_LAYER } from "../../App";

export default function AdvanceFilter() {
	const { colleges } = useContext(DATA_LAYER);
	const [isAdvanceFiterHidden, setIsAdvanceFiterHidden] = useState(true);
	const [resultCount, setResultCount] = useState(0);

	useEffect(() => {
		const fiterBoxElem = document.getElementById("advanceFilter__filterBox");
		if (isAdvanceFiterHidden) {
			fiterBoxElem.style.maxHeight = null;
			return;
		}
		fiterBoxElem.style.maxHeight = fiterBoxElem.scrollHeight + "px";
	}, [isAdvanceFiterHidden]);

	useEffect(() => {
		setResultCount(colleges ? colleges.length : 0);
	}, [colleges]);

	return (
		<>
			<div className="advanceFilter d-none">
				<div className="container-fluid">
					<div className="container">
						<div className="advanceFilter__box">
							<div className="advanceFilter__boxLeft">
								<div className="advanceFilter__result">
									<p>Showing {resultCount ? "1 - " + resultCount : "0 - 0"}</p>
								</div>
								<div className="advanceFilter__filterBtn">
									<button className="btn btnAdvaceFilter" onClick={(e) => setIsAdvanceFiterHidden(!isAdvanceFiterHidden)}>
										<img src={icon_filter} className="img-fluid" alt="" />
										<span>Advance Filter</span>
									</button>
								</div>
							</div>
							<div className="advanceFilter__boxRight">
								<div className="advanceFilter__filterMenuIcon">
									<a className="btn" href="/College/list/col">
										<img src={icon_menu} alt="" />
									</a>
								</div>
								<div className="advanceFilter__filterListIcon">
									<a className="btn" href="/College/list/row">
										<img src={icon_list} alt="" />
									</a>
								</div>
							</div>
						</div>
						<div id="advanceFilter__filterBox" className="advanceFilter__filterBox">
							<div>
								<div className="row">
									<div className="col-lg-3 section">
										<h3>Approved By</h3>
										<div className="row">
											<div className="col-6">
												<Form.Group className="mb-3" id="formGridCheckbox">
													<Form.Check type="checkbox" label="AIU" />
												</Form.Group>
											</div>
											<div className="col-6">
												<Form.Group className="mb-3" id="formGridCheckbox">
													<Form.Check type="checkbox" label="UGA" />
												</Form.Group>
											</div>
											<div className="col-6">
												<Form.Group className="mb-3" id="formGridCheckbox">
													<Form.Check type="checkbox" label="DEBA" />
												</Form.Group>
											</div>
											<div className="col-6">
												<Form.Group className="mb-3" id="formGridCheckbox">
													<Form.Check type="checkbox" label="DECA" />
												</Form.Group>
											</div>
										</div>
										<div></div>
									</div>
									<div className="col-lg-3 section">
										<h3>Ranking</h3>
										<div>
											<Form.Group className="mb-3" id="formGridCheckbox">
												<Form.Control min={0} max={10} type="range" placeholder="" />
												<div className="range__minMax">
													<span>Rank 1</span>
													<span>High Rank</span>
												</div>
											</Form.Group>
										</div>
									</div>
									<div className="col-lg-3 section">
										<h3>Fees</h3>
										<div>
											<Form.Group className="mb-3" id="formGridCheckbox">
												<Form.Control min={1000} max={10000} type="range" placeholder="" />
												<div className="range__minMax">
													<span>Minimum</span>
													<span>Maximum</span>
												</div>
											</Form.Group>
										</div>
									</div>
									<div className="col-lg-3 section">
										<h3>Location</h3>
										<div>
											<Form.Group className="mb-3" id="formGridCheckbox">
												<Form.Control type="text" className="input-location" placeholder="" />
											</Form.Group>
											<button className="btn applyBtn">Apply Filter</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
