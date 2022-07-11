import React from "react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DATA_LAYER } from "../../App";
import URLMapping from "../../Context/URLs";

export default function HomeCollegeCard({ ...args }) {
	const { addCompare, removeCompare, compareCollegeIds, compareLimit } = useContext(DATA_LAYER);
	const [isInCompare, setIsInCompare] = useState(false);

	const [collegeId, setCollegeId] = useState("");
	const [collegeName, setCollegeName] = useState("NA");
	const [estd, setESTD] = useState("-");
	const [location, setLocation] = useState("location");
	const [currentSession, setCurrentSession] = useState("NA");
	const [nextSession, setnextSession] = useState("NA");
	const [policy, setPolicy] = useState("NA");
	const [intCollab, setIntCollab] = useState("No");
	const [rank_outlook, setRank_outlook] = useState("NA");
	const [rank_indiaToday, setRank_indiaToday] = useState("NA");
	const [fees, setFees] = useState("0 - 0");
	const [learningPerWeek, setLearningPerWeek] = useState("NA");
	useEffect(() => {
		setLearningPerWeek(args.learningperweek);
		setCollegeId(args.uid);
		setCollegeName(args.name);
		setESTD(args.estb);
		setLocation(args.city);
		setCurrentSession(args.currentadmissionsession);
		setnextSession(args.nextadmissionsession);

		args.policytype != null && setPolicy(args.policytype);
		setIntCollab(args.hasintcollaboration);
		if (args.ranking) {
			if (args.ranking.length > 0) {
				for (const rankItem of args.ranking) {
					if (rankItem.authority === "outlook") {
						setRank_outlook(rankItem.ranking + " in " + rankItem.rankingyear);
						continue;
					}
					if (rankItem.authority === "India Today Group") {
						setRank_indiaToday(rankItem.ranking + " in " + rankItem.rankingyear);
					}
				}
			}
		}
		setFees(Number(args.minfees).toLocaleString("en-IN") + " - " + Number(args.maxfees).toLocaleString("en-IN"));

		// check in compare
		setIsInCompare(compareCollegeIds.includes(args.uid));
	}, [isInCompare]);

	function addToCompare() {
		if (isInCompare) {
			removeCompare(args);
			// setIsInCompare(false);
			return;
		}
		if (compareCollegeIds.length >= compareLimit) {
			alert("Compare Limit is 4");
			return;
		}
		// setIsInCompare(true);
		addCompare(args);
	}

	return (
		<div className="compareCard">
			<div className="compareCard__title">
				<div>
					<h3>{collegeName}</h3>
					<span>ESTD. {estd}</span>
				</div>
				<input type="checkbox" name="" className="compareCard__compareCheckbox d-none" id="" />
			</div>
			<div className="compareCard__body">
				<div className="compareCard__rowDetail">
					<div className="compareCard__detailBox">
						<div className="compareCard__detailHead">
							<h4>Mode</h4>
						</div>
						<div className="compareCard__detailDesc">
							<p>Distance & Onlince</p>
						</div>
					</div>
					<div className="compareCard__detailBox">
						<div className="compareCard__detailHead">
							<h4>location</h4>
						</div>
						<div className="compareCard__detailDesc">
							<p>{location}</p>
						</div>
					</div>
				</div>
				<div className="compareCard__rowDetail">
					<div className="compareCard__detailBox">
						<div className="compareCard__detailHead">
							<h4>current session</h4>
						</div>
						<div className="compareCard__detailDesc">
							<p>{currentSession}</p>
						</div>
					</div>
					<div className="compareCard__detailBox">
						<div className="compareCard__detailHead">
							<h4>next session</h4>
						</div>
						<div className="compareCard__detailDesc">
							<p>{nextSession}</p>
						</div>
					</div>
				</div>
				<div className="compareCard__rowDetail">
					<div className="compareCard__detailBox">
						<div className="compareCard__detailHead">
							<h4 className="headDark">Learning Effort </h4>
						</div>
						<div className="compareCard__detailDesc">
							<p>{learningPerWeek} hrs / Week</p>
						</div>
					</div>
					<div className="compareCard__detailBox">
						<div className="compareCard__detailHead">
							<h4 className="headDark">International Collaboration</h4>
						</div>
						<div className="compareCard__detailDesc">
							<p>{intCollab}</p>
						</div>
					</div>
				</div>
				<div className="compareCard__rowDetail">
					<div className="compareCard__detailBox">
						<div className="compareCard__detailHead">
							<h4 className="headDark">Placement</h4>
						</div>
						<div className="compareCard__detailDesc">
							<p>Placement details</p>
						</div>
					</div>
					<div className="compareCard__detailBox">
						<div className="compareCard__detailHead">
							<h4 className="headDark">Policy</h4>
						</div>
						<div className="compareCard__detailDesc">
							<p>{policy}</p>
						</div>
					</div>
				</div>
				<div className="compareCard__rowDetail">
					<div className="compareCard__detailBox">
						<div className="compareCard__detailHead">
							<h4 className="headDark">Outlook</h4>
						</div>
						<div className="compareCard__detailDesc">
							<p>{rank_outlook}</p>
						</div>
					</div>
					<div className="compareCard__detailBox">
						<div className="compareCard__detailHead">
							<h4 className="headDark">India Today Group</h4>
						</div>
						<div className="compareCard__detailDesc">
							<p>{rank_indiaToday}</p>
						</div>
					</div>
				</div>
				<div className="compareCard__feeBox">
					<p>fee {fees} INR</p>
				</div>
				<div className="compareCard__btns">
					<div className="compareCard__btnBox">
						<button className={"compareCard__btn btn " + (isInCompare ? "compareCard__compareBtn--active" : "compareCard__compareBtn")} onClick={addToCompare}>
							Compare
						</button>
					</div>
					<div className="compareCard__btnBox">
						<Link className="compareCard__btn compareCard__detailBtn btn" to={"/college/detail/" + collegeId}>
							More Details
						</Link>
					</div>
					<div className="compareCard__btnBox">
						<Link to={URLMapping.applyNow.label} className="compareCard__btn compareCard__applyBtn btn">
							Apply
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
