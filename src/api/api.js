import * as axios from 'axios';

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data.items); 
    }
};

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'a20d3d38-d3db-493e-8dea-f02d733dfa29'
    }
});


