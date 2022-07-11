import React from "react";
import img_blog from "../../assets/images/home/blogImg.png";

export default function HomeNewsBlog() {
	return (
		<>
			<div className="container-fluid homeNewsBlog d-none">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="homeNewsBlog__news">
								<div className="homeNewsBlog__title">
									<h2>latest news</h2>
								</div>
								<div className="homeNewsBlog__body">
									<div className="homeNewsBlog__newsItem">
										<div className="homeNewsBlog__newsHead">
											<h3>The Tittle of the News goes here....</h3>
										</div>
										<div className="homeNewsBlog__date">
											<span>Nov 2nd 2021 </span>
										</div>
										<div className="homeNewsBlog__newsDesc">
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
										</div>
									</div>
									<div className="homeNewsBlog__newsItem">
										<div className="homeNewsBlog__newsHead">
											<h3>The Tittle of the News goes here....</h3>
										</div>
										<div className="homeNewsBlog__date">
											<span>Nov 2nd 2021 </span>
										</div>
										<div className="homeNewsBlog__newsDesc">
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
										</div>
									</div>

									<a href="#">View All</a>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="homeNewsBlog__blog">
								<div className="homeNewsBlog__title">
									<h2>latest blog</h2>
								</div>

								<div className="homeNewsBlog__body blogWhiteBody">
									<div className="homeNewsBlog__blogItem">
										<div className="homeNewsBlog__blogImgBox">
											<img src={img_blog} className="img-fluid" alt="" />
										</div>
										<div className="homeNewsBlog__blogItemBody">
											<div className="homeNewsBlog__blogHead">
												<h3>The Tittle of the News goes here....</h3>
											</div>
											<div className="homeNewsBlog__date blogDate">
												<span>Nov 2nd 2021 </span>
											</div>
											<div className="homeNewsBlog__blogDesc">
												<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
											</div>
										</div>
									</div>
									<div className="homeNewsBlog__blogItem">
										<div className="homeNewsBlog__blogImgBox">
											<img src={img_blog} className="img-fluid" alt="" />
										</div>
										<div className="homeNewsBlog__blogItemBody">
											<div className="homeNewsBlog__blogHead">
												<h3>The Tittle of the News goes here....</h3>
											</div>
											<div className="homeNewsBlog__date blogDate">
												<span>Nov 2nd 2021 </span>
											</div>
											<div className="homeNewsBlog__blogDesc">
												<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
											</div>
										</div>
									</div>
									<a href="#" className="ms-4">
										View All
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
