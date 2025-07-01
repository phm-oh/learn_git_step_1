import { useState } from 'react';
import { api } from '../services/api'

export const useSearch = () => {
    const [searchResults, setSearchResult] = useState([]);
    const [loading, setLoading] = useState([false]);
    const [searchQuery, setSearchQuery] = useState('');

    const search = async (query) => {
        if (!query.trim()) {
            setSearchResult([]);
            return;
        }

        try {
            setLoading(true);
            setSearchQuery(query);
            const data = await api.searchProducts(query);
            setSearchResult(data);
        } catch (error) {
            console.error('Search error' ,  error   )
        } finally {
            setLoading(false)
        }
    }
     return { searchResults  , loading , searchQuery ,search   }
}
