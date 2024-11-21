'use client';
import { prodList } from "../page";
function ProductItem(props:{params:{productitem:string}}) {
    const findProduct = prodList.find((e) => {
        return e.id === +props.params.productitem;
    });
if(findProduct){
    return (
        <div>
          <h1>Product Item</h1>
          <div>
          <h2>{findProduct.id}</h2>
          <h3>{findProduct.name}</h3>
            <p>{findProduct.para}</p>
          </div>
    
    
        </div>
      );
}else{
    return(
        <>
        Product Not Found
        </>
    )
}
};
export default ProductItem;