import React from 'react'
import './about.css'
const About = () => {
  return (
    <>
        <section className="about">
            <div className="about_our_story">
                <div className="our_story">
                    <h2>Our Story</h2>
                    <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                    <br />
                    <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                </div>
                <div className="our_story_img">
                    <img src="./public/images/our_story_img.png" alt="" />
                </div>
            </div>

        </section>
        <section className="company_members">
            <div className="member">
                <div className="member_img">
                    <img src="./images/founder_img.png" alt="" />
                </div>
                <div className="member_detail">
                    <h3>Tom Cruise</h3>
                    <p>Founder & Chairman</p>
                </div>
            </div>
            <div className="member">
            <div className="member_img">
                      <img src="./images/pd_img.png" alt="" />
                </div>
                <div className="member_detail">
                    <h3>Will Smith</h3>
                    <p>Product Designer</p>
                </div>
            </div>
            <div className="member">
            <div className="member_img">
                    <img src="./images/md_img.png" alt="" />
                </div>
                <div className="member_detail">
                    <h3>Emma Watson</h3>
                    <p>Managing Director</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default About
