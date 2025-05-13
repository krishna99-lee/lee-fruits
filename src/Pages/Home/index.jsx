import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import MobileMenu from '../../Components/MobileMenu'

export default function Home() {
    return (
        <>
            <Header />
            <MobileMenu/>
            <div>   

                {/* Hero slider */}
                <section className="section-hero padding-b-100 next">
                    <div className="cr-slider swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="cr-hero-banner cr-banner-image-two">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="cr-left-side-contain slider-animation">
                                                    <h5><span>500%</span> Lee Fruits</h5>
                                                    <h1>Explore fresh &amp; juicy fruits.</h1>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis
                                                        beatae consequuntur.</p>
                                                    <div className="cr-last-buttons">
                                                        <a href="#" className="cr-button">
                                                            shop now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="cr-hero-banner cr-banner-image-one">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="cr-left-side-contain slider-animation">
                                                    <h5><span>100%</span> Organic Vegetables</h5>
                                                    <h1>The best way to stuff your wallet.</h1>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis
                                                        beatae consequuntur.</p>
                                                    <div className="cr-last-buttons">
                                                        <a href="#" className="cr-button">
                                                            shop now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination" />
                    </div>
                </section>
                {/* Categories */}
                <section className="section-categories padding-b-100">
                    <div className="container">
                        <div className="row mb-minus-24">
                            <div className="col-lg-4 col-12 mb-24">
                                <div className="cr-categories">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active center-categories-inner" id="cake_milk-tab" data-bs-toggle="tab" data-bs-target="#cake_milk" type="button" role="tab" aria-controls="cake_milk" aria-selected="true">
                                                Cake &amp; Milk <span>(65 items)</span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link center-categories-inner" id="meat-tab" data-bs-toggle="tab" data-bs-target="#meat" type="button" role="tab" aria-controls="meat" aria-selected="false" tabIndex={-1}>
                                                Fresh Meat <span>(30 items)</span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link center-categories-inner" id="Vegetables-tab" data-bs-toggle="tab" data-bs-target="#Vegetables" type="button" role="tab" aria-controls="Vegetables" aria-selected="false" tabIndex={-1}>
                                                Vegetables <span>(25 items)</span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link center-categories-inner" id="Custard-tab" data-bs-toggle="tab" data-bs-target="#Custard" type="button" role="tab" aria-controls="Custard" aria-selected="false" tabIndex={-1}>
                                                Apple &amp; Mango <span>(45 items)</span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link center-categories-inner" id="Strawberry-tab" data-bs-toggle="tab" data-bs-target="#Strawberry" type="button" role="tab" aria-controls="Strawberry" aria-selected="false" tabIndex={-1}>
                                                Strawberry <span>(68 items)</span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="center-categories-inner cr-view-more" href="#">
                                                View More
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-8 col-12 mb-24">
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade active show" id="cake_milk" role="tabpanel" aria-labelledby="cake_milk-tab">
                                        <div className="row mb-minus-24">
                                            <div className="col-6 cr-categories-box mb-24">
                                                <div className="cr-side-categories">
                                                    <div className="categories-inner">
                                                        <h4>50
                                                            <span>
                                                                <small>%</small>
                                                                <small>Off</small>
                                                            </span>
                                                        </h4>
                                                    </div>
                                                    <div className="categories-contain">
                                                        <div className="categories-text">
                                                            <h5>Cake</h5>
                                                        </div>
                                                        <div className="categories-button">
                                                            <a href="#" className="cr-button">shop now</a>
                                                        </div>
                                                    </div>
                                                    <img src="assets/img/categories/3.jpg" alt="categories-3" />
                                                </div>
                                            </div>
                                            <div className="col-6 cr-categories-box mb-24">
                                                <div className="cr-side-categories">
                                                    <div className="categories-inner">
                                                        <h4>40
                                                            <span>
                                                                <small>%</small>
                                                                <small>Off</small>
                                                            </span>
                                                        </h4>
                                                    </div>
                                                    <div className="categories-contain">
                                                        <div className="categories-text">
                                                            <h5>Milk</h5>
                                                        </div>
                                                        <div className="categories-button">
                                                            <a href="#" className="cr-button">shop now</a>
                                                        </div>
                                                    </div>
                                                    <img src="assets/img/categories/4.jpg" alt="categories-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="meat" role="tabpanel" aria-labelledby="meat-tab">
                                        <div className="row mb-minus-24">
                                            <div className="col-6 cr-categories-box">
                                                <div className="cr-side-categories">
                                                    <div className="categories-inner">
                                                        <h4>35
                                                            <span>
                                                                <small>%</small>
                                                                <small>Off</small>
                                                            </span>
                                                        </h4>
                                                    </div>
                                                    <div className="categories-contain">
                                                        <div className="categories-text">
                                                            <h5>Fish Meat</h5>
                                                        </div>
                                                        <div className="categories-button">
                                                            <a href="#" className="cr-button">shop now</a>
                                                        </div>
                                                    </div>
                                                    <img src="assets/img/categories/1.jpg" alt="categories-1" />
                                                </div>
                                            </div>
                                            <div className="col-6 cr-categories-box">
                                                <div className="cr-side-categories">
                                                    <div className="categories-inner">
                                                        <h4>24
                                                            <span>
                                                                <small>%</small>
                                                                <small>Off</small>
                                                            </span>
                                                        </h4>
                                                    </div>
                                                    <div className="categories-contain">
                                                        <div className="categories-text">
                                                            <h5>Fresh Meat</h5>
                                                        </div>
                                                        <div className="categories-button">
                                                            <a href="#" className="cr-button">shop now</a>
                                                        </div>
                                                    </div>
                                                    <img src="assets/img/categories/2.jpg" alt="categories-2" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="Vegetables" role="tabpanel" aria-labelledby="Vegetables-tab">
                                        <div className="row mb-minus-24">
                                            <div className="col-6 cr-categories-box mb-24">
                                                <div className="cr-side-categories">
                                                    <div className="categories-inner">
                                                        <h4>45
                                                            <span>
                                                                <small>%</small>
                                                                <small>Off</small>
                                                            </span>
                                                        </h4>
                                                    </div>
                                                    <div className="categories-contain">
                                                        <div className="categories-text">
                                                            <h5>Coriander</h5>
                                                        </div>
                                                        <div className="categories-button">
                                                            <a href="#" className="cr-button">shop now</a>
                                                        </div>
                                                    </div>
                                                    <img src="assets/img/categories/5.jpg" alt="categories-5" />
                                                </div>
                                            </div>
                                            <div className="col-6 cr-categories-box mb-24">
                                                <div className="cr-side-categories">
                                                    <div className="categories-inner">
                                                        <h4>20
                                                            <span>
                                                                <small>%</small>
                                                                <small>Off</small>
                                                            </span>
                                                        </h4>
                                                    </div>
                                                    <div className="categories-contain">
                                                        <div className="categories-text">
                                                            <h5>Broccoli</h5>
                                                        </div>
                                                        <div className="categories-button">
                                                            <a href="#" className="cr-button">shop now</a>
                                                        </div>
                                                    </div>
                                                    <img src="assets/img/categories/6.jpg" alt="categories-6" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="Custard" role="tabpanel" aria-labelledby="Custard-tab">
                                        <div className="row mb-minus-24">
                                            <div className="col-6 cr-categories-box mb-24">
                                                <div className="cr-side-categories">
                                                    <div className="categories-inner">
                                                        <h4>30
                                                            <span>
                                                                <small>%</small>
                                                                <small>Off</small>
                                                            </span>
                                                        </h4>
                                                    </div>
                                                    <div className="categories-contain">
                                                        <div className="categories-text">
                                                            <h5>Apple</h5>
                                                        </div>
                                                        <div className="categories-button">
                                                            <a href="#" className="cr-button">shop now</a>
                                                        </div>
                                                    </div>
                                                    <img src="assets/img/categories/7.jpg" alt="categories-7" />
                                                </div>
                                            </div>
                                            <div className="col-6 cr-categories-box mb-24">
                                                <div className="cr-side-categories">
                                                    <div className="categories-inner">
                                                        <h4>25
                                                            <span>
                                                                <small>%</small>
                                                                <small>Off</small>
                                                            </span>
                                                        </h4>
                                                    </div>
                                                    <div className="categories-contain">
                                                        <div className="categories-text">
                                                            <h5>Mango</h5>
                                                        </div>
                                                        <div className="categories-button">
                                                            <a href="#" className="cr-button">shop now</a>
                                                        </div>
                                                    </div>
                                                    <img src="assets/img/categories/8.jpg" alt="categories-8" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="Strawberry" role="tabpanel" aria-labelledby="Strawberry-tab">
                                        <div className="row mb-minus-24">
                                            <div className="col-6 cr-categories-box mb-24">
                                                <div className="cr-side-categories">
                                                    <div className="categories-inner">
                                                        <h4>33
                                                            <span>
                                                                <small>%</small>
                                                                <small>Off</small>
                                                            </span>
                                                        </h4>
                                                    </div>
                                                    <div className="categories-contain">
                                                        <div className="categories-text">
                                                            <h5>Strawberry</h5>
                                                        </div>
                                                        <div className="categories-button">
                                                            <a href="#" className="cr-button">shop now</a>
                                                        </div>
                                                    </div>
                                                    <img src="assets/img/categories/9.jpg" alt="categories-9" />
                                                </div>
                                            </div>
                                            <div className="col-6 cr-categories-box mb-24">
                                                <div className="cr-side-categories">
                                                    <div className="categories-inner">
                                                        <h4>15
                                                            <span>
                                                                <small>%</small>
                                                                <small>Off</small>
                                                            </span>
                                                        </h4>
                                                    </div>
                                                    <div className="categories-contain">
                                                        <div className="categories-text">
                                                            <h5>Strawberry</h5>
                                                        </div>
                                                        <div className="categories-button">
                                                            <a href="#" className="cr-button">shop now</a>
                                                        </div>
                                                    </div>
                                                    <img src="assets/img/categories/10.jpg" alt="categories-10" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Popular product */}
                <section className="section-popular-product-shape padding-b-100">
                    <div className="container" data-aos="fade-up" data-aos-duration={2000}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="mb-30">
                                    <div className="cr-banner">
                                        <h2>Popular Products</h2>
                                    </div>
                                    <div className="cr-banner-sub-title">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                            ut labore lacus vel facilisis. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-content row mb-minus-24" id="MixItUpDA2FB7">
                            <div className="col-xl-3 col-lg-4 col-12 mb-24">
                                <div className="row mb-minus-24 sticky">
                                    <div className="col-lg-12 col-sm-6 col-6 cr-product-box mb-24">
                                        <div className="cr-product-tabs">
                                            <ul>
                                                <li className="active" data-filter="all">All</li>
                                                <li data-filter=".snack">Snack</li>
                                                <li data-filter=".vegetable">Vegetable</li>
                                                <li data-filter=".fruit">Fruit</li>
                                                <li data-filter=".bakery">Bakery</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-sm-6 col-6 cr-product-box banner-480 mb-24">
                                        <div className="cr-ice-cubes">
                                            <img src="assets/img/product/product-banner.jpg" alt="product banner" />
                                            <div className="cr-ice-cubes-contain">
                                                <h4 className="title">Juicy </h4>
                                                <h5 className="sub-title">Fruits</h5>
                                                <span>100% Natural</span>
                                                <a href="#" className="cr-button">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-8 col-12 mb-24">
                                <div className="row mb-minus-24">
                                    <div className="mix vegetable col-xxl-3 col-xl-4 col-6 cr-product-box mb-24">
                                        <div className="cr-product-card">
                                            <div className="cr-product-image">
                                                <div className="cr-image-inner zoom-image-hover">
                                                    <img src="assets/img/product/1.jpg" alt="product-1" />
                                                </div>
                                                <div className="cr-side-view">
                                                    <a href="javascript:void(0)" className="wishlist">
                                                        <i className="ri-heart-line" />
                                                    </a>
                                                    <a className="model-oraganic-product" data-bs-toggle="modal" href="#quickview" role="button">
                                                        <i className="ri-eye-line" />
                                                    </a>
                                                </div>
                                                <a className="cr-shopping-bag" href="javascript:void(0)">
                                                    <i className="ri-shopping-bag-line" />
                                                </a>
                                            </div>
                                            <div className="cr-product-details">
                                                <div className="cr-brand">
                                                    <a href="#">Vegetables</a>
                                                    <div className="cr-star">
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-line" />
                                                        <p>(4.5)</p>
                                                    </div>
                                                </div>
                                                <a href="#" className="title">Fresh organic villa farm lomon
                                                    500gm pack</a>
                                                <p className="cr-price"><span className="new-price">$120.25</span> <span className="old-price">$123.25</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mix snack col-xxl-3 col-xl-4 col-6 cr-product-box mb-24">
                                        <div className="cr-product-card">
                                            <div className="cr-product-image">
                                                <div className="cr-image-inner zoom-image-hover">
                                                    <img src="assets/img/product/9.jpg" alt="product-1" />
                                                </div>
                                                <div className="cr-side-view">
                                                    <a href="javascript:void(0)" className="wishlist">
                                                        <i className="ri-heart-line" />
                                                    </a>
                                                    <a className="model-oraganic-product" data-bs-toggle="modal" href="#quickview" role="button">
                                                        <i className="ri-eye-line" />
                                                    </a>
                                                </div>
                                                <a className="cr-shopping-bag" href="javascript:void(0)">
                                                    <i className="ri-shopping-bag-line" />
                                                </a>
                                            </div>
                                            <div className="cr-product-details">
                                                <div className="cr-brand">
                                                    <a href="#">Snacks</a>
                                                    <div className="cr-star">
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <p>(5.0)</p>
                                                    </div>
                                                </div>
                                                <a href="#" className="title">Best snakes with hazel nut pack
                                                    200gm</a>
                                                <p className="cr-price"><span className="new-price">$145</span> <span className="old-price">$150</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mix fruit col-xxl-3 col-xl-4 col-6 cr-product-box mb-24">
                                        <div className="cr-product-card">
                                            <div className="cr-product-image">
                                                <div className="cr-image-inner zoom-image-hover">
                                                    <img src="assets/img/product/2.jpg" alt="product-1" />
                                                </div>
                                                <div className="cr-side-view">
                                                    <a href="javascript:void(0)" className="wishlist">
                                                        <i className="ri-heart-line" />
                                                    </a>
                                                    <a className="model-oraganic-product" data-bs-toggle="modal" href="#quickview" role="button">
                                                        <i className="ri-eye-line" />
                                                    </a>
                                                </div>
                                                <a className="cr-shopping-bag" href="javascript:void(0)">
                                                    <i className="ri-shopping-bag-line" />
                                                </a>
                                            </div>
                                            <div className="cr-product-details">
                                                <div className="cr-brand">
                                                    <a href="#">Fruits</a>
                                                    <div className="cr-star">
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-line" />
                                                        <p>(4.5)</p>
                                                    </div>
                                                </div>
                                                <a href="#" className="title">Fresh organic apple 1kg simla
                                                    marming</a>
                                                <p className="cr-price"><span className="new-price">$120.25</span> <span className="old-price">$123.25</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mix bakery col-xxl-3 col-xl-4 col-6 cr-product-box mb-24">
                                        <div className="cr-product-card">
                                            <div className="cr-product-image">
                                                <div className="cr-image-inner zoom-image-hover">
                                                    <img src="assets/img/product/17.jpg" alt="product-1" />
                                                </div>
                                                <div className="cr-side-view">
                                                    <a href="javascript:void(0)" className="wishlist">
                                                        <i className="ri-heart-line" />
                                                    </a>
                                                    <a className="model-oraganic-product" data-bs-toggle="modal" href="#quickview" role="button">
                                                        <i className="ri-eye-line" />
                                                    </a>
                                                </div>
                                                <a className="cr-shopping-bag" href="javascript:void(0)">
                                                    <i className="ri-shopping-bag-line" />
                                                </a>
                                            </div>
                                            <div className="cr-product-details">
                                                <div className="cr-brand">
                                                    <a href="#">Bakery</a>
                                                    <div className="cr-star">
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <p>(5.0)</p>
                                                    </div>
                                                </div>
                                                <a href="#" className="title">Delicious white baked fresh bread
                                                    and toast</a>
                                                <p className="cr-price"><span className="new-price">$20</span> <span className="old-price">$22.10</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mix snack col-xxl-3 col-xl-4 col-6 cr-product-box mb-24">
                                        <div className="cr-product-card">
                                            <div className="cr-product-image">
                                                <div className="cr-image-inner zoom-image-hover">
                                                    <img src="assets/img/product/11.jpg" alt="product-1" />
                                                </div>
                                                <div className="cr-side-view">
                                                    <a href="javascript:void(0)" className="wishlist">
                                                        <i className="ri-heart-line" />
                                                    </a>
                                                    <a className="model-oraganic-product" data-bs-toggle="modal" href="#quickview" role="button">
                                                        <i className="ri-eye-line" />
                                                    </a>
                                                </div>
                                                <a className="cr-shopping-bag" href="javascript:void(0)">
                                                    <i className="ri-shopping-bag-line" />
                                                </a>
                                            </div>
                                            <div className="cr-product-details">
                                                <div className="cr-brand">
                                                    <a href="#">Snacks</a>
                                                    <div className="cr-star">
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <p>(5.0)</p>
                                                    </div>
                                                </div>
                                                <a href="#" className="title">Sweet crunchy nut mix 250gm
                                                    pack</a>
                                                <p className="cr-price"><span className="new-price">$120.25</span> <span className="old-price">$123.25</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mix fruit col-xxl-3 col-xl-4 col-6 cr-product-box mb-24">
                                        <div className="cr-product-card">
                                            <div className="cr-product-image">
                                                <div className="cr-image-inner zoom-image-hover">
                                                    <img src="assets/img/product/3.jpg" alt="product-1" />
                                                </div>
                                                <div className="cr-side-view">
                                                    <a href="javascript:void(0)" className="wishlist">
                                                        <i className="ri-heart-line" />
                                                    </a>
                                                    <a className="model-oraganic-product" data-bs-toggle="modal" href="#quickview" role="button">
                                                        <i className="ri-eye-line" />
                                                    </a>
                                                </div>
                                                <a className="cr-shopping-bag" href="javascript:void(0)">
                                                    <i className="ri-shopping-bag-line" />
                                                </a>
                                            </div>
                                            <div className="cr-product-details">
                                                <div className="cr-brand">
                                                    <a href="#">Fruits</a>
                                                    <div className="cr-star">
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-line" />
                                                        <i className="ri-star-line" />
                                                        <p>(3.2)</p>
                                                    </div>
                                                </div>
                                                <a href="#" className="title">Organic fresh venila farm
                                                    watermelon 5kg</a>
                                                <p className="cr-price"><span className="new-price">$50.30</span> <span className="old-price">$72.60</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mix snack col-xxl-3 col-xl-4 col-6 cr-product-box mb-24">
                                        <div className="cr-product-card">
                                            <div className="cr-product-image">
                                                <div className="cr-image-inner zoom-image-hover">
                                                    <img src="assets/img/product/10.jpg" alt="product-1" />
                                                </div>
                                                <div className="cr-side-view">
                                                    <a href="javascript:void(0)" className="wishlist">
                                                        <i className="ri-heart-line" />
                                                    </a>
                                                    <a className="model-oraganic-product" data-bs-toggle="modal" href="#quickview" role="button">
                                                        <i className="ri-eye-line" />
                                                    </a>
                                                </div>
                                                <a className="cr-shopping-bag" href="javascript:void(0)">
                                                    <i className="ri-shopping-bag-line" />
                                                </a>
                                            </div>
                                            <div className="cr-product-details">
                                                <div className="cr-brand">
                                                    <a href="#">Snacks</a>
                                                    <div className="cr-star">
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <p>(5.0)</p>
                                                    </div>
                                                </div>
                                                <a href="#" className="title">Sweet crunchy nut mix 250gm
                                                    pack</a>
                                                <p className="cr-price"><span className="new-price">$120.25</span> <span className="old-price">$123.25</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mix bakery col-xxl-3 col-xl-4 col-6 cr-product-box mb-24">
                                        <div className="cr-product-card">
                                            <div className="cr-product-image">
                                                <div className="cr-image-inner zoom-image-hover">
                                                    <img src="assets/img/product/17.jpg" alt="product-1" />
                                                </div>
                                                <div className="cr-side-view">
                                                    <a href="javascript:void(0)" className="wishlist">
                                                        <i className="ri-heart-line" />
                                                    </a>
                                                    <a className="model-oraganic-product" data-bs-toggle="modal" href="#quickview" role="button">
                                                        <i className="ri-eye-line" />
                                                    </a>
                                                </div>
                                                <a className="cr-shopping-bag" href="javascript:void(0)">
                                                    <i className="ri-shopping-bag-line" />
                                                </a>
                                            </div>
                                            <div className="cr-product-details">
                                                <div className="cr-brand">
                                                    <a href="#">Bakery</a>
                                                    <div className="cr-star">
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <p>(5.0)</p>
                                                    </div>
                                                </div>
                                                <a href="#" className="title">Delicious white baked fresh bread
                                                    and toast</a>
                                                <p className="cr-price"><span className="new-price">$20</span> <span className="old-price">$22.10</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Product banner */}
                <section className="section-product-banner padding-b-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="cr-banner-slider swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide" data-aos="fade-up" data-aos-duration={2000}>
                                            <div className="cr-product-banner-image">
                                                <img src="assets/img/product-banner/1.jpg" alt="product-banner" />
                                                <div className="cr-product-banner-contain">
                                                    <h5>Healthy <br /> Bakery Products</h5>
                                                    <p><span className="percent">30%</span> Off <span className="text">on first order</span>
                                                    </p>
                                                    <div className="cr-product-banner-buttons">
                                                        <a href="#" className="cr-button">shop now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" data-aos="fade-up" data-aos-duration={2000}>
                                            <div className="cr-product-banner-image">
                                                <img src="assets/img/product-banner/2.jpg" alt="product-banner" />
                                                <div className="cr-product-banner-contain">
                                                    <h5>Fresh <br />Snacks &amp; Sweets</h5>
                                                    <p><span className="percent">20%</span> Off <span className="text">on first order</span>
                                                    </p>
                                                    <div className="cr-product-banner-buttons">
                                                        <a href="#" className="cr-button">shop now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" data-aos="fade-up" data-aos-duration={2000}>
                                            <div className="cr-product-banner-image">
                                                <img src="assets/img/product-banner/3.jpg" alt="product-banner" />
                                                <div className="cr-product-banner-contain">
                                                    <h5>Fresh &amp; healthy <br /> Organic Fruits</h5>
                                                    <p><span className="percent">35%</span> Off <span className="text">on first order</span>
                                                    </p>
                                                    <div className="cr-product-banner-buttons">
                                                        <a href="#" className="cr-button">shop now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Services */}
                <section className="section-services padding-b-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="cr-services-border" data-aos="fade-up" data-aos-duration={2000}>
                                    <div className="cr-service-slider swiper-container">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="cr-services">
                                                    <div className="cr-services-image">
                                                        <i className="ri-red-packet-line" />
                                                    </div>
                                                    <div className="cr-services-contain">
                                                        <h4>Product Packing</h4>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="cr-services">
                                                    <div className="cr-services-image">
                                                        <i className="ri-customer-service-2-line" />
                                                    </div>
                                                    <div className="cr-services-contain">
                                                        <h4>24X7 Support</h4>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="cr-services">
                                                    <div className="cr-services-image">
                                                        <i className="ri-truck-line" />
                                                    </div>
                                                    <div className="cr-services-contain">
                                                        <h4>Delivery in 5 Days</h4>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="cr-services">
                                                    <div className="cr-services-image">
                                                        <i className="ri-money-dollar-box-line" />
                                                    </div>
                                                    <div className="cr-services-contain">
                                                        <h4>Payment Secure</h4>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Deal */}
                <section className="section-deal padding-b-100">
                    <div className="bg-banner-deal">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="cr-deal-rightside">
                                        <div className="cr-deal-content" data-aos="fade-up" data-aos-duration={2000}>
                                            <span><code>35%</code> OFF</span>
                                            <h4 className="cr-deal-title">Great deal on organic food.</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan
                                                lacus
                                                vel facilisis. </p>
                                            <div id="timer" className="cr-counter">
                                                <div className="cr-counter-inner">
                                                    <h4>
                                                        <span id="days" />
                                                        Days
                                                    </h4>
                                                    <h4>
                                                        <span id="hours" />
                                                        Hrs
                                                    </h4>
                                                    <h4>
                                                        <span id="minutes" />
                                                        Min
                                                    </h4>
                                                    <h4>
                                                        <span id="seconds" />
                                                        Sec
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Popular product */}
                <section className="section-popular margin-b-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-12" data-aos="fade-up" data-aos-duration={2000}>
                                <div className="cr-twocolumns-product">
                                    <div className="slick-slide">
                                        <div className="cr-product-card">
                                            <div className="cr-product-image">
                                                <div className="cr-image-inner zoom-image-hover">
                                                    <img src="assets/img/product/9.jpg" alt="product-1" />
                                                </div>
                                                <div className="cr-side-view">
                                                    <a href="javascript:void(0)" className="wishlist">
                                                        <i className="ri-heart-line" />
                                                    </a>
                                                    <a className="model-oraganic-product" data-bs-toggle="modal" href="#quickview" role="button">
                                                        <i className="ri-eye-line" />
                                                    </a>
                                                </div>
                                                <a className="cr-shopping-bag" href="javascript:void(0)">
                                                    <i className="ri-shopping-bag-line" />
                                                </a>
                                            </div>
                                            <div className="cr-product-details">
                                                <div className="cr-brand">
                                                    <a href="#">Snacks</a>
                                                    <div className="cr-star">
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-line" />
                                                        <p>(4.5)</p>
                                                    </div>
                                                </div>
                                                <a href="#" className="title">Best snakes with hazel nut
                                                    mix pack 200gm</a>
                                                <p className="cr-price"><span className="new-price">$120.25</span> <span className="old-price">$123.25</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slick-slide">
                                        <div className="cr-product-card">
                                            <div className="cr-product-image">
                                                <div className="cr-image-inner zoom-image-hover">
                                                    <img src="assets/img/product/10.jpg" alt="product-1" />
                                                </div>
                                                <div className="cr-side-view">
                                                    <a href="javascript:void(0)" className="wishlist">
                                                        <i className="ri-heart-line" />
                                                    </a>
                                                    <a className="model-oraganic-product" data-bs-toggle="modal" href="#quickview" role="button">
                                                        <i className="ri-eye-line" />
                                                    </a>
                                                </div>
                                                <a className="cr-shopping-bag" href="javascript:void(0)">
                                                    <i className="ri-shopping-bag-line" />
                                                </a>
                                            </div>
                                            <div className="cr-product-details">
                                                <div className="cr-brand">
                                                    <a href="#">Snacks</a>
                                                    <div className="cr-star">
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <p>(5.0)</p>
                                                    </div>
                                                </div>
                                                <a href="#" className="title">Sweet snakes crunchy nut
                                                    mix 250gm
                                                    pack</a>
                                                <p className="cr-price"><span className="new-price">$100.00</span> <span className="old-price">$110.00</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slick-slide">
                                        <div className="cr-product-card">
                                            <div className="cr-product-image">
                                                <div className="cr-image-inner zoom-image-hover">
                                                    <img src="assets/img/product/1.jpg" alt="product-1" />
                                                </div>
                                                <div className="cr-side-view">
                                                    <a href="javascript:void(0)" className="wishlist">
                                                        <i className="ri-heart-line" />
                                                    </a>
                                                    <a className="model-oraganic-product" data-bs-toggle="modal" href="#quickview" role="button">
                                                        <i className="ri-eye-line" />
                                                    </a>
                                                </div>
                                                <a className="cr-shopping-bag" href="javascript:void(0)">
                                                    <i className="ri-shopping-bag-line" />
                                                </a>
                                            </div>
                                            <div className="cr-product-details">
                                                <div className="cr-brand">
                                                    <a href="#">Snacks</a>
                                                    <div className="cr-star">
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-line" />
                                                        <p>(4.5)</p>
                                                    </div>
                                                </div>
                                                <a href="#" className="title">Best snakes with hazel nut
                                                    mix pack 200gm</a>
                                                <p className="cr-price"><span className="new-price">$120.25</span> <span className="old-price">$123.25</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slick-slide">
                                        <div className="cr-product-card">
                                            <div className="cr-product-image">
                                                <div className="cr-image-inner zoom-image-hover">
                                                    <img src="assets/img/product/2.jpg" alt="product-1" />
                                                </div>
                                                <div className="cr-side-view">
                                                    <a href="javascript:void(0)" className="wishlist">
                                                        <i className="ri-heart-line" />
                                                    </a>
                                                    <a className="model-oraganic-product" data-bs-toggle="modal" href="#quickview" role="button">
                                                        <i className="ri-eye-line" />
                                                    </a>
                                                </div>
                                                <a className="cr-shopping-bag" href="javascript:void(0)">
                                                    <i className="ri-shopping-bag-line" />
                                                </a>
                                            </div>
                                            <div className="cr-product-details">
                                                <div className="cr-brand">
                                                    <a href="#">Snacks</a>
                                                    <div className="cr-star">
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <p>(5.0)</p>
                                                    </div>
                                                </div>
                                                <a href="#" className="title">Sweet snakes crunchy nut
                                                    mix 250gm
                                                    pack</a>
                                                <p className="cr-price"><span className="new-price">$100.00</span> <span className="old-price">$110.00</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slick-slide">
                                        <div className="cr-product-card">
                                            <div className="cr-product-image">
                                                <div className="cr-image-inner zoom-image-hover">
                                                    <img src="assets/img/product/3.jpg" alt="product-1" />
                                                </div>
                                                <div className="cr-side-view">
                                                    <a href="javascript:void(0)" className="wishlist">
                                                        <i className="ri-heart-line" />
                                                    </a>
                                                    <a className="model-oraganic-product" data-bs-toggle="modal" href="#quickview" role="button">
                                                        <i className="ri-eye-line" />
                                                    </a>
                                                </div>
                                                <a className="cr-shopping-bag" href="javascript:void(0)">
                                                    <i className="ri-shopping-bag-line" />
                                                </a>
                                            </div>
                                            <div className="cr-product-details">
                                                <div className="cr-brand">
                                                    <a href="#">Snacks</a>
                                                    <div className="cr-star">
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <p>(5.0)</p>
                                                    </div>
                                                </div>
                                                <a href="#" className="title">Sweet snakes crunchy nut
                                                    mix 250gm
                                                    pack</a>
                                                <p className="cr-price"><span className="new-price">$100.00</span> <span className="old-price">$110.00</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-12" data-aos="fade-up" data-aos-duration={2000}>
                                <div className="cr-products-rightbar">
                                    <img src="assets/img/product/products-rightview.jpg" alt="products-rightview" />
                                    <div className="cr-products-rightbar-content">
                                        <h4>Organic &amp; Healthy <br /> Vegetables</h4>
                                        <div className="cr-off">
                                            <span>25% <code>OFF</code></span>
                                        </div>
                                        <div className="rightbar-buttons">
                                            <a href="#" className="cr-button">
                                                shop now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Testimonial */}
                <section className="section-testimonial padding-b-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="mb-30" data-aos="fade-up" data-aos-duration={2000}>
                                    <div className="cr-banner">
                                        <h2>Great Words From People</h2>
                                    </div>
                                    <div className="cr-banner-sub-title">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                            ut labore lacus vel facilisis. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="cr-testimonial-slider swiper-container">
                                    <div className="swiper-wrapper cr-testimonial-pt-50">
                                        <div className="swiper-slide" data-aos="fade-up" data-aos-duration={2000}>
                                            <div className="cr-testimonial">
                                                <div className="cr-testimonial-image">
                                                    <img src="assets/img/testimonial/1.jpg" alt="businessman" />
                                                </div>
                                                <div className="cr-testimonial-inner">
                                                    <span>Co Founder</span>
                                                    <h4 className="title">Stephen Smith</h4>
                                                    <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel
                                                        facilisis.”
                                                    </p>
                                                    <div className="cr-star">
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" data-aos="fade-up" data-aos-duration={2000}>
                                            <div className="cr-testimonial">
                                                <div className="cr-testimonial-image">
                                                    <img src="assets/img/testimonial/2.jpg" alt="businessman" />
                                                </div>
                                                <div className="cr-testimonial-inner">
                                                    <span>Manager</span>
                                                    <h4 className="title">Lorem Robinson</h4>
                                                    <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel
                                                        facilisis.”
                                                    </p>
                                                    <div className="cr-star">
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-line" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" data-aos="fade-up" data-aos-duration={2000}>
                                            <div className="cr-testimonial">
                                                <div className="cr-testimonial-image">
                                                    <img src="assets/img/testimonial/3.jpg" alt="businessman" />
                                                </div>
                                                <div className="cr-testimonial-inner">
                                                    <span>Team Leader</span>
                                                    <h4 className="title">Saddika Alard</h4>
                                                    <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel
                                                        facilisis.”
                                                    </p>
                                                    <div className="cr-star">
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                        <i className="ri-star-fill" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Blog */}
                <section className="section-blog padding-b-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="mb-30" data-aos="fade-up" data-aos-duration={2000}>
                                    <div className="cr-banner">
                                        <h2>Latest News</h2>
                                    </div>
                                    <div className="cr-banner-sub-title">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                            ut labore lacus vel facilisis. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="cr-blog-slider swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide" data-aos="fade-up" data-aos-duration={2000}>
                                            <div className="cr-blog">
                                                <div className="cr-blog-content">
                                                    <span><code>By Admin</code> | <a href="#">Snacks</a></span>
                                                    <h5>Urna pretium elit mauris cursus at elit Vestibulum.</h5>
                                                    <a className="read" href="#">Read More</a>
                                                </div>
                                                <div className="cr-blog-image">
                                                    <img src="assets/img/blog/2.jpg" alt="blog-2" />
                                                    <div className="cr-blog-date">
                                                        <span>
                                                            10
                                                            <code>oct</code>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" data-aos="fade-up" data-aos-duration={2000}>
                                            <div className="cr-blog">
                                                <div className="cr-blog-content">
                                                    <span><code>By Admin</code> | <a href="#">Food</a></span>
                                                    <h5>Best guide to Shopping for organic ingredients.</h5>
                                                    <a className="read" href="#">Read More</a>
                                                </div>
                                                <div className="cr-blog-image">
                                                    <img src="assets/img/blog/1.jpg" alt="blog-1" />
                                                    <div className="cr-blog-date">
                                                        <span>
                                                            09<code>sep</code>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" data-aos="fade-up" data-aos-duration={2000}>
                                            <div className="cr-blog">
                                                <div className="cr-blog-content">
                                                    <span><code>By Admin</code> | <a href="#">Snacks</a></span>
                                                    <h5>Cursus at elit vestibulum urna pretium elit mauris.</h5>
                                                    <a className="read" href="#">Read More</a>
                                                </div>
                                                <div className="cr-blog-image">
                                                    <img src="assets/img/blog/3.jpg" alt="blog-2" />
                                                    <div className="cr-blog-date">
                                                        <span>
                                                            12
                                                            <code>oct</code>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" data-aos="fade-up" data-aos-duration={2000}>
                                            <div className="cr-blog">
                                                <div className="cr-blog-content">
                                                    <span><code>By Admin</code> | <a href="#">Vegetable</a></span>
                                                    <h5>Condimentum Nam enim bestMorbi odio sodales.</h5>
                                                    <a className="read" href="#">Read More</a>
                                                </div>
                                                <div className="cr-blog-image">
                                                    <img src="assets/img/blog/2.jpg" alt="blog-3" />
                                                    <div className="cr-blog-date">
                                                        <span>
                                                            22
                                                            <code>jan</code>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            <Footer />
        </>
    )
}
