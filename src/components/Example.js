import React from 'react'

const products = [
    { title: 'Mango', isFruit: false, id: 1 },
    { title: 'Tomato', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];

export default function Listing() {

    const fruitList = products.map(product =>
        
        <li key={product.id}
            style={{ color: 'darkgreen', backgroundColor:"black"}}
        >
            {product.title}
        </li>
    );
    return (<ul>{fruitList}</ul>);

}
