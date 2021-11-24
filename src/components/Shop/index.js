import React from 'react'
import {Link} from 'react-router-dom'

import sp1 from '../../images/shop/img-1.jpg'
import sp2 from '../../images/shop/img-2.jpg'
import sp3 from '../../images/shop/img-3.jpg'
import sp4 from '../../images/shop/img-4.jpg'
import sp5 from '../../images/shop/img-5.jpg'
import sp6 from '../../images/shop/img-6.jpg'

import './style.css'

const Shop = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

     const Shop = [
         {
           shopImg:sp1,
           price:"$25.00",
           off:"$20.00",
           title:"Ninja Hoodi",
           btn:"Add to cart",
           link:"/shop-single",
         },
         {
           shopImg:sp2,
           price:"$25.00",
           off:"$20.00",
           title:"Wow Ninja T-shirt",
           btn:"Add to cart",
           link:"/shop-single",
         },
         {
           shopImg:sp3,
           price:"$25.00",
           off:"$20.00",
           title:"Black Ninja Hoodi",
           btn:"Add to cart",
           link:"/shop-single",
         },
         {
           shopImg:sp4,
           price:"$25.00",
           off:"$20.00",
           title:"Red Ninja Hoodi",
           btn:"Add to cart",
           link:"/shop-single",
         },
         {
           shopImg:sp5,
           price:"$25.00",
           off:"$20.00",
           title:"Black Evil Hoodi",
           btn:"Add to cart",
           link:"/shop-single",
         },
         {
           shopImg:sp6,
           price:"$25.00",
           off:"$20.00",
           title:"Blue Hoodi",
           btn:"Add to cart",
           link:"/shop-single",
         },
     ]


    return(
        <section className="shop-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="shop-grids clearfix">
                            {Shop.map( (item, en) => (
                                <div className="grid" key={en}>
                                    <div className="img-holder">
                                        <img src={item.shopImg} alt="" />
                                    </div>
                                    <div className="details">
                                        <h3><Link onClick={ClickHandler} to={item.link}>{item.title}</Link></h3>
                                        <del>{item.off}</del><span>{item.price}</span>
                                        <div className="add-to-cart">
                                            <Link onClick={ClickHandler} to={item.link}>{item.btn} <i className="ti-shopping-cart"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="pagination-wrapper pagination-wrapper-center">
                            <ul className="pg-pagination">
                                <li>
                                    <Link to="/shop" aria-label="Previous">
                                        <i className="fi ti-angle-left"></i>
                                    </Link>
                                </li>
                                <li className="active"><Link to="/shop">1</Link></li>
                                <li><Link to="/shop">2</Link></li>
                                <li><Link to="/shop">3</Link></li>
                                <li>
                                    <Link to="/shop" aria-label="Next">
                                        <i className="fi ti-angle-right"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>                        
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Shop;