import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api',
});

export const SignUp = payload => api.post('/sign', payload);
export const LoginID = payload => api.post('/login', payload);


const LoginApi = {
    SignUp,
    LoginID,
};

export const SignUpApi = {
    SignUp,
    LoginID,
};
    
export default LoginApi;