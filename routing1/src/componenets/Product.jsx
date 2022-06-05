import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export const Product = () => {
  const {id} = useParams();
  const [Product,setProduct]= useState({});
  useEffect(()=>{
    if(id){
      fetch(`http://localhost:8080/products/${id}`)
      .then((r)=> r.json())
      .then((d)=> setProduct(d));
    }
  },[id]);
  return (
    <div>Product ID:{id}
    <div>{Product.name}</div>
    <div>{Product.des}</div></div>
  )
}
