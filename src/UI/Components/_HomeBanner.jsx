import React, { useContext } from "react";
// images
//banner
import bannerImg from "../../assets/images/home/banner-image.png";
import img_homeBanner_find from "../../assets/images/home/homeBannerFind.svg";
import img_homeBanner_compare from "../../assets/images/home/homeCompare.svg";
import img_homeBanner_consult from "../../assets/images/home/homeConsult.svg";
import img_homeBanner_apply from "../../assets/images/home/homeApply.svg";

// react bootstrap
import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import Common from "../../assets/scripts/API/Common";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import URLMapping from "../../Context/URLs";
import { DATA_LAYER } from "../../App";

export default function HomeBanner() {
	const { setActiveFilter, addFilter, seolist, majorlist, statustypelist, eligibilitytypelist, coursetypelist, statetypelist } = useContext(DATA_LAYER);
	const history = useHistory();

	useEffect(() => {
		const getData = async () => {
			// const res = await Common.getFilters();
			// addFilter(res);
		};
	}, []);

	const [activeCourseId, setActiveCourseId] = useState("");
	const [activeQualId, setActiveQualId] = useState("");
	const [filteredMajorArr, setFilteredMajorArr] = useState([]);
	const [activeMajorId, setActiveMajorId] = useState("");
	const [activeStateId, setActiveStateId] = useState("");

	useEffect(() => {
		const filteredArr = majorlist.filter((arrItem) => arrItem.elid === Number(activeQualId) && arrItem.clid === Number(activeCourseId));
		setFilteredMajorArr(filteredArr);
	}, [activeCourseId, activeQualId]);

	function handleSearch() {
		setActiveFilter({
			clid: activeCourseId,
			elid: activeQualId,
			mlid: activeMajorId,
			slid: activeStateId,
		});
		history.push(`${URLMapping.findCourse.label}`);
	}

	return (
		<>
			<div className="container-fluid homeBanner">
				<div className="container">
					<div className="row">
						<div className="col-lg-5 homeBanner__imgBox">
							<img src={bannerImg} alt="" className="img-fluid" />
						</div>
						<div className="col-lg-7 homeBanner__right">
							<div className="homeBanner__icons">
								<div className="homeBanner__iconBox-wrap">
									<Link to={URLMapping.findCourse.label}>
										<div className="homeBanner__iconBox" style={{ backgroundColor: "rgba(71, 181, 161, 1)" }}>
											<img src={img_homeBanner_find} className="img-fluid" alt="" />
										</div>
										<span>Search</span>
									</Link>
								</div>
								<div className="homeBanner__iconBox-wrap">
									<Link to={URLMapping.compare.label}>
										<div className="homeBanner__iconBox" style={{ backgroundColor: "rgba(101, 207, 244, 0.8)" }}>
											<img src={img_homeBanner_compare} className="img-fluid" alt="" />
										</div>
										<span>Compare</span>
									</Link>
								</div>
								<div className="homeBanner__iconBox-wrap">
									<Link to={URLMapping.bookAppointment.label}>
										<div className="homeBanner__iconBox" style={{ backgroundColor: "rgba(218, 193, 123, 1)" }}>
											<img src={img_homeBanner_consult} className="img-fluid" alt="" />
										</div>
										<span>Consult</span>
									</Link>
								</div>
								<div className="homeBanner__iconBox-wrap">
									<Link to={URLMapping.applyNow.label}>
										<div className="homeBanner__iconBox" style={{ backgroundColor: "rgba(171, 212, 243, 1)" }}>
											<img src={img_homeBanner_apply} className="img-fluid" alt="" />
										</div>
										<span>Apply</span>
									</Link>
								</div>
							</div>
							<div className="homeBanner__formBox">
								<div className="homeBanner__form">
									<div className="row">
										<div className="col-lg-7 homeBanner__formLeft">
											<p className="homeBanner__textLight">Empower your search for the Best distance education institutions with us.</p>
											<p className="homeBanner__textDark">Get verified colleges and Genuine comparison, absolutely free!!</p>
										</div>
										<div className="col-lg-5 homeBanner__formRight">
											<Form.Select onChange={(e) => setActiveQualId(e.target.value)}>
												<option>Qualification</option>
												{eligibilitytypelist.map((arrItem) => {
													return (
														<option key={arrItem.id} value={arrItem.id}>
															{arrItem.name}
														</option>
													);
												})}
											</Form.Select>
											<Form.Select onChange={(e) => setActiveCourseId(e.target.value)}>
												<option>Course</option>
												{coursetypelist.map((arrItem) => {
													return (
														<option key={arrItem.id} value={arrItem.id}>
															{arrItem.name}
														</option>
													);
												})}
											</Form.Select>
											<Form.Select onChange={(e) => setActiveMajorId(e.target.value)}>
												<option>Major</option>
												{filteredMajorArr.map((arrItem) => {
													return (
														<option key={arrItem.id} value={arrItem.id}>
															{arrItem.name}
														</option>
													);
												})}
											</Form.Select>
											<Form.Select onChange={(e) => setActiveStateId(e.target.value)}>
												<option>State</option>
												{statetypelist.map((arrItem) => {
													return (
														<option key={arrItem.id} value={arrItem.id}>
															{arrItem.name}
														</option>
													);
												})}
											</Form.Select>
											<button className="btn btn-info w-100" onClick={handleSearch}>
												SEARCH NOW
											</button>
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
