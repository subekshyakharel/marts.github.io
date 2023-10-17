import React from 'react'
import logo from "../assets/logo.svg"
import CatData from '../Data/CatData'
import { Link, Route, Routes } from 'react-router-dom'
import Category from '../pages/Category'
import Details from '../pages/Details'
import Home from '../pages/Home'

function Header() {
  return (
    <>
      <section className='border border-bottom py-2'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                <ul className="list-inline m-0 ">
  <li className="list-inline-item"> 9801855549</li>
</ul>
</div>
                <div className="col-lg-6 text-end">
                <ul className="list-inline m-0">
  <li className="list-inline-item pe-4">Gyapu Rewards</li>
  <li className="list-inline-item">Sell yours product</li>
  <li className="list-inline-item"></li>
</ul>

                </div>
           
        </div>
        </div>
      </section>
      <section>
        <header className='py-3'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-2">
                        <img className='w-100' src={logo} alt="" />
                    </div>
                    <div className="col-lg-6 mx-auto">
                        <form className="d-flex" role="search">
  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
  <button className="btn btn-outline-success" type="submit">Search</button>
</form>

      </div>
                    <div className="col-lg-2 text-end">
                    <button type="button" className="btn btn-primary position-relative">
  Inbox
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span className="visually-hidden">unread messages</span>
  </span>
</button>

                    </div>
                </div>
            </div>
        </header>
        <nav className='main'>
            <div className="container">
            <ul className='m-0'>
                <li><Link to="/">Home</Link></li>
                {CatData.slice(0,9).map((a)=>(
                    <li><Link to={`/cat/${a}`}>{a}</Link></li>
                ))}
                
            </ul>
            </div>
        </nav>
      </section>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cat/:cid" element={<Category/>}/>
        <Route path="/detail/:id" element={<Details/>}/>
      </Routes>
    </>
  )
}

export default Header
