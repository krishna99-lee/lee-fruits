import React from 'react'

export default function MobileMenu() {
    return (
        <><div>
            <div className="cr-sidebar-overlay" />
            <div id="cr_mobile_menu" className="cr-side-cart cr-mobile-menu">
                <div className="cr-menu-title">
                    <span className="menu-title">My Menu</span>
                    <button type="button" className="cr-close">×</button>
                </div>
                <div className="cr-menu-inner">
                    <div className="cr-menu-content">
                        <ul>
                            <li className="dropdown drop-list">
                                <a href="#">Home</a>
                            </li>
                            <li className="dropdown drop-list">
                                <a href="#">Shop</a>
                            </li>
                            <li className="dropdown drop-list">
                                <a href="#">Products</a>
                            </li>
                            <li className="dropdown drop-list">
                                <a href="#">Blog</a>
                            </li>
                            <li className="dropdown drop-list">
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}
