import { useEffect } from "react";
import React from "react";
import AdvanceFilter from "../Components/_AdvanceFilter";
import CollegeCardColList from "../Components/_CollegeCardColList";
import CompareFindFilter from "../Components/_CompareFindFilter";
import CompareTalkExpert from "../Components/_CompareTalkExpert";
import Footer from "../Components/_Footer";
import Header from "../Components/_Header";

import HomeNewsBlog from "../Components/_HomeNewsBlog";

export default function CollegeColList() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Header />
			<CompareFindFilter />
			<AdvanceFilter />
			<CollegeCardColList />
			<CompareTalkExpert />
			<HomeNewsBlog />
			<Footer />
		</>
	);
}
