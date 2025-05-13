import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import MobileMenu from '../../Components/MobileMenu';
import { NavLink } from 'react-router-dom';

export default function Blog() {
    return (
        <>
            <Header/>
            <MobileMenu/>
            <div>
                {/* Loader */}
                {/* <div id="cr-overlay">
                    <span className="loader" />
                </div> */}
                {/* Header Nav */}
                
                {/* Breadcrumb */}
                <section className="section-breadcrumb">
                    <div className="cr-breadcrumb-image">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="cr-breadcrumb-title">
                                        <h2>Blog Classic</h2>
                                        <span><NavLink to="/">Home</NavLink> - Blog Classic</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Blog-Classic */}
                <section className="section-blog-Classic padding-tb-100">
                    <div className="container">
                        <div className="row mb-minus-24">
                            <div className="col-lg-6 mb-24">
                                <div className="cr-blog-classic" data-aos="fade-up" data-aos-duration={2000} data-aos-delay={400}>
                                    <div className="cr-blog-classic-content">
                                        <div className="cr-comment">
                                            <span>By Admin <code> / 07 commen</code></span>
                                        </div>
                                        <h4>Best guide to Shopping for Organic ingredients.</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste alias odit cupiditate harum
                                            magnam tenetur inventore dicta voluptatum perferendis voluptate!</p>
                                        <a href="javascript:void(0)">read more</a>
                                    </div>
                                    <div className="cr-blog-image">
                                        <img src="assets/img/blog/blog-1.jpg" alt="blog-1" />
                                    </div>
                                </div>
                                <div className="cr-blog-classic" data-aos="fade-up" data-aos-duration={2000} data-aos-delay={400}>
                                    <div className="cr-blog-classic-content">
                                        <div className="cr-comment">
                                            <span>By Admin <code> / 07 commen</code></span>
                                        </div>
                                        <h4>Best guide to Shopping for Organic ingredients.</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste alias odit cupiditate harum
                                            magnam tenetur inventore dicta voluptatum perferendis voluptate!</p>
                                        <a href="javascript:void(0)">read more</a>
                                    </div>
                                    <div className="cr-blog-image">
                                        <img src="assets/img/blog/blog-2.jpg" alt="blog-2" />
                                    </div>
                                </div>
                                <div className="cr-blog-classic" data-aos="fade-up" data-aos-duration={2000} data-aos-delay={400}>
                                    <div className="cr-blog-classic-content">
                                        <div className="cr-comment">
                                            <span>By Admin <code> / 07 commen</code></span>
                                        </div>
                                        <h4>Best guide to Shopping for Organic ingredients.</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste alias odit cupiditate harum
                                            magnam tenetur inventore dicta voluptatum perferendis voluptate!</p>
                                        <a href="javascript:void(0)">read more</a>
                                    </div>
                                    <div className="cr-blog-image">
                                        <img src="assets/img/blog/blog-3.jpg" alt="blog-3" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-24">
                                <div className="cr-blog-classic" data-aos="fade-up" data-aos-duration={2000} data-aos-delay={400}>
                                    <div className="cr-blog-classic-content">
                                        <div className="cr-comment">
                                            <span>By Admin <code> / 07 commen</code></span>
                                        </div>
                                        <h4>Best guide to Shopping for Organic ingredients.</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste alias odit cupiditate harum
                                            magnam tenetur inventore dicta voluptatum perferendis voluptate!</p>
                                        <a href="javascript:void(0)">read more</a>
                                    </div>
                                    <div className="cr-blog-image">
                                        <img src="assets/img/blog/blog-2.jpg" alt="blog-2" />
                                    </div>
                                </div>
                                <div className="cr-blog-classic" data-aos="fade-up" data-aos-duration={2000} data-aos-delay={400}>
                                    <div className="cr-blog-classic-content">
                                        <div className="cr-comment">
                                            <span>By Admin <code> / 07 commen</code></span>
                                        </div>
                                        <h4>Best guide to Shopping for Organic ingredients.</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste alias odit cupiditate harum
                                            magnam tenetur inventore dicta voluptatum perferendis voluptate!</p>
                                        <a href="javascript:void(0)">read more</a>
                                    </div>
                                    <div className="cr-blog-image">
                                        <img src="assets/img/blog/blog-3.jpg" alt="blog-3" />
                                    </div>
                                </div>
                                <div className="cr-blog-classic" data-aos="fade-up" data-aos-duration={2000} data-aos-delay={400}>
                                    <div className="cr-blog-classic-content">
                                        <div className="cr-comment">
                                            <span>By Admin <code> / 07 commen</code></span>
                                        </div>
                                        <h4>Best guide to Shopping for Organic ingredients.</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste alias odit cupiditate harum
                                            magnam tenetur inventore dicta voluptatum perferendis voluptate!</p>
                                        <a href="javascript:void(0)">read more</a>
                                    </div>
                                    <div className="cr-blog-image">
                                        <img src="assets/img/blog/blog-1.jpg" alt="blog-1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nav aria-label="..." className="cr-pagination">
                            <ul className="pagination">
                                <li className="page-item disabled">
                                    <span className="page-link">Previous</span>
                                </li>
                                <li className="page-item active" aria-current="page">
                                    <span className="page-link">1</span>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </section>
                
            </div>
            <Footer/>

        </>


    )
}
