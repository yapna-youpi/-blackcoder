import React from 'react'
import imgFoot from './components/assets/image/slide-7.jpg'
import store from './components/assets/image/store.png'

const Footer = () => {
    return (
            <footer className={`container-fluid wd-100% footer-global py-0 `}>
                    <div className={`row bg-dark text-light pt-4`}>
                        <div className="col-md-3 col-sm-6 footer-col-1 text-center ">
                            <h3>Download our App</h3>
                            <p>Download App for Android and ios mobile phone</p>
                            <img className="store_img" src={store} alt="download on store" />
                        </div>
                        <div className="col-md-3 col-sm-6 footer-col-2 text-center">
                            <img src={imgFoot} alt="nouveau banner" className="img-thumbnail" />
                            <p>Our purpose Is to Sustainably Make the pleasure and Benefits of sports Accessible to the Many. </p>
                        </div>
                        <div className="col-md-3 col-sm-6 footer-col-3 text-center">
                            <h3>Usefully Links</h3>
                            <ul>
                                <li>Coupons</li>
                                <li>Blog Post</li>
                                <li>Return Policy</li>
                                <li>Join affiliate</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 footer-col-4 text-center">
                            <h3>Follow us</h3>
                            <ul>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                                <li>Vimeo</li>
                            </ul>
                        </div>
                    </div>
            </footer>
    )
}

export default Footer;
