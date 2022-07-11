import React, { useContext } from "react";
// icons
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DATA_LAYER } from "../../App";
import icon_accordionBodyArrow from "../../assets/images/icons/accordionArrow.svg";

// custom components
import AccordionC, { AccordionChild, AccordionChildItem, AccordionCItem } from "./_Accordion";

export default function CollegeViewAccordion(props) {
	const { coursetypelist } = useContext(DATA_LAYER);
	const [coursesUG, setCoursesUG] = useState([]);
	const [coursesPG, setCoursesPG] = useState([]);

	function categoriseCourses(courseArr) {
		const courseObjArr = [];
		const countedCategory = [];
		for (const item of courseArr) {
			if (!countedCategory.includes(item.clid)) {
				const currentItemCourses = courseArr.filter((curItem) => curItem.clid === item.clid);
				countedCategory.push(item.clid);
				let filteredCourse = coursetypelist.filter((obj) => obj.id === item.clid);
				filteredCourse = filteredCourse.length > 0 ? filteredCourse[0] : {};
				courseObjArr.push({
					cat: {
						id: item.clid,
						title: filteredCourse.name,
					},
					courses: currentItemCourses,
				});
			}
		}
		return courseObjArr;
	}

	useEffect(() => {
		const coursesPGArr = [];
		const coursesUGArr = [];
		if (props.courses) {
			for (const item of props.courses) {
				if (item.elid === 2) {
					coursesUGArr.push(item);
				} else if (item.elid === 3) {
					coursesPGArr.push(item);
				}
			}
		}
		const resUG = categoriseCourses(coursesUGArr);
		setCoursesUG(resUG);
		const resPG = categoriseCourses(coursesPGArr);
		setCoursesPG(resPG);
	}, [props]);

	return (
		<AccordionC>
			<AccordionCItem
				index={0}
				title={["UG Courses"]}
				children={[
					<AccordionChild key={Math.random()}>
						{coursesUG.map((item) => {
							return (
								<AccordionChildItem key={item.cat.id} index={item.cat.id} title={item.cat.title}>
									<div className="collegeView__list">
										<div className="collegeView__listIcon">
											<img src={icon_accordionBodyArrow} className="img-fluid" alt="" />
										</div>
										{item.courses.map((courseItem) => {
											return (
												<Link key={courseItem.cid} className="collegeView__listItemLink" to={"/Course/detail/" + courseItem.cid}>
													<div className="collegeView__listItem">
														<span>{courseItem.name}</span>
													</div>
												</Link>
											);
										})}
									</div>
								</AccordionChildItem>
							);
						})}
					</AccordionChild>,
				]}
			/>

			<AccordionCItem
				index={1}
				title={["PG Courses"]}
				children={[
					<AccordionChild key={Math.random()}>
						{coursesPG.map((item) => {
							return (
								<AccordionChildItem key={item.cat.id} index={item.cat.id} title={item.cat.title}>
									<div className="collegeView__list">
										<div className="collegeView__listIcon">
											<img src={icon_accordionBodyArrow} className="img-fluid" alt="" />
										</div>
										{item.courses.map((courseItem) => {
											return (
												<Link key={courseItem.cid} className="collegeView__listItemLink" to={"/Course/detail/" + courseItem.cid}>
													<div className="collegeView__listItem">
														<span>{courseItem.name}</span>
													</div>
												</Link>
											);
										})}
									</div>
								</AccordionChildItem>
							);
						})}
					</AccordionChild>,
				]}
			></AccordionCItem>
			<AccordionCItem
				index={2}
				title={["Facts", "university rank", "International COLLABORATION"]}
				children={[
					<AccordionChild key={Math.random()}>
						<AccordionChildItem
							index={0}
							title={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati veritatis velit inventore optio error voluptate voluptatibus quasi quo alias, exercitationem laborum itaque laboriosam animi voluptates facere beatae consequatur et corrupti."}
						>
							<div></div>
						</AccordionChildItem>
					</AccordionChild>,
					<AccordionChild key={Math.random()}>
						<AccordionChildItem
							index={2}
							title={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati veritatis velit inventore optio error voluptate voluptatibus quasi quo alias, exercitationem laborum itaque laboriosam animi voluptates facere beatae consequatur et corrupti."}
						>
							<div></div>
						</AccordionChildItem>
					</AccordionChild>,
					<AccordionChild key={Math.random()}>
						<AccordionChildItem
							index={3}
							title={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati veritatis velit inventore optio error voluptate voluptatibus quasi quo alias, exercitationem laborum itaque laboriosam animi voluptates facere beatae consequatur et corrupti."}
						>
							<div></div>
						</AccordionChildItem>
					</AccordionChild>,
				]}
			/>
		</AccordionC>
	);
}
