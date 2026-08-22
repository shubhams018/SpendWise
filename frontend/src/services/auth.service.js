import axios from "axios";

async function loginUser(formData) {
    
     const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        formData,
        {
            withCredentials: true
        }
    );

    return response;

}

async function registerUser(formData) {
    
     const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        formData
    );

    return response;

}


async function getCurrentUser() {
const response = await axios.get(
    "http://localhost:3000/api/user/me",
    {
        withCredentials: true
    }
);

return response;
}

async function logoutUser() {
const response = await axios.post(
        "http://localhost:3000/api/auth/logout",
        {},
    {
        withCredentials: true
    }
);

return response;
}

export  {loginUser, registerUser, getCurrentUser, logoutUser};