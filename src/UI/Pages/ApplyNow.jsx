import React from "react";
import CompareFindFilter from "../Components/_CompareFindFilter";
import CompareTalkExpert from "../Components/_CompareTalkExpert";
import Footer from "../Components/_Footer";
import Header from "../Components/_Header";
import HomeNewsBlog from "../Components/_HomeNewsBlog";

// icons
import img_applyNow from "../../assets/images/applyNow/applyNow.svg";
import img_applyNowForm_left from "../../assets/images/applyNow/applyNow_bgLeft.png";
import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import Request from "../../assets/scripts/API/Request";
import Helmet from "react-helmet";

// react bootstrap

export default function ApplyNow() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [mobile, setMobile] = useState("");
	const [course, setCourse] = useState("");
	const [college, setCollege] = useState("");
	const [message, setMessage] = useState("");
	async function handleSubmit(e) {
		e.preventDefault();
		const response = await Request.postOne({
			name: fullName,
			email: email,
			phone: mobile,
			course: course,
			college: college,
			message: message,
		});
		if (response.status === 200) {
			alert(`We've received your query. Our Counslor will contact you soon.`);
		}
	}
	return (
		<>
			<Header />
			<CompareFindFilter />
			<div className="applyNow">
				<div className="applyNowForm">
					<div className="container-fluid">
						<div className="container">
							<div className="applyNow-title">
								<h3>
									You are one-step closer to your dream distance college search ! <br />
									<span>Fill in your details to find out the next step !</span>
								</h3>
							</div>
							<div className="row">
								<div className="col-lg-7">
									<div className="applyNowForm__left row">
										<div className="col-6">
											<img src={img_applyNowForm_left} className="img-fluid" alt="" />
										</div>
										<div className="col-6">
											<div className="content">
												<p>
													Have you finalized the distance education institutions that will bring you one step closer to your dreams? If yes, fill the form and let's get you started on a journey of a lifetime towards your goal! Distance Pathshala delivers you a strategic
													approach to find the top approved distance education colleges in India. Our expert education consultants possess diverse experience that helps them in providing you with best career advice to judge better. Take your next step towards a better
													future with Distance pathshala!
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-5">
									<div className="applyNowForm__right">
										<form onSubmit={handleSubmit}>
											<div className="applyNowForm__right-formBox">
												<div className="row">
													<div className="col-12">
														<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
															<Form.Control required onChange={(e) => setFullName(e.target.value)} type="text" placeholder="Name*" />
														</Form.Group>
													</div>
													<div className="col-6">
														<Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
															<Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email*" />
														</Form.Group>
													</div>
													<div className="col-6">
														<Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
															<Form.Control required type="text" onChange={(e) => setMobile(e.target.value)} placeholder="Mobile*" />
														</Form.Group>
													</div>
													<div className="col-12">
														<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
															<Form.Control type="text" onChange={(e) => setCourse(e.target.value)} placeholder="Select the course you are interested in" />
														</Form.Group>
													</div>
													<div className="col-12">
														<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
															<Form.Control type="text" onChange={(e) => setCollege(e.target.value)} placeholder="Select the College/University you are interested in" />
														</Form.Group>
													</div>
													<div className="col-12">
														<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
															<Form.Control as="textarea" onChange={(e) => setMessage(e.target.value)} rows={7} placeholder="Your Message is valuable for us. Please leave your message/comment here" />
														</Form.Group>
													</div>
													<div className="col-12 btnBox">
														<button className="btn applyBtn" type="submit">
															Apply Now
														</button>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<CompareTalkExpert />
			<HomeNewsBlog />
			<Footer />
		</>
	);
}
