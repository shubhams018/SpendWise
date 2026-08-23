import axios from "axios";

async function loginUser(formData) {
    
     const response = await axios.post(
        "https://spendwise-cngo.onrender.com/api/auth/login",
        formData,
        {
            withCredentials: true
        }
    );

    return response;

}

async function registerUser(formData) {
    
     const response = await axios.post(
        "https://spendwise-cngo.onrender.com/api/auth/register",
        formData
    );

    return response;

}


async function getCurrentUser() {
const response = await axios.get(
    "https://spendwise-cngo.onrender.com/api/user/me",
    {
        withCredentials: true
    }
);

return response;
}

async function logoutUser() {
const response = await axios.post(
        "https://spendwise-cngo.onrender.com/api/auth/logout",
        {},
    {
        withCredentials: true
    }
);

return response;
}

export  {loginUser, registerUser, getCurrentUser, logoutUser};