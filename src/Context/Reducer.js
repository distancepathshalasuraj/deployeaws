export const reducer = (state, action) => {
    const actionType = action.type;
    const payload = action.payload;
    if (actionType === "REINIT_STATE") {
        const { collegeList } = handleCompare("ADD", null);
        return {
            ...state,
            compareCollegeArr: collegeList,
            isStateInitiated: true,
        };
    } else if (actionType === "ADD_COMPARE") {
        const { collegeList } = handleCompare("ADD", payload);
        return {
            ...state,
            compareCollegeArr: collegeList,
        };
    } else if (actionType === "REMOVE_COMPARE") {
        const { collegeList } = handleCompare("REMOVE", payload);
        return {
            ...state,
            compareCollegeArr: collegeList,
        };
    } else if (actionType === "ADD_ALL_COLLEGE") {
        return {
            ...state,
            colleges: payload,
        };
    } else if (actionType === "ALL_ALL_DATA") {
        return {
            ...state,
            colleges: payload.college,
        };
    } else if (actionType === "ADD_FILTER_LIST") {
        return {
            ...state,
            statetypelist: payload.statetypelist,
            coursetypelist: payload.coursetypelist,
            eligibilitytypelist: payload.eligibilitytypelist,
            majorlist: payload.majorlist,
            seolist: payload.seolist,
        };
    } else if (actionType === "SET_ACTIVE_FILTER") {
        return {
            ...state,
            activeFilter: payload,
        };
    } else if (actionType === "TRIGGER_SEARCH") {
        return {
            ...state,
            isSearchTriggered: Math.random(),
        };
    }
    return state;
};

function handleCompare(action, collegeId) {
    const collegeDB = localStorage.getItem("COMPARE_COLLEGE_IDS");

    let collegeList;
    if (!collegeDB) {
        collegeList = [];
    } else {
        collegeList = JSON.parse(collegeDB);
    }

    if (!Number(collegeId)) return { collegeList };
    collegeId = Number(collegeId);

    // check if already there
    let isAlready = collegeList.includes(collegeId);

    // adding
    if (action === "ADD" && !isAlready) {
        collegeList.push(collegeId);
    }

    // removing
    if (action === "REMOVE" && isAlready) {
        collegeList = collegeList.filter((item) => Number(item) !== collegeId);
    }

    localStorage.setItem("COMPARE_COLLEGE_IDS", JSON.stringify(collegeList));

    return { collegeList };
}