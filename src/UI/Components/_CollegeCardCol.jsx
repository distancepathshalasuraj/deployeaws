import img_ignou from "../../assets/images/university/ignouIcon.svg";
import icon_clock from "../../assets/images/icons/clock.svg";
import icon_univCap from "../../assets/images/icons/graduation-cap.svg";
import icon_location from "../../assets/images/icons/your-location.svg";
import icon_check from "../../assets/images/icons/checkIcon.svg";
import icon_close from "../../assets/images/icons/closeIcon.svg";
import icon_session from "../../assets/images/icons/laptop.svg";
import icon_fee from "../../assets/images/icons/fees.svg";
import icon_compare from "../../assets/images/icons/comparison.svg";

import React from "react";

export default function CollegeCardCol() {
	return (
		<>
			<div className="collegeCardCol">
				<div className="collegeCardCol__main">
					<div className="collegeCardCol__head">
						<div className="collegeCardCol__headLeft">
							<div className="collegeCardCol__collegeImgBox">
								<img src={img_ignou} className="img-fluid" alt="" />
							</div>
						</div>
						<div className="collegeCardCol__headRight">
							<div className="collegeCardCol__title">
								<h3>Indira Gandhi National Open University (IGNOU)</h3>
							</div>
							<div className="collegeCardCol__headRow">
								<div className="collegeCardCol__headCol">
									<img src={icon_univCap} className="img-fluid" alt="" />
									<span>ESTD. 1985</span>
								</div>
								<div className="collegeCardCol__headCol">
									<img src={icon_location} className="img-fluid" alt="" />
									<span>New Delhi</span>
								</div>
							</div>
						</div>
					</div>
					<div className="collegeCardCol__body">
						<div className="collegeCardCol__rank">
							<div className="collegeCardCol__rankCount">
								<span>10</span>
							</div>
							<div className="collegeCardCol__rankText">
								<p>Rank in Outlook Magazine - 2021</p>
							</div>
						</div>
						<div className="collegeCardCol__mode">
							<div className="collegeCardCol__modeImgBox">
								<img src={icon_clock} alt="" />
							</div>
							<div className="collegeCardCol__modeText">
								<h3>Mode</h3>
								<p>Distance and Online</p>
							</div>
						</div>
						<div className="collegeCardCol__session">
							<div className="collegeCardCol__sessionImgBox">
								<img src={icon_session} alt="" />
							</div>
							<div className="collegeCardCol__sessionTextBox">
								<div className="collegeCardCol__sessionTextHead">
									<h3>Current Session</h3>
									<h3>Next Session </h3>
								</div>
								<div className="collegeCardCol__sessionTextp">
									<p>Jan 2022</p>

									<p>Jan 23</p>
								</div>
							</div>
						</div>
						<div className="collegeCardCol__approved">
							<div className="collegeCardCol__approvedHead">
								<h3>Approved By</h3>
							</div>
							<div className="collegeCardCol__approvedBody">
								<div className="collegeCardCol__approvedItem">
									<h4>AIU</h4>
									<span>
										<img src={icon_check} className="img-fluid" alt="" />
									</span>
								</div>
								<div className="collegeCardCol__approvedItem">
									<h4>DEBA</h4>
									<span>
										<img src={icon_close} className="img-fluid" alt="" />
									</span>
								</div>
								<div className="collegeCardCol__approvedItem">
									<h4>AIU</h4>
									<span>
										<img src={icon_check} className="img-fluid" alt="" />
									</span>
								</div>
								<div className="collegeCardCol__approvedItem">
									<h4>DEBA</h4>
									<span>
										<img src={icon_close} className="img-fluid" alt="" />
									</span>
								</div>
							</div>
						</div>
						<div className="collegeCardCol__session collegeCardCol__fee">
							<div className="collegeCardCol__sessionImgBox">
								<img src={icon_fee} alt="" />
							</div>
							<div className="collegeCardCol__sessionTextBox">
								<div className="collegeCardCol__sessionTextHead">
									<h3>Max fee</h3>
									<h3>Min fee</h3>
								</div>
								<div className="collegeCardCol__sessionTextp">
									<p>900 INR</p>

									<p>73000 INR</p>
								</div>
							</div>
						</div>
					</div>
					<div className="collegeCardCol__footer">
						<button className="btn collegeCardCol__moreDetailBtn">More Detail</button>
						<button className="btn collegeCardCol__applyBtn">Apply</button>
					</div>
				</div>
				<div className="collegeCardCol__side">
					<div className="collegeCardCol__compareBox">
						<div className="collegeCardCol__inputBox">
							<input type="checkbox" name="" id="" />
						</div>
						<button className="btn collegeCardCol__compareBtn">
							<img src={icon_compare} alt="" />
							<span>Compare</span>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
