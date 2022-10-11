import {useState, useEffect} from "react";

export default function Products(props) {
    const [products, setProducts] = useState([]);
    
    return (
        <div className="grid grid-cols-3 gap-5">
            <div>Product 1</div>
            <div>Product 2</div>
            <div>Product 3</div>
            <div>Product 4</div>
            <div>Product 5</div>
            <div>Product 6</div>
        </div>
    )
}