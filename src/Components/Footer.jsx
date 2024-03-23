// import React, { useState } from 'react';
// import './Footer.scss'; // Corrected import statement for CSS file

// const FAQ = () => {
//   const [isOpen, setIsOpen] = useState(null); // State to manage open/close of answers

//   const toggleAnswer = (index) => {
//     setIsOpen((prevIndex) => (prevIndex === index ? null : index)); // Toggles answer visibility
//   };

//   const faqData = [
//     {
//       question: 'What is the best time to plant crops?',
//       answer:
//         'The best time to plant crops depends on various factors such as the type of crop, climate, and soil conditions. Generally, it is recommended to plant crops during the optimal growing season for that specific crop in your region.',
//     },
//     {
//       question: 'How often should crops be watered?',
//       answer:
//         'The frequency of watering crops varies depending on factors like soil type, weather conditions, and the specific needs of the crop. It is essential to monitor soil moisture regularly and adjust watering schedules accordingly to prevent under or overwatering.',
//     },
//     {
//       question: 'What are common pests and diseases affecting crops?',
//       answer:
//         'Common pests and diseases affecting crops include aphids, caterpillars, fungal diseases like powdery mildew, and bacterial infections. Implementing proper pest and disease management strategies such as crop rotation, using organic pesticides, and maintaining plant hygiene can help prevent and control infestations.',
//     },
//     {
//       question: 'How can I improve soil health and fertility naturally?',
//       answer:
//         'Soil health and fertility can be improved naturally through practices such as adding compost or aged manure, planting cover crops, incorporating crop residues, minimizing soil disturbance, and fostering beneficial soil organisms. These methods enhance soil structure, nutrient content, and biological activity, leading to healthier and more productive crops.',
//     },
//     {
//       question: 'What are some sustainable irrigation techniques for water-efficient crop production?',
//       answer:
//         'Sustainable irrigation techniques for water-efficient crop production include drip irrigation, which delivers water directly to the root zone, reducing evaporation and water waste; using mulches to retain soil moisture and suppress weed growth; employing rainwater harvesting systems to capture and store rainfall for irrigation; and adopting precision irrigation technologies that optimize water distribution based on crop needs and soil conditions.',
//     },
//     {
//       question: 'How can I protect my crops from extreme weather events such as droughts or floods?',
//       answer:
//         'To protect crops from extreme weather events like droughts or floods, farmers can implement strategies such as selecting drought-tolerant or flood-resistant crop varieties, improving soil water retention through organic matter additions and conservation practices, installing drainage systems to mitigate flood risks, employing water-saving irrigation methods, and diversifying cropping systems to spread risk across different seasons and weather patterns.',
//     },
//   ];
  

//   return (
//     <div className="faq-container">
//       <h1>FAQs About Crops</h1>
//       <div className="faq-list">
//         {faqData.map((faq, index) => (
//           <div className="faq-item" key={index}>
//             <div className="question" onClick={() => toggleAnswer(index)}>
//               {faq.question}
//               <span className={`arrow ${isOpen === index ? 'open' : ''}`}>▼</span>
//             </div>
//             {isOpen === index && (
//               <div className="answer">
//                 {faq.answer}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FAQ;

// // import React, { useState } from 'react';
// // import './Footer.scss'; // Corrected import statement for CSS file

// // const FAQ = () => {
// //   const [isOpen, setIsOpen] = useState(null); // State to manage open/close of answers

// //   const toggleAnswer = (index) => {
// //     setIsOpen((prevIndex) => (prevIndex === index ? null : index)); // Toggles answer visibility
// //   };

// //   const faqData = [
    
// //   ];

// //   return (
// //     <div>
// //       {/* Render the FAQ component */}
// //       <div className="faq-container">
// //         <h1>FAQs About Crops</h1>
// //         <div className="faq-list">
// //           {faqData.map((faq, index) => (
// //             <div className="faq-item" key={index}>
// //               <div className="question" onClick={() => toggleAnswer(index)}>
// //                 {faq.question}
// //                 <span className={`arrow ${isOpen === index ? 'open' : ''}`}>▼</span>
// //               </div>
// //               {isOpen === index && (
// //                 <div className="answer">{faq.answer}</div>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Render the provided HTML */}
// //       <div>
// //         {/* Your HTML code here */}
// //       </div>
// //     </div>
// //   );
// // };

// // export default FAQ;


import React, { useState } from 'react';
import './Footer.scss'; // Corrected import statement for CSS file


const FAQ = () => {
  const [isOpen, setIsOpen] = useState(null); // State to manage open/close of answers

  const toggleAnswer = (index) => {
    setIsOpen((prevIndex) => (prevIndex === index ? null : index)); // Toggles answer visibility
  };

  const faqData = [
    {
            question: 'What is the best time to plant crops?',
            answer:
              'The best time to plant crops depends on various factors such as the type of crop, climate, and soil conditions. Generally, it is recommended to plant crops during the optimal growing season for that specific crop in your region.',
          },
          {
            question: 'How often should crops be watered?',
            answer:
              'The frequency of watering crops varies depending on factors like soil type, weather conditions, and the specific needs of the crop. It is essential to monitor soil moisture regularly and adjust watering schedules accordingly to prevent under or overwatering.',
          },
          {
            question: 'What are common pests and diseases affecting crops?',
            answer:
              'Common pests and diseases affecting crops include aphids, caterpillars, fungal diseases like powdery mildew, and bacterial infections. Implementing proper pest and disease management strategies such as crop rotation, using organic pesticides, and maintaining plant hygiene can help prevent and control infestations.',
          },
          {
            question: 'How can I improve soil health and fertility naturally?',
            answer:
              'Soil health and fertility can be improved naturally through practices such as adding compost or aged manure, planting cover crops, incorporating crop residues, minimizing soil disturbance, and fostering beneficial soil organisms. These methods enhance soil structure, nutrient content, and biological activity, leading to healthier and more productive crops.',
          },
          {
            question: 'What are some sustainable irrigation techniques for water-efficient crop production?',
            answer:
              'Sustainable irrigation techniques for water-efficient crop production include drip irrigation, which delivers water directly to the root zone, reducing evaporation and water waste; using mulches to retain soil moisture and suppress weed growth; employing rainwater harvesting systems to capture and store rainfall for irrigation; and adopting precision irrigation technologies that optimize water distribution based on crop needs and soil conditions.',
          },
          {
            question: 'How can I protect my crops from extreme weather events such as droughts or floods?',
            answer:
              'To protect crops from extreme weather events like droughts or floods, farmers can implement strategies such as selecting drought-tolerant or flood-resistant crop varieties, improving soil water retention through organic matter additions and conservation practices, installing drainage systems to mitigate flood risks, employing water-saving irrigation methods, and diversifying cropping systems to spread risk across different seasons and weather patterns.',
          },
        ];


  return (
    <div className="faq-container">
      <h1>FAQs About Crops</h1>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="question" onClick={() => toggleAnswer(index)}>
              {faq.question}
              <span className={`arrow ${isOpen === index ? 'open' : ''}`}>▼</span>
            </div>
            {isOpen === index && (
              <div className="answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default FAQ;
