import React from 'react'
import './Home.scss'
import LandingSection from './LandingSection'
import Footer from './Footer'
import TrialSection from './TrialSection'
import TrialSection2 from './TrialSection2'
import TrialSection3 from './TrailSection3'
import Downpage from './Downpage'

function Home() {
    return (
        <div className="container">
            <section id="section1">
                <LandingSection/>
            </section>
            <section id="section2">
                <TrialSection/>
            </section>
            <section id="section2">
                <TrialSection2/>
            </section>
            <section id="section3">
                <TrialSection3/>
            </section>
            <section id="section4">
                <Footer/>
            </section>
            {/* <section id="section4">
                <Downpage/>
            </section> */}


        </div>
    )
}

export default Home
