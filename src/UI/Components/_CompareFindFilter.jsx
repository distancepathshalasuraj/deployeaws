// react components
import React, { useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { DATA_LAYER } from "../../App";

// api
import Common from "../../assets/scripts/API/Common";
import Helmet from "react-helmet";

export default function CompareFindFilter() {
	// context
	const { statetypelist, coursetypelist, activeFilter, eligibilitytypelist, majorlist, setActiveFilter, triggerSearch } = useContext(DATA_LAYER);

	// getting filter list

	const [filteredMajorArr, setFilteredMajorArr] = useState([]);

	// filter based by clid , elid
	useEffect(() => {
		const filteredArr = majorlist.filter((arrItem) => arrItem.elid === Number(activeFilter.elid) && arrItem.clid === Number(activeFilter.clid));
		setFilteredMajorArr(filteredArr);
	}, [activeFilter.elid, activeFilter.clid]);

	// change filter after selection
	function changeFilter(filterObj) {
		setActiveFilter({ ...activeFilter, ...filterObj });
	}

	return (
		<>
			<div className="compareFindFilter">
				<div className="container-fluid">
					<div className="container">
						<div className="compareFindFilter__title">
							<h2>Find Yours Here</h2>
						</div>
						<div className="compareFindFilter__body">
							<div className="compareFindFilter__filters">
								<div className="compareFindFilter__dropdown" style={{ flex: "0 0 37.5%" }}>
									<Form.Select onChange={(e) => changeFilter({ elid: e.target.value })} value={activeFilter.elid ? activeFilter.elid : 0}>
										<option value={0}>Qualification</option>
										{eligibilitytypelist.map((arrItem) => {
											return (
												<option key={arrItem.id} value={arrItem.id}>
													{arrItem.name}
												</option>
											);
										})}
									</Form.Select>
								</div>
								<div className="compareFindFilter__dropdown" style={{ flex: "0 0 37.5%" }}>
									<Form.Select onChange={(e) => changeFilter({ clid: e.target.value })} value={activeFilter.clid ? activeFilter.clid : 0}>
										<option value={0}>Course</option>
										{coursetypelist.map((arrItem) => {
											return (
												<option key={arrItem.id} value={arrItem.id}>
													{arrItem.name}
												</option>
											);
										})}
									</Form.Select>
								</div>
								<div className="compareFindFilter__dropdown d-none">
									<Form.Select onChange={(e) => changeFilter({ mlid: e.target.value })} value={activeFilter.mlid ? activeFilter.mlid : 0}>
										<option value={0}>Major</option>
										{filteredMajorArr.map((arrItem) => {
											return (
												<option key={arrItem.id} value={arrItem.id}>
													{arrItem.name}
												</option>
											);
										})}
									</Form.Select>
								</div>
								<div className="compareFindFilter__dropdown d-none">
									<Form.Select onChange={(e) => changeFilter({ slid: e.target.value })} value={activeFilter.slid ? activeFilter.slid : 0}>
										<option value={0}>State</option>
										{statetypelist.map((arrItem) => {
											return (
												<option key={arrItem.id} value={arrItem.id}>
													{arrItem.name}
												</option>
											);
										})}
									</Form.Select>
								</div>
								<div className="compareFindFilter__btn" style={{ flex: "0 0 25%" }}>
									<button className="btn btn__primary w-100" onClick={triggerSearch}>
										Search Now
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
