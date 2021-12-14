import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"
import DonorNavbar from './Navbar'
import Footer from '../Donee/footer'

const DonorHome = () => {
    return (
        <div>
            <DonorNavbar/>
            <div className='container-fluid donor-home'>
                <div className="row padding">
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <h2 className='heading-2'>--Helping Hand</h2>
                        <Link to="/donor/donations">
                        <button className='btn btn-lg btn-warning'>View Requests</button>
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
            <Footer/>
        </div>
    )
}

export default DonorHome
