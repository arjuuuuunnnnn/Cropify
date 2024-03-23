import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './crop.scss'; // Import CSS file for styling

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir',
  'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra',
  'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
  'Uttarakhand', 'West Bengal'
];

const cropData = {
  // Replace with your actual crop data for each state and month
  // Example structure:
  AndhraPradesh: {
    January: ['Wheat', 'Barley'],
    February: ['Mustard'],
    // ... data for other months
  },
  // ... data for other states
};

const CropCalendar = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [displayedCrops, setDisplayedCrops] = useState([]);

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setDisplayedCrops([]); // Clear displayed crops on state change
  };

  const handleMonthSelect = (event) => {
    setSelectedMonth(event.target.value);
  };

  const fetchCrops = () => {
    if (selectedState && selectedMonth) {
      // Format selectedState to match the keys in cropData
      const formattedState = selectedState.replace(/ /g, ''); // Remove spaces
      const crops = cropData[formattedState]?.[selectedMonth] || [];
      setDisplayedCrops(crops);
    } else {
      setDisplayedCrops([]);
    }
  };

  return (
    <>
      <div className="crop-calendar-container">
        <div className="crop-calendar">
          <h2>Crop Calendar</h2>
          <div className="selection-container">
            <label htmlFor="state-select">Select a state:</label>
            <select id="state-select" onChange={handleStateChange} value={selectedState}>
              <option value="">Select State</option>
              {STATES.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div className="selection-container">
            <label htmlFor="month-select">Select a month:</label>
            <select id="month-select" onChange={handleMonthSelect} value={selectedMonth}>
              <option value="">Select Month</option>
              {MONTHS.map((month) => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
          </div>
          <button className="submit-button" onClick={fetchCrops} disabled={!selectedState || !selectedMonth}>
            Show Crops
          </button>
          {selectedState && selectedMonth && displayedCrops.length > 0 && (
            <div className="crop-info">
              <h3>Crops for {selectedMonth} in {selectedState}:</h3>
              <ul className="crop-list">
                {displayedCrops.map((crop) => (
                  <li key={crop}>{crop}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* Back button placed below the container */}
      <div className="back-button-container">
        <Link to="/">Back</Link>
      </div>
    </>
  );
};

export default CropCalendar;



// import React, { useState, useEffect } from 'react';
// import './crop.scss'; // Import SCSS file

// const states = [
//   "Andhra Pradesh",
//   "Arunachal Pradesh",
//   "Assam",
//   "Bihar",
//   // ... List of all Indian states
// ];

// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   // ... List of all months
// ];

// const CropCalendar = () => {
//   const [selectedState, setSelectedState] = useState(states[0]);
//   const [selectedMonth, setSelectedMonth] = useState(months[0]);
//   const [cropData, setCropData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(`/api/crop-calendar/${selectedState}/${selectedMonth}`); // Replace with actual API endpoint
//       const data = await response.json();
//       setCropData(data.crops); // Assuming the API response has a "crops" property
//     };

//     fetchData();
//   }, [selectedState, selectedMonth]);

//   const handleStateChange = (event) => {
//     setSelectedState(event.target.value);
//   };

//   const handleMonthChange = (event) => {
//     setSelectedMonth(event.target.value);
//   };

//   return (
//     <div className="crop-calendar">
//       <h2>Crop Calendar</h2>
//       <div className="filters">
//         <select value={selectedState} onChange={handleStateChange}>
//           {states.map((state) => (
//             <option key={state} value={state}>
//               {state}
//             </option>
//           ))}
//         </select>
//         <select value={selectedMonth} onChange={handleMonthChange}>
//           {months.map((month) => (
//             <option key={month} value={month}>
//               {month}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="calendar-view">
//         <table>
//           <thead>
//             <tr>
//               <th>Sun</th>
//               <th>Mon</th>
//               <th>Tue</th>
//               <th>Wed</th>
//               <th>Thu</th>
//               <th>Fri</th>
//               <th>Sat</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* Logic to dynamically generate table rows and cells based on selected month */}
//             {getCalendarCells(selectedMonth).map((row, rowIndex) => (
//               <tr key={rowIndex}>
//                 {row.map((cell, cellIndex) => (
//                   <td key={cellIndex}>
//                     {cell.date && (
//                       <div className="date-cell">
//                         {cell.date}
//                         {cell.isCrop && (
//                           <span className="crop-indicator">&#x261B;</span>
//                         )}
//                       </div>
//                     )}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         {cropData.length > 0 && (
//           <div className="crop-details">
//             <h3>Recommended Crops for {selectedState} - {selectedMonth}</h3>
//             <ul>
//               {cropData.map((crop) => (
//                 <li key={crop}>{crop}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// function getCalendarCells(month) {
//   const date = new Date(2024, months.indexOf(month)); // Adjust year as needed
//   const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
//   const firstDay = date.getDay();

//   const cells = [];
//   let currentDay = 1;
//   let rowIndex = 0;
//   cells[rowIndex] = [];

//   // Fill empty cells before the first day of the month
//   for (let i = 0; i < firstDay; i++) {
//     cells[rowIndex].push({ date: null });
//   }

//   // Fill cells with dates and crop indicators
//   for (let i = 0; i < daysInMonth; i++) {
//     cells[rowIndex].push({ date: currentDay, isCrop: cropData.includes(currentDay) });
//     currentDay++;

//     if (currentDay > daysInMonth) {
//       rowIndex++;
//       cells[rowIndex] = [];
//     }
//   }

//   // Fill remaining empty cells after the last day of the month
//   while (cells[rowIndex].length < 7) {
//     cells[rowIndex].push({ date: null });
//   }

//   return cells;
// }

// export default CropCalendar;


