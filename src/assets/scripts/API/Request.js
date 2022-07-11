import { callAPI } from "./helper";

const Request = {
    postOne: async(body) => {
        const response = await callAPI({
            URL: "lead",
            method: "POST",
            body: body,
        });
        if (response.data === "Success Fully Updated") return { status: 200 };
        return {
            status: 400,
        };
    },
};
export default Request;