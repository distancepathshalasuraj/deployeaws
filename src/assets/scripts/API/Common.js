import { callAPI } from "./helper";

const Common = {
    getFilters: async() => {
        const response = await callAPI({
            URL: "typelist",
        });

        return {
            statetypelist: response.statetypelist === undefined ? [] : response.statetypelist,
            coursetypelist: response.coursetypelist === undefined ? [] : response.coursetypelist,
            eligibilitytypelist: response.eligibilitytypelist === undefined ? [] : response.eligibilitytypelist,
            statustypelist: response.statustypelist === undefined ? [] : response.statustypelist,
            majorlist: response.majorlist === undefined ? [] : response.majorlist,
            seolist: response.seolist === undefined ? [] : response.seolist,
        };
    },
};
export default Common;