import React from 'react'
import DoneeNavbar from './Navbar'
import Footer from './footer'
import "./Sign.css"
import { Link } from 'react-router-dom'

const DoneeHome = () => {
   
    return (
        <div>
            <DoneeNavbar/>
            <div className="container donee-home">
            <div className='banner-page'>
            <div className="row padding">
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <h2 className='heading-2'>--Helping Hand</h2>
                        <Link to="/donee/request">
                        <button className='btn btn-lg btn-warning'>Make Request</button>
                        </Link>
                        <div className='social-icons'>
                            <i className='fa fa-whatsapp'></i>
                            <i className='fa fa-twitter'></i>
                            <i className='fa fa-facebook'></i>
                            <i className='fa fa-instagram'></i>
                            <Link to='/join'>
                            <i className='fa fa-wechat'></i>
                            </Link>
                        </div>

                    </div>
                    <div className='col-lg-6'>
                        <img class="img-fluid" src="https://images.pexels.com/photos/6646865/pexels-photo-6646865.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                    </div>
                </div>
            </div>
                <div className='container testimonials'>
                    <h5 className='text-center mb-5'>Testimonials from the members</h5>
                    <div className='row padding'>
                        <div className='col-lg-4 col-sm-12 col-md-4'>
                            <div className='card '>
                                <h5 className='card-title text-center'>Hilda,donee</h5>
                                <blockquote className="blockquote"><p className='card-text'>I am so greatful for this platform, we were struggling with providing food to our family of 30 children, fortunately a friend referred me to this platform, I made a request and I got my help.</p></blockquote>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='card '>
                                <h5 className='card-title text-center'>Pacheco,donee</h5>
                                <blockquote className="blockquote"><p className='card-text'>I am so greatful for this platform, we were struggling with providing food to our family of 30 children, fortunately a friend referred me to this platform, I made a request and I got my help.</p></blockquote>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='card '>
                                <h5 className='card-title text-center'>Linet,donee</h5>
                                <blockquote className="blockquote"><p className='card-text'>I am so greatful for this platform, we were struggling with providing food to our family of 30 children, fortunately a friend referred me to this platform, I made a request and I got my help.</p></blockquote>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
              
        </div>
    )
}

export default DoneeHome
