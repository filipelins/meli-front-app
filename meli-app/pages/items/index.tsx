import axios from "axios";
import { Breadcrumb } from "../../components/Breadcrumb";
import { ProductList } from "../../components/Products-list";

export default function Home({products}:any) {

  const { items } = products;

  return (
    <>
      <Breadcrumb></Breadcrumb>
      <ProductList items={items}></ProductList>
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
    
  }

  
  
  return {
    props: {
      products: products
    }
  }
  
}
