// dependency
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

// components
import { CompareCollegeBox } from "./_CompareSelect";
// images
import icon_comparison from "../../assets/images/header/comparison.svg";

// APIs
import College from "../../assets/scripts/API/College";

export default function CompareOther({ ...props }) {
	const [college1, setCollege1] = useState({});
	const [college2, setCollege2] = useState({});
	const [college3, setCollege3] = useState({});
	const [college4, setCollege4] = useState({});
	useEffect(() => {
		const getOtherCollege = async () => {
			const collegeRes = await College.getSimiliars({ activeCourse: props.uid });
			if (collegeRes != null) {
				if (collegeRes.length >= 1) {
					setCollege1(collegeRes[0]);
				}
				if (collegeRes.length >= 2) {
					setCollege2(collegeRes[1]);
				}
				if (collegeRes.length >= 3) {
					setCollege3(collegeRes[2]);
				}
				if (collegeRes.length >= 4) {
					setCollege4(collegeRes[3]);
				}
			}
		};
		getOtherCollege();
	}, []);

	return (
		<>
			<div className="compareOther">
				<div className="container-fluid">
					<div className="container">
						<div className="compareOther-title">
							<h2>compare with other colleges</h2>
						</div>
						<div className="compareOther-body">
							<div className="row mb-3">
								<div className="col-lg-3">
									<CompareCollegeBox {...college1} />
								</div>
								<div className="col-lg-3">
									<CompareCollegeBox {...college2} />
								</div>
								<div className="col-lg-3">
									<CompareCollegeBox {...college3} />
								</div>
								<div className="col-lg-3">
									<CompareCollegeBox {...college4} />
								</div>
							</div>
							<div className="compareOther-footer">
								<button className="btn compareOtherBtn">
									<img src={icon_comparison} alt="" />
									<span>Compare</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
