import React from "react";
import img_stuSpeak from "../../assets/images/home/student-speak.png";

export default function HomeStuSpeak() {
	return (
		<>
			<div className="container-fluid homeStuSpeak">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="homeStuSpeak__title">
								<h2>Students speak</h2>
							</div>
							<div className="homeStuSpeak__desc">
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text --
									Student Name
								</p>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="homeStuSpeak__imgBox">
								<img src={img_stuSpeak} alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className="quickInterested">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="quickInterested__title">
									<h2>quite interesting right</h2>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="quickInterested__btnBox">
									<button className="quickInterested__compareDecideBtn btn">compare and decide</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
