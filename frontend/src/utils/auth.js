export const BASE_URL = 'https://apimesto.alexkudrin.com';

function checkResponse(res) {
    if (res.ok) {
        return res.json()
    } else {
        return Promise.reject(res.status)
    }
}

export const register = (password, email) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({password, email})
    })
        .then((res) => checkResponse(res))

};

export const authorize = (password, email) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            password, email
        })
    })
        .then((res) => checkResponse(res))
};


export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
        .then((res) => checkResponse(res))
}