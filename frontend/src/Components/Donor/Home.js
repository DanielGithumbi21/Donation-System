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
            <div className='container testimonials'>
                    <h5 className='text-center mb-5'>Testimonials from the members</h5>
                    <div className='row padding'>
                        <div className='col-lg-4 col-sm-12 col-md-4'>
                            <div className='card '>
                                <h5 className='card-title text-center'>Fridah,donor</h5>
                                <blockquote className="blockquote"><p className='card-text'>Giving back to the community has always been my greatest desire, but fraud cases has been on the rise, people pretending to be who they are not, but a friend of mine mentioned about the platform, very easy to use, I am happy to have touched a soul.</p></blockquote>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='card '>
                                <h5 className='card-title text-center'>Pete,donor</h5>
                                <blockquote className="blockquote"><p className='card-text'>My family has a tendency of visiting the less fortunate in a period of a month, but when the pandemic arrived it was not easy to continue with the good work, thanks God to Helping Hand, very easy and convenient way of continuing with the good work.</p></blockquote>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='card '>
                                <h5 className='card-title text-center'>Holmes,donor</h5>
                                <blockquote className="blockquote"><p className='card-text'>As a society, Helping Hand has helped us to reach to people who are suffering, but previously we couldn't help them, kudos for the platform, good work.</p></blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default DonorHome
