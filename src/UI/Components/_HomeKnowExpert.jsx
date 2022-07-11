import React from "react";
import img_knowExpert from "../../assets/images/home/know-experts.png";

export default function HomeKnowExpert() {
	return (
		<>
			<div className="container-fluid homeKnowExpert">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="homeKnowExpert__imgBox">
								<img src={img_knowExpert} className="img-fluid" alt="" />
							</div>
						</div>
						<div className="col-lg-6">
							<div className="homeKnowExpert__title">
								<h2>
									<span>Hi Students</span>
									<br />
									<span>Let’s know your experts</span>
								</h2>
							</div>
							<div className="homeKnowExpert__text">
								<p>lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
							</div>
							<div className="homeKnowExpert__btnBox">
								<button className="homeKnowExpert__knowMoreBtn btn">Know More</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
