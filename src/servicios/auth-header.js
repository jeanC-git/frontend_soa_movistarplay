export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('token'));

    if (user && user.accessToken) {
        return { Authorization: 'Bearer ' + user.data };
    } else {
        return {};
    }
}