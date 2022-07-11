import React from "react";
import icon_homeFilterComparison1 from "../../assets/images/home/home_filterComparison1.png";
import icon_homeFilterComparison2 from "../../assets/images/home/home_filterComparison2.png";
import icon_homeFilterComparison3 from "../../assets/images/home/home_filterComparison3.png";
export default function HomeFilterComparison() {
	return (
		<>
			<div className="container-fluid homeFilterComparison">
				<div className="container">
					<div className="homeFilterComparison__title">
						<h2>
							Leverage Ultra-modern <span className="highlight">Filters & Comparison</span> <br /> Features
						</h2>
					</div>
					<div className="homeFilterComparison__body">
						<div className="row">
							<div className="col-4">
								<div className="homeFilterComparison-card homeFilterComparison-card-1">
									<div className="eclipse-1">
										<div className="eclipse-2">
											<img src={icon_homeFilterComparison1} className="img-fluid" alt="" />
										</div>
									</div>
									<div className="homeFilterComparison-card-text">
										<p>Compare colleges in-detail with a list of filters such as course level, average rating, fees, course duration and more.</p>
									</div>
								</div>
							</div>
							<div className="col-4">
								<div className="homeFilterComparison-card homeFilterComparison-card-2">
									<div className="eclipse-1">
										<div className="eclipse-2">
											<img src={icon_homeFilterComparison2} className="img-fluid" alt="" />
										</div>
									</div>
									<div className="homeFilterComparison-card-text">
										<p>Find colleges with unlimited access to ultra-modern features to get your right fit, try it yourself and feel the difference. </p>
									</div>
								</div>
							</div>
							<div className="col-4">
								<div className="homeFilterComparison-card homeFilterComparison-card-3">
									<div className="eclipse-1">
										<div className="eclipse-2">
											<img src={icon_homeFilterComparison3} className="img-fluid" alt="" />
										</div>
									</div>
									<div className="homeFilterComparison-card-text">
										<p>Filter colleges via approval status and accreditations to get the right information at the right time.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="findCourse-bar">
				<div className="container findCourse-bar-row">
					<div className="findCourse-bar__text">
						<p>
							Get on with your search for top distance education <br /> college and give your career the boost it needs!
						</p>
					</div>
					<div className="findCourse-bar__btn-box">
						<button className="findCourse-bar__btn">Find Your Course</button>
					</div>
				</div>
			</div>
		</>
	);
}
