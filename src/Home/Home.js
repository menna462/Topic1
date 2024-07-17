/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Home() {
  return (
    <div>
           <section className="hero-section d-flex justify-content-center align-items-center" id="section_1">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8 col-12 mx-auto">
                            <h1 className="text-white text-center">Discover. Learn. Enjoy</h1>

                            <h6 className="text-center">platform for creatives around the world</h6>

                            <form method="get" className="custom-form mt-4 pt-2 mb-lg-0 mb-5" role="search">
                                <div className="input-group input-group-lg">
                                    <span className="input-group-text bi-search" id="basic-addon1">
                                        
                                    </span>

                                    <input name="keyword" type="search" className="form-control" id="keyword" placeholder="Design, Code, Marketing, Finance ..." aria-label="Search"/>

                                    <button type="submit" className="form-control">Search</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>


            <section className="featured-section">
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-lg-4 col-12 mb-4 mb-lg-0">
                            <div className="custom-block bg-white shadow-lg">
                                <a href="/TopicsDetails">
                                    <div className="d-flex">
                                        <div>
                                            <h5 className="mb-2">Web Design</h5>

                                            <p className="mb-0">When you search for free CSS templates, you will notice that TemplateMo is one of the best websites.</p>
                                        </div>

                                        <span className="badge bg-design rounded-pill ms-auto">14</span>
                                    </div>

                                    <img src="images/topics/undraw_Remote_design_team_re_urdx.png" className="custom-block-image img-fluid" alt=""/>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12">
                            <div className="custom-block custom-block-overlay">
                                <div className="d-flex flex-column h-100">
                                    <img src="images/businesswoman-using-tablet-analysis.jpg" className="custom-block-image img-fluid" alt=""/>

                                    <div className="custom-block-overlay-text d-flex">
                                        <div>
                                            <h5 className="text-white mb-2">Finance</h5>

                                            <p className="text-white">Topic Listing Template includes homepage, listing page, detail page, and contact page. You can feel free to edit and adapt for your CMS requirements.</p>

                                            <a href="/TopicsDetails" className="btn custom-btn mt-2 mt-lg-3">Learn More</a>
                                        </div>

                                        <span className="badge bg-finance rounded-pill ms-auto">25</span>
                                    </div>

                                    <div className="social-share d-flex">
                                        <p className="text-white me-4">Share:</p>

                                        <ul className="social-icon">
                                            <li className="social-icon-item">
                                                <a href="#" className="social-icon-link bi-twitter"></a>
                                            </li>

                                            <li className="social-icon-item">
                                                <a href="#" className="social-icon-link bi-facebook"></a>
                                            </li>

                                            <li className="social-icon-item">
                                                <a href="#" className="social-icon-link bi-pinterest"></a>
                                            </li>
                                        </ul>

                                        <a href="#" className="custom-icon bi-bookmark ms-auto"></a>
                                    </div>

                                    <div className="section-overlay"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
    </div>
  )
}

export default Home
