import React from 'react'
import Logo from '../../images/logo.png'
import {Link}  from 'react-router-dom'
import MobileMenu from '../../components/MobileMenu'
import './style.css'

const Header = (props) => {
    // const SubmitHandler = (e) =>{
    //     e.preventDefault()
    //  }

     const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


    return(	
	<div className={`middle-header ${props.ms2}`}>
        
        <div className="header-style-3">
            <div className="container">
                <div className="header-content">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                        <div className="logo">
                            <Link onClick={ClickHandler} to="/home" title=""><img src={Logo} alt=""/></Link>
                        </div>
                    </div>
                    <div className="col-lg-8 d-lg-block d-none">
                        <nav>
                            <ul>
                                <li><Link onClick={ClickHandler}  to="/volunteer" title="">Become a volunteer</Link>
                                </li>
                                <li><Link onClick={ClickHandler} to="/donate" title="">Donate </Link></li>
                                <li><Link onClick={ClickHandler} to="/contact" title="">Contact </Link>
                                </li>
                                <li><Link onClick={ClickHandler} to="/gallery" title="">Images</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-2 col-sm-2 col-2">
                        <MobileMenu/>
                    </div>
                </div>
                
                    <div className="clearfix"></div>
                </div>
                
            </div>
        </div>
    </div>
    )
}

export default Header;