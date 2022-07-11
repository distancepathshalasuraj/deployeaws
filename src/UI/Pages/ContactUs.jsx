import React from "react";
import CompareFindFilter from "../Components/_CompareFindFilter";
import Footer from "../Components/_Footer";
import Header from "../Components/_Header";

// images
import img_contactUs from "../../assets/images/contactUs/contactUs.svg";
import img_customerService from "../../assets/images/contactUs/customer-service.svg";
import img_locationPin from "../../assets/images/contactUs/locationPin.svg";
import img_map from "../../assets/images/contactUs/map.svg";
import HomeNewsBlog from "../Components/_HomeNewsBlog";
import { useEffect } from "react";
import Helmet from "react-helmet";

export default function ContactUs() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Header />
			<CompareFindFilter />
			<div className="contactUs">
				<div className="contactUsBanner">
					<div className="container-fluid">
						<div className="container">
							<div className="row">
								<div className="col-lg-6">
									<div className="contactUsBanner__left">
										<img src={img_contactUs} className="img-fluid" alt="" />
									</div>
								</div>
								<div className="col-lg-6">
									<div className="contactUsBanner__right">
										<div className="contactUsBanner__right-title">
											<h2>CONNECTING TO US</h2>
										</div>
										<div className="contactUsBanner__right-detailSection">
											<div className="imgBox">
												<img src={img_customerService} className="img-fluid" alt="" />
											</div>
											<div className="textBox">
												<h3>Talk to career expert</h3>
												<p>
													1800 - 890 - 9999 (toll free) <br /> +91 88889 09999 (Mobile) <br /> +91 88889 09999 (what’s up)
												</p>
											</div>
										</div>
										<div className="contactUsBanner__right-detailSection">
											<div className="imgBox">
												<img src={img_locationPin} className="img-fluid" alt="" />
											</div>
											<div className="textBox">
												<h3>Location</h3>
												<p>
													Distance Pathshala, Sector - 162 <br /> Noida, UP, INDIA <br /> <br /> distance.pathshala@gmail.com
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="contactUsMap">
					<img src={img_map} className="img-fluid" alt="" />
				</div>
			</div>
			<HomeNewsBlog />
			<Footer />
		</>
	);
}
