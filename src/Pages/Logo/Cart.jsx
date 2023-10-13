import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Cart = () => {

  let [product,setproduct] = useState("");


  useEffect(() => {

    axios.get(`http://localhost:5000/cart`)
    .then((res) => {
      console.log((res.data));
    })
    .catch((err) => {
      console.log(err);
    })
  },[])

  return (
    <div>

    </div>
  )
}

export default Cart