import { types } from '../types/types';
import { fetchWithToken } from './fetch';

export const loadCategories = async() => {
    const response = await fetchWithToken('products/category-products/');
    const body = await response.json();
    const categories = {}    

    const data = [];

    body.forEach(category => {
        data.push({
            id: category.id,
            description: category.description
        });
    });
    categories.data = data;
    return categories;    
}
