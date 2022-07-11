import Header from "../Components/_Header";
import CompareFindFilter from "../Components/_CompareFindFilter";
import CompareSelect from "../Components/_CompareSelect";
import CompareTalkExpert from "../Components/_CompareTalkExpert";
import Footer from "../Components/_Footer";

import HomeNewsBlog from "../Components/_HomeNewsBlog";
import CompareCollege from "../Components/_CompareCollege";
import { useEffect } from "react";

import React from "react";
import Helmet from "react-helmet";

export default function Compare() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Header />
			<CompareFindFilter />
			<CompareSelect />
			<CompareTalkExpert />
			<HomeNewsBlog />
			<Footer />
		</>
	);
}
