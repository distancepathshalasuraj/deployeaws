import React, { useContext, useEffect, useState } from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

import CourseListDesc_BCOM_AccountingFinance from "./coursedesc/_CourseListDesc_B.ComAccountingfinance";
import CourseListDesc_BCOM_BankingFincance from "./coursedesc/_CourseListDesc_B.ComBankingFinance";
import CourseListDesc_BCOM_FinTech from "./coursedesc/_CourseListDesc_B.ComFinTech";
import CourseListDesc_BCOM_Hindi from "./coursedesc/_CourseListDesc_B.ComHindi";
import CourseListDesc_BCOM_InternationalFincance from "./coursedesc/_CourseListDesc_B.ComInternationalFinance";
import CourseListDesc_BCOM_ProfessionalAccountFinance from "./coursedesc/_CourseListDesc_B.ComProfessionalAccountingFinance";

import CourseListDesc_BA from "./coursedesc/_CourseListDesc_BA";

import CourseListDesc_BBA_AdvertisementMarketing from "./coursedesc/_CourseListDesc_BBA_AdvertisementMarketing";
import CourseListDesc_BBA_BankingFinance from "./coursedesc/_CourseListDesc_BBA_BankingFinance";
import CourseListDesc_BBA_DataScienceAnalytics from "./coursedesc/_CourseListDesc_BBA_DataScienceAnalytics";
import CourseListDesc_BBA_DigitalMarketing from "./coursedesc/_CourseListDesc_BBA_DigitalMarketing";
import CourseListDesc_BBA_Finance from "./coursedesc/_CourseListDesc_BBA_Finance";
import CourseListDesc_BBA_HRM from "./coursedesc/_CourseListDesc_BBA_HRM";
import CourseListDesc_BBA_Marketing from "./coursedesc/_CourseListDesc_BBA_Marketing";

import CourseListDesc_BCA_DataAnalytics from "./coursedesc/_CourseListDesc_BCA_DataAnalytics";

import CourseListDesc_Btech_CivilEngineering from "./coursedesc/_CourseListDesc_BTech_CivilEngineering";
import CourseListDesc_Btech_ComputerScienceEngineering from "./coursedesc/_CourseListDesc_BTech_ComputerScience";
import CourseListDesc_Btech_ElectricalEngineering from "./coursedesc/_CourseListDesc_BTech_ElectricalEngineering";
import CourseListDesc_Btech_ElectronicsCommunicationEngineering from "./coursedesc/_CourseListDesc_BTech_ElectronicsCommunicationEngineering";
import CourseListDesc_Btech_MechanicalAutomobileEngineering from "./coursedesc/_CourseListDesc_BTech_MechanicalAutomobileEngineering";
import CourseListDesc_Btech_MechanicalEngineering from "./coursedesc/_CourseListDesc_BTechMechanicalEngineering";

import CourseListDesc_MCom_AccountingFinance from "./coursedesc/_CourseListDesc_MCom_AccountingFinance";
import CourseListDesc_MCom_InternationalFinance from "./coursedesc/_CourseListDesc_MCom_InternationalFinance";
import CourseListDesc_MCom_ProfessionalAccountingFinance from "./coursedesc/_CourseListDesc_MCom_ProfessionalAccountingFinance";

import CourseListDesc_MSc_Ai_machineLearning from "./coursedesc/_CourseListDesc_MSc_AI_MachineLearning";
import CourseListDesc_MSc_AppliedFinance from "./coursedesc/_CourseListDesc_MSc_appliedFinance";
import CourseListDesc_MSc_DataScience from "./coursedesc/_CourseListDesc_MSc_dataScience";
import CourseListDesc_MSc_Mathematics from "./coursedesc/_CourseListDesc_MSc_Mathematics";

import URLMapping from "../../Context/URLs";
// Context
import { DATA_LAYER } from "../../App";

// api
import Course from "../../assets/scripts/API/Course";
import { getURLdata } from "../../Context/URLs";

// ui components
import CollegeCardRow from "./_CollegeCardRow";

export default function CollegeCardRowList() {
	// Location
	const location = useLocation();

	// Context
	const { colleges, addAllCollege, activeFilter, setActiveFilter, seolist, isSearchTriggered, triggerSearch } = useContext(DATA_LAYER);

	// Component State
	const [pageCount, setPageCount] = useState(0);

	const [currentCollegeArr, setCurrentCollegeArr] = useState([]);
	const [currentPath, setCurrentPath] = useState(location.pathname);
	const [metadata, setMetadata] = useState({
		pageTitle: "",
		metaTitle: "",
		metaKeywords: "",
		metaDescription: "",
	});
	let collegeCount = 0;
	// meta data change
	const adjustMetadata = () => {
		const filteredMetadataArr = seolist.filter((obj) => obj.uri.toLowerCase() == location.pathname.toLowerCase());
		if (filteredMetadataArr.length === 0) return;
		const metadataObj = filteredMetadataArr[0];
		setMetadata({
			pageTitle: metadataObj.pagetitle,
			metaTitle: metadataObj.metatitle,
			metaKeywords: metadataObj.metakeywords,
			metaDescription: metadataObj.metadescription,
		});
	};
	const [lastThreeCollege, setLastThree] = useState([]);
	useEffect(async () => {
		if (activeFilter.clid === null) return;

		const collegeRes = await Course.getAll({ page: pageCount, ...activeFilter });
		const firstThreeCollege = [];

		const lastThree = [];
		if (pageCount == 0) {
			firstThreeCollege.push(collegeRes[0]);
			firstThreeCollege.push(collegeRes[1]);
			firstThreeCollege.push(collegeRes[2]);

			lastThree.push(collegeRes[3]);
			lastThree.push(collegeRes[4]);
			lastThree.push(collegeRes[5]);
			setLastThree((i) => lastThree);
			setCurrentCollegeArr(firstThreeCollege);
		} else if (pageCount == 1) {
			setCurrentCollegeArr([...lastThreeCollege, ...collegeRes]);
		} else {
			setCurrentCollegeArr(collegeRes);
		}
	}, [pageCount, isSearchTriggered]);

	// pagination, adding more college
	useEffect(() => {
		if (currentPath != location.pathname) {
			addAllCollege(currentCollegeArr);
			setCurrentPath(location.pathname);
		} else {
			addAllCollege([...colleges, ...currentCollegeArr]);
		}
	}, [currentCollegeArr]);

	useEffect(() => {
		const urlData = getURLdata(location.pathname);		
		if (urlData) {
			const elid = urlData.elid;
			const clid = urlData.clid;
			const mlid = urlData.mlid;
			const desc = urlData.desc;
			setActiveFilter({
				clid: clid,
				elid: elid,
				mlid: mlid,
				desc: desc
			});
		} else {
			if (activeFilter.clid == null)
				setActiveFilter({
					clid: 0,
					elid: 0,
					mlid: 0,
					desc: null
				});
		}
		triggerSearch();
		adjustMetadata();
	}, [location]);

	return (
		<>
			{activeFilter.clid != null && (
				<>
					<div>
					  <Switch>
        				<Route path={URLMapping.UG.BBA.bba_advertisementBranding} exact component={CourseListDesc_BBA_AdvertisementMarketing} />
						<Route path={URLMapping.UG.BBA.bba_bankingFinance} exact component={CourseListDesc_BBA_BankingFinance} />						
						<Route path={URLMapping.UG.BBA.bba_dataScienceAnalytics} exact component={CourseListDesc_BBA_DataScienceAnalytics} />						
						<Route path={URLMapping.UG.BBA.bba_digitalMarketing} exact component={CourseListDesc_BBA_DigitalMarketing} />						
						<Route path={URLMapping.UG.BBA.bba_finance} exact component={CourseListDesc_BBA_Finance} />						
						<Route path={URLMapping.UG.BBA.bba_hrm} exact component={CourseListDesc_BBA_HRM} />						
						<Route path={URLMapping.UG.BBA.bba_marketing} exact component={CourseListDesc_BBA_Marketing} />
        				
						<Route path={URLMapping.UG.BCom.bcom_AccountFinance} exact component={CourseListDesc_BCOM_AccountingFinance}/>
						<Route path={URLMapping.UG.BCom.bcom_bankingFinance} exact component={CourseListDesc_BCOM_BankingFincance}/>
						<Route path={URLMapping.UG.BCom.bcom_finTech} exact component={CourseListDesc_BCOM_FinTech}/>
						<Route path={URLMapping.UG.BCom.bcom_hindi} exact component={CourseListDesc_BCOM_Hindi}/>
						<Route path={URLMapping.UG.BCom.bcom_internationalFinance} exact component={CourseListDesc_BCOM_InternationalFincance}/>
						<Route path={URLMapping.UG.BCom.bcom_professionalAccountingFinance} exact component={CourseListDesc_BCOM_ProfessionalAccountFinance}/>
						
						<Route path={URLMapping.UG.BA.label} exact component={CourseListDesc_BA}  />  

						     
						<Route path={URLMapping.UG.BCA.label} exact component={CourseListDesc_BCA_DataAnalytics}  />  



						<Route path={URLMapping.UG.BTECH.btech_mechincalEngineering} exact component={CourseListDesc_Btech_MechanicalEngineering}  />  
						<Route path={URLMapping.UG.BTECH.btech_computerScienceEngineering} exact component={CourseListDesc_Btech_ComputerScienceEngineering}  />  
						<Route path={URLMapping.UG.BTECH.btech_civilEngineering} exact component={CourseListDesc_Btech_CivilEngineering}  />      
						<Route path={URLMapping.UG.BTECH.btech_electricalEngineering} exact component={CourseListDesc_Btech_ElectricalEngineering}  />      
						<Route path={URLMapping.UG.BTECH.btech_electronicsCommunicationEngineering} exact component={CourseListDesc_Btech_ElectronicsCommunicationEngineering}  />      
						<Route path={URLMapping.UG.BTECH.btech_machanicalAutomobileEngineering} exact component={CourseListDesc_Btech_MechanicalAutomobileEngineering}  />      
						
						<Route path={URLMapping.PG.MCom.mcom_AccountFinance} exact component={CourseListDesc_MCom_AccountingFinance}/>
						<Route path={URLMapping.PG.MCom.mcom_internationalFinance} exact component={CourseListDesc_MCom_InternationalFinance}/>
						<Route path={URLMapping.PG.MCom.mcom_professionalAccountingFinance} exact component={CourseListDesc_MCom_ProfessionalAccountingFinance}/>

						<Route path={URLMapping.PG.MSc.msc_aimachinelearning} exact component={CourseListDesc_MSc_Ai_machineLearning}/>
						<Route path={URLMapping.PG.MSc.msc_appliedfinance} exact component={CourseListDesc_MSc_AppliedFinance}/>
						<Route path={URLMapping.PG.MSc.msc_datascience} exact component={CourseListDesc_MSc_DataScience}/>
						<Route path={URLMapping.PG.MSc.msc_mathematics} exact component={CourseListDesc_MSc_Mathematics}/>

						</Switch>
					</div>
					<div className="collegeList">
						<div className="container-fluid">
							<div className="container">
								{colleges.map((arrItem) => {
									return <CollegeCardRow key={Math.random()} {...arrItem} isHeadShow={++collegeCount === 1 ? true : false} />;
								})}
							</div>
							<div className="collegeList-moreBtn-wrap">
								<button className="collegeList-moreBtn" type="button" onClick={(e) => setPageCount(pageCount + 1)}>
									View More
								</button>
							</div>
						</div>
					</div>
					
      					
					
				</>
			)}
		</>
	);
}
