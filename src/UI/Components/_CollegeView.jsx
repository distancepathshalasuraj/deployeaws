import React from "react";
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

// react bootstrap components
import CollegeViewAccordion from "./_CollegeViewAccordion";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import College from "../../assets/scripts/API/College";
import AccordionC, { AccordionChild, AccordionChildItem, AccordionCItem } from "./_Accordion";
import URLMapping from "../../Context/URLs";
import CompareOther from "./_CompareOther";
import Helmet from "react-helmet";

export default function CollegeView() {
	const urlParams = useParams();

	// collegeData
	const [college, setCollege] = useState({});

	// args
	const [collegeName, setCollegeName] = useState("");
	const [estd, setESTD] = useState("-");
	const [locationName, setLocationName] = useState("location");
	const [type, setType] = useState("");
	const [currentSession, setCurrentSession] = useState("_");
	const [nextSession, setnextSession] = useState("-");
	const [policy, setPolicy] = useState("-");
	const [intCollab, setIntCollab] = useState([]);
	const [rank_outlook, setRank_outlook] = useState("");
	const [rank_indiaToday, setRank_indiaToday] = useState("");
	const [minFee, setMinFee] = useState("0");
	const [maxFee, setMaxFee] = useState("0");
	const [approved, setApproved] = useState({});
	const [naacRating, setNAACRating] = useState("");
	const [NAACCGPA, setNAACCGPA] = useState("");
	const [duration, setDuration] = useState({});
	const [aboutUniversity, setAboutUniversity] = useState("");
	useEffect(() => {
		const collegeId = urlParams.id;
		const getData = async () => {
			const resAPI = await College.getOne(collegeId);
			setCollege(resAPI[0]);
		};
		getData();
	}, []);

	useEffect(() => {
		setCollegeName(college.name);
		setESTD(college.estb);
		setLocationName(college.city);
		setType(college.typeofuniversity);
		setCurrentSession(college.currentadmissionsession);
		setnextSession(college.nextadmissionsession);
		setPolicy(college.policytype);
		setIntCollab((currItem) => {
			const items = [];
			return college.collaborations?.map((collabItem) => {
				return items.push(collabItem.name);
			});
		});
		if (college.ranking) {
			if (college.ranking.length > 0) {
				for (const rankItem of college.ranking) {
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
		}
		setMinFee(college.minfees);
		setMaxFee(college.maxfees);
		setApproved({
			aiu: college.aiuapproved,
			aict: college.aicteapproved,
			deb: college.debapproved,
			dec: college.decapproved,
			ugc: college.ugcapproved,
		});
		setNAACRating(college.naacrating);
		setNAACCGPA(college.naaccgpa);

		setDuration({
			min: college.minduration,
			max: college.maxduration,
		});

		setAboutUniversity(college.aboutuniversity);
	}, [college]);

	return (
		<>
			<Helmet>
				<title>{"Best Online Distance Learning education University in India - " + collegeName} </title>
				<meta name="keywords" content={"distance education university " + collegeName} />
				<meta name="title" content={"Best Online Distance Learning education University in India - " + collegeName} />
				<meta name="description" content={aboutUniversity} />
			</Helmet>
			<div className="collegeView">
				<div className="collegeView__head">
					<div className="collegeView__headBgBox">
						<img className="img-fluid" src={img_ignouCollege} alt="" />
					</div>

					<div className="container-fluid">
						<div className="container">
							<div className="row">
								<div className="col-2 ">
									<div className="collegeView__imgBox">
										<img src={img_ignou} alt="" />
									</div>
								</div>
								<div className="col-7">
									<div className="collegeView__headDetail">
										<div className="collegeView__headTitle">
											<h2>{collegeName}</h2>
										</div>
										<div className="collegeView__headBody">
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
													<p>Mode : 1984</p>
												</div>
												<div className="col-4">
													<img src={icon_college} alt="" />
													<p>{type}</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3">
									<div className="collegeView__applyBtnBox">
										<Link to={URLMapping.applyNow.label} className="btn collegeView__applyBtn">
											Apply Now
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container-fluid collegeView__body">
					<div className="container">
						<div className="collegeView__detail">
							<div className="collegeView__detailSection">
								<div className="collegeView__detailSectionHeadBox">
									<div className="collegeView__detailSectionHead">
										<h3>Approved by</h3>
									</div>
								</div>
								<div className="collegeView__detailSectionBody">
									<div>
										<div className="collegeView__detailSectionRating">
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
							<div className="collegeView__detailSection">
								<div className="collegeView__detailSectionHeadBox">
									<div className="collegeView__detailSectionHead">
										<h3>Fees</h3>
									</div>
								</div>
								<div className="collegeView__detailSectionBody">
									<div>
										<div className="collegeView__detailSectionFee">
											<p>
												{minFee} - {maxFee} INR
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="collegeView__detailSection">
								<div className="collegeView__detailSectionHeadBox">
									<div className="collegeView__detailSectionHead">
										<h3>
											INTERNATIONAL <br /> COLLABORATION
										</h3>
									</div>
								</div>
								<div className="collegeView__detailSectionBody">
									<div>
										<div className="collegeView__detailSectionInCollab">
											{intCollab?.map((item) => {
												return <p key={Math.random()}>{item}</p>;
											})}
										</div>
									</div>
								</div>
							</div>
							<div className="collegeView__detailSection">
								<div className="collegeView__detailSectionHeadBox">
									<div className="collegeView__detailSectionHead">
										<h3>magazine rank</h3>
									</div>
								</div>
								<div className="collegeView__detailSectionBody">
									<div>
										<div className="collegeView__detailSectionMagazine">
											<div className="collegeView__detailSectionMagazineItem">
												<div className="collegeView__detailSectionMagazineLeft">
													<span>{rank_outlook.rank}</span>
												</div>
												<div className="collegeView__detailSectionMagazineRight">
													<p>Outlook {rank_outlook.year}</p>
												</div>
											</div>
											<div className="collegeView__detailSectionMagazineItem">
												<div className="collegeView__detailSectionMagazineLeft">
													<span>{rank_indiaToday.rank}</span>
												</div>
												<div className="collegeView__detailSectionMagazineRight">
													<p>India Today {rank_indiaToday.year}</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="collegeView__detailSection">
								<div className="collegeView__detailSectionHeadBox">
									<div className="collegeView__detailSectionHead">
										<h3>
											Duration & <br /> Learning Effort
										</h3>
									</div>
								</div>
								<div className="collegeView__detailSectionBody">
									<div>
										<div className="collegeView__detailSectionDuration">
											<div>
												<p>
													{duration.min} - {duration.max} Years
												</p>
											</div>
											<div>
												<p>15 hrs/week</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="collegeView__detailSection">
								<div className="collegeView__detailSectionHeadBox">
									<div className="collegeView__detailSectionHead">
										<h3>sessions</h3>
									</div>
								</div>
								<div className="collegeView__detailSectionBody">
									<div>
										<div className="collegeView__detailSectionSession">
											<p>current - {currentSession}</p>
											<div></div>
											<p>Next - {nextSession}</p>
										</div>
									</div>
								</div>
							</div>
							<div className="collegeView__detailSection">
								<div className="collegeView__detailSectionHeadBox">
									<div className="collegeView__detailSectionHead">
										<h3>
											NAAC <br /> ACCREDITATION
										</h3>
									</div>
								</div>
								<div className="collegeView__detailSectionBody">
									<div>
										<div className="collegeView__detailSectionNAAC">
											<div>
												<p>{naacRating}</p>
												<div></div>
												<p>{NAACCGPA} (CGPA)</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<a href="#">Back to Compare</a>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-9">
								{/* about */}
								<div className="collegeView__aboutBox">
									<div className="collegeView__aboutHead">
										<h3>About University</h3>
									</div>
									<div className="collegeView__aboutText">
										<p>{aboutUniversity}</p>
									</div>
								</div>
								{/* accordian */}
								<CollegeViewAccordion {...college} />
							</div>
							<div className="col-lg-3">
								<img src={img_talkExpert} className="img-fluid" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<CompareOther uid={urlParams.id} />
		</>
	);
}
