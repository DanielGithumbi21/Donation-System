import React from 'react';
import "./Sign.css"

const Footer = () => {
    return (
        <div className='container page-footer'>
            <div className='row padding'>
                <div className='col-lg-4 col-sm-12 col-md-4'>
                    <h5>Quick Links</h5>
                    <p><a href='#'>Home</a></p>
                    <p><a href='#'>Make a request</a></p>
                    <p><a href='#'>View requests</a></p>
                </div>
                <div className='col-lg-4'>
                    <h5>Our Partners</h5>
                    <p><a href='#'>W.H.O</a></p>
                    <p><a href='#'>united nations</a></p>
                    <p><a href='#'>U.S.A.I.D</a></p>
                </div>
                <div className='col-lg-4 social-media'>
                    <h5>Social Media</h5>
                    <p><a href='#'><i className='fa fa-facebook-f'></i></a>   Facebook</p>
                    <p><a href='#'><i className='fa fa-twitter'></i></a>   Twitter</p>
                    <p><a href='#'><i className='fa fa-instagram'></i></a>   Instagram</p>
                </div>
            </div>
            <h6 className='text-center'>&copy; Helping hand 2021</h6>
        </div>
    )
}
export default Footer;