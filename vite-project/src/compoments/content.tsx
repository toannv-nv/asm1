import React, { useState } from 'react'



const Content = () => {
    const [ count, setCount ] = useState<number>(1)
    const [status, setStatus] = useState<boolean>(false);
    const handleClick=()=>{
        setCount(count+1)
    }
    const changeStatus=()=>{
        if (status){
            setStatus(false)
        }
        else{
            setStatus(true)
        }
    }
  return (
    <div>
        <div 
        style={
            {width:100, height:100, background:(status)?'red':'b;ue'}
        }
        onClick={changeStatus}
        >
        </div>
    <h1>{count}</h1>
        content
        <p></p>
        <button onClick={handleClick}>Tang toc</button>
        </div>
  )
}

export default Content