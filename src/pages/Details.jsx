import React from 'react'
import { useParams } from 'react-router-dom'
import ProductData from '../Data/ProductData'


function Details() {
  let {id}=useParams()
  let abc=ProductData.find((a)=>a.id==id)
  return (
    <div className='container py-2'>
      <div className="row">
        <div className="col-lg-3">
          <img className='w-100' src={abc.thumbnail} alt="" />
        </div>
        <div className="col-lg-8">
          <h2>{abc.title}</h2>
          Price: {abc.price}
          <p>{abc.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Details
