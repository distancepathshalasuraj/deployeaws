// ui components
import Header from "../Components/_Header";
import Footer from "../Components/_Footer";
import CompareFindFilter from "../Components/_CompareFindFilter";
import CollegeView from "../Components/_CollegeView";
import { useEffect } from "react";

import React from "react";
import Helmet from "react-helmet";

export default function CollegeDetail({ ...props }) {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Header />
			<CompareFindFilter />
			<CollegeView {...props} />
			<Footer />
		</>
	);
}
