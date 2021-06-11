import { types } from '../types/types';
import { fetchWithToken } from './fetch';

export const loadCategories = async() => {
    const response = await fetchWithToken('products/category-products/');
    const body = await response.json();
    const categories = {}
    console.log(body);

    categories.columns = ['ID','Nombre'];
    const data = [];

    body.forEach(category => {
        data.push({
            id: category.id,
            name: category.description
        });
    });
    categories.data = data;
    return categories;    
}
