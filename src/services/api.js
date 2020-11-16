import axios from 'axios';

const api = axios.create({ baseURL: 'https://rocketseat-node.heroKuapp.com/api'

});//todas as requisições são vão partir dessa url

export default api;
