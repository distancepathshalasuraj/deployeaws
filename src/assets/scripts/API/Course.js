import { callAPI } from "./helper";

const Course = {
    getAll: async({ page = 0, clid = 0, elid = 0, slid = 0, mlid = 0 }) => {
        let subURL = "";
        if (clid) {
            subURL += "&clid=" + clid;
        }
        if (elid) {
            subURL += "&elid=" + elid;
        }
        if (mlid) {
            subURL += "&mlid=" + mlid;
        }
        const response = await callAPI({
            URL: `filter/course?page=${page}${subURL}`,
        });
        if (response && response.length > 0) {
            return response;
        } else {
            return [];
        }
    },
    getSimiliars: async({ page = 0, activeCourse = 0 }) => {
        const response = await callAPI({
            URL: `course/similar/${activeCourse}?page=${page}`,
        });
        if (response && response.length > 0) {
            return response;
        } else {
            return [];
        }
    },
    getOne: async(Id) => {
        const response = await callAPI({
            URL: "course/" + Id,
        });
        if (response) {
            return response[0];
        } else {
            return {};
        }
    },
};
export default Course;