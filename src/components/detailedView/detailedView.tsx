import { Component } from 'react';
// import { Product } from '../mockedProducts';
import ProductContainer from './productContainer'

interface Props {
//    products: Product;
//    handleAddToCart: (products: Product) => void;
}

interface State {}

export default function DetailedView() {
        return (
            <div>
                <ProductContainer />
            </div>
        );
}
