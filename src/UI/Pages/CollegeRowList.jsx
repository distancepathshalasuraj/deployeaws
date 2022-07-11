import { useEffect } from "react";
import React from "react";
import AdvanceFilter from "../Components/_AdvanceFilter";
import CollegeCardRowList from "../Components/_CollegeCardRowList";
import CompareFindFilter from "../Components/_CompareFindFilter";
import CompareTalkExpert from "../Components/_CompareTalkExpert";
import Footer from "../Components/_Footer";
import Header from "../Components/_Header";

import HomeNewsBlog from "../Components/_HomeNewsBlog";
import Helmet from "react-helmet";

export default function CollegeList() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Header />
			<CompareFindFilter />
			<AdvanceFilter />
			<CollegeCardRowList />			
			<CompareTalkExpert />
			<HomeNewsBlog />
			<Footer />
		</>
	);
}
