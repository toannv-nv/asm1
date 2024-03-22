
import React, { useState } from 'react'
import { ValidateProduct } from '../validate/product'
import { Iproduct } from '../interface/'

type Props = {}

const Products = (props: Props) => {
    const [name,setName] = useState<string>('')
    const [image,setImage] = useState<string>('')
    const [price,setPrice] = useState<number>(0)
    const [message,setMessage] = useState<string>('')
    const [product,setProduct]= useState<Iproduct[]>([])
    const [count,setCountl]= useState<

    
    const handleSubmit = (e:any)=> {
        e.preventDefault();
        const {error} = ValidateProduct.validate({name:name,image:image,price:price})   
        if(error) {
            setMessage(error.message)
        }    
        else{
            fetch(`http://localhost:3000/product`,{
            method:'POST',
            body : JSON.stringify({name,image,price})
        }).then(response=>response.json())
        .then((data:Iproduct[])=>{
            setProduct(data)       
        })
        .catch(err=>{
            setMessage(`Loi`);         
        })
    }
    } 
        
  return (
    <div>
        {message}
        <form action="" onSubmit={handleSubmit}>
            <input onChange={(e:any)=>{setName(e.target.value)}} type="text" placeholder='Ten san pham' />
            <input onChange={(e:any)=>{setImage(e.target.value)}} type="text" placeholder='Anh san pham' />
            <input onChange={(e:any)=>{setPrice(e.target.value)}} type="text" placeholder='Gia san pham' />
            <button type='submit'>Them san pham moi</button>
        </form>
        <h2>Danh sách sản phẩm</h2>
        <table className='table'>
            <thead>
                <tr>
                <th>STT</th>
                <th>Ảnh</th>
                <th>Tên SP</th>
                <th>Giá</th>
                <th>Action</th>
                </tr> 
            </thead>
            <tbody>
                {
                    products.map(())
                }
            </tbody>

        </table>
    </div>
  )
}
export default Products