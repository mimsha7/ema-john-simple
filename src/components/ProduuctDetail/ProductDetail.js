import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetail = () => {
    const [pData, setData] = useState([]);
    const {productKey} = useParams();
    useEffect(() => {
     const url = 'https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON'
     axios(url)
     .then( data => setData(data.data));
    },[]);
    const product = pData.find(pd => pd.key === productKey);
    return (
        <div>
            <Product showAdBtn={false} product={product} />
        </div>
    );
};

export default ProductDetail;