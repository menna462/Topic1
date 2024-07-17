/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

function Bodycontact() {
  return (
    <div>
       <section className="section-padding section-bg">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12 col-12">
                            <h3 className="mb-4 pb-2">We'd love to hear from you</h3>
                        </div>

                        <div className="col-lg-6 col-12">
                            <form action="#" method="post" className="custom-form contact-form" role="form">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-floating">
                                            <input type="text" name="name" id="name" className="form-control" placeholder="Name" required=""/>
                                            
                                            <label for="floatingInput">Name</label>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-12"> 
                                        <div className="form-floating">
                                            <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email address" required=""/>
                                            
                                            <label for="floatingInput">Email address</label>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-12">
                                        <div className="form-floating">
                                            <input type="text" name="subject" id="name" className="form-control" placeholder="Name" required=""/>
                                            
                                            <label for="floatingInput">Subject</label>
                                        </div>

                                        <div className="form-floating">
                                            <textarea className="form-control" id="message" name="message" placeholder="Tell me about the project"></textarea>
                                            
                                            <label for="floatingTextarea">Tell me about the project</label>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-12 ms-auto">
                                        <button type="submit" className="form-control">Submit</button>
                                    </div>

                                </div>
                            </form>
                        </div>

                        <div className="col-lg-5 col-12 mx-auto mt-5 mt-lg-0">
                            <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.065641062665!2d-122.4230416990949!3d37.80335401520422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858127459fabad%3A0x808ba520e5e9edb7!2sFrancisco%20Park!5e1!3m2!1sen!2sth!4v1684340239744!5m2!1sen!2sth" width="100%" height="250" 
                            style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                            <h5 className="mt-4 mb-2">Topic Listing Center</h5>

                            <p>Bay St &amp;, Larkin St, San Francisco, CA 94109, United States</p>
                        </div>

                    </div>
                </div>
            </section>
    </div>
  )
}

export default Bodycontact
