import React, { useEffect, useState } from 'react'
import { Iproduct } from '../interface/iproduct'
type Props = {}

const ProductList = (props: Props) => {
    const [count, setCount] = useState<number>(1)
    const [load, setLoad] = useState<number>(1)
    useEffect(()=>{
        // console.log(`Start compoment ${load}`);
        fetch(`https://dummyjson.com/products?skip=${(load-1)*10}&l`)
        .then(response=>response.json())
        .then((data:any)=>{
            const products:Iproduct = data.products
            console.log(products);
        })
    },[load])
  return (
    <>
    <h1>{count}</h1>
    <div>product-list</div>
    <button onClick={()=>setCount(count+1)}>Tang</button>
    <button onClick={()=>setLoad(load+1)}>Load change</button>
    </>
    
  )
}

export default ProductList