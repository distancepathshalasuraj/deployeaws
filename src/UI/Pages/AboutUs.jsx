import React from "react";
import CompareFindFilter from "../Components/_CompareFindFilter";
import Footer from "../Components/_Footer";
import Header from "../Components/_Header";
import HomeProcess from "../Components/_HomeProcess";

// images
import img_aboutUsBanner from "./../../assets/images/aboutus/aboutUs_banner.svg";
import img_aboutUsVision from "./../../assets/images/aboutus/vision.svg";
import img_aboutUsVisionBG from "./../../assets/images/aboutus/visionBG.svg";
import img_aboutUsMission from "./../../assets/images/aboutus/mission.svg";
import img_aboutUswhatWeDoBg from "./../../assets/images/aboutus/whatWeDoBG.svg";
import img_aboutUswhatWeDo from "./../../assets/images/aboutus/whatWeDo.svg";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

export default function AboutUs() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Header />
			<CompareFindFilter />
			<div className="aboutUs">
				<div className="aboutUsBanner d-none">
					<div className="aboutUsBanner__imgBox">
						<img src={img_aboutUsBanner} className="img-fluid" alt="" />
					</div>
					<div className="aboutUsBanner__textBox">
						<div className="container-fluid ">
							<div className="container"></div>
						</div>
					</div>
				</div>
				<div className="aboutUsVision">
					<div className="container-fluid">
						<div className="container">
							<div className="row aboutUsVision__left">
								<div className="col-lg-12">
									<h2>
										Empower your search of the perfect distance educational institutions with <span>Distancepathshala</span>.
									</h2>
									<p>
										Done with your intermediate or graduation studies and confused about selecting the right distance education college to fuel your dreams? We have the perfect solution for you! Distancepathshala is a one-stop solution making your search for the right course and
										college selection easy for students looking to pursue distance undergraduate (UG) and postgraduate (PG) courses in India. Searching for distance colleges has never been easy, but with Distancepathshala, you get the professional help that takes you to your
										perfect fit.
									</p>
								</div>
							</div>
							<div className="row aboutUsVision__left">
								<div className="col-lg-12">
									<h2>
										Why Come to <span>DistancePathshala</span>
									</h2>
									<p>
										Distancepathshala is a concoction of experienced education professionals with wide expertise. Our team focuses on the utmost importance of distance education and delivers precise information about genuine institutions. Experience the new way of distance
										education with DistancePathshala.
									</p>
								</div>
							</div>

							<div className="row">
								<div className="col-lg-6">
									<div className="aboutUsVision__left">
										<h2>
											Our <span>Vision</span>
										</h2>
										<p>
											We envision the reach of distance education to every single aspirant without any hassle. We are dedicating our experience to making distance education institutions within reach of every student. We envision ourselves delivering extremely quality
											information through our professionals' fine research and experience.
										</p>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="aboutUsVision__right">
										<img src={img_aboutUsVision} className="img-fluid" alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="aboutUsMission" style={{ backgroundImage: `url(${img_aboutUsVisionBG})` }}>
					<div className="container-fluid">
						<div className="container">
							<div className="row">
								<div className="col-lg-6">
									<div className="aboutUsMission__left">
										<img src={img_aboutUsMission} className="img-fluid" alt="" />
									</div>
								</div>
								<div className="col-lg-6">
									<div className="aboutUsMission__right">
										<h2>
											Our <span>Mission</span>
										</h2>
										<p>
											We are on a mission to make education reachable to every student or aspirant in the country. Our mission is fueled by our unmatchable hard work and the zeal to find the best-in-class distance education institutions.
											<br />
											We don't just envision our dream, but our professional workforce gets to the deepest corners and the high places to find you the perfect and accredited distance learning educational institutions.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="aboutUsWhatWeDo" style={{ backgroundImage: `url(${img_aboutUswhatWeDoBg})` }}>
					<div className="container-fluid">
						<div className="container">
							<div className="row">
								<div className="col-lg-6">
									<div className="aboutUsWhatWeDo__left">
										<h2>
											<span>What</span> can you get with us?
										</h2>
										<p>
											<ul>
												<li>Ask anything about distance learning institutions from our dedicated team for precise answers.</li>
												<li>Compare institutions as per your need with our efficient filters.</li>
												<li>Find distance education colleges as per the level of education and your budget.</li>
												<li>If you have a list of colleges but cannot make up your mind, connect to us for a result-oriented counseling session. Our team will guide you in the right direction.</li>
												<li> We offer our professional support 24/7 with extreme enthusiasm backed by diligent research.</li>
											</ul>
										</p>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="aboutUsWhatWeDo__right">
										<img src={img_aboutUswhatWeDo} className="img-fluid" alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container-fluid">
					<div className="container">
						<div className="row">
							<div className="colg-lg-12">
								<p>
									Still searching for the best distance education institutions but not getting the right results? Come to Distancepathshala for a new perspective and guaranteed results! Connect to us for more information about any distance education institutions @
									<Link to={"/"}>Distance Pathshala</Link> . Remember, with us, you are just a click away from your dream distance college!
								</p>
							</div>
						</div>
					</div>
				</div>
				<HomeProcess />
			</div>
			<Footer />
		</>
	);
}
