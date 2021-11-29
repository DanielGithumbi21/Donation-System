import React from 'react'
import DoneeNavbar from './Navbar'
import Footer from './footer'
import "./Sign.css"

const DoneeHome = () => {
   
    return (
        <div>
            <DoneeNavbar/>
            <div className="container donee-home">
            {/* <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="https://images.pexels.com/photos/6647111/pexels-photo-6647111.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/6646847/pexels-photo-6646847.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/8042425/pexels-photo-8042425.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div> */}
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
