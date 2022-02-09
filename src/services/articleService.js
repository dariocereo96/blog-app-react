import axios from 'axios';
import api from '../services/api';

//Get all articles
export const getArticles = () => {
    return axios.get(api + 'articles');
}