import { useEffect, useState } from "react";
import College from "../../assets/scripts/API/College";
import HomeCollegeCard from "./_HomeCollegeCard";

import React from "react";

export default function HomeCompare() {
	const [collegeArr, setCollegeArr] = useState([]);
	// api
	useEffect(() => {
		const getData = async () => {
			const resAPI = await College.getAll({ page: 0 });
			setCollegeArr(resAPI);
		};
		// getData();
	}, []);
	return (
		<>
			<div className="container-fluid homeCompare d-none">
				<div className="container">
					<div className="homeCompare__title">
						<h2>Compare College</h2>
					</div>
					<div className="row">
						{collegeArr.map((arrItem) => {
							return (
								<div key={Math.random()} className="col-lg-4 col-md-6 col-sm-12">
									<HomeCollegeCard {...arrItem} />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}
