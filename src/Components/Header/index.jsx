import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="top-header">
                                <NavLink href="/" className="cr-logo">
                                    <img src="assets/img/logo/logo.png" alt="logo" className="logo" />
                                    <img src="assets/img/logo/dark-logo.png" alt="logo" className="dark-logo" />
                                </NavLink>
                                <div className="cr-right-bar">
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle cr-right-bar-item" href="javascript:void(0)">
                                                <i className="ri-user-3-line" />
                                                <span>Account</span>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <NavLink className="dropdown-item" to="/Register">Register</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink className="dropdown-item" to="/">Checkout</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink className="dropdown-item" to="/login">Login</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <a href="#" className="cr-right-bar-item">
                                        <i className="ri-heart-3-line" />
                                        <span>Wishlist</span>
                                    </a>
                                    <a href="#" className="cr-right-bar-item Shopping-toggle">
                                        <i className="ri-shopping-cart-line" />
                                        <span>Cart</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cr-fix" id="cr-main-menu-desk">
                    <div className="container">
                        <div className="cr-menu-list">
                            <div className="cr-category-icon-block">
                                <div className="cr-category-menu">
                                    <div className="cr-category-toggle">
                                        <i className="ri-menu-2-line" />
                                    </div>
                                </div>
                                <div className="cr-cat-dropdown">
                                    <div className="cr-cat-block">
                                        <div className="cr-cat-tab">
                                            <div className="cr-tab-list nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                                                    Dairy &amp; Bakery</button>
                                                <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false" tabIndex={-1}>
                                                    Fruits &amp; Vegetable</button>
                                                <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false" tabIndex={-1}>
                                                    Snack &amp; Spice</button>
                                                <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false" tabIndex={-1}>
                                                    Juice &amp; Drinks </button>
                                                <a className="nav-link" href="#">
                                                    View All </a>
                                            </div>
                                            <div className="tab-content" id="v-pills-tabContent">
                                                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                    <div className="tab-list row">
                                                        <div className="col">
                                                            <h6 className="cr-col-title">Dairy</h6>
                                                            <ul className="cat-list">
                                                                <li><a href="#">Milk</a></li>
                                                                <li><a href="#">Ice cream</a>
                                                                </li>
                                                                <li><a href="#">Cheese</a></li>
                                                                <li><a href="#">Frozen
                                                                    custard</a>
                                                                </li>
                                                                <li><a href="#">Frozen
                                                                    yogurt</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col">
                                                            <h6 className="cr-col-title">Bakery</h6>
                                                            <ul className="cat-list">
                                                                <li><a href="#">Cake and
                                                                    Pastry</a>
                                                                </li>
                                                                <li><a href="#">Rusk Toast</a>
                                                                </li>
                                                                <li><a href="#">Bread &amp;
                                                                    Buns</a>
                                                                </li>
                                                                <li><a href="#">Chocolate
                                                                    Brownie</a>
                                                                </li>
                                                                <li><a href="#">Cream Roll</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                                    <div className="tab-list row">
                                                        <div className="col">
                                                            <h6 className="cr-col-title">Fruits</h6>
                                                            <ul className="cat-list">
                                                                <li><a href="#">Cauliflower</a>
                                                                </li>
                                                                <li><a href="#">Bell
                                                                    Peppers</a></li>
                                                                <li><a href="#">Broccoli</a>
                                                                </li>
                                                                <li><a href="#">Cabbage</a>
                                                                </li>
                                                                <li><a href="#">Tomato</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col">
                                                            <h6 className="cr-col-title">Vegetable</h6>
                                                            <ul className="cat-list">
                                                                <li><a href="#">Cauliflower</a>
                                                                </li>
                                                                <li><a href="#">Bell
                                                                    Peppers</a></li>
                                                                <li><a href="#">Broccoli</a>
                                                                </li>
                                                                <li><a href="#">Cabbage</a>
                                                                </li>
                                                                <li><a href="#">Tomato</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                                    <div className="tab-list row">
                                                        <div className="col">
                                                            <h6 className="cr-col-title">Snacks</h6>
                                                            <ul className="cat-list">
                                                                <li><a href="#">French
                                                                    fries</a></li>
                                                                <li><a href="#">potato
                                                                    chips</a></li>
                                                                <li><a href="#">Biscuits &amp;
                                                                    Cookies</a></li>
                                                                <li><a href="#">Popcorn</a>
                                                                </li>
                                                                <li><a href="#">Rice Cakes</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col">
                                                            <h6 className="cr-col-title">Spice</h6>
                                                            <ul className="cat-list">
                                                                <li><a href="#">Cinnamon
                                                                    Powder</a>
                                                                </li>
                                                                <li><a href="#">Cumin
                                                                    Powder</a></li>
                                                                <li><a href="#">Fenugreek
                                                                    Powder</a>
                                                                </li>
                                                                <li><a href="#">Pepper
                                                                    Powder</a>
                                                                </li>
                                                                <li><a href="#">Long Pepper</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                                    <div className="tab-list row">
                                                        <div className="col">
                                                            <h6 className="cr-col-title">Juice</h6>
                                                            <ul className="cat-list">
                                                                <li><a href="#">Mango Juice</a>
                                                                </li>
                                                                <li><a href="#">Coconut
                                                                    Water</a>
                                                                </li>
                                                                <li><a href="#">Tetra Pack</a>
                                                                </li>
                                                                <li><a href="#">Apple
                                                                    Juices</a></li>
                                                                <li><a href="#">Lychee
                                                                    Juice</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col">
                                                            <h6 className="cr-col-title">soft drink</h6>
                                                            <ul className="cat-list">
                                                                <li><a href="#">Breizh Cola</a>
                                                                </li>
                                                                <li><a href="#">Green Cola</a>
                                                                </li>
                                                                <li><a href="#">Jolt Cola</a>
                                                                </li>
                                                                <li><a href="#">Mecca Cola</a>
                                                                </li>
                                                                <li><a href="#">Topsia Cola</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <nav className="navbar navbar-expand-lg">
                                <a href="javascript:void(0)" className="navbar-toggler shadow-none">
                                    <i className="ri-menu-3-line" />
                                </a>
                                <div className="cr-header-buttons">
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link" href="javascript:void(0)">
                                                <i className="ri-user-3-line" />
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <NavLink className="dropdown-item" to="/Register">Register</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink className="dropdown-item" to="/Checkout">Checkout</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink className="dropdown-item" to="/login">Login</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <a href="#" className="cr-right-bar-item">
                                        <i className="ri-heart-line" />
                                    </a>
                                    <a href="javascript:void(0)" className="cr-right-bar-item Shopping-toggle">
                                        <i className="ri-shopping-cart-line" />
                                    </a>
                                </div>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/">
                                                Home
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/Shop">
                                                Shop
                                            </NavLink>
                                        </li>
                                        <li className="nav-item ">
                                            <NavLink className="nav-link" to="/Products">
                                                Products
                                            </NavLink>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/Blog">
                                                Blog
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/Contact">
                                                Contact
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <div className="cr-calling">
                                <i className="ri-phone-line" />
                                <a href="javascript:void(0)">+123 ( 456 ) ( 7890 )</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
