import {LOGIN} from "../constants/action-types";

const baseUrl = process.env.baseUrl;

const apiURL = `${baseUrl}/auth/login`;
export const login = (postData) => dispatch => {
    fetch(apiURL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data =>
            dispatch({
                type: LOGIN,
                payload: data
            }))
        .catch(error => console.log(error))
};

