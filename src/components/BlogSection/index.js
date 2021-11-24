import React from 'react'
import blog1 from '../../images/blog/1.jpg'
import blog2 from '../../images/blog/2.jpg'
import blog3 from '../../images/blog/3.jpg'
import blog4 from '../../images/blog/7.jpg'
import {Link} from 'react-router-dom'

import './style.css'

const BlogSection = (props) => {
    
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <section className="blog-section section-padding">
            <div className="container">
                <div className="col-l2">
                    <div className="section-title text-center">
                        <span>From Our Blog</span>
                        <h2>Latest News</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="blog-grids clearfix">
                            <div className="grid">
                                <div className="entry-media">
                                    <img src={blog1} alt="" />
                                </div>
                                <div className="details">
                                    <h3><Link onClick={ClickHandler} to="/blog-single">Best and less published their supplier lists.</Link></h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                    <ul className="entry-meta">
                                        <li>
                                            <img src={blog4} alt="" />
                                            By <Link onClick={ClickHandler} to="/blog-single">Lily Anne</Link>
                                        </li>
                                        <li>Feb 12,2021</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="entry-media">
                                     <img src={blog2} alt="" />
                                </div>
                                <div className="details">
                                    <h3><Link onClick={ClickHandler} to="/blog-single">Best and less published their supplier lists.</Link></h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                    <ul className="entry-meta">
                                        <li>
                                            <img src={blog4} alt="" />
                                            By <Link onClick={ClickHandler} to="/blog-single">Lily Anne</Link>
                                        </li>
                                        <li>Feb 12,2021</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="entry-media">
                                    <img src={blog3} alt="" />
                                </div>
                                <div className="details">
                                    <h3><Link onClick={ClickHandler} to="/blog-single">Best and less published their supplier lists.</Link></h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                    <ul className="entry-meta">
                                        <li>
                                            <img src={blog4} alt="" />
                                            By <Link onClick={ClickHandler} to="/blog-single">Lily Anne</Link>
                                        </li>
                                        <li>Feb 12,2021</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogSection;