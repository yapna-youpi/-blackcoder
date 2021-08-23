import React, { Component, Fragment } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import img1 from '../components/assets/img/portfolio1.jpg'
import img2 from '../components/assets/img/portfolio2.jpg'
import img3 from '../components/assets/img/portfolio3.jpg'
import img4 from '../components/assets/img/portfolio4.jpg'
import img5 from '../components/assets/image/enterprise.jpg'
import img6 from '../components/assets/image/equipe.jpg'

export class Home extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                {/*--block services--*/}
                <section className={`home_service text-dark bg-white pt-xs-2 pb-xs-2 pt-5 pb-5 gx-5`}>
                    <div className={`title_service mt-5`}>
                        <h1 className="titre1">services</h1>
                        <p className={`text-center mb-5 pt-3`}>Services We Offer For You</p>
                    </div>
                    <div className={`container-fluid content_service mt-5`}>
                        <div className="row d-flex mt-5 pt-5  pb-5">
                            <div className={`col-sm-6 col-md-4`}>
                                <div className={`card border-0  shadow  pt-5 pb-4 pr-2 h-100  sm-mr-2 text-center carre_service`}>
                                    <span className={`ifram`} ><i className="fas fa-home"></i></span>
                                    <h4>Product UX, Design & Web Development‎‎</h4>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore odit earum modi voluptates exercitationem beatae excepturi, eum illum atque, repudiandae in soluta quisquam deleniti odio, aut veniam minima commodi porro.
                                </div>
                            </div>
                            <div className={`col-sm-6 col-md-4`}>
                                <div className={`card border-0  shadow  pt-5 pb-4 pr-2 h-100 sm-mr-2 text-center carre_service`}>
                                    <span className={`ifram`} ><i className="fas fa-home"></i></span>
                                    <h4>Code and Design Formation‎‎</h4>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore odit earum modi voluptates exercitationem beatae excepturi, eum illum atque, 
                                </div>
                            </div>
                            <div className={`col-sm-6 col-md-4 `}>
                                <div className={`card border-0  shadow  pt-5 pb-4 pr-2 h-100 sm-mr-2 text-center carre_service`}>
                                    <span className={`ifram`} ><i className="fas fa-home"></i></span>
                                    <h4>Marketing Strategy & SEO Campaigns‎‎</h4>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore odit earum modi voluptates exercitationem beatae excepturi, eum illum atque, repudiandae in soluta quisquam deleniti odio, aut veniam minima commodi porro.
                                </div>
                            </div>
                        </div>

                        <div className="row d-flex pt-1  pb-5">
                            <div className={`col-sm-6 col-md-4 mb-5`}>
                                <div className={`card border-0  shadow  pt-5 pb-4 pr-2 h-100  sm-mr-2 text-center carre_service`}>
                                    <span className={`ifram`} ><i className="fas fa-home"></i></span>
                                    <h4>Product UX, Design & Web Development‎‎</h4>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore odit earum modi voluptates exercitationem beatae excepturi, eum illum atque, repudiandae in soluta quisquam deleniti odio, aut veniam minima commodi porro.
                                </div>
                            </div>
                            <div className={`col-sm-6 col-md-4 mb-5`}>
                                <div className={`card border-0  shadow  pt-5 pb-4 pr-2 h-100 sm-mr-2 text-center carre_service`}>
                                    <span className={`ifram`} ><i className="fas fa-home"></i></span>
                                    <h4>Code and Design Formation‎‎</h4>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore odit earum modi voluptates exercitationem beatae excepturi, eum illum atque, 
                                </div>
                            </div>
                            <div className={`col-sm-6 col-md-4 mb-5`}>
                                <div className={`card border-0  shadow  pt-5 pb-4 pr-2 h-100 sm-mr-2 text-center carre_service`}>
                                    <span className={`ifram`} ><i className="fas fa-home"></i></span>
                                    <h4>Marketing Strategy & SEO Campaigns‎‎</h4>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore odit earum modi voluptates exercitationem beatae excepturi, eum illum atque, repudiandae in soluta quisquam deleniti odio, aut veniam minima commodi porro.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*--Portfolio design --*/}
                <section className={`home_portfolio text-dark bg-light pt-xs-2 pb-xs-2 pt-5 pb-5 gx-5`}>
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
                </section>

                {/*--styling About--*/}
                <section className={`home_portfolio text-dark bg-white pt-xs-2 pb-xs-2 pt-5 pb-5 gx-5`}>
                    <div className={`container px-4 px-lg-5`}>
                        <div className={`content-section-heading text-center`}>
                            <h1 className={`text-secondary mb-0`}>About Us</h1><br/>
                            <h4 className="mb-5">Recent Projects of our enterprise</h4>
                        </div>
                        <ul className={`row timeline`}>
                            <li>
                                <div className="timeline-image">
                                    <img className={`img-thumbnail img-fluid`} src={img5} alt="entreprise" />
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>2009-2011</h4>
                                        <h4 className="subheading">Our Humble Beginnings</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-inverted">
                                <div className="timeline-image">
                                    <img className={`img-thumbnail img-fluid`} src={img6} alt="entreprise" />
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>March 2011</h4>
                                        <h4 className="subheading">An Agency is Born</h4>
                                    </div>
                                    <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                {/*--styling contact--*/}
                <section className={`secion-page  text-dark pt-xs-2 pb-xs-2 pt-5 pb-5 gx-5`} id="contact">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Contact Us</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                            <div className="row align-items-stretch mb-5">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        {/*-- Name input--*/}
                                        <input className="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" />
                                        <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                    </div>
                                    <div className="form-group">
                                        {/*-- Email address input--*/}
                                        <input className="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
                                        <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                        <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                    </div>
                                    <div className="form-group mb-md-0">
                                        {/*-- Phone number input--*/}
                                        <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" data-sb-validations="required" />
                                        <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group form-group-textarea mb-md-0">
                                        {/*-- Message input--*/}
                                        <textarea className="form-control" id="message" placeholder="Your Message *" data-sb-validations="required"></textarea>
                                        <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Submit success message-->
                            <!---->
                            <!-- This is what your users will see when the form-->
                            <!-- has successfully submitted--> */}
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center text-white mb-3">
                                    <div className="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                            {/* <!-- Submit error message-->
                            <!---->
                            <!-- This is what your users will see when there is-->
                            <!-- an error submitting the form--> */}
                            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                            {/* <!-- Submit Button--> */}
                            <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
                        </form>
                    </div>
                </section>
                <Footer />
            </Fragment>
        )
    }
}

export default Home;
