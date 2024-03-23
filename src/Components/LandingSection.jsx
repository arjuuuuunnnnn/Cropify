// import React from 'react'
// import './LandingSection.scss'
// import { Link } from 'react-router-dom';

// function LandingSection() {
//     return (
//         <div className="section landingSection">
//             <h1>Agricultural</h1>
//             <h2>Crop and Fertilizer</h2>
//             <h2>Recommendation.</h2>
//             <p>Using Data Science and Machine Learning Approaches</p>


            
//         </div>

        

        
//     )
// }

// export default LandingSection

import React from 'react'
import './LandingSection.scss'
import { Link } from 'react-router-dom';

function LandingSection() {
    return (
        <div className="section landingSection">
            <div className="button-container">
                <Link to="/">Home</Link>
                <Link to="/crop">Try it out</Link>
                <Link to="/home">Leaf</Link>
                <Link to="/about">About</Link>

            </div>

            <h1>Cropify</h1>
            <h2>Crop and Fertilizer</h2>
            <h2>Recommendation.</h2>
            <p>Using Data Science and Machine Learning Approaches</p>
        </div>
    )
}

export default LandingSection

