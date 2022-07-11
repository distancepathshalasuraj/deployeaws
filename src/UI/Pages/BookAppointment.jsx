import React from "react";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

// components
import CompareFindFilter from "../Components/_CompareFindFilter";
import CompareTalkExpert from "../Components/_CompareTalkExpert";
import Footer from "../Components/_Footer";
import Header from "../Components/_Header";
import HomeNewsBlog from "../Components/_HomeNewsBlog";

// images
import img_bookAppointment_bg from "../../assets/images/bookAppointment/right_bg.png";
import Helmet from "react-helmet";

export default function BookAppointment() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [mobile, setMobile] = useState("");
	const [course, setCourse] = useState("");
	const [message, setMessage] = useState("");

	async function handleSubmit(e) {
		e.preventDefault();
		const response = await Request.postOne({
			name: fullName,
			email: email,
			phone: mobile,
			course: course,
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
			<div className="bookAppointment">
				<div className="container-fluid">
					<div className="container">
						<div className="bookAppointment-title">
							<h3>
								Want to get expert consultation to find your right distance education college? <br /> Drop in your details and our experts will ring you ASAP!
							</h3>
						</div>
						<div className="bookAppointment-body">
							<div className="row">
								<div className="col-5">
									<div className="bookAppointment-form">
										<form onSubmit={handleSubmit}></form>
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
												<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
													<Form.Control as="textarea" onChange={(e) => setMessage(e.target.value)} rows={7} placeholder="Your Message is valuable for us. Please leave your message/comment here" />
												</Form.Group>
											</div>
											<div className="col-12 btnBox">
												<button className="btn applyBtn" type="submit">
													Book Now
												</button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-4">
									<div className="bookAppointment-text">
										<p>
											Are you confused between selected options of distance education colleges? No need to worry! Distance Pathshala brings you experienced education consultants that are just a click away! Book an appointment with the top verified experts to find out which
											colleges perfectly align with your goals. Our experts are highly experienced in the education industry and have hands-on experience in career counseling. Distance Pathshala has a wide variety of experts which have helped a number of students finding their
											dream colleges. What are you waiting for? Book an appointment now!
										</p>
									</div>
								</div>
								<div className="col-3">
									<div className="bookAppointment-img">
										<img src={img_bookAppointment_bg} className="img-fluid" alt="" />
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
