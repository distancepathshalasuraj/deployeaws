import React from "react";
//  images
import img_ignou from "../../assets/images/university/ignouIcon.svg";

// icons
import icon_cap from "../../assets/images/icons/graduation-cap.svg";
import icon_location from "../../assets/images/icons/your-location.svg";
import icon_close from "../../assets/images/icons/closeIcon.svg";
import icon_check from "../../assets/images/icons/checkIcon.svg";
// context
import { useContext } from "react";
import { DATA_LAYER } from "../../App";
import { Link } from "react-router-dom";
import URLMapping from "../../Context/URLs";

export default function CompareCollege(props) {
	return (
		<>
			<div className="container-fluid compareCollege">
				<div className="container">
					<div className="compareCollege-section">
						<div className="compareCollege-section__title visibility-hidden"></div>
						<div className="compareCollege-section__body">
							{props.college1?.uid ? <div className="compareCollege-section__body-item compareCollege-section__body-item1 compareCollege-section__body-toppest">{CollegeTitle(props.college1)}</div> : <></>}
							{props.college2?.uid ? <div className="compareCollege-section__body-item compareCollege-section__body-toppest">{CollegeTitle(props.college2)}</div> : <></>}
							{props.college3?.uid ? <div className="compareCollege-section__body-item compareCollege-section__body-toppest">{CollegeTitle(props.college3)}</div> : <></>}
							{props.college4?.uid ? <div className="compareCollege-section__body-item compareCollege-section__body-toppest">{CollegeTitle(props.college4)}</div> : <></>}
						</div>
					</div>

					<div className="compareCollege-section">
						<div className="compareCollege-section__title">
							<span>mode & tYPE OF UNIVERSITY</span>
						</div>
						<div className="compareCollege-section__body">
							{props.college1?.uid ? <div className="compareCollege-section__body-item compareCollege-section__body-item1">{CollegeMode(props.college1)}</div> : <></>}
							{props.college2?.uid ? <div className="compareCollege-section__body-item">{CollegeMode(props.college2)}</div> : <></>}
							{props.college3?.uid ? <div className="compareCollege-section__body-item">{CollegeMode(props.college3)}</div> : <></>}
							{props.college4?.uid ? <div className="compareCollege-section__body-item">{CollegeMode(props.college4)}</div> : <></>}
						</div>
					</div>

					<div className="compareCollege-section">
						<div className="compareCollege-section__title">
							<span>CITY & STATE</span>
						</div>
						<div className="compareCollege-section__body">
							{props.college1?.uid ? <div className="compareCollege-section__body-item compareCollege-section__body-item1">{CollegeCityState(props.college1)}</div> : <></>}
							{props.college2?.uid ? <div className="compareCollege-section__body-item">{CollegeCityState(props.college2)}</div> : <></>}
							{props.college3?.uid ? <div className="compareCollege-section__body-item">{CollegeCityState(props.college3)}</div> : <></>}
							{props.college4?.uid ? <div className="compareCollege-section__body-item">{CollegeCityState(props.college4)}</div> : <></>}
						</div>
					</div>

					<div className="compareCollege-section">
						<div className="compareCollege-section__title">
							<span>approved by</span>
						</div>
						<div className="compareCollege-section__body">
							{props.college1?.uid ? <div className="compareCollege-section__body-item compareCollege-section__body-item1">{CollegeApprovals(props.college1)}</div> : <></>}
							{props.college2?.uid ? <div className="compareCollege-section__body-item">{CollegeApprovals(props.college2)}</div> : <></>}
							{props.college3?.uid ? <div className="compareCollege-section__body-item">{CollegeApprovals(props.college3)}</div> : <></>}
							{props.college4?.uid ? <div className="compareCollege-section__body-item">{CollegeApprovals(props.college4)}</div> : <></>}
						</div>
					</div>

					<div className="compareCollege-section">
						<div className="compareCollege-section__title">
							<span>fees</span>
						</div>
						<div className="compareCollege-section__body">
							{props.college1?.uid ? <div className="compareCollege-section__body-item compareCollege-section__body-item1">{CollegeFee(props.college1)}</div> : <></>}
							{props.college2?.uid ? <div className="compareCollege-section__body-item">{CollegeFee(props.college2)}</div> : <></>}
							{props.college3?.uid ? <div className="compareCollege-section__body-item">{CollegeFee(props.college3)}</div> : <></>}
							{props.college4?.uid ? <div className="compareCollege-section__body-item">{CollegeFee(props.college4)}</div> : <></>}
						</div>
					</div>

					<div className="compareCollege-section">
						<div className="compareCollege-section__title">
							<span>duration</span>
						</div>
						<div className="compareCollege-section__body">
							{props.college1?.uid ? <div className="compareCollege-section__body-item compareCollege-section__body-item1">{CollegeDuration(props.college1)}</div> : <></>}
							{props.college2?.uid ? <div className="compareCollege-section__body-item">{CollegeDuration(props.college2)}</div> : <></>}
							{props.college3?.uid ? <div className="compareCollege-section__body-item">{CollegeDuration(props.college3)}</div> : <></>}
							{props.college4?.uid ? <div className="compareCollege-section__body-item">{CollegeDuration(props.college4)}</div> : <></>}
						</div>
					</div>

					<div className="compareCollege-section">
						<div className="compareCollege-section__title">
							<span>learning effort</span>
						</div>
						<div className="compareCollege-section__body">
							{props.college1?.uid ? <div className="compareCollege-section__body-item compareCollege-section__body-item1">{CollegeLearningEffort(props.college1)}</div> : <></>}
							{props.college2?.uid ? <div className="compareCollege-section__body-item">{CollegeLearningEffort(props.college2)}</div> : <></>}
							{props.college3?.uid ? <div className="compareCollege-section__body-item">{CollegeLearningEffort(props.college3)}</div> : <></>}
							{props.college4?.uid ? <div className="compareCollege-section__body-item">{CollegeLearningEffort(props.college4)}</div> : <></>}
						</div>
					</div>

					<div className="compareCollege-section">
						<div className="compareCollege-section__title">
							<span>sessions</span>
						</div>
						<div className="compareCollege-section__body">
							{props.college1?.uid ? <div className="compareCollege-section__body-item compareCollege-section__body-item1">{CollegeSession(props.college1)}</div> : <></>}
							{props.college2?.uid ? <div className="compareCollege-section__body-item">{CollegeSession(props.college2)}</div> : <></>}
							{props.college3?.uid ? <div className="compareCollege-section__body-item">{CollegeSession(props.college3)}</div> : <></>}
							{props.college4?.uid ? <div className="compareCollege-section__body-item">{CollegeSession(props.college4)}</div> : <></>}
						</div>
					</div>

					<div className="compareCollege-section">
						<div className="compareCollege-section__title">
							<span>magazine ranking</span>
						</div>
						<div className="compareCollege-section__body">
							{props.college1?.uid ? <div className="compareCollege-section__body-item compareCollege-section__body-item1">{CollegeMagazineRanking(props.college1)}</div> : <></>}
							{props.college2?.uid ? <div className="compareCollege-section__body-item">{CollegeMagazineRanking(props.college2)}</div> : <></>}
							{props.college3?.uid ? <div className="compareCollege-section__body-item">{CollegeMagazineRanking(props.college3)}</div> : <></>}
							{props.college4?.uid ? <div className="compareCollege-section__body-item">{CollegeMagazineRanking(props.college4)}</div> : <></>}
						</div>
					</div>

					<div className="compareCollege-section">
						<div className="compareCollege-section__title">
							<span>International Collaboration</span>
						</div>
						<div className="compareCollege-section__body">
							{props.college1?.uid ? <div className="compareCollege-section__body-item compareCollege-section__body-item1">{InternationalCollaboration(props.college1)}</div> : <></>}
							{props.college2?.uid ? <div className="compareCollege-section__body-item">{InternationalCollaboration(props.college2)}</div> : <></>}
							{props.college3?.uid ? <div className="compareCollege-section__body-item">{InternationalCollaboration(props.college3)}</div> : <></>}
							{props.college4?.uid ? <div className="compareCollege-section__body-item">{InternationalCollaboration(props.college4)}</div> : <></>}
						</div>
					</div>

					<div className="compareCollege-section">
						<div className="compareCollege-section__title">
							<span>NAAC ACCREDITATION</span>
						</div>
						<div className="compareCollege-section__body">
							{props.college1?.uid ? <div className="compareCollege-section__body-item compareCollege-section__body-item1">{CollegeNAAC(props.college1)}</div> : <></>}
							{props.college2?.uid ? <div className="compareCollege-section__body-item">{CollegeNAAC(props.college2)}</div> : <></>}
							{props.college3?.uid ? <div className="compareCollege-section__body-item">{CollegeNAAC(props.college3)}</div> : <></>}
							{props.college4?.uid ? <div className="compareCollege-section__body-item">{CollegeNAAC(props.college4)}</div> : <></>}
						</div>
					</div>
					<div className="compareCollege-section compareCollege-section-footer">
						<div className="compareCollege-section__title"></div>
						<div className="compareCollege-section__body">
							<div className="compareCollege-section__body-item compareCollege-section__body-item1">
								<div className="compareCollege-section__btns">
									{props.college1?.uid ? (
										<>
											<a className="compareCollege-section-btn compareCollege-section-btn__moreDetail" href={"/College/detail/" + props.college1.uid}>
												More Details
											</a>
											<Link to={URLMapping.applyNow.label} className="compareCollege-section-btn compareCollege-section-btn__apply">
												Apply
											</Link>
										</>
									) : (
										<></>
									)}
								</div>
							</div>
							<div className="compareCollege-section__body-item ">
								<div className="compareCollege-section__btns">
									{props.college2?.uid ? (
										<>
											<a className="compareCollege-section-btn compareCollege-section-btn__moreDetail" href={"/College/detail/" + props.college2.uid}>
												More Details
											</a>
											<Link to={URLMapping.applyNow.label} className="compareCollege-section-btn compareCollege-section-btn__apply">
												Apply
											</Link>
										</>
									) : (
										<></>
									)}
								</div>
							</div>
							<div className="compareCollege-section__body-item ">
								<div className="compareCollege-section__btns">
									{props.college3?.uid ? (
										<>
											<a className="compareCollege-section-btn compareCollege-section-btn__moreDetail" href={"/College/detail/" + props.college3.uid}>
												More Details
											</a>
											<Link to={URLMapping.applyNow.label} className="compareCollege-section-btn compareCollege-section-btn__apply">
												Apply
											</Link>
										</>
									) : (
										<></>
									)}
								</div>
							</div>
							<div className="compareCollege-section__body-item ">
								<div className="compareCollege-section__btns">
									{props.college4?.uid ? (
										<>
											<a className="compareCollege-section-btn compareCollege-section-btn__moreDetail" href={"/College/detail/" + props.college4.uid}>
												More Details
											</a>
											<Link to={URLMapping.applyNow.label} className="compareCollege-section-btn compareCollege-section-btn__apply">
												Apply
											</Link>
										</>
									) : (
										<></>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

function CollegeTitle(college) {
	const { removeCompare } = useContext(DATA_LAYER);
	function removeFromCompare() {
		removeCompare(college);
	}
	return (
		<div className="collegeTitle">
			<button className="icon__close btn" style={{ color: "#000" }} onClick={removeFromCompare}>
				X
			</button>
			<div className="collegeTitle-name">
				<div className="collegeTitle__imgBox">
					<img src={img_ignou} className="img-fluid" alt="" />
				</div>
				<div className="collegeTitle__name">
					<span>{college.name}</span>
				</div>
			</div>
			<div className="collegeTitle-otherInfo">
				<div className="collegeTitle__infoBox">
					<div className="collegeTitle__iconBox">
						<img src={icon_cap} className="img-fluid" alt="" />
					</div>
					<div className="collegeTitle__iconText">
						<span>ESTD. {college.estb}</span>
					</div>
				</div>
				<div className="collegeTitle__infoBox">
					<div className="collegeTitle__iconBox">
						<img src={icon_location} className="img-fluid" alt="" />
					</div>
					<div className="collegeTitle__iconText">
						<span>{college.city}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

function CollegeMode(college) {
	return (
		<div className="collegeMode">
			<span className="collegeMode__mode">{college.mode}</span>
			<div className="collegeMode__divider"></div>
			<span className="collegeMode__type">{college.type}</span>
		</div>
	);
}

function CollegeCityState(college) {
	return (
		<div className="collegeMode">
			<span className="collegeMode__mode">{college.city}</span>
			<div className="collegeMode__divider"></div>
			<span className="collegeMode__type">{college.state}</span>
		</div>
	);
}

function CollegeApprovals(college) {
	return (
		<div className="collegeApproved">
			<div className="collegeApproved__item">
				<span className="collegeApproved__item-text">AIU</span>
				<div className="collegeApproved__item-imgBox">
					<img src={college.aiuapproved ? icon_check : icon_close} className="img-fluid" alt="" />
				</div>
			</div>
			<div className="collegeApproved__item">
				<span className="collegeApproved__item-text">DEB</span>
				<div className="collegeApproved__item-imgBox">
					<img src={college.debapproved ? icon_check : icon_close} className="img-fluid" alt="" />
				</div>
			</div>
			<div className="collegeApproved__item d-none ">
				<span className="collegeApproved__item-text">DEC</span>
				<div className="collegeApproved__item-imgBox">
					<img src={college.decapproved ? icon_check : icon_close} className="img-fluid" alt="" />
				</div>
			</div>
			<div className="collegeApproved__item">
				<span className="collegeApproved__item-text">UGA</span>
				<div className="collegeApproved__item-imgBox">
					<img src={college.ugcapproved ? icon_check : icon_close} className="img-fluid" alt="" />
				</div>
			</div>
		</div>
	);
}

function CollegeFee(college) {
	return (
		<div className="collegeFee">
			<span className="">
				<span>
					{Number(college.minfees).toLocaleString("en-IN")} - {Number(college.maxfees).toLocaleString("en-IN")} INR{" "}
				</span>
			</span>
		</div>
	);
}

function CollegeDuration(college) {
	return (
		<div className="collegeFee">
			<span className="">
				<span>
					{college.minduration} - {college.maxduration} Hrs
				</span>
			</span>
		</div>
	);
}

function CollegeLearningEffort(college) {
	return <span>{college.learningperweek}</span>;
}

function CollegeSession(college) {
	return (
		<div className="collegeSession">
			<span className="collegeSession__current">
				Current <span>{college.currentadmissionsession}</span>
			</span>
			<div className="collegeSession__divider"></div>
			<span className="collegeSession__next">
				Next. <span>{college.nextadmissionsession}</span>
			</span>
		</div>
	);
}

function CollegeMagazineRanking(college) {
	return (
		<div>
			<div>{college.ranking?.length >= 1 ? <span>{college.ranking[0].authority + " " + college.ranking[0].ranking + " in " + college.ranking[0].rankingyear}</span> : <span></span>} </div>
			<div>{college.ranking?.length >= 2 ? <span>{college.ranking[1].authority + " " + college.ranking[1].ranking + " in " + college.ranking[1].rankingyear}</span> : <span></span>}</div>
		</div>
	);
}

function InternationalCollaboration(college) {
	return <span>{college.hasintcollaboration}</span>;
}

function CollegeNAAC(college) {
	return (
		<span>
			{college.naacrating}, {college.naaccgpa}(CGPA)
		</span>
	);
}
