// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from "./Components/Home";
// import AboutPage from './Components/AboutPage';
// import OtherPage from './Components/OtherPage';
// import CropCalendar from './Components/crop';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/crop" element={<CropCalendar />} />
//           <Route path="/other" element={<OtherPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from "./Components/Home";
// import AboutPage from './Components/AboutPage';
// import OtherPage from './Components/OtherPage';
// import CropCalendar from './Components/crop';

// function App() {
//   useEffect(() => {
//     initializeLocalStorage();
//   }, []);

//   const initializeLocalStorage = () => {
//     try {
//       const cachedUser = sessionStorage.getItem('user');
//       if (!cachedUser) {
//         const sessionId = generateSessionId(); // Function to generate a unique session ID
//         const temporaryUser = {
//           id: sessionId,
//           username: 'Guest'
//         };
//         sessionStorage.setItem('user', JSON.stringify(temporaryUser));
        
//         // Initialize browsing history for new session
//         const initialHistory = ["ARJUN LOVES APPLE"];
//         localStorage.setItem('history', JSON.stringify(initialHistory)); 
        
//         console.log("Cached Session ID:", sessionId);
//       } else {
//         const user = JSON.parse(cachedUser);
//         const history = JSON.parse(localStorage.getItem('history'));
//         console.log("Cached Session ID:", user.id);
//         console.log("History:", history);
//       }
//     } catch (error) {
//       console.error("Error initializing localStorage:", error);
//     }
//   };

//   const generateSessionId = () => {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/crop" element={<CropCalendar />} />
//           <Route path="/other" element={<OtherPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from "./Components/Home";
// import AboutPage from './Components/AboutPage';
// import OtherPage from './Components/OtherPage';
// import CropCalendar from './Components/crop';
// import ImageUploader from './Components/ImageUploader'; // Import the ImageUploader component

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/crop" element={<CropCalendar />} />
//           <Route path="/other" element={<OtherPage />} />
//           {/* Add a route for the ImageUploader component */}
//           <Route path="/upload" element={<ImageUploader />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from "./Components/Home";
// import AboutPage from './Components/AboutPage';
// import OtherPage from './Components/OtherPage';
// import CropCalendar from './Components/crop';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/crop" element={<CropCalendar />} />
//           <Route path="/other" element={<OtherPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from "./Components/Home";
// import AboutPage from './Components/AboutPage';
// import OtherPage from './Components/OtherPage';
// import CropCalendar from './Components/crop';

// function App() {
//   useEffect(() => {
//     initializeLocalStorage();
//   }, []);

//   const initializeLocalStorage = () => {
//     try {
//       const cachedUser = sessionStorage.getItem('user');
//       if (!cachedUser) {
//         const sessionId = generateSessionId(); // Function to generate a unique session ID
//         const temporaryUser = {
//           id: sessionId,
//           username: 'Guest'
//         };
//         sessionStorage.setItem('user', JSON.stringify(temporaryUser));
        
//         // Initialize browsing history for new session
//         const initialHistory = ["ARJUN LOVES APPLE"];
//         localStorage.setItem('history', JSON.stringify(initialHistory)); 
        
//         console.log("Cached Session ID:", sessionId);
//       } else {
//         const user = JSON.parse(cachedUser);
//         const history = JSON.parse(localStorage.getItem('history'));
//         console.log("Cached Session ID:", user.id);
//         console.log("History:", history);
//       }
//     } catch (error) {
//       console.error("Error initializing localStorage:", error);
//     }
//   };

//   const generateSessionId = () => {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/crop" element={<CropCalendar />} />
//           <Route path="/other" element={<OtherPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from "./Components/Home";
// import AboutPage from './Components/AboutPage';
// import OtherPage from './Components/OtherPage';
// import CropCalendar from './Components/crop';
// import ImageUploader from './Components/ImageUploader'; // Import the ImageUploader component

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/crop" element={<CropCalendar />} />
//           <Route path="/other" element={<OtherPage />} />
//           {/* Add a route for the ImageUploader component */}
//           <Route path="/upload" element={<ImageUploader />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import AboutPage from './Components/AboutPage';
import OtherPage from './Components/OtherPage';
import CropCalendar from './Components/crop';
import ImageUploader from './Components/ImageUploader'; 
import HTML from './templates/home';
 


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/" element={<AboutPage />} />
          <Route path="/crop" element={<CropCalendar />} />
          <Route path="/other" element={<OtherPage />} />
          <Route path="/home" element={<HTML />} />
          {/* Add a route for the ImageUploader component */}
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;