import axios from 'axios';
import type { SwapPeopleResponse } from '../model/types';

export const fetchCharacters = async (
    url: string = '/people/'
): Promise<SwapPeopleResponse> => {
    const response = await axios.get(url);
    return response.data;
}; 