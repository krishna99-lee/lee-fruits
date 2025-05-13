import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import MobileMenu from '../../Components/MobileMenu';
import { NavLink } from 'react-router-dom';

export default function Contact() {
    return (
        <>
            <Header />
            <MobileMenu />
            <div>
                {/* Loader */}
             
                {/* Breadcrumb */}
                <section className="section-breadcrumb">
                    <div className="cr-breadcrumb-image">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="cr-breadcrumb-title">
                                        <h2>Contact Us</h2>
                                        <span> <NavLink to="/">Home</NavLink> - Contact Us</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Contact */}
                <section className="section-Contact padding-tb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="mb-30" data-aos="fade-up" data-aos-duration={2000} data-aos-delay={400}>
                                    <div className="cr-banner">
                                        <h2>Get in Touch</h2>
                                    </div>
                                    <div className="cr-banner-sub-title">
                                        <p>Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs
                                            do ye
                                            admire. His secure called esteem praise.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-minus-24">
                            <div className="col-lg-4 col-md-6 col-12 mb-24" data-aos="fade-up" data-aos-duration={2000} data-aos-delay={400}>
                                <div className="cr-info-box">
                                    <div className="cr-icon">
                                        <i className="ri-phone-line" />
                                    </div>
                                    <div className="cr-info-content">
                                        <h4 className="heading">Contact</h4>
                                        <p><a href="javascript:void(0)"><i className="ri-phone-line" /> &nbsp; (+91)-9876XXXXX</a></p>
                                        <p><a href="javascript:void(0)"><i className="ri-phone-line" /> &nbsp; (+91)-987654XXXX</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12 mb-24" data-aos="fade-up" data-aos-duration={2000} data-aos-delay={600}>
                                <div className="cr-info-box">
                                    <div className="cr-icon">
                                        <i className="ri-mail-line" />
                                    </div>
                                    <div className="cr-info-content">
                                        <h4 className="heading">Mail &amp; Website</h4>
                                        <p><a href="javascript:void(0)"><i className="ri-mail-line" /> &nbsp;
                                            mail.example@gmail.com</a></p>
                                        <p><a href="javascript:void(0)"><i className="ri-globe-line" /> &nbsp; www.yourdomain.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12 mb-24" data-aos="fade-up" data-aos-duration={2000} data-aos-delay={800}>
                                <div className="cr-info-box">
                                    <div className="cr-icon">
                                        <i className="ri-map-pin-line" />
                                    </div>
                                    <div className="cr-info-content">
                                        <h4 className="heading">Address</h4>
                                        <p><a href="javascript:void(0)"><i className="ri-map-pin-line" /> &nbsp; 140 Ruami Moraes
                                            Filho,
                                            987 - Salvador - MA, 40352, Brazil.</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row padding-t-100 mb-minus-24">
                            <div className="col-md-6 col-12 mb-24" data-aos="fade-up" data-aos-duration={2000} data-aos-delay={400}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" title="maps">
                                </iframe>
                            </div>
                            <div className="col-md-6 col-12 mb-24" data-aos="fade-up" data-aos-duration={2000} data-aos-delay={800}>
                                <form className="cr-content-form">
                                    <div className="form-group">
                                        <input type="text" placeholder="Full Name" className="cr-form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" placeholder="Email" className="cr-form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Phone" className="cr-form-control" />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="cr-form-control" id="exampleFormControlTextarea1" rows={4} placeholder="Message" defaultValue={""} />
                                    </div>
                                    <button type="button" className="cr-button">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>

            <Footer />
        </>
    )
}
