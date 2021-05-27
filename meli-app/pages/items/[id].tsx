import axios from "axios";
import { useState } from "react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { ProductDetails } from "../../components/Product-detail";

export default function ProductDetail(props:any) {

    const { item = null  } = props.product;
    
    return(
      <>
        <Breadcrumb ></Breadcrumb>
        <ProductDetails product={item}></ProductDetails>
      </>
    )
}

export { ProductDetail }

export async function getServerSideProps(context: any) {
    
    const { id = null, categories = [] } = context.query;
    let product:any = null;

    try {
      const data = await fetch(`http://localhost:3001/api/items/${id}`);
      const response  =  await data.json()
      product = response;
    } catch (error) {}

    return {
      props: {
        product: product,
        categories
      }
    }
    

   
}