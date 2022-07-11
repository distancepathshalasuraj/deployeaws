import { callAPI } from "./helper";

const College = {
    getAll: async({ page = 0 }) => {
        const response = await callAPI({
            URL: "university/paginated?page=" + page,
        });
        if (response && response.length > 0) {
            return response;
        } else {
            return [];
        }
    },
    getSimiliars: async({ page = 0, activeCollege = 0 }) => {
        const response = await callAPI({
            URL: `university/similar/${activeCollege}?page=${page}`,
        });
        if (response && response.length > 0) {
            return response;
        } else {
            return [];
        }
    },
    getOne: async(Ids) => {
        const response = await callAPI({
            URL: "university/" + Ids,
        });
        if (response && response.length > 0) {
            return response;
        } else {
            return [];
        }
    },
};
export default College;