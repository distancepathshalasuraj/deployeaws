// export const backendbaseURL = "https://iglapi.herokuapp.com/Admin/";
// export const backendbaseURL = "https://3ottn5t83b.execute-api.us-east-2.amazonaws.com/beta/";
export const backendbaseURL = "https://k8uwk34vxa.execute-api.ap-south-1.amazonaws.com/prod/";
export const authorization = "secretToken";

let abortController = null;
export const callAPI = async({ URL = "", method = "GET", body = "", bodyType = "RAW", abort = false }) => {
    try {
        // checking internet connection
        if (!navigator.onLine) {
            return {
                status: 500,
                message: "NO_INTERNET_CONNECTION",
            };
        }

        // window.$("#pageSpinner").show();
        if (abort) {
            abortController && abortController.abort();
        }

        const options = {
            method: method,
            headers: {
                Authorization: authorization,
            },
        };

        // adding body
        if (body) {
            options.body = bodyType === "RAW" ? JSON.stringify(body) : body;
            if (bodyType === "RAW") options.headers["Content-Type"] = "application/json";
        }
        URL = backendbaseURL + URL;

        // console.log("FETCH_OPTIONS : ", URL, options);

        // abort controller
        abortController = new AbortController();
        options.signal = abortController.signal;

        // fetching
        const response = await fetch(URL, options);

        if (response.status !== 200) {
            //console.log("FETCH_TEXT", await response.text());
            return {
                status: 500,
            };
        }
        const resJSON = parseJSON(await response.text());
        //console.log("FETCH_RESULT : ", resJSON);
        return resJSON;
    } catch (err) {
        return errorHandler(err);
    }
};

const parseJSON = (text) => {
    try {
        return JSON.parse(text);
    } catch (err) {
        return {
            status: 500,
            data: text,
        };
    }
};

function errorHandler(err) {
    const errString = err.toString();
    if (errString === "AbortError: The user aborted a request.") {
        console.log("REQUEST_ABORTED");
        return {
            status: 0,
        };
    }
    if (!err.status) console.log("error : ", err);
    return {
        status: 500,
        message: "FETCH_SERVER_ERROR",
        error: err.toString(),
    };
}