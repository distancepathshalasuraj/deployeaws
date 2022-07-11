import React from "react";
// icons
import icon_compare from "../../assets/images/icons/comparison.svg";
import icon_plus from "../../assets/images/icons/plus.svg";
import icon_start from "../../assets/images/icons/startIcon.svg";
import img_ignou from "../../assets/images/university/ignouIcon.svg";

// react
import { useContext, useEffect, useState } from "react";
import CompareCollege from "./_CompareCollege";
import { DATA_LAYER } from "../../App";
import College from "../../assets/scripts/API/College";
import URLMapping from "../../Context/URLs";

export default function CompareSelect() {
	const { removeCompare, compareCollegeArr } = useContext(DATA_LAYER);
	const [isHiddenStart, setIsHiddenStart] = useState(false);
	const [college1, setCollege1] = useState({});
	const [college2, setCollege2] = useState({});
	const [college3, setCollege3] = useState({});
	const [college4, setCollege4] = useState({});
	useEffect(() => {
		const getData = async () => {
			const collegeObjArr = await College.getOne(compareCollegeArr.toString());
			if (!collegeObjArr.length) {
				setCollege1({});
				setCollege2({});
				setCollege3({});
				setCollege4({});
			}
			if (collegeObjArr.length >= 1) {
				setCollege1(collegeObjArr[0]);
				setCollege2({});
				setCollege3({});
				setCollege4({});
			}
			if (collegeObjArr.length >= 2) {
				setCollege2(collegeObjArr[1]);
				setCollege3({});
				setCollege4({});
			}
			if (collegeObjArr.length >= 3) {
				setCollege3(collegeObjArr[2]);
				setCollege4({});
			}
			if (collegeObjArr.length >= 4) {
				setCollege4(collegeObjArr[3]);
			}
		};
		getData();
	}, [compareCollegeArr]);

	function removeFromCompare(collegeId) {
		if (collegeId === college1.uid) {
			removeCompare(collegeId);
			return;
		}
		if (collegeId === college2.uid) {
			removeCompare(collegeId);
			return;
		}
		if (collegeId === college3.uid) {
			removeCompare(collegeId);
			return;
		}
		if (collegeId === college4.uid) {
			removeCompare(collegeId);
			return;
		}
	}

	return (
		<>
			<div className="compareSelect">
				<div className="container-fluid">
					<div className="container">
						<div className="compareSelect__title">
							<p>{compareCollegeArr.length > 0 ? "" : "No College is Selected"} </p>
						</div>
						<div className="compareSelect__boxs">
							<div className="row">
								<div className="col-lg-3 col-md-3 col-sm-6">{CompareSelectBox(college1, 1)}</div>
								<div className="col-lg-3 col-md-3 col-sm-6">{CompareSelectBox(college2, 2)}</div>
								<div className="col-lg-3 col-md-3 col-sm-6">{CompareSelectBox(college3, 3)}</div>
								<div className="col-lg-3 col-md-3 col-sm-6">{CompareSelectBox(college4, 4)}</div>
							</div>
						</div>
						<div className="compareSelect__footer d-none">
							<div className="compareSelect__btn">
								<button className="btn btn__primary btnCompare">
									<img src={icon_compare} className="img-fluid" alt="" />
									<span>Compare</span>
								</button>
							</div>

							<div className="compareSelect__startBox" style={{ display: isHiddenStart ? "none" : "block" }}>
								<div className="compareSelect__start">
									<img src={icon_start} className="img-fluid" alt="" />
									<p> Start to </p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<CompareCollege college1={college1} college2={college2} college3={college3} college4={college4} />
			</div>
		</>
	);

	function CompareSelectBox(colObj, collegeCount) {
		return (
			<div className="compareSelectBox">
				<div className="compareSelectBox__removeBtnBox">
					<button className="compareSelectBox__removeBtn" onClick={(e) => removeFromCompare(colObj.uid)}>
						X
					</button>
				</div>
				<div className="compareSelectBox__top">
					<p>{colObj.name}</p>
				</div>
				<div className="compareSelectBox__mid">
					<div className="compareSelectBox__circle">
						<a className="compareSelectBox__circleBtn" href={colObj.uid ? "/College/detail/" + colObj.uid : URLMapping.findCourse.label}>
							<div className="compareSelectBox__circleText">
								<img src={colObj.uid ? img_ignou : icon_plus} className="img-fluid" alt="" />
							</div>
						</a>
					</div>
				</div>
				<div className="compareSelectBox__low">
					{colObj.uid ? (
						<div className="compareSelectBox__Text">
							<p>
								NAAC Accreditation <br /> {colObj.naacrating}, {colObj.naaccgpa} (CGPA)
							</p>
						</div>
					) : (
						<div className="compareSelectBox__count">
							<p>{collegeCount}</p>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export function CompareCollegeBox({ ...colObj }) {
	const { addCompare, removeCompare, compareCollegeArr, compareLimit } = useContext(DATA_LAYER);
	const [isInCompare, setIsInCompare] = useState(false);

	function addToCompare() {
		if (!colObj.uid) return;
		if (isInCompare) {
			removeCompare(colObj.uid);
			setIsInCompare(false);
			return;
		}

		if (compareCollegeArr.length >= compareLimit) {
			alert("Compare Limit is 4");
			return;
		}
		setIsInCompare(true);
		addCompare(colObj.uid);
	}
	useEffect(() => {
		setIsInCompare(compareCollegeArr.includes(colObj.uid));
	}, [colObj]);
	return (
		<div className="compareSelectBox">
			<div className="compareSelectBox__addBtnBox">
				<input type="checkbox" checked={isInCompare} onChange={(e) => addToCompare(colObj)} />
			</div>
			<div className="compareSelectBox__top">
				<p>{colObj.name}</p>
			</div>
			<div className="compareSelectBox__mid">
				<div className="compareSelectBox__circle">
					<a className="compareSelectBox__circleBtn" href={colObj.uid ? "/College/detail/" + colObj.uid : URLMapping.findCourse.label}>
						<div className="compareSelectBox__circleText">
							<img src={colObj.uid ? img_ignou : icon_plus} className="img-fluid" alt="" />
						</div>
					</a>
				</div>
			</div>
			<div className="compareSelectBox__low">
				{colObj.uid ? (
					<div className="compareSelectBox__Text">
						<p>
							NAAC Accreditation <br /> {colObj.naacrating}, {colObj.naaccgpa} (CGPA)
						</p>
					</div>
				) : (
					<div className="compareSelectBox__count">
						<p>{}</p>
					</div>
				)}
			</div>
		</div>
	);
}
