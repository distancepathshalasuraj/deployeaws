import React from "react";
import icon_triangle from "../../assets/images/home/icon-triangle.svg";
import icon_ignou from "../../assets/images/university/ignouIcon.svg";
import bg_eclipse from "../../assets/images/home/bg-eclipse.png";
import icon_arrow from "../../assets/images/home/home_universityCard-arrow.png";
import { Col, Nav, Row, Tab, Tabs } from "react-bootstrap";
import { useState } from "react";
export default function HomeCourses() {
	const [activeTab, setActiveTab] = useState("PG_COURSE");

	const activeTabClass = "homeCourses__listHead--active";

	return (
		<div className="container-fluid homeCourses">
			<img className="homeCourses__body-bg" src={bg_eclipse} alt="" />
			<div className="container">
				<div className="homeCourses-box">
					<div className="homeCourses__title">
						<h2>
							Compare course from multiple <br />
							<span className="highlight">University</span> in one place
						</h2>
					</div>

					{/* Tabular */}
					<div className="homeCourses__body">
						<Tab.Container id="left-tabs-example" defaultActiveKey="PG_COURSE" onSelect={(e) => setActiveTab(e)}>
							<Row>
								<Col sm={12}>
									<Nav variant="pills" className="flex-row">
										<Nav.Item>
											<Nav.Link eventKey="UG_COURSE">
												<div className={"homeCourses__listHead " + (activeTab == "UG_COURSE" ? activeTabClass : "")}>
													<div className="icon">
														<img src={icon_triangle} alt="" />
													</div>
													UG Courses
												</div>
											</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey="PG_COURSE">
												<div className={"homeCourses__listHead " + (activeTab == "PG_COURSE" ? activeTabClass : "")}>
													<div className="icon">
														<img src={icon_triangle} alt="" />
													</div>
													PG Courses
												</div>
											</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey="DIPLOMA_CERTIFICATE">
												<div className={"homeCourses__listHead " + (activeTab == "PG_COURSE" ? activeTabClass : "")}>
													<div className="icon">
														<img src={icon_triangle} alt="" />
													</div>
													Diploma & Certificates
												</div>
											</Nav.Link>
										</Nav.Item>
									</Nav>
								</Col>
								<Col sm={12}>
									<Tab.Content>
										<Tab.Pane eventKey="UG_COURSE">
											<div className="row homeCourses__cards">
												<div className="col-11">
													<div className="row">
														<div className="col-3">
															<div className="homeCourses-card">
																<div className="homeCourses-card__title">
																	<h3>BA</h3>
																</div>
																<div className="homeCourses-card__body-box">
																	<div className="homeCourses-card__body">
																		<p>A Bachelor of Arts (BA) is an undergraduate arts curriculum. BA degrees are available in a variety of areas, including English, Hindi, History, Journalism, and Psychology.</p>
																		<img src={icon_arrow} className="icon-arrow img-fluid" alt="" />
																	</div>
																</div>
															</div>
														</div>
														<div className="col-3">
															<div className="homeCourses-card">
																<div className="homeCourses-card__title">
																	<h3>BBA</h3>
																</div>
																<div className="homeCourses-card__body-box">
																	<div className="homeCourses-card__body">
																		<p>BBA courses are part of a three-year undergraduate business management programme that teaches students managerial and entrepreneurial abilities. It has wide array of possibilities.</p>
																		<img src={icon_arrow} className="icon-arrow img-fluid" alt="" />
																	</div>
																</div>
															</div>
														</div>
														<div className="col-3">
															<div className="homeCourses-card">
																<div className="homeCourses-card__title">
																	<h3>BCA</h3>
																</div>
																<div className="homeCourses-card__body-box">
																	<div className="homeCourses-card__body">
																		<p>Bachelor of Computer Application (BCA) is a three-year undergraduate programme that teaches the fundamentals of computer application and software development.</p>
																		<img src={icon_arrow} className="icon-arrow img-fluid" alt="" />
																	</div>
																</div>
															</div>
														</div>
														<div className="col-3">
															<div className="homeCourses-card">
																<div className="homeCourses-card__title">
																	<h3>B.Com</h3>
																</div>
																<div className="homeCourses-card__body-box">
																	<div className="homeCourses-card__body">
																		<p>Accounting, Economics, Business Law, Taxation, Insurance, and Management are all covered by a bachelor's degree in commerce. Candidates can pursue a B.com degree both on campus and online.</p>
																		<img src={icon_arrow} className="icon-arrow img-fluid" alt="" />
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="row">
														<div className="col-3 pb-4">
															<div className="homeCourses-card">
																<div className="homeCourses-card__title">
																	<h3>B.Tech</h3>
																</div>
																<div className="homeCourses-card__body-box">
																	<div className="homeCourses-card__body">
																		<p>
																			In India, B.Tech is a popular undergraduate programme. A B.tech degree is often regarded as a stepping stone into the area of engineering. Depending on the country and the institution, the B.Tech programme lasts three to
																			four years.
																		</p>
																		<img src={icon_arrow} className="icon-arrow img-fluid" alt="" />
																	</div>
																</div>
															</div>
														</div>
														<div className="col-5">
															<div className="homeCourses__title titleInContent">
																<h2>
																	Top <span>University</span> <br /> in your location
																</h2>
															</div>
														</div>
														<div className="col-4">
															<div className="row col-bars">
																<div className="col-3">
																	<div className="homeCourses-bar homeCourses-bar--level-1">
																		<img src={icon_ignou} alt="" />
																		<p>
																			a++, <br /> 3.5(cGPA)
																		</p>
																	</div>
																</div>
																<div className="col-3">
																	<div className="homeCourses-bar homeCourses-bar--level-2">
																		<img src={icon_ignou} alt="" />
																		<p>
																			a++, <br /> 3.5(cGPA)
																		</p>
																	</div>
																</div>
																<div className="col-3">
																	<div className="homeCourses-bar homeCourses-bar--level-3">
																		<img src={icon_ignou} alt="" />
																		<p>
																			a++, <br /> 3.5(cGPA)
																		</p>
																	</div>
																</div>
																<div className="col-3">
																	<div className="homeCourses-bar homeCourses-bar--level-4">
																		<img src={icon_ignou} alt="" />
																		<p>
																			a++, <br /> 3.5(cGPA)
																		</p>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="col-1">
													<div className="homeCourses-bar homeCourses-bar--level-5">
														<img src={icon_ignou} alt="" />
														<p>
															a++, <br /> 3.5(cGPA)
														</p>
													</div>
												</div>
											</div>
										</Tab.Pane>
										<Tab.Pane eventKey="PG_COURSE">
											<div className="row homeCourses__cards">
												<div className="col-11">
													<div className="row">
														<div className="col-3">
															<div className="homeCourses-card">
																<div className="homeCourses-card__title">
																	<h3>MBA</h3>
																</div>
																<div className="homeCourses-card__body-box">
																	<div className="homeCourses-card__body">
																		<p>MBA stands for Master of Business Administration and is one of the most demanded post-graduate degrees globally. This two-year degree opens the door to a variety of corporate career opportunities.</p>
																		<img src={icon_arrow} className="icon-arrow img-fluid" alt="" />
																	</div>
																</div>
															</div>
														</div>
														<div className="col-3">
															<div className="homeCourses-card">
																<div className="homeCourses-card__title">
																	<h3>MA</h3>
																</div>
																<div className="homeCourses-card__body-box">
																	<div className="homeCourses-card__body">
																		<p>The MA, or Master of Arts, is a postgraduate arts programme. Students can pursue an MA after completing their bachelor's degree. It is a two-year programme that can be pursued by applicants who hold a bachelor's degree.</p>
																		<img src={icon_arrow} className="icon-arrow img-fluid" alt="" />
																	</div>
																</div>
															</div>
														</div>
														<div className="col-3">
															<div className="homeCourses-card">
																<div className="homeCourses-card__title">
																	<h3>M.Com</h3>
																</div>
																<div className="homeCourses-card__body-box">
																	<div className="homeCourses-card__body">
																		<p>
																			Masters of Commerce is the full form of MCom. An entrance exam is required for MCom admission at elite universities. MCom programmes in India are available in full-time, part-time, distance learning, correspondence, and
																			online formats.
																		</p>
																		<img src={icon_arrow} className="icon-arrow img-fluid" alt="" />
																	</div>
																</div>
															</div>
														</div>
														<div className="col-3">
															<div className="homeCourses-card">
																<div className="homeCourses-card__title">
																	<h3>MCA</h3>
																</div>
																<div className="homeCourses-card__body-box">
																	<div className="homeCourses-card__body">
																		<p>
																			The Master of Computer Application is a postgraduate degree that teaches students about computer programmes, application software, computer architecture, operating systems, and other topics. The course is for a period of two
																			years.
																		</p>
																		<img src={icon_arrow} className="icon-arrow img-fluid" alt="" />
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="row">
														<div className="col-3 pb-4">
															<div className="homeCourses-card">
																<div className="homeCourses-card__title">
																	<h3>M.Tech</h3>
																</div>
																<div className="homeCourses-card__body-box">
																	<div className="homeCourses-card__body">
																		<p>M.Tech is a professional postgraduate engineering master's degree programme granted to individuals after they have completed two years of engineering education. This degree is based on a specific engineering field.</p>
																		<img src={icon_arrow} className="icon-arrow img-fluid" alt="" />
																	</div>
																</div>
															</div>
														</div>
														<div className="col-5">
															<div className="homeCourses__title titleInContent">
																<h2>
																	Top <span>University</span> <br /> in your location
																</h2>
															</div>
														</div>
														<div className="col-4">
															<div className="row col-bars">
																<div className="col-3">
																	<div className="homeCourses-bar homeCourses-bar--level-1">
																		<img src={icon_ignou} alt="" />
																		<p>
																			a++, <br /> 3.5(cGPA)
																		</p>
																	</div>
																</div>
																<div className="col-3">
																	<div className="homeCourses-bar homeCourses-bar--level-2">
																		<img src={icon_ignou} alt="" />
																		<p>
																			a++, <br /> 3.5(cGPA)
																		</p>
																	</div>
																</div>
																<div className="col-3">
																	<div className="homeCourses-bar homeCourses-bar--level-3">
																		<img src={icon_ignou} alt="" />
																		<p>
																			a++, <br /> 3.5(cGPA)
																		</p>
																	</div>
																</div>
																<div className="col-3">
																	<div className="homeCourses-bar homeCourses-bar--level-4">
																		<img src={icon_ignou} alt="" />
																		<p>
																			a++, <br /> 3.5(cGPA)
																		</p>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="col-1">
													<div className="homeCourses-bar homeCourses-bar--level-5">
														<img src={icon_ignou} alt="" />
														<p>
															a++, <br /> 3.5(cGPA)
														</p>
													</div>
												</div>
											</div>
										</Tab.Pane>
									</Tab.Content>
								</Col>
							</Row>
						</Tab.Container>
					</div>
				</div>
			</div>
		</div>
	);
}
