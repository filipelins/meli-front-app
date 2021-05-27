import axios from "axios";
import { useEffect } from "react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { useGenericContext } from "../../components/Contexts/Context";
import { ProductList } from "../../components/Products-list";

export default function Home(props:any) {

  const { items, categories } = props.products;
  const { saveCategory } = useGenericContext();
 
  useEffect(()=> { saveCategory(categories) }, [categories]);
  
  return (
    <>
      <Breadcrumb></Breadcrumb>
      <ProductList products={items}></ProductList>
    </>
  )
}

export async function getServerSideProps(context: any) {
  
  const { search = '' } = context.query;
  let products:any = '';
  
  try {
    const data = await  axios.get(`http://localhost:3001/api/items?productName=${search}`);
    products = data['data'];
  } catch (error) {
    // ToDo: Implementar tratativa de erro
  }
  
  return {
    props: {
      products: products
    }
  }
  
}
