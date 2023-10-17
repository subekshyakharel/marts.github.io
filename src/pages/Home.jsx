import React from 'react'
import laa from "../assets/laa.png"
import lee from "../assets/lee.png"
import loo from "../assets/loo.png"
import ProductData from '../Data/ProductData'
import { Link } from 'react-router-dom'

function Home() {
  return (
   <>
<section classname="banner">
  <div id="carouselExampleIndicators" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={laa} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={lee} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={loo} className="d-block w-100" alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</section>


   
   <div className="container py-3">
        <h3 className='fw-bold py-2'>Latest Product</h3>
        <div className="row">
            {ProductData.slice(0,8).map((a)=>(
               <div className="col-lg-3 border p-3" key={a.id}>
                <Link to={`/detail/${a.id}`}>
                <img className='w-100 mm' src={a.thumbnail}/>
                </Link>
                <p className='p-3'>{a.title}</p>
               </div>
            ))}
            
        </div>
   </div>
   </>
  )
}

export default Home
