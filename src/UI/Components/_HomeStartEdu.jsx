import React from "react";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";

import img_startEdu from "../../assets/images/home/starteducation.png";
import img_yTubeVideo from "../../assets/images/home/yTubess.png";

export default function HomeStartEdu() {
	return (
		<>
			<div className="homeStartEdu">
				<div className="homeStartEdu__blankLeft">
					<div></div>
					<div className="div"></div>
				</div>
				<div className="homeStartEdu__box">
					<div className="row">
						<div className="col-lg-6">
							<div className="homeStartEdu__imgBox">
								<img src={img_startEdu} className="img-fluid" alt="" />
							</div>
							<div className="homeStartEdu__yTube ">
								<div className="left">
									<h3>Watch out course Video’s</h3>
									<p>Are you Interested in our classes? </p>
									<div className="homeStartEdu__yTubeFooter">
										<div className="homeStartEdu__yTubeIcon">
											<AiOutlineInstagram />
										</div>
										<div className="homeStartEdu__yTubeIcon">
											<AiOutlineYoutube />
										</div>
										<div className="homeStartEdu__yTubeChannel">distancepathsala</div>
									</div>
								</div>
								<div className="right ">
									<img src={img_yTubeVideo} className="img-fluid" alt="" />
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="homeStartEdu__title">
								<h2>
									<span>Hi Students</span>
									<br />
									<span>Let’s Start Your Education!</span>
								</h2>
							</div>
							<div className="homeStartEdu__text">
								<p>We offer a brand new approach to the most basic things. The wide range of learning options allows our students to select the most convenient and effective course!</p>
							</div>
							<div className="homeStartEdu__btnBox">
								<button className="homeStartEdu__knowMoreBtn btn">compare and apply</button>
							</div>
							<div className="homeStartEdu__yTubeImgBox">
								<img src={img_yTubeVideo} className="img-fluid" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
