import React from 'react'
import { useState, useEffect } from 'react';
import ProductView from './ProductView';
const Store = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const res = await fetch('https://dummyjson.com/products?limit=30&skip=10');
                const data = await res.json();
                if (data && data.products && data.products.length) {
                    setProducts(data.products);
                    setLoading(false);
                }
            }
            catch (e) {
                setError(e.message);
                setLoading(false);
            }
        };
        fetchProducts();

    }, []);

    if (loading) {
        return <div className='loading-box w-full h-screen text-center mt-8 text-3xl'>
            <p className="text">Loading.....</p>
        </div>;
    }
    if (error !== null) {
        return <div>
            <p className="text">Error in loading products....</p>
        </div>
    }
    return (
        <ProductView products={products} />
    )
}

export default Store
