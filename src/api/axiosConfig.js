import axios from 'axios';

export default axios.create({
    baseURL:'http://54.204.84.61:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
