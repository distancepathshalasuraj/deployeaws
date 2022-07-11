import React from "react";
import { Link } from "react-router-dom";
import URLMapping from "../../Context/URLs";

export default function HomeQuickInterest() {
	return (
		<>
			<div className="container-fluid homeQuickInrst">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="homeQuickInrst__left">
								<div className="homeQuickInrst__leftHead">
									<h2>quite interesting right</h2>
								</div>
								<div className="homeQuickInrst__leftText">
									<p>1800-180-1000 / distancepathsala@gmail.com</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="homeQuickInrst__right">
								<div className="homeQuickInrst__btnBox">
									<Link className="homeQuickInrst__findYourCourseBtn btn" to={URLMapping.courseList.label}>
										Find Your Course
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
