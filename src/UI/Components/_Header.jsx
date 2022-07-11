import React, { Children, useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

// React Bootstrap
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

// icons
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaTwitter, FaPinterest } from "react-icons/fa";

// icon images
import icon_univ from "../../assets/images/header/university.svg";
import icon_student from "../../assets/images/header/student.svg";
import icon_download from "../../assets/images/header/download.svg";
import icon_search from "../../assets/images/header/search.svg";
import icon_comparison from "../../assets/images/header/comparison.svg";
import icon_brand from "../../assets/images/brand/Option4.png";

// Context
import { DATA_LAYER } from "../../App";
import URLMapping from "../../Context/URLs";
import Common from "../../assets/scripts/API/Common";

export default function Header() {
	// const activeClassName = "navLink--active";
	const { compareCollegeArr, seolist, addFilter } = useContext(DATA_LAYER);

	const location = useLocation();

	// Meta data
	const [metadata, setMetadata] = useState({
		pageTitle: "Distance Pathsala",
		metaTitle: "",
		metaKeywords: "",
		metaDescription: "",
	});

	// meta data change
	useEffect(() => {
		const adjustMetadata = () => {
			const filteredMetadataArr = seolist.filter((obj) => obj.uri.toLowerCase() == location.pathname.toLowerCase());
			if (filteredMetadataArr.length === 0) return;
			const metadataObj = filteredMetadataArr[0];
			setMetadata({
				pageTitle: metadataObj.pagetitle,
				metaTitle: metadataObj.metatitle,
				metaKeywords: metadataObj.metakeywords,
				metaDescription: metadataObj.metadescription,
			});
		};
		adjustMetadata();
	}, [location, seolist]);

	useEffect(() => {
		const getData = async () => {
			const res = await Common.getFilters();
			addFilter(res);
		};
		if (seolist.length == 0) getData();
	}, []);

	return (
		seolist != null && (
			<>
				<Helmet>
					<title>{metadata.metaTitle}</title>
					<meta name="keywords" content={metadata.metaKeywords} />
					<meta name="title" content={metadata.metaTitle} />
					<meta name="description" content={metadata.metaDescription} />
			
				</Helmet>
				<header className="header">
					{/**Top strip code  by suraj verma */}
					 {/* /////////start code///////////////*/}
					<div className="top_strip">	
					<Navbar>
					<Container>

						<span>Welcome to the Best Distance Education Institutions.</span>
						<div className="social_box">
						<Navbar.Brand href="#home">
									<div className="header__socials">
										<ul role="list">
											
											<li>
												<FaInstagram />
											</li>
											<li>
												<FaLinkedinIn />
											</li>
											<li>
												<FaYoutube/>
											</li>
											<li>
												<FaFacebookF />
											</li>
											
										</ul>
									</div>
								</Navbar.Brand>	
						</div>
						<div className="top-right-menu">
						<Nav.Link href="#join">Join Now |</Nav.Link>
						<Nav.Link href="#course"> Courses |</Nav.Link>
						<Nav.Link href="#student">Student Login</Nav.Link>
						</div>
					</Container>
					</Navbar>
					</div>
					{/** ////////end code////// */}
					<div className="header__navbar">
						<Navbar> {/* expand="lg" className="container"*/}
							<Container>
								<Navbar.Brand href={URLMapping.home.label}>
									<img src={icon_brand} alt="distancepathshala" className="brand" />
								</Navbar.Brand>
								<Navbar.Toggle aria-controls="basic-navbar-nav" />
								<Navbar.Collapse id="basic-navbar-nav">
									<Nav className="ms-auto">
										<Nav.Link href="#home">
											<span className="nav-link-image">
												<img src={icon_univ} className="img-fluid" alt="" />
											</span>
											<span className="nav-link-text">
												Top <br /> University
											</span>
										</Nav.Link>
										<Nav.Link href="#link">
											<span className="nav-link-image">
												<img src={icon_search} className="img-fluid" alt="" />
											</span>
											<span className="nav-link-text">
												Top <br /> Searches
											</span>
										</Nav.Link>
										<Nav.Link href="#link">
											<span className="nav-link-image">
												<img src={icon_comparison} className="img-fluid" alt="" />
											</span>
											<span className="nav-link-text">
												Top <br /> Comparison
											</span>
										</Nav.Link>
										<div className="header__divider">
											<span></span>
										</div>

										<Nav.Link href="#link" className="d-none">
											<span className="nav-link-image">
												<img src={icon_download} className="img-fluid" alt="" />
											</span>
											<span className="nav-link-text">
												Brochure <br /> Download
											</span>
										</Nav.Link>
										<Nav.Link href="#link" className="d-none">
											<span className="nav-link-image">
												<img src={icon_student} className="img-fluid" alt="" />
											</span>
											<span className="nav-link-text">
												Student <br /> Sign in / Sign Up
											</span>
										</Nav.Link>
										<div className="header__compareWrapper">
											<Link to={URLMapping.compare.label} className="compareBtn">
												<span className="compareBtn__text">
													{/*<img src={icon_comparison} className="img-fluid" alt="" />*/}
													<span>Compare</span>
												</span>
												<span className="compareBtn__count">{compareCollegeArr ? compareCollegeArr.length : 0}</span>
											</Link>
										</div>
									</Nav>
								</Navbar.Collapse>
							</Container>
						</Navbar>
						<div className="header__top">

						{/**code replaced by suraj verma for replacing the navigation bar*/}
						
						<Navbar >{/*expand="lg" className="container">*/}
							<Container>
								<Navbar.Toggle aria-controls="basic-navbar-nav" />
								<Navbar.Collapse id="basic-navbar-nav">
									<Nav activeKey={location.pathname} className="ms-auto">
										<Nav.Link href={URLMapping.home.label}>Home</Nav.Link>
										<MultilevelDropdownC
											title={"UG Courses"}
											data={[
												{
													label: "Online & Distance BBA",
													URL: URLMapping.UG.BBA.label,
													subItems: [
														{
															label: "Aviation",
															URL: URLMapping.UG.BBA.bba_aviation,
														},
														{
															label: "HRM",
															URL: URLMapping.UG.BBA.bba_hrm,
														},
														{
															label: "Finance",
															URL: URLMapping.UG.BBA.bba_finance,
														},
														{
															label: "Marketing",
															URL: URLMapping.UG.BBA.bba_marketing,
														},
														{
															label: "Banking & Finance",
															URL: URLMapping.UG.BBA.bba_bankingFinance,
														},
														{
															label: "Digital Marketing",
															URL: URLMapping.UG.BBA.bba_digitalMarketing,
														},
														{
															label: "Data Science and Analytics",
															URL: URLMapping.UG.BBA.bba_dataScienceAnalytics,
														},
														{
															label: "Multimedia Management",
															URL: URLMapping.UG.BBA.bba_multimediaManagement,
														},
														{
															label: "Advertising and Branding",
															URL: URLMapping.UG.BBA.bba_advertisementBranding,
														}
													],
												},
												{
													label: "Online & Distance B.Com",
													URL: URLMapping.UG.BCom.label,
													subItems: [
														{
															label: "Accouting and Finance",
															URL: URLMapping.UG.BCom.bcom_AccountFinance,
														},
														{
															label: "International Finance",
															URL: URLMapping.UG.BCom.bcom_internationalFinance,
														},
														{
															label: "Professional Accounting and Finance",
															URL: URLMapping.UG.BCom.bcom_professionalAccountingFinance,
														},
														{
															label:"Banking Fincance",
															URL:URLMapping.UG.BCom.bcom_bankingFinance,
														},
														{
															label:"FinTech",
															URL:URLMapping.UG.BCom.bcom_finTech,
														},
														{
															label:"Hindi",
															URL:URLMapping.UG.BCom.bcom_hindi,
														},
													],
												},
												{
													label: "Online & Distance BA",
													URL: URLMapping.UG.BA.label,
												},
												{
													label: "Online & Distance BCA",
													URL: URLMapping.UG.BCA.label,
												},
												{
													label: "B Tech for Working Professionals",
													URL: URLMapping.UG.BTECH.label,
													subItems: [
														{
															label: "Mechanical Engineering",
															URL: URLMapping.UG.BTECH.btech_mechincalEngineering,
														},
														{
															label: "Computer Science Engineering",
															URL: URLMapping.UG.BTECH.btech_computerScienceEngineering,
														},
														{
															label: "Electrical Engineering",
															URL: URLMapping.UG.BTECH.btech_electricalEngineering,
														},
														{
															label: "Civil Engineering",
															URL: URLMapping.UG.BTECH.btech_civilEngineering,
														},
														{
															label:"Electronics Communication Engine",
															URL:URLMapping.UG.BTECH.btech_electronicsCommunicationEngineering,
														},
														{
															label:"Machanical automobile Engineering",
															URL:URLMapping.UG.BTECH.btech_machanicalAutomobileEngineering,
														}
													],
												},
												{
													label: "Suggest me a University",
													URL: "#",
												},
												{
													label: "View all",
													URL: "#",
												},
											]}
										/>
										<MultilevelDropdownC
											title={"PG Courses"}
											data={[
												{
													label: "Online & Distance MBA",
													URL: URLMapping.PG.MBA.label,
													subItems: [
														{
															label: "HR Management",
															URL: URLMapping.PG.MBA.mba_hrm,
														},
														{
															label: "Finance Management",
															URL: URLMapping.PG.MBA.mba_finance,
														},
														{
															label: "Marketing Management",
															URL: URLMapping.PG.MBA.mba_marketing,
														},
														{
															label: "General Management",
															URL: URLMapping.PG.MBA.mba_general,
														},
														{
															label: "System and Operations Management",
															URL: URLMapping.PG.MBA.mba_systemOperationManagement,
														},
														{
															label: "Marketing and Finance Management",
															URL: URLMapping.PG.MBA.mba_marketingFinance,
														},
														{
															label: "Marketing and HR Management",
															URL: URLMapping.PG.MBA.mba_marketingHR,
														},
														{
															label: "Aviation Management",
															URL: URLMapping.PG.MBA.mba_aviation,
														},
														{
															label: "Information Technology Management",
															URL: URLMapping.PG.MBA.mba_it,
														},
														{
															label: "Logistics and Supply Chain Management",
															URL: URLMapping.PG.MBA.mba_logisticSupplyChain,
														},
														{
															label: "Banking & Finance Management",
															URL: URLMapping.PG.MBA.mba_bankingFinance,
														},
														{
															label: "International Finance Management",
															URL: URLMapping.PG.MBA.mba_internationalFinance,
														},
														{
															label: "Data Science and Analytics Management",
															URL: URLMapping.PG.MBA.mba_dataScienceAnalytics,
														},
													],
												},
												{
													label: "Online & Distance MCA",
													URL: URLMapping.PG.MCA.label,
												},
												{
													label: "Online & Distance M.Com",
													URL: URLMapping.PG.MCom.label,
													subItems: [
														{
															label: "Accounting and Finance",
															URL: URLMapping.PG.MCom.mcom_AccountFinance,
														},
														{
															label: "International Finance",
															URL: URLMapping.PG.MCom.mcom_internationalFinance,
														},
														{
															label: "Professional Accounting and Finance",
															URL: URLMapping.PG.MCom.mcom_professionalAccountingFinance,
														},
													],
												},
												{
													label: "Online & Distance MA",
													URL: URLMapping.PG.MA.label,
													subItems: [
														{
															label: "Economics",
															URL: URLMapping.PG.MA.ma_economics,
														},
														{
															label: "Journalism and Mass Communication",
															URL: URLMapping.PG.MA.ma_journalismMassCommunication,
														},
														{
															label: "English",
															URL: URLMapping.PG.MA.ma_english,
														},
														{
															label: "Psychology",
															URL: URLMapping.PG.MA.ma_psychology,
														},
														{
															label: "Public Policy and Administration",
															URL: URLMapping.PG.MA.ma_publicPolicyAdministration,
														},
														{
															label: "Liberal Arts",
															URL: URLMapping.PG.MA.ma_liberalArts,
														},
														{
															label: "Sociology",
															URL: URLMapping.PG.MA.ma_sociology,
														},
														{
															label: "History",
															URL: URLMapping.PG.MA.ma_history,
														},
														{
															label: "Political Science",
															URL: URLMapping.PG.MA.ma_politicalScience,
														},
													],
												},
												{
													label: "M tech for Working Professionals",
													URL: URLMapping.PG.MTECH.label,
													subItems: [
														{
															label: "Mechanical Production",
															URL: URLMapping.PG.MTECH.mtech_mechincalEngineering,
														},
														{
															label: "Computer Science Engineering",
															URL: URLMapping.PG.MTECH.mtech_computerScienceEngineering,
														},
														{
															label: "Civil Engineering",
															URL: URLMapping.PG.MTECH.mtech_civilEngineering,
														},
														{
															label: "Electrical Engineering",
															URL: URLMapping.PG.MTECH.mtech_electricalEngineering,
														},
													],
												},
												{
													label: "Online & Distance M.Sc",
													URL: URLMapping.PG.MSc.label,
													subItems:[
														{
															label:"AI and Machine Learning",
															URL:URLMapping.PG.MSc.msc_aimachinelearning,
														},
														{
															label:"Applied Finance",
															URL:URLMapping.PG.MSc.msc_appliedfinance,
														},
														{
															label:"Data Science",
															URL:URLMapping.PG.MSc.msc_datascience,
														},
														{
															label:"Mathematics",
															URL:URLMapping.PG.MSc.msc_mathematics,
														}

													],
												},
												{
													label: "Suggest me a University",
													URL: "#",
												},
												{
													label: "View all",
													URL: "#",
												},
											]}
										/>
										<NavDropdownC title="Diploma & Certificate">
											<NavDropdown.Item href="#action/3.1">Diploma Course1</NavDropdown.Item>
										</NavDropdownC>
										<Nav.Link href={URLMapping.findCourse.label}>Find Course</Nav.Link>
										<Nav.Link href={URLMapping.aboutUs.label}>About Us</Nav.Link>
										<Nav.Link href="#link" className="d-none">
											Why Us?
										</Nav.Link>
										<Nav.Link href={URLMapping.applyNow.label}>Apply Now</Nav.Link>
										<Nav.Link href={URLMapping.bookAppointment.label}>Counselling</Nav.Link>
										<Nav.Link href="#link" className="d-none">
											Exams
										</Nav.Link>
									</Nav>
								</Navbar.Collapse>
							</Container>
						</Navbar>
						
					</div>

					</div>
				</header>
			</>
		)
	);
}

function NavDropdownC({ children, title }) {
	const [show, setShow] = useState(false);
	const showDropdown = (e) => {
		setShow(!show);
	};
	const hideDropdown = (e) => {
		setShow(false);
	};
	return (
		<NavDropdown title={title} show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
			{children}
		</NavDropdown>
	);
}

function MultilevelDropdownC({ data, title }) {
	const [show, setShow] = useState(false);
	const showDropdown = (e) => {
		setShow(!show);
	};
	const hideDropdown = (e) => {
		setShow(false);
	};
	return (
		<>
			<div className="mulitilevelDropdown nav-item dropdown" onMouseEnter={showDropdown} onMouseLeave={hideDropdown} onClick={hideDropdown}>
				<Link className="nav-link  dropdown-toggle" type="button" to="#">
					{title}
				</Link>
				<ul className="dropdown-menu" style={{ display: show ? "block" : "none" }} aria-labelledby="dropdownMenuButton">
					{data?.map((elem) => {
						return (
							<li key={elem.label}>
								<Link className={"dropdown-item " + (elem.subItems ? "has-dropdown" : "")} to={elem.URL ? elem.URL : "#"}>
									{elem.label}
								</Link>
								{elem.subItems ? (
									<ul className="dropdown-menu dropdown-submenu">
										{elem.subItems.map((subElem) => {
											return (
												<li key={subElem.label + Math.random()}>
													<Link className="dropdown-item" to={subElem.URL}>
														{subElem.label}
													</Link>
												</li>
											);
										})}
									</ul>
								) : (
									<></>
								)}
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
}
