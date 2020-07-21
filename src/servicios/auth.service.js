import axios from 'axios';

const API_URL = 'http://localhost:49220/api/';

class AuthServicio {
    login(user) {
        return axios
            .post(API_URL + 'afiliacion/loguear', {
                correo: user.correo,
                clave: user.clave
            })
            .then(response => {
                if (response.data.data) {
                    localStorage.setItem('token', JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return axios.post(API_URL + 'registrarcliente', {
            username: user.username,
            email: user.email,
            password: user.password
        });
    }
}

export default new AuthServicio();
