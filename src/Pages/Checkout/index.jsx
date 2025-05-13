import React from 'react'
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import MobileMenu from '../../Components/MobileMenu'
import { NavLink } from 'react-router-dom';

export default function Checkout() {
  return (
    <>
      <Header />
      <MobileMenu />
      <div>
        {/* Loader */}
        {/* <div id="cr-overlay">
          <span className="loader" />
        </div> */}
        {/* Header */}

        {/* Mobile menu */}
        <div className="cr-sidebar-overlay" />
        <div id="cr_mobile_menu" className="cr-side-cart cr-mobile-menu">
          <div className="cr-menu-title">
            <span className="menu-title">My Menu</span>
            <button type="button" className="cr-close">×</button>
          </div>

        </div>
        {/* Breadcrumb */}
        <section className="section-breadcrumb">
          <div className="cr-breadcrumb-image">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="cr-breadcrumb-title">
                    <h2>Checkout</h2>
                    <span> <NavLink to="/">Home</NavLink> - Checkout</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Checkout section */}
        <section className="cr-checkout-section padding-tb-100">
          <div className="container">
            <div className="row">
              {/* Sidebar Area Start */}
              <div className="cr-checkout-rightside col-lg-4 col-md-12">
                <div className="cr-sidebar-wrap">
                  {/* Sidebar Summary Block */}
                  <div className="cr-sidebar-block">
                    <div className="cr-sb-title">
                      <h3 className="cr-sidebar-title">Summary</h3>
                    </div>
                    <div className="cr-sb-block-content">
                      <div className="cr-checkout-summary">
                        <div>
                          <span className="text-left">Sub-Total</span>
                          <span className="text-right">$80.00</span>
                        </div>
                        <div>
                          <span className="text-left">Delivery Charges</span>
                          <span className="text-right">$80.00</span>
                        </div>
                        <div className="cr-checkout-summary-total">
                          <span className="text-left">Total Amount</span>
                          <span className="text-right">$80.00</span>
                        </div>
                      </div>
                      <div className="cr-checkout-pro">
                        <div className="col-sm-12 mb-6">
                          <div className="cr-product-inner">
                            <div className="cr-pro-image-outer">
                              <div className="cr-pro-image">
                                <a href="#" className="image">
                                  <img className="main-image" src="assets/img/product/10.jpg" alt="Product" />
                                </a>
                              </div>
                            </div>
                            <div className="cr-pro-content cr-product-details">
                              <h5 className="cr-pro-title"><a href="#">Dates Value
                                Pack Pouch</a></h5>
                              <div className="cr-pro-rating">
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-line" />
                              </div>
                              <p className="cr-price"><span className="new-price">$120.25</span> <span className="old-price">$123.25</span></p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12 mb-0">
                          <div className="cr-product-inner">
                            <div className="cr-pro-image-outer">
                              <div className="cr-pro-image">
                                <a href="@" className="image">
                                  <img className="main-image" src="assets/img/product/12.jpg" alt="Product" />
                                </a>
                              </div>
                            </div>
                            <div className="cr-pro-content cr-product-details">
                              <h5 className="cr-pro-title"><a href="#">Smoked
                                Honey Spiced Nuts</a></h5>
                              <div className="cr-pro-rating">
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-line" />
                              </div>
                              <p className="cr-price"><span className="new-price">$120.25</span> <span className="old-price">$123.25</span></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Sidebar Summary Block */}
                </div>
                <div className="cr-sidebar-wrap cr-checkout-del-wrap">
                  {/* Sidebar Summary Block */}
                  <div className="cr-sidebar-block">
                    <div className="cr-sb-title">
                      <h3 className="cr-sidebar-title">Delivery Method</h3>
                    </div>
                    <div className="cr-sb-block-content">
                      <div className="cr-checkout-del">
                        <div className="cr-del-desc">Please select the preferred shipping method to use on this
                          order.</div>
                        <form action="#">
                          <span className="cr-del-option">
                            <span>
                              <span className="cr-del-opt-head">Free Shipping</span>
                              <input type="radio" id="del1" name="radio-group" defaultChecked />
                              <label htmlFor="del1">Rate - $0 .00</label>
                            </span>
                            <span>
                              <span className="cr-del-opt-head">Flat Rate</span>
                              <input type="radio" id="del2" name="radio-group" />
                              <label htmlFor="del2">Rate - $5.00</label>
                            </span>
                          </span>
                          <span className="cr-del-commemt">
                            <span className="cr-del-opt-head">Add Comments About Your Order</span>
                            <textarea name="your-commemt" placeholder="Comments" defaultValue={""} />
                          </span>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* Sidebar Summary Block */}
                </div>
                <div className="cr-sidebar-wrap cr-checkout-pay-wrap">
                  {/* Sidebar Payment Block */}
                  <div className="cr-sidebar-block">
                    <div className="cr-sb-title">
                      <h3 className="cr-sidebar-title">Payment Method</h3>
                    </div>
                    <div className="cr-sb-block-content">
                      <div className="cr-checkout-pay">
                        <div className="cr-pay-desc">Please select the preferred payment method to use on this
                          order.</div>
                        <form action="#" className="payment-options">
                          <span className="cr-pay-option">
                            <span>
                              <input type="radio" id="pay1" name="radio-group" defaultChecked />
                              <label htmlFor="pay1">Cash On Delivery</label>
                            </span>
                          </span>
                          <span className="cr-pay-option">
                            <span>
                              <input type="radio" id="pay2" name="radio-group" />
                              <label htmlFor="pay2">UPI</label>
                            </span>
                          </span>
                          <span className="cr-pay-option">
                            <span>
                              <input type="radio" id="pay3" name="radio-group" />
                              <label htmlFor="pay3">Bank Transfer</label>
                            </span>
                          </span>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* Sidebar Payment Block */}
                </div>
                <div className="cr-sidebar-wrap cr-check-pay-img-wrap">
                  {/* Sidebar Payment Block */}
                  <div className="cr-sidebar-block">
                    <div className="cr-sb-title">
                      <h3 className="cr-sidebar-title">Payment Method</h3>
                    </div>
                    <div className="cr-sb-block-content">
                      <div className="cr-check-pay-img-inner">
                        <div className="cr-check-pay-img">
                          <img src="assets/img/banner/payment.png" alt="payment" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Sidebar Payment Block */}
                </div>
              </div>
              <div className="cr-checkout-leftside col-lg-8 col-md-12 m-t-991">
                {/* checkout content Start */}
                <div className="cr-checkout-content">
                  <div className="cr-checkout-inner">
                    <div className="cr-checkout-wrap mb-30">
                      <div className="cr-checkout-block cr-check-new">
                        <h3 className="cr-checkout-title">New Customer</h3>
                        <div className="cr-check-block-content">
                          <div className="cr-check-subtitle">Checkout Options</div>
                          <form action="#">
                            <span className="cr-new-option">
                              <span>
                                <input type="radio" id="account1" name="radio-group" defaultChecked />
                                <label htmlFor="account1">Register Account</label>
                              </span>
                              <span>
                                <input type="radio" id="account2" name="radio-group" />
                                <label htmlFor="account2">Guest Account</label>
                              </span>
                            </span>
                          </form>
                          <div className="cr-new-desc">By creating an account you will be able to shop faster,
                            be up to date on an order's status, and keep track of the orders you have
                            previously made.
                          </div>
                          <span>
                            <button className="cr-button mt-30" type="submit">Continue</button>
                          </span>
                        </div>
                      </div>
                      <div className="cr-checkout-block cr-check-login">
                        <h3 className="cr-checkout-title">Returning Customer</h3>
                        <div className="cr-check-login-form">
                          <form action="#" method="post">
                            <span className="cr-check-login-wrap">
                              <label>Email Address</label>
                              <input type="text" name="name" placeholder="Enter your email address" required />
                            </span>
                            <span className="cr-check-login-wrap">
                              <label>Password</label>
                              <input type="password" name="password" placeholder="Enter your password" required />
                            </span>
                            <span className="cr-check-login-wrap cr-check-login-btn">
                              <button className="cr-button mr-15" type="submit">Login</button>
                              <a className="cr-check-login-fp" href="#">Forgot Password?</a>
                            </span>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="cr-checkout-wrap">
                      <div className="cr-checkout-block cr-check-bill">
                        <h3 className="cr-checkout-title">Billing Details</h3>
                        <div className="cr-bl-block-content">
                          <div className="cr-check-subtitle">Checkout Options</div>
                          <span className="cr-bill-option">
                            <span>
                              <input type="radio" id="bill1" name="radio-group" />
                              <label htmlFor="bill1">I want to use an existing address</label>
                            </span>
                            <span>
                              <input type="radio" id="bill2" name="radio-group" defaultChecked />
                              <label htmlFor="bill2">I want to use new address</label>
                            </span>
                          </span>
                          <div className="cr-check-bill-form mb-minus-24">
                            <form action="#" method="post">
                              <span className="cr-bill-wrap cr-bill-half">
                                <label>First Name*</label>
                                <input type="text" name="firstname" placeholder="Enter your first name" required />
                              </span>
                              <span className="cr-bill-wrap cr-bill-half">
                                <label>Last Name*</label>
                                <input type="text" name="lastname" placeholder="Enter your last name" required />
                              </span>
                              <span className="cr-bill-wrap">
                                <label>Address</label>
                                <input type="text" name="address" placeholder="Address Line 1" />
                              </span>
                              <span className="cr-bill-wrap cr-bill-half">
                                <label>City *</label>
                                <span className="cr-bl-select-inner">
                                  <select name="cr_select_city" id="cr-select-city" className="cr-bill-select">
                                    <option selected disabled>City</option>
                                    <option value={1}>City 1</option>
                                    <option value={2}>City 2</option>
                                    <option value={3}>City 3</option>
                                    <option value={4}>City 4</option>
                                    <option value={5}>City 5</option>
                                  </select>
                                </span>
                              </span>
                              <span className="cr-bill-wrap cr-bill-half">
                                <label>Post Code</label>
                                <input type="text" name="postalcode" placeholder="Post Code" />
                              </span>
                              <span className="cr-bill-wrap cr-bill-half">
                                <label>Country *</label>
                                <span className="cr-bl-select-inner">
                                  <select name="cr_select_country" id="cr-select-country" className="cr-bill-select">
                                    <option selected disabled>Country</option>
                                    <option value={1}>Country 1</option>
                                    <option value={2}>Country 2</option>
                                    <option value={3}>Country 3</option>
                                    <option value={4}>Country 4</option>
                                    <option value={5}>Country 5</option>
                                  </select>
                                </span>
                              </span>
                              <span className="cr-bill-wrap cr-bill-half">
                                <label>Region State</label>
                                <span className="cr-bl-select-inner">
                                  <select name="cr_select_state" id="cr-select-state" className="cr-bill-select">
                                    <option selected disabled>Region/State</option>
                                    <option value={1}>Region/State 1</option>
                                    <option value={2}>Region/State 2</option>
                                    <option value={3}>Region/State 3</option>
                                    <option value={4}>Region/State 4</option>
                                    <option value={5}>Region/State 5</option>
                                  </select>
                                </span>
                              </span>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="cr-check-order-btn">
                      <a className="cr-button mt-30" href="#">Place Order</a>
                    </span>
                  </div>
                </div>
                {/*cart content End */}
              </div>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </>
  )
}
