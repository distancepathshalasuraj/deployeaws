const URLMapping = {
    home: {
        label: "/",
    },
    UG: {
        BCom: {
            label: "/ug-courses/online-distance-bcom",
            bcom_AccountFinance: "/ug-courses/online-distance-bcom/accounts-and-finance",
            bcom_internationalFinance: "/ug-courses/online-distance-bcom/international-finance",
            bcom_professionalAccountingFinance: "/ug-courses/online-distance-bcom/professional-and-accounting-finance",
            bcom_bankingFinance: "/ug-courses/online-distance-bcom/banking-finance",
            bcom_finTech: "/ug-courses/online-distance-bcom/fin-tech",
            bcom_hindi: "/ug-courses/online-distance-bcom/hindi",
            
        },
        BA: {
            label: "/ug-courses/online-distance-ba",
        },
        BBA: {
            label: "/ug-courses/online-distance-bba",
            bba_aviation: "/ug-courses/online-distance-bba/aviation",
            bba_hrm: "/ug-courses/online-distance-bba/hrm",
            bba_finance: "/ug-courses/online-distance-bba/finance",
            bba_marketing: "/ug-courses/online-distance-bba/marketing",
            bba_bankingFinance: "/ug-courses/online-distance-bba/banking-and-finance",
            bba_digitalMarketing: "/ug-courses/online-distance-bba/digital-marketing",
            bba_dataScienceAnalytics: "/ug-courses/online-distance-bba/data-science-and-analytics",
            bba_multimediaManagement: "/ug-courses/online-distance-bba/multimedia-management",
            bba_advertisementBranding: "/ug-courses/online-distance-bba/advertising-and-branding",
        },
        BCA: {
            label: "/ug-courses/online-distance-bca",
        },
        BTECH: {
            label: "/ug-courses/online-distance-btech",
            btech_mechincalEngineering: "/ug-courses/online-distance-btech/mechincal-engineering",
            btech_computerScienceEngineering: "/ug-courses/online-distance-btech/computer-science-engineering",
            btech_civilEngineering: "/ug-courses/online-distance-btech/civil-engineering",
            btech_electricalEngineering: "/ug-courses/online-distance-btech/electrical-engineering",
            btech_electronicsCommunicationEngineering: "/ug-courses/online-distance-btech/electronics-communication-engineering",
            btech_machanicalAutomobileEngineering: "/ug-courses/online-distance-btech/machanical-automobile-engineering"
        },
    },
    PG: {
        MCom: {
            label: "/pg-courses/online-distance-mcom",
            mcom_AccountFinance: "/pg-courses/online-distance-mcom/account-finance",
            mcom_internationalFinance: "/pg-courses/online-distance-mcom/international-finance",
            mcom_professionalAccountingFinance: "/pg-courses/online-distance-mcom/professional-accounting-finance",
        },
        MA: {
            label: "/pg-courses/online-distance-ma",
            ma_economics: "/pg-courses/online-distance-ma/economics",
            ma_journalismMassCommunication: "/pg-courses/online-distance-ma/journalism-mass-communication",
            ma_english: "/pg-courses/online-distance-ma/english",
            ma_psychology: "/pg-courses/online-distance-ma/psychology",
            ma_publicPolicyAdministration: "/pg-courses/online-distance-ma/public-policy-administration",
            ma_liberalArts: "/pg-courses/online-distance-ma/liberal-arts",
            ma_sociology: "/pg-courses/online-distance-ma/sociology",
            ma_history: "/pg-courses/online-distance-ma/history",
            ma_politicalScience: "/pg-courses/online-distance-ma/political-science",
        },
        MBA: {
            label: "/pg-courses/online-distance-mba",
            mba_hrm: "/pg-courses/online-distance-mba/hr-management",
            mba_finance: "/pg-courses/online-distance-mba/finanace-management",
            mba_marketing: "/pg-courses/online-distance-mba/marketing-management",
            mba_general: "/pg-courses/online-distance-mba/general-management",
            mba_systemOperationManagement: "/pg-courses/online-distance-mba/system-and-operation-management",
            mba_marketingFinance: "/pg-courses/online-distance-mba/marketing-and-finanace-management",
            mba_marketingHR: "/pg-courses/online-distance-mba/marketing-and-hr-management",
            mba_aviation: "/pg-courses/online-distance-mba/aviation-management",
            mba_it: "/pg-courses/online-distance-mba/information-technology-management ",
            mba_logisticSupplyChain: "/pg-courses/online-distance-mba/logistic-supply-chain",
            mba_bankingFinance: "/pg-courses/online-distance-mba/banking-finance",
            mba_internationalFinance: "/pg-courses/online-distance-mba/international-finance",
            mba_financeLeadership: "/pg-courses/online-distance-mba/finance-leadership",
            mba_digitalMarketing: "/pg-courses/online-distance-mba/digital-marketing",
            mba_bankingMarketing: "/pg-courses/online-distance-mba/banking-marketing",
            mba_dataScienceAnalytics: "/pg-courses/online-distance-mba/data-science-analytics",
            mba_multimediaManagement: "/pg-courses/online-distance-mba/multimedia-management",
            mba_advertisementBranding: "/pg-courses/online-distance-mba/advertisement-branding",            
            mba_informationTechnology: "/pg-courses/online-distance-mba/information-technology-management",
        },
        MCA: {
            label: "/pg-courses/online-distance-mca",
        },
        MSc: {
            label: "/pg-courses/online-distance-msc",
            msc_aimachinelearning:"/pg-courses/online-distance-msc/ai-machinelearning",
            msc_appliedfinance:"/pg-courses/online-distance-msc/applied-finance",
            msc_datascience:"/pg-courses/online-distance-msc/data-science",
            msc_mathematics:"/pg-courses/online-distance-msc/mathematics"
        },
        MTECH: {
            label: "/pg-courses/online-distance-mtech",
            mtech_mechincalEngineering: "/ug-courses/online-distance-mtech/mechincal-engineering",
            mtech_computerScienceEngineering: "/ug-courses/online-distance-mtech/computer-science-engineering",
            mtech_civilEngineering: "/ug-courses/online-distance-mtech/civil-engineering",
            mtech_electricalEngineering: "/ug-courses/online-distance-mtech/electrical-engineering"
        },
        EMBA: {
            label: "/pg-courses/online-distance-executive-mba"
        },
    },
    courseList: {
        label: "/courses",
    },
    coursesUG: {
        label: "/ug-courses",
    },
    coursesPG: {
        label: "/pg-courses",
    },
    collegeDetail: {
        label: "/college/detail/:id",
    },
    courseDetail: {
        label: "/course/detail/:id",
    },
    applyNow: {
        label: "/apply-now",
    },
    contactUs: {
        label: "/contact-us",
    },
    aboutUs: {
        label: "/about-us",
    },
    findCourse: {
        label: "/courses/list",
    },
    compare: {
        label: "/compare",
    },
    bookAppointment: {
        label: "/book-appointment",
    },
};

export default URLMapping;

const URLMap = {
    [URLMapping.UG.BCom.label]: {
        clid: 2,
        elid: 2,
    },
    [URLMapping.UG.BCom.bcom_AccountFinance]: {
        clid: 2,
        elid: 2,
        mlid: 27,
    },
    [URLMapping.UG.BCom.bcom_internationalFinance]: {
        clid: 2,
        elid: 2,
        mlid: 63,
    },
    [URLMapping.UG.BCom.bcom_professionalAccountingFinance]: {
        clid: 2,
        elid: 2,
        mlid: 64,
    },
    [URLMapping.UG.BA.label]: {
        clid: 3,
        elid: 2,
    },
    [URLMapping.UG.BBA.label]: {
        clid: 5,
        elid: 2,
    },
    [URLMapping.UG.BBA.bba_aviation]: {
        mlid: 43,
        clid: 5,
        elid: 2
    },
    [URLMapping.UG.BBA.bba_hrm]: {
        mlid: 51,
        clid: 5,
        elid: 2,
    },
    [URLMapping.UG.BBA.bba_finance]: {
        mlid: 44,
        clid: 5,
        elid: 2,
    },
    [URLMapping.UG.BBA.bba_marketing]: {
        mlid: 45,
        clid: 5,
        elid: 2,
    },
    [URLMapping.UG.BBA.bba_bankingFinance]: {
        mlid: 44,
        clid: 5,
        elid: 2,
    },
    [URLMapping.UG.BBA.bba_dataScienceAnalytics]: {
        mlid: 46,
        clid: 5,
        elid: 2,
    },
    [URLMapping.UG.BBA.bba_digitalMarketing]: {
        mlid: 47,
        clid: 5,
        elid: 2,
    },
    [URLMapping.UG.BBA.bba_multimediaManagement]: {
        mlid: 49,
        clid: 5,
        elid: 2,
    },
    [URLMapping.UG.BBA.bba_advertisementBranding]: {
        mlid: 50,
        clid: 5,
        elid: 2,
    },
    [URLMapping.UG.BCA.label]: {
        clid: 6,
        elid: 2,
    },
    [URLMapping.PG.MCom.label]: {
        clid: 2,
        elid: 3,
    },
    [URLMapping.PG.MA.label]: {
        clid: 3,
        elid: 3,
    },
    [URLMapping.PG.MBA.label]: {
        clid: 5,
        elid: 3,
    },
    [URLMapping.PG.MBA.mba_aviation]: {
        mlid: 52,
        clid: 5,
        elid: 3,
    },
    [URLMapping.PG.MBA.mba_finance]: {
        mlid: 53,
        clid: 5,
        elid: 3,
    },
    [URLMapping.PG.MBA.mba_bankingFinance]: {
        mlid: 55,
        clid: 5,
        elid: 3,
    },
    [URLMapping.PG.MBA.mba_digitalMarketing]: {
        mlid: 56,
        clid: 5,
        elid: 3,
    },
    [URLMapping.PG.MBA.mba_dataScienceAnalytics]: {
        mlid: 57,
        clid: 5,
        elid: 3,
    },
    [URLMapping.PG.MBA.mba_multimediaManagement]: {
        mlid: 58,
        clid: 5,
        elid: 3,
    },
    [URLMapping.PG.MBA.mba_advertisementBranding]: {
        mlid: 59,
        clid: 5,
        elid: 3,
    },
    [URLMapping.PG.MBA.mba_hrm]: {
        mlid: 60,
        clid: 5,
        elid: 3,
    },
    [URLMapping.PG.MCA.label]: {
        clid: 6,
        elid: 3,
    },
    [URLMapping.PG.MBA.mba_marketing]: {
        mlid: 54,
        clid: 5,
        elid: 3,
    },
    [URLMapping.PG.MBA.mba_general]: {
        clid: 5,
        elid: 3,
    },
    [URLMapping.PG.MBA.mba_systemOperationManagement]: {
        clid: 5,
        elid: 3,
    },
    [URLMapping.PG.MBA.mba_marketingFinance]: {
        clid: 5,
        elid: 3,
    },
    [URLMapping.PG.MBA.mba_marketingHR]: {
        clid: 5,
        elid: 3,
    },
    [URLMapping.PG.MBA.mba_informationTechnology]: {
        clid: 5,
        elid: 3,
    },
};

export function getURLdata(URL) {
    if (!URL) return;
console.log("url is ",URL);
    URL = URL.toLowerCase().replace(/\/$/, '');
    if (URL in URLMap) {
        return URLMap[URL];
    }
    return null;
}