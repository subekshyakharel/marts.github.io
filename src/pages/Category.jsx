import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductData from '../Data/ProductData'

function Category() {
  let {cid}=useParams()
  let a=ProductData.filter((a)=>a.category==cid)
  return (
    <div className='container py-3'>
      <h1 className='text-uppercase'>Category {cid}</h1>
      <div className="row">
            {a.map((a)=>(
               <div className="col-lg-3 border p-3" key={a.id}>
                <Link to={`/detail/${a.id}`}>
                <img className='w-100 mm' src={a.thumbnail}/>
                </Link>
                <p className='p-3'>{a.title}</p>
               </div>
            ))}
            
        </div>
    </div>
  )
}

export default Category
