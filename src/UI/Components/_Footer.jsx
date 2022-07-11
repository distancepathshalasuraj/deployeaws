import { FaLinkedinIn, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import URLMapping from "../../Context/URLs";

import React from "react";

// images, icons
import icon_brand from "../../assets/images/brand/Option4.png";

export default function Footer() {
	return (
		<>
			<div className="container-fluid footerBlack">
				<div className="container">
					<div className="row">
						<div className="col-lg-3">
							<div className="footerBlack__brand">
								<img src={icon_brand} alt="" />
							</div>
						</div>
						<div className="col-lg-3">
							<div className="footerBlack__title">
								<h3>Contact Us</h3>
							</div>
							<div className="footerBlack__body">
								<p>
									Office No. 06, 2nd floor <br /> B-108, Sector-63 <br /> Noida-201301
								</p>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="footerBlack__title">
								<h3>Social Contact</h3>
							</div>
							<div className="footerBlack__body footerBlackSocials">
								<div>
									<FaLinkedinIn />
								</div>
								<div>
									<FaInstagram />
								</div>
								<div>
									<FaFacebookF />
								</div>
								<div>
									<FaTwitter />
								</div>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="footerBlack__title">
								<h3>Connect Through</h3>
							</div>
							<div className="footerBlack__body">
								<p>
									contact@distancepathshala.com <br /> +91 90684 74447
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container-fluid footerBlue">
				<div className="container">
					<div className="row ">
						<div className="col-lg-4 footerBlue__left">
							<div className="row">
								<div className="col-6">
									<div className="footerBlue__title">
										<h3>UG Courses</h3>
									</div>
									<div className="footerBlue__body">
										<ul role="list">
											<li>
												<Link to={URLMapping.UG.BA.label}>BA</Link>
											</li>
											<li>
												<Link to={URLMapping.UG.BCA.label}>BCA</Link>
											</li>
											<li>
												<Link to={URLMapping.UG.BCom.label}>B.Com</Link>
											</li>
											<li>
												<Link to={URLMapping.UG.BBA.label}>BBA</Link>
											</li>
										</ul>
									</div>
								</div>
								<div className="col-6">
									<div className="footerBlue__title">
										<h3>PG Courses</h3>
									</div>
									<div className="footerBlue__body borderRight">
										<ul role="list">
											<li>
												<Link to={URLMapping.PG.MA.label}>MA</Link>
											</li>
											<li>
												<Link to={URLMapping.PG.MCA.label}>MCA</Link>
											</li>
											<li>
												<Link to={URLMapping.PG.MCom.label}>M.Com</Link>
											</li>
											<li>
												<Link to={URLMapping.PG.MBA.label}>MBA</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="footerBlue__footer borderRight">
								<h4>Diploma & Certificate</h4>
							</div>
						</div>
						<div className="col-lg-6 ms-5">
							<div className="row">
								<div className="col-4">
									<div className="footerBlue__title">
										<h3>Useful Links</h3>
									</div>
									<div className="footerBlue__body">
										<ul role="list">
											<li>
												- <Link to={URLMapping.home.label}>Home</Link>{" "}
											</li>
											<li>
												- <Link to={URLMapping.findCourse.label}>Find Course</Link>
											</li>
											<li>
												- <Link to={URLMapping.aboutUs.label}>About Us</Link>
											</li>
											<li>
												- <Link to={URLMapping.applyNow.label}>Apply Now</Link>
											</li>
											<li>
												- <Link to={URLMapping.compare.label}>Compare University</Link>
											</li>
											<li>- Conselling</li>
											<li>- Why Us</li>
											<li>
												- <Link to={URLMapping.contactUs.label}>Contact Us</Link>
											</li>
										</ul>
									</div>
								</div>
								<div className="col-4">
									<div className="footerBlue__title"></div>
									<div className="footerBlue__body">
										<ul role="list">
											<li>- Top Universites </li>
											<li>- Top Searches </li>
											<li>- Top Comparison</li>
											<li>- Experts Advice - 30 mins</li>
										</ul>
									</div>
								</div>
								<div className="col-4">
									<div className="footerBlue__title"></div>
									<div className="footerBlue__body">
										<ul role="list">
											{/* <li>- Blog </li>
											<li>- News</li>
											<li>- Our Channel</li>
											<li>- Become a Mentor</li>
											<li>- Our Policy</li>
											<li>- Trust Us</li> */}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="containner-fluid pageRights">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<p>© All Rights Reserved</p>
						</div>
						<div className="col-lg-4">
							<p>
								<Link to={URLMapping.home.label}>Home</Link> | Our Values | <Link to={URLMapping.aboutUs.label}>About Team</Link> | <Link to={URLMapping.contactUs.label}>Contact Us</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
