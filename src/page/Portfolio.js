import React, { Component} from 'react'
import {Link} from 'react-router-dom'
import Footer from '../Footer'
import img1 from '../components/assets/img/portfolio1.jpg'
import img2 from '../components/assets/img/portfolio2.jpg'
import img3 from '../components/assets/img/portfolio3.jpg'
import img4 from '../components/assets/img/portfolio4.jpg'
import '../components/style/portfolio.css'


export class Portfolio extends Component {
    render() {
        return (
            <div>
                <div className={`masthead d-flex align-items-center`}>
                    <div className={`container px-4 px-lg-5 text-center`}>
                        <h1 className="mb-1">Stylish Portfolio</h1>
                        <h3 className="mb-5"><em>A Free Bootstrap Theme by Start Bootstrap</em></h3>
                        <span className={`btn btn-primary btn-xl`} to="/About" >Find Out More</span>
                    </div>
                </div>
                <section className={`content-section bg-light`} id="about">
                    <div className={`container px-4 px-lg-5 text-center`}>
                        <div className={`row gx-4 gx-lg-5 justify-content-center`}>
                            <div className="col-lg-10">
                                <h2>Stylish Portfolio is the perfect theme for your next project!</h2>
                                <p className={`lead mb-5`}>
                                    This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at
                                    <Link to="https://unsplash.com/">Unsplash</Link>!
                                </p>
                                <span className={`btn btn-dark btn-xl`} to="/Service">What We Offer</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`content-section bg-primary text-white text-center`} id="services">
                    <div className={`container px-4 px-lg-5`}>
                        <div className={`content-section-heading`}>
                            <h3 className={`text-secondary mb-0`}>Services</h3>
                            <h2 className="mb-5">What We Offer</h2>
                        </div>
                        <div className={`row gx-4 gx-lg-5`}>
                            <div className={`col-lg-3 col-md-6 mb-5 mb-lg-0`}>
                                <span className={`service-icon rounded-circle mx-auto mb-3`}><i className="icon-screen-smartphone"></i></span>
                                <h4><strong>Responsive</strong></h4>
                                <p className={`text-faded mb-0`}>Looks great on any screen size!</p>
                            </div>
                            <div className={`col-lg-3 col-md-6 mb-5 mb-lg-0`}>
                                <span className={`service-icon rounded-circle mx-auto mb-3`}><i className="icon-pencil"></i></span>
                                <h4><strong>Redesigned</strong></h4>
                                <p className={`text-faded mb-0`}>Freshly redesigned for Bootstrap 5.</p>
                            </div>
                            <div className={`col-lg-3 col-md-6 mb-5 mb-md-0`}>
                                <span className={`service-icon rounded-circle mx-auto mb-3`}><i className="icon-like"></i></span>
                                <h4><strong>Favorited</strong></h4>
                                <p className={`text-faded mb-0`}>
                                    Millions of users
                                    <i className={`fas fa-heart`}></i>
                                    Start Bootstrap!
                                </p>
                            </div>
                            <div className={`col-lg-3 col-md-6`}>
                                <span className={`service-icon rounded-circle mx-auto mb-3`}><i className="icon-mustache"></i></span>
                                <h4><strong>Question</strong></h4>
                                <p className={`text-faded mb-0`}>I mustache you a question...</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="callout">
                    <div className={`container px-4 px-lg-5 text-center`}>
                        <h2 className={`mx-auto mb-5`}>
                            Welcome to <span></span>
                            <em>your</em><span> </span>
                            next website!
                        </h2>
                        <span className={`btn btn-primary btn-xl`} to="https://startbootstrap.com/theme/stylish-portfolio/">Download Now!</span>
                    </div>
                </section>
                {/* styling portfolio */}
                <section className="content-section" id="portfolio">
                    <div className={`container px-4 px-lg-5`}>
                        <div className={`content-section-heading text-center`}>
                            <h3 className={`text-secondary mb-0`}>Portfolio</h3>
                            <h2 className="mb-5">Recent Projects</h2>
                        </div>
                        <div className={`row gx-0`}>
                            <div className="col-lg-6">
                                <span className="portfolio-item" href="#!">
                                    <div className="caption">
                                        <div className="caption-content">
                                            <div className="h2">Calendar</div>
                                            <p className="mb-0">A dark blue background with a very best style !</p>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src={img1} alt="..." />
                                </span>
                            </div>
                            <div className="col-lg-6">
                                <span className="portfolio-item" href="#!">
                                    <div className="caption">
                                        <div className="caption-content">
                                            <div className="h2">Ice Cream</div>
                                            <p className="mb-0">A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!</p>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src={img2} alt="..." />
                                </span>
                            </div>
                            <div className="col-lg-6">
                                <span className="portfolio-item" href="#!">
                                    <div className="caption">
                                        <div className="caption-content">
                                            <div className="h2">Strawberries</div>
                                            <p className="mb-0">Strawberries are such a tasty snack, especially with a little sugar on top!</p>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src={img3} alt="..." />
                                </span>
                            </div>
                            <div className="col-lg-6">
                                <span className="portfolio-item" href="#!">
                                    <div className="caption">
                                        <div className="caption-content">
                                            <div className="h2">Workspace</div>
                                            <p className="mb-0">A yellow workspace with some scissors, pencils, and other objects.</p>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src={img4} alt="..." />
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/*---  ajout --*/}

                <section className={`content-section bg-primary text-white`}>
                    <div className={`container px-4 px-lg-5 text-center`}>
                        <h2 className="mb-4">The buttons below are impossible to resist...</h2>
                        <span className={`btn btn-xl btn-light me-4`} href="#!">Click Me!</span>
                        <span className={`btn btn-xl btn-dark`} href="#!">Look at Me!</span>
                    </div>
                </section>
                


                
                <footer className={`footer text-center`}>
                    <div className={`container px-4 px-lg-5`}>
                        <ul className={`list-inline mb-5`}>
                            <li className={`list-inline-item`}>
                                <a className={`social-link rounded-circle text-white mr-3`} href="#!"><i className="icon-social-facebook"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a className={`social-link rounded-circle text-white mr-3`} href="#!"><i className="icon-social-twitter"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a className={`social-link rounded-circle text-white`} href="#!"><i className="icon-social-github"></i></a>
                            </li>
                        </ul>
                        <p className={`text-muted small mb-0`}>Copyright &copy; Your Website 2021</p>
                    </div>
                </footer>
                
                <a className="scroll-to-top rounded" href="#page-top"><i className="fas fa-angle-up"></i></a>
              
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"></script>
              
                <script src="js/scripts.js"></script>
                <Footer />
            </div>
            
        )
    }
}

export default Portfolio;
