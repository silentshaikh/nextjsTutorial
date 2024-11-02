import React from 'react'

function AllSegment(props:{params:{slug:string[]}}) {
  if(props.params.slug.length === 1){
    // localhost:3000/product/detail
    return(
      <>
      <h1>Product Detail Page</h1>
      </>
    )
  }else if(props.params.slug.length === 2){
    // localhost:3000/product/detail/color
    return(
      <>
      <h1>Product Color Page</h1>
      </>
    )
  }else{
    // localhost:3000/product/detail/color/other
    return (
      <>
      <h1>4O4 Error</h1>
      </>
    );
  };
};
export default AllSegment;