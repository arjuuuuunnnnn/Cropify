// import React from 'react';

// function HTML() {
//   return (
//     <>
//       <style>
//         {`
//           body {
//             overflow-x: hidden;
//           }
//           @media only screen and (max-width: 830px) {
//             .laptop {
//               display: none;
//             }
//           }
//           @media (min-width:830px) and (max-width: 1536px) {
//             .mobile {
//               display: none;
//             }
//           }
//         `}
//       </style>
      
//       <div className='mobile p-5'>
//         <div className="row mb-5 text-center text-white">
//           <div className="col-lg-10 mx-auto">
//             {/* Content commented out */}
//           </div>
//         </div>
//       </div>

//       <div className="row mb-5 text-center text-white laptop">
//         <div className="col-lg-10 mx-auto">
//           <h1 className="display-4" style={{ paddingTop: '2%', fontWeight: 400, color: 'rgb(255, 255, 255)' }}><b>🍁Plant Disease Detection🍁</b></h1>
//           <p className="lead" style={{ fontWeight: 500, color: 'white' }}>This website will help you detect diseases from the following fruits and veggies</p>
//         </div>
//       </div>

//       <center className="laptop">
//         <a href="/index.html">
//           <button className="bttn-pill bttn-lg btn-success"><b style={{ color: 'black' }}>Start Predicting</b></button>
//         </a>
//       </center>

//       <div className="row p-5 laptop">
//         {/* Fruit/Vegetable Structure */}
//         <div className="col">
//           <div className="p-3 bg-white shadow rounded-lg" style={{ width: '90%', height: '92%' }}>
//             <img src="static/uploads/These Filling High-Protein Smoothies That Will Instantly Curb Your Appetite.jpg" width="250" height="250" />
//             <center><p className="lead" style={{ fontWeight: 500, color: 'black' }}>Apple</p></center>
//           </div>
//         </div>
//         {/* Repeat this structure for each fruit/vegetable */}
//       </div>

//       {/* Additional fruit/vegetable structures can be added here */}
      
//     </>
//   );
// }

// export default HTML;

// // import React from 'react';
// // import { Link } from 'react-router-dom'; // Import Link for navigation
// //  // Import your SCSS file for styling

// // function HTML() {
// //   // Sample data for team members
// //   const teamMembers = [
// //     { name: 'John Doe', github: '' },
// //     { name: 'Jane Smith', github: '' },
// //     { name: 'Alice Johnson', github: '' },
// //     { name: 'Bob Williams', github: '' }
// //   ];

// //   return (
// //     <div className="about-page-container">
// //       <div className="about-content">
// //         <h1>Meet Our Team</h1>
// //         <div className="team-members">
          
// //           <ul>
// //             {teamMembers.map((member, index) => (
// //               <li key={index}>
// //                 <a href={member.github} target="_blank" rel="noopener noreferrer">{member.name}</a>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //         <Link to="/" className="back-button">Back</Link>
// //       </div>
// //     </div>
// //   );
// // }

// // export default HTML;


import React, { useState } from 'react';

function HTML() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <style>
        {`
          body {
            overflow-x: hidden;
            background-color: #28a745; /* Change background color to green */
          }
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          .image-preview {
            width: 250px;
            height: 250px;
            border: 2px dashed #ccc;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
          }
          .image-preview img {
            max-width: 100%;
            max-height: 100%;
          }
          input[type='file'] {
            display: none;
          }
          .file-upload-btn {
            cursor: pointer;
            padding: 10px 15px;
            background-color: #4caf50;
            color: #fff;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            margin-top: 10px;
          }
          .process-btn {
            cursor: pointer;
            padding: 5px 10px;
            background-color: #4caf50;
            color: #fff;
            border: none;
            border-radius: 5px;
            font-size: 14px;
            margin-top: 10px;
          }
        `}
      </style>
      
      <div className="container">
        <div className="col-lg-6">
          <div className="image-preview">
            {selectedImage && <img src={selectedImage} alt="Preview" />}
            {!selectedImage && <span>No image selected</span>}
          </div>
          <input type="file" accept="image/*" onChange={handleImageChange} id="imageInput" />
          <label htmlFor="imageInput" className="file-upload-btn">Upload Image</label>
          <button className="process-btn" type="button">Process Image</button>
        </div>
      </div>
    </>
  );
}

export default HTML;