import React from "react";
import { useEffect, useState } from "react";
import College from "../../assets/scripts/API/College";
import CollegeCardCol from "./_CollegeCardCol";

export default function CollegeCardColList() {
	const [collegeArr, setCollegeArr] = useState([]);
	useEffect(() => {
		const getData = async () => {
			const res = await College.getAll({ page: 0 });
			setCollegeArr(res);
		};
		getData();
	}, []);

	return (
		<>
			<div className="collegeList">
				<div className="container-fluid">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-6 col-sm-12">
								<CollegeCardCol />
							</div>
							<div className="col-lg-4 col-md-6 col-sm-12">
								<CollegeCardCol />
							</div>
							<div className="col-lg-4 col-md-6 col-sm-12">
								<CollegeCardCol />
							</div>
							<div className="col-lg-4 col-md-6 col-sm-12">
								<CollegeCardCol />
							</div>
							<div className="col-lg-4 col-md-6 col-sm-12">
								<CollegeCardCol />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
