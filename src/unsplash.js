import axios from 'axios';


export default axios.create({

    baseURL: 'https://api.unsplash.com',

    headers:{
        Authorization: 'Client-ID 1d72b93555770b3f637ec0cc6765e63ee1fe2f650e6dd312b71de5830a34c77e'
    }


});