import React from "react";
import icon_arrow from "../../assets/images/home/home_universityCard-arrow.png";
import img_mobileApp from "../../assets/images/home/home_mobileAppBG.png";
export default function HomeMobileApp() {
	return (
		<div className="container-fluid homeMobileApp">
			<img src={img_mobileApp} className="img_bg" alt="" />
			<div className="container">
				<div className="row">
					<div className="col-lg-7 homeMobileApp-left"></div>
					<div className="col-lg-5 homeMobileApp-right">
						<div className="homeMobileApp-content">
							<div className="homeMobileApp__title">
								<h2>
									Distance Pathsala <span className="highlight">Mobile App</span>
								</h2>
							</div>
							<p className="homeMobileApp__text">
								At Distance Pathshala, we care about your future and keep up our efficiency of the process to facilitate you better. We are designing a mobile app based on Next-Gen Technologies, enriched with features and functionality to help find your perfect distance education
								college! Our app will enable you to:
							</p>
							<div className="homeMobileApp__body">
								<div className="homeMobileApp__list">
									<ul>
										<li>
											<img src={icon_arrow} className="icon-arrow img-fluid" alt="" /> Compare Colleges & Courses on the Go
										</li>
										<li>
											<img src={icon_arrow} className="icon-arrow img-fluid" alt="" /> Get Verified Details within 2 Minutes
										</li>
										<li>
											<img src={icon_arrow} className="icon-arrow img-fluid" alt="" /> Apply a Wide Variety of Filters to Get the Exact Result
										</li>
										<li>
											<img src={icon_arrow} className="icon-arrow img-fluid" alt="" /> AI/ML Based Features and Predictability
										</li>
										<li>
											<img src={icon_arrow} className="icon-arrow img-fluid" alt="" /> Interactive UI Design
										</li>
										<li>
											<img src={icon_arrow} className="icon-arrow img-fluid" alt="" /> HD Video/Audio Calls For Easy Consultation
										</li>
									</ul>
								</div>
							</div>
							<p className="homeMobileApp__text">Can’t wait for the app? We would not let you wait more! Coming soon!</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
