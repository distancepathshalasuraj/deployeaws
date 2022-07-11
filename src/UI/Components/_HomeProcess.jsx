// icons
import icon_homeProcessSearch from "../../assets/images/home/icon-process-find.svg";
import icon_homeProcess_compare from "../../assets/images/home/homeProcess_Compare.svg";
import icon_homeProcess_consult from "../../assets/images/home/homeProcess_Consult.svg";
import icon_homeProcess_decision from "../../assets/images/home/homeProcess_Decision.svg";
import icon_homeProcess_apply from "../../assets/images/home/homeProcess_Apply.svg";

import React from "react";
import { Link } from "react-router-dom";
import URLMapping from "../../Context/URLs";
export default function HomeProcess() {
	return (
		<>
			<div className="container-fluid homeProcess">
				<div className="container">
					<div className="homeProcess__title">
						<h2>
							Distance pathasala's <br />
							<span className="homeProcess__titleDark">process</span>
						</h2>
					</div>
					<div className="homeProcess__cards">
						<div className="homeProcess__card">
							<Link to={URLMapping.findCourse.label}>
								<div className="homeProcess__cardContent">
									<div className="homeProcess__cardHead">{/* <h3> Search</h3> */}</div>
									<div className="homeProcess__cardBody">
										<div className="homeProcess__card-title">
											<h3>Search</h3>
										</div>
										<div className="homeProcess__cardImgBox">
											<img src={icon_homeProcessSearch} className="img-fluid" alt="" />
										</div>
										<p>Apply a wide range of filters to get customized results.</p>
									</div>
								</div>
							</Link>
						</div>
						<div className="homeProcess__card">
							<Link to="#">
								<div className="homeProcess__cardContent">
									<div className="homeProcess__cardHead">{/* <h3> </h3> */}</div>
									<div className="homeProcess__cardBody">
										<div className="homeProcess__card-title">
											<h3>Compare</h3>
										</div>
										<div className="homeProcess__cardImgBox">
											<img src={icon_homeProcess_compare} className="img-fluid" alt="" />
										</div>
										<p>Get detailed info about hundreds of distance colleges. </p>
									</div>
								</div>
							</Link>
						</div>
						<div className="homeProcess__cardCenter">
							<div className="homeProcess__cardContent">
								<div className="homeProcess__cardImgBox"></div>
								<div className="homeProcess__cardHead">
									<h3>Consult</h3>
								</div>
								<div className="homeProcess__cardBody">
									<div className="homeProcess__cardImgBox">
										<img src={icon_homeProcess_consult} className="img-fluid" alt="" />
									</div>
									<p>Highly qualified educational experts at your service.</p>
								</div>
							</div>
						</div>
						<div className="homeProcess__card">
							<Link to={URLMapping.applyNow.label}>
								<div className="homeProcess__cardContent">
									<div className="homeProcess__cardHead">{/* <h3></h3> */}</div>
									<div className="homeProcess__cardBody">
										<div className="homeProcess__card-title">
											<h3>Decide</h3>
										</div>
										<div className="homeProcess__cardImgBox">
											<img src={icon_homeProcess_decision} className="img-fluid" alt="" />
										</div>
										<p> Find out your perfect pick with our exclusive services.</p>
									</div>
								</div>
							</Link>
						</div>
						<div className="homeProcess__card">
							<Link to={URLMapping.bookAppointment.label}>
								<div className="homeProcess__cardContent">
									<div className="homeProcess__cardHead">{/* <h3></h3> */}</div>
									<div className="homeProcess__cardBody">
										<div className="homeProcess__card-title">
											<h3>Apply</h3>
										</div>
										<div className="homeProcess__cardImgBox">
											<img src={icon_homeProcess_apply} className="img-fluid" alt="" />
										</div>
										<p>Fill out the form and your application is ready to go.</p>
									</div>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
