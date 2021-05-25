const ProductDetail = (props:any) => {
    return(
        <div>Detalhes do Produto</div>
    )
}

export async function getServerSideProps(context: any) {
    
    const { id } = context.query;

    return {
        props: {
          products: "products"
        }
      }
}