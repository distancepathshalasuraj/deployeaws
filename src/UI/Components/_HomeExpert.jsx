import React from "react";
// images
import { Link } from "react-router-dom";
import img_homeExpert_bg from "../../assets/images/home/homeExport_bg.svg";
import URLMapping from "../../Context/URLs";

export default function HomeExpert() {
	return (
		<>
			<div className="container-fluid homeExpert">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="homeExpert__left">
								<div className="homeExpert__imgBox">
									<img src={img_homeExpert_bg} className="img-fluid" alt="" />
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="homeExpert__Right">
								<div className="homeExpert__title">
									<h2>
										<span>Talk to Our</span> Expert
									</h2>
								</div>
								<div className="homeExpert__list">
									<div className="homeExpert__listItem">
										<div className="homeExpert__itemCount homeExpert__itemCount1">1</div>
										<div className="homeExpert__itemText">
											<Link to={URLMapping.applyNow.label}>
												<p>Book An Appointment</p>{" "}
											</Link>
										</div>
									</div>
									<div className="homeExpert__listItem">
										<div className="homeExpert__itemCount homeExpert__itemCount2">2</div>
										<div className="homeExpert__itemText">
											<Link to={URLMapping.applyNow.label}>
												<p>Book your 30 minutes slot</p>
											</Link>
										</div>
									</div>
									<div className="homeExpert__listItem">
										<div className="homeExpert__itemCount homeExpert__itemCount3">3</div>
										<div className="homeExpert__itemText">
											<Link to={URLMapping.applyNow.label}>
												<p>Make a Direct call</p>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
