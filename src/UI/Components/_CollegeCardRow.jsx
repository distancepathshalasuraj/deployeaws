// react components
import { useContext, useEffect, useRef, useState } from "react";
import React from "react";

//  images
import img_ignou from "../../assets/images/university/ignouIcon.svg";

// icons
import icon_univCap from "../../assets/images/icons/graduation-cap.svg";
import icon_location from "../../assets/images/icons/your-location.svg";
import icon_clock from "../../assets/images/icons/clock.svg";
import icon_check from "../../assets/images/icons/checkIcon.svg";
import icon_close from "../../assets/images/icons/closeIcon.svg";
import icon_compare from "../../assets/images/icons/comparison.svg";
import icon_info from "../../assets/images/course/infoIcon.png";
import { DATA_LAYER } from "../../App";
import { Link } from "react-router-dom";
import URLMapping from "../../Context/URLs";
import { Overlay, Button, Tooltip, Popover } from "react-bootstrap";

export default function CollegeCardRow({ ...args }) {
	// context
	const { addCompare, removeCompare, compareCollegeArr, compareLimit } = useContext(DATA_LAYER);
	const [isInCompare, setIsInCompare] = useState(false);

	const [collegeId, setCollegeId] = useState("");
	const [collegeName, setCollegeName] = useState("");
	const [estd, setESTD] = useState("-");
	const [location, setLocation] = useState("location");
	const [currentSession, setCurrentSession] = useState("_");
	const [nextSession, setnextSession] = useState("-");
	const [policy, setPolicy] = useState("-");
	const [intCollab, setIntCollab] = useState("No");
	const [rank_outlook, setRank_outlook] = useState("");
	const [rank_indiaToday, setRank_indiaToday] = useState("");
	const [minFee, setMinFee] = useState("0");
	const [maxFee, setMaxFee] = useState("0");
	const [totalFee, setTotalFee] = useState("-");
	const [approved, setApproved] = useState({});
	const [naacRating, setNAACRating] = useState("");
	const [NAACCGPA, setNAACCGPA] = useState("");
	const [courseArr, setCourseArr] = useState(["NA"]);
	useEffect(() => {
		setCollegeId((_id) => args.uid);
		setCollegeName(args.name);
		setESTD(args.estb);
		setLocation(args.city);
		setCurrentSession(args.currentadmissionsession);
		setnextSession(args.nextadmissionsession);
		setPolicy(args.policytype);
		setIntCollab(args.hasintcollaboration);
		if (args.ranking && args.ranking.length > 0) {
			for (const rankItem of args.ranking) {
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
		setMinFee(Number(args.minfees).toLocaleString("en-IN"));
		setMaxFee(Number(args.maxfees).toLocaleString("en-IN"));
		setApproved({
			aiu: args.aiuapproved,
			aict: args.aicteapproved,
			deb: args.debapproved,
			dec: args.decapproved,
			ugc: args.ugcapproved,
		});
		setNAACRating(args.naacrating);
		setNAACCGPA(args.naaccgpa);

		// course
		if (args.courses && args.courses.length > 0) {
			let courses = [];
			setTotalFee(args.courses[0].totalfee);
			for (const arrObj of args.courses) {
				courses.push(arrObj.name);
				if (courses.length >= 5) break;
			}
			setCourseArr(courses);
		}

		// check in compare
		setIsInCompare(compareCollegeArr.includes(args.uid));
	}, []);

	function addToCompare() {
		if (isInCompare) {
			removeCompare(args.uid);
			return;
		}
		if (compareCollegeArr.length >= compareLimit) {
			alert("Compare Limit is 4");
			return;
		}
		addCompare(args.uid);
	}

	return (
		<>
			<div className="collegeCardRow">
				<div className="collegeCardRow__section">
					<div className="collegeCardRow__sectionHead" style={{ display: args.isHeadShow ? "block" : "none" }}>
						<div className="collegeCardRow__sectionTitle">
							<span>University</span>
						</div>
					</div>
					<div className="collegeCardRow__sectionBody">
						<div className="collegeCardRow__university">
							<div className="collegeCardRow__universityTitle">
								<img src={img_ignou} className="img-fluid" alt="" />
								<span>
									<Link to={"/college/detail/" + collegeId}>{collegeName}</Link>
								</span>
							</div>
							<div className="collegeCardRow__universityRow">
								<div className="collegeCardRow__universityCol6">
									<img src={icon_univCap} className="img-fluid" alt="" />
									<span>ESTD. {estd}</span>
								</div>
								<div className="collegeCardRow__universityCol6">
									<img src={icon_location} className="img-fluid" alt="" />
									<span>{location}</span>
								</div>
							</div>
							<div className="collegeCardRow__universityMode">
								<img src={icon_clock} className="img-fluid" alt="" />
								<span>
									<span className="label">Mode</span> : Online & Distance
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="collegeCardRow__section">
					<div className="collegeCardRow__sectionHead" style={{ display: args.isHeadShow ? "block" : "none" }}>
						<div className="collegeCardRow__sectionTitle collegeCardRow__sectionTitleWithInfobtn">
							<span>Approved By</span>
							<Example />
						</div>
					</div>
					<div className="collegeCardRow__sectionBody">
						<div className="collegeCardRow__approved">
							<div className="collegeCardRow__approvedList">
								<div className="collegeCardRow__approvedListItem">
									<span>AIU</span>
									<img src={approved.aiu === 1 ? icon_check : icon_close} className="img-fluid" alt="" />
								</div>
								<div className="collegeCardRow__approvedListItem">
									<span>DEB</span>
									<img src={approved.deb === 1 ? icon_check : icon_close} className="img-fluid" alt="" />
								</div>
								<div className="collegeCardRow__approvedListItem d-none">
									<span>DEC</span>
									<img src={approved.dec === 1 ? icon_check : icon_close} className="img-fluid" alt="" />
								</div>
								<div className="collegeCardRow__approvedListItem">
									<span>UGC</span>
									<img src={approved.ugc === 1 ? icon_check : icon_close} className="img-fluid" alt="" />
								</div>
							</div>
							<div className="collegeCardRow__naac">
								<h4>NAAC ACCREDITATION</h4>
								<div>
									<p>
										{naacRating}
										{NAACCGPA}(CGPA)
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="collegeCardRow__section">
					<div className="collegeCardRow__sectionHead" style={{ display: args.isHeadShow ? "block" : "none" }}>
						<div className="collegeCardRow__sectionTitle">
							<span>Fee</span>
						</div>
					</div>
					<div className="collegeCardRow__sectionBody">
						<div className="collegeCardRow__fee">
							<div className="collegeCardRow__feeBox">
								<p>{totalFee ? totalFee + " INR" : "-"} </p>
							</div>
						</div>
					</div>
				</div>
				<div className="collegeCardRow__section">
					<div className="collegeCardRow__sectionHead" style={{ display: args.isHeadShow ? "block" : "none" }}>
						<div className="collegeCardRow__sectionTitle">
							<span>
								INTERNATIONAL <br /> COLLABORATION
							</span>
						</div>
					</div>
					<div className="collegeCardRow__sectionBody">
						<div className="collegeCardRow__foreign">
							<div className="collegeCardRow__foreignBox">
								<p>{intCollab}</p>
							</div>
						</div>
					</div>
				</div>
				<div className="collegeCardRow__section">
					<div className="collegeCardRow__sectionHead" style={{ display: args.isHeadShow ? "block" : "none" }}>
						<div className="collegeCardRow__sectionTitle">
							<span>Magazine Rank</span>
						</div>
					</div>
					<div className="collegeCardRow__sectionBody">
						<div className="collegeCardRow__rank">
							<div className="collegeCardRow__rankItem">
								<div className="collegeCardRow__rankCircle">
									<span>{rank_outlook.rank}</span>
								</div>
								<div className="collegeCardRow__rankText">
									<p>
										Outlook <br /> {rank_outlook.year}
									</p>
								</div>
							</div>
							<div className="collegeCardRow__rankItem">
								<div className="collegeCardRow__rankCircle">
									<span>{rank_indiaToday.rank}</span>
								</div>
								<div className="collegeCardRow__rankText">
									<p>
										India Today <br /> {rank_indiaToday.year}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="collegeCardRow__sectionFooter">
						<Link to={"/college/detail/" + collegeId} className="btn collegeCardRow__sectionBtn collegeCardRow__sectionBtnDetail me-1">
							More Details
						</Link>
						<Link to={URLMapping.applyNow.label} className="btn collegeCardRow__sectionBtn collegeCardRow__sectionBtnApply">
							Apply Now
						</Link>
					</div>
				</div>
				<div className="collegeCardRow__section">
					<div className="collegeCardRow__sectionHead" style={{ display: args.isHeadShow ? "flex" : "none" }}></div>
					<div className="collegeCardRow__sectionBody collegeCardRow__sectionLast">
						<div className="collegeCardRow__rating">
							<div style={{ width: "100%", textAlign: "center", fontWeight: "700" }}>
								<p>Courses</p>
							</div>
							<div style={{ width: "100%" }}>
								{courseArr.map((arrObj) => {
									return <p key={Math.random()}>{arrObj}</p>;
								})}
							</div>
						</div>
					</div>
					<div className="collegeCardRow__sectionFooter collegeCardRow__sectionFooterLast">
						<button className={"btn collegeCardRow__sectionBtn collegeCardRow__sectionBnCompare " + (isInCompare ? "collegeCardRow__sectionBnCompare--active" : "")} onClick={addToCompare}>
							<img src={icon_compare} className="img-fluid me-2" alt="" />
							<span>Add to Compare</span>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

function Example() {
	const [show, setShow] = useState(false);
	const [target, setTarget] = useState(null);
	const ref = useRef(null);

	const handleClick = (event) => {
		setShow(!show);
		setTarget(event.target);
	};

	return (
		<div ref={ref} className="infoBtn">
			<button onClick={handleClick} className="tooltip-btn">
				<img src={icon_info} />
			</button>

			<Overlay show={show} target={target} placement="top" container={ref} containerPadding={20}>
				<Popover id="popover-contained">
					<Popover.Body>Approved By, AIU, DEB, UGC</Popover.Body>
				</Popover>
			</Overlay>
		</div>
	);
}
