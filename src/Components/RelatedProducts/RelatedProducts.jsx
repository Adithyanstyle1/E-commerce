import React from "react";
import './RelatedProducts.css'
import data_Product from '../Assets/Frontend_Assets/data'
import Item from "../Items/Item";

const RelatedProducts = () => {
    return(
        <div className="relatedproducts">
            <h1>Related Products</h1>
            <hr/>
            <div className="relatedproducts-items">
                {data_Product.map((item,i)=>{
                    return <Item
                            key={i}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price} // ✅ fixed typo
                        />
                })}
            </div>
        </div>

    )
}

export default RelatedProducts