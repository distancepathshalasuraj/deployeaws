import CompareFindFilter from "../Components/_CompareFindFilter";
import Footer from "../Components/_Footer";
import Header from "../Components/_Header";

import React from "react";
// images
// icons
import img_ignou from "../../assets/images/university/ignouIcon.svg";
import icon_clock from "../../assets/images/icons/clock.svg";
import icon_univCap from "../../assets/images/icons/graduation-cap.svg";
import icon_location from "../../assets/images/icons/your-location.svg";
import icon_college from "../../assets/images/icons/schoolIcon.svg";
import img_ignouCollege from "../../assets/images/university/ignouBackground.png";
import icon_check from "../../assets/images/icons/checkIcon.svg";
import icon_close from "../../assets/images/icons/closeIcon.svg";
import icon_session from "../../assets/images/icons/laptop.svg";
import icon_fee from "../../assets/images/icons/fees.svg";
import icon_compare from "../../assets/images/icons/comparison.svg";
import img_talkExpert from "../../assets/images/icons/talkExpert.png";
import img_airplane from "../../assets/images/course/airplane.svg";

import { useEffect, useState } from "react";
import CollegeViewAccordion from "../Components/_CollegeViewAccordion";

import Course from "../../assets/scripts/API/Course";
import { Link, useParams } from "react-router-dom";
import { AccordionChild, AccordionChildItem } from "../Components/_Accordion";
import URLMapping from "../../Context/URLs";
import Helmet from "react-helmet";

export default function CourseDetail() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const urlParams = useParams();

	const [courseName, setCourseName] = useState("");
	const [collegeName, setCollegeName] = useState("College");
	const [estd, setESTD] = useState("");
	const [locationName, setLocationName] = useState("");
	const [type, setType] = useState("");
	const [currentSession, setCurrentSession] = useState("_");
	const [nextSession, setnextSession] = useState("-");
	const [policy, setPolicy] = useState("-");
	const [intCollab, setIntCollab] = useState([]);
	const [rank_outlook, setRank_outlook] = useState("");
	const [rank_indiaToday, setRank_indiaToday] = useState("");
	const [minFee, setMinFee] = useState("0");
	const [maxFee, setMaxFee] = useState("0");
	const [totalFee, setTotalFee] = useState("0");
	const [approved, setApproved] = useState({});
	const [naacRating, setNAACRating] = useState("");
	const [NAACCGPA, setNAACCGPA] = useState("");
	const [duration, setDuration] = useState({});
	const [aboutUniversity, setAboutUniversity] = useState("");
	const [objective, setObjective] = useState("");
	const [mode, setMode] = useState("");
	const [learningPerWeek, setLearningPerWeek] = useState("");
	const [specEligibility, setSpecEligibility] = useState("");
	const [eligibility, setEligibility] = useState("");
	const [specs, setSpecs] = useState([]);

	const [courseObj, setCourseObj] = useState({});
	useEffect(() => {
		const courseId = urlParams.id;
		const init = async () => {
			const resAPI = await Course.getOne(courseId);
			setCourseObj(resAPI);
		};
		init();
	}, []);
	useEffect(() => {
		setCollegeName(courseObj.university?.name);
		setCourseName(courseObj.name);
		setApproved({
			aiu: courseObj.university?.aiuapproved,
			aict: courseObj.university?.aicteapproved,
			deb: courseObj.university?.debapproved,
			dec: courseObj.university?.decapproved,
			ugc: courseObj.university?.ugcapproved,
		});
		setTotalFee(courseObj.totalfee);
		setObjective(courseObj.objective);
		setMode(courseObj.mode);
		setDuration({
			min: courseObj.minduration,
			max: courseObj.maxduration,
		});
		setLearningPerWeek(courseObj.learningperweek);
		setEligibility(courseObj.eligibility);
		setSpecEligibility(courseObj?.specialeligibility?.split(";"));
		setSpecs(courseObj?.specializations?.split(";"));

		if (courseObj?.university?.ranking && courseObj.university.ranking.length > 0) {
			for (const rankItem of courseObj.university.ranking) {
				if (rankItem.authority === "outlook") {
					setRank_outlook({
						rank: rankItem.ranking ? rankItem.ranking : 0,
						year: rankItem.rankingyear,
					});
					continue;
				}
				if (rankItem.authority === "India Today Group") {
					setRank_indiaToday({
						rank: rankItem.ranking ? rankItem.ranking : 0,
						year: rankItem.rankingyear,
					});
				}
			}
		}
	}, [courseObj]);

	return (
		<>
			<Header />
			<CompareFindFilter />
			<div className="courseDetail">
				<div className="courseDetail__head">
					<div className="courseDetail__headBgBox">
						<img className="img-fluid" src={img_ignouCollege} alt="" />
					</div>

					<div className="container-fluid">
						<div className="container">
							<div className="row">
								<div className="col-2 ">
									<div className="courseDetail__imgBox">
										<img src={img_ignou} alt="" />
									</div>
								</div>
								<div className="col-9">
									<div className="courseDetail__headDetail">
										<div className="courseDetail__headTitle">
											<h2 className="courseDetail__headTitle-Course">{courseName}</h2>
											<h2 className="courseDetail__headTitle-College">{collegeName}</h2>
										</div>
										<div className="courseDetail__headBody">
											<div className="row">
												<div className="col-4">
													<img src={icon_univCap} alt="" />
													<p>ESTD. {estd}</p>
												</div>
												<div className="col-4">
													<img src={icon_location} alt="" />
													<p>{locationName}</p>
												</div>
											</div>
											<div className="row">
												<div className="col-4">
													<img src={icon_clock} alt="" />
													<p>Mode : {mode}</p>
												</div>
												<div className="col-4">
													<img src={icon_college} alt="" />
													<p>{type}</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="courseDetail__body">
					{/* detail section */}
					<div className="container-fluid ">
						<div className="container">
							<div className="courseDetail__detail">
								<div className="courseDetail__detailSection">
									<div className="courseDetail__detailSectionHeadBox">
										<div className="courseDetail__detailSectionHead">
											<h3>Approved by</h3>
										</div>
									</div>
									<div className="courseDetail__detailSectionBody">
										<div>
											<div className="courseDetail__detailSectionRating">
												<div>
													<p>AIU</p>
													<img src={approved.aiu ? icon_check : icon_close} className="img-fluid" alt="" />
												</div>
												<div>
													<p>DEB</p>
													<img src={approved.deb ? icon_check : icon_close} className="img-fluid" alt="" />
												</div>
												<div className="d-none">
													<p>DEC</p>
													<img src={approved.dec ? icon_check : icon_close} className="img-fluid" alt="" />
												</div>
												<div>
													<p>UGC</p>
													<img src={approved.ugc ? icon_check : icon_close} className="img-fluid" alt="" />
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="courseDetail__detailSection">
									<div className="courseDetail__detailSectionHeadBox">
										<div className="courseDetail__detailSectionHead">
											<h3>FeeS</h3>
										</div>
									</div>
									<div className="courseDetail__detailSectionBody">
										<div>
											<div className="courseDetail__detailSectionFee">
												<p> {totalFee} INR</p>
											</div>
										</div>
									</div>
								</div>
								<div className="courseDetail__detailSection">
									<div className="courseDetail__detailSectionHeadBox">
										<div className="courseDetail__detailSectionHead">
											<h3>
												INTERNATIONAL <br /> COLLABORATION
											</h3>
										</div>
									</div>
									<div className="courseDetail__detailSectionBody">
										<div>
											<div className="courseDetail__detailSectionInCollab">
												{intCollab?.map((item) => {
													return <p key={Math.random()}>{item}</p>;
												})}
											</div>
										</div>
									</div>
								</div>
								<div className="courseDetail__detailSection">
									<div className="courseDetail__detailSectionHeadBox">
										<div className="courseDetail__detailSectionHead">
											<h3>magazine rank</h3>
										</div>
									</div>
									<div className="courseDetail__detailSectionBody">
										<div>
											<div className="courseDetail__detailSectionMagazine">
												<div className="courseDetail__detailSectionMagazineItem">
													<div className="courseDetail__detailSectionMagazineLeft">
														<span>{rank_outlook.rank}</span>
													</div>
													<div className="courseDetail__detailSectionMagazineRight">
														<p>Outlook {rank_outlook.year}</p>
													</div>
												</div>
												<div className="courseDetail__detailSectionMagazineItem">
													<div className="courseDetail__detailSectionMagazineLeft">
														<span>{rank_indiaToday.rank}</span>
													</div>
													<div className="courseDetail__detailSectionMagazineRight">
														<p>India Today {rank_indiaToday.year}</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="courseDetail__detailSection">
									<div className="courseDetail__detailSectionHeadBox">
										<div className="courseDetail__detailSectionHead">
											<h3>
												Duration & <br /> Learning Effort
											</h3>
										</div>
									</div>
									<div className="courseDetail__detailSectionBody">
										<div>
											<div className="courseDetail__detailSectionDuration">
												<div>
													<p>Max. {duration.max}</p>
													<div></div>
													<p>Min. {duration.min}</p>
												</div>
												<div>
													<p>{learningPerWeek} hrs/week</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="courseDetail__detailSection">
									<div className="courseDetail__detailSectionHeadBox">
										<div className="courseDetail__detailSectionHead">
											<h3>sessions</h3>
										</div>
									</div>
									<div className="courseDetail__detailSectionBody">
										<div>
											<div className="courseDetail__detailSectionSession">
												<p>current - {currentSession}</p>
												<div></div>
												<p>Next - {nextSession}</p>
											</div>
										</div>
									</div>
								</div>
								<div className="courseDetail__detailSection">
									<div className="courseDetail__detailSectionHeadBox">
										<div className="courseDetail__detailSectionHead">
											<h3>
												NAAC <br /> ACCREDITATION
											</h3>
										</div>
									</div>
									<div className="courseDetail__detailSectionBody">
										<div>
											<div className="courseDetail__detailSectionNAAC">
												<div>
													<p>{naacRating}</p>
													<div></div>
													<p>{NAACCGPA} (CGPA)</p>
												</div>
												<div className="courseDetail__applyBtnBox">
													<Link to={URLMapping.applyNow.label} className="btn courseDetail__applyBtn">
														Apply Now
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* other section */}
					<div className="container-fluid">
						<div className="container">
							<div className="row">
								<div className="col-12 py-3">
									<a href="#">Back to Compare</a>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-9">
									{/* about */}
									<div className="courseDetail__aboutBox">
										<div className="courseDetail__aboutHead">
											<h3>Online Course & Aviation</h3>
										</div>
										<div className="courseDetail__applyBox">
											<div className="col col1">
												<div className="imgBox">
													<img src={img_airplane} className="img-fluid" alt="" />
												</div>
											</div>
											<div className="col col2">
												<div className="courseDetail__applyBoxOptions">
													<div className="column pe-5">
														<h3>Eligibility</h3>
														<p>{eligibility}</p>
													</div>
													<div className="column">
														<Link to={URLMapping.applyNow.label} className="courseDetail__applyBtn courseDetail__btn">
															Apply Now
														</Link>
													</div>
													<div className="column">
														<button className="courseDetail__talkExpertBtn courseDetail__btn">Talk to Expert</button>
													</div>
												</div>
											</div>
										</div>
										<div className="courseDetail__aboutText">
											<p>{objective}</p>
										</div>
									</div>
									{/* Accordion */}
									<AccordionChild>
										<AccordionChildItem index={2} title={"Eligibility"}>
											<div className="courseDetail__subjects">
												<ul>
													{specEligibility ? (
														specEligibility.map((obj) => {
															return <li key={Math.random()}>{obj}</li>;
														})
													) : (
														<></>
													)}
												</ul>
											</div>
										</AccordionChildItem>
										<AccordionChildItem index={1} title={"Key Highlights"}>
											<div></div>
										</AccordionChildItem>
										<AccordionChildItem index={0} title={"Subjects and topics"}>
											<div className="courseDetail__subjects">
												<ul>
													{specs ? (
														specs.map((obj) => {
															return <li key={Math.random()}>{obj}</li>;
														})
													) : (
														<></>
													)}
												</ul>
											</div>
										</AccordionChildItem>
										<AccordionChildItem index={4} title={"Career Opportunities"}>
											<div></div>
										</AccordionChildItem>
									</AccordionChild>
								</div>

								<div className="col-lg-3">
									<img src={img_talkExpert} className="img-fluid" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}
