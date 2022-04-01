// ✨ implement axiosWithAuth

//not 100% sure but pretty sure this is reusable throughout

import axios from 'axios'

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        baseURL: "http://localhost:9000/api",
        headers: {
            authorization: token,
        },
    });
};
