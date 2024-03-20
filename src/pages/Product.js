import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";

import ProductDisplay from "../components/productdisplay/ProductDisplay";
import BreadCrum from "../components/Breadcrums/Breadcrums";
import DescriptionBox from "../components/Descriptionbox/DescriptionBox";
import RelatedProducts from "../components/relatedproducts/RelatedProducts";




const Product=()=>{
const {all_product}=useContext(ShopContext);
const {productId}=useParams();
const product=all_product.find((e)=>e.id===Number(productId));


    return(
        <div>
            <BreadCrum product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox/>
            <RelatedProducts/>



        </div>
    )
}
export default Product;