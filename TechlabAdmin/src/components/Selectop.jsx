// import React, { useState } from 'react';

// const MyComponent = () => {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   return (
//     <div>
//       <select onChange={handleOptionChange}>
//         <option value="">Select an option</option>
//         <option value="div1">Option 1</option>
//         <option value="div2">Option 2</option>
//         <option value="div3">Option 3</option>
//         <option value="div4">Option 4</option>
//         <option value="div5">Option 5</option>
//         <option value="div6">Option 6</option>
//       </select>
//       <div style={{ display: 'flex', flexDirection: 'row' }}>
//         <div
//           style={{
//             width: '100px',
//             height: '100px',
//             backgroundColor: selectedOption === 'div1' ? 'red' : 'white',
//             marginRight: '10px',
//           }}
//         />
//         <div
//           style={{
//             width: '100px',
//             height: '100px',
//             backgroundColor: selectedOption === 'div2' ? 'green' : 'white',
//             marginRight: '10px',
//           }}
//         />
//         <div
//           style={{
//             width: '100px',
//             height: '100px',
//             backgroundColor: selectedOption === 'div3' ? 'blue' : 'white',
//             marginRight: '10px',
//           }}
//         />
//         <div
//           style={{
//             width: '100px',
//             height: '100px',
//             backgroundColor: selectedOption === 'div4' ? 'orange' : 'white',
//             marginRight: '10px',
//           }}
//         />
//         <div
//           style={{
//             width: '100px',
//             height: '100px',
//             backgroundColor: selectedOption === 'div5' ? 'purple' : 'white',
//             marginRight: '10px',
//           }}
//         />
//         <div
//           style={{
//             width: '100px',
//             height: '100px',
//             backgroundColor: selectedOption === 'div6' ? 'pink' : 'white',
//             marginRight: '10px',
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default MyComponent;


// import React, { useState } from 'react';

// const App = () => {
//   const [selectedValue, setSelectedValue] = useState('');
//   const [selectedDivStyles, setSelectedDivStyles] = useState([{}, {}, {}, {}, {}, {}]);

//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);
//   };

//   const handleDivClick = (divNumber) => {
//     const newStyles = [...selectedDivStyles];
//     const selectedDivIndex = divNumber - 1;

//     if (newStyles[selectedDivIndex].backgroundColor) {
//         // If it's already colored, remove the color
//         newStyles[selectedDivIndex] = { backgroundColor: '' };
//     } else {
//         // Otherwise, apply a color
//         newStyles[selectedDivIndex] = { backgroundColor: 'lightblue' };
//     }

//     setSelectedDivStyles(newStyles);
//   };

//   return (
//     <div>
//       <select value={selectedValue} onChange={handleChange}>
//         <option value="1">Option 1</option>
//         <option value="2">Option 2</option>
//         <option value="3">Option 3</option>
//         <option value="4">Option 4</option>
//         <option value="5">Option 5</option>
//         <option value="6">Option 6</option>
//       </select>

//       <div className="div1" style={selectedDivStyles[0]} onClick={() => handleDivClick(1)}>Div 1</div>
//       <div className="div2" style={selectedDivStyles[1]} onClick={() => handleDivClick(2)}>Div 2</div>
//       <div className="div3" style={selectedDivStyles[2]} onClick={() => handleDivClick(3)}>Div 3</div>
//       <div className="div4" style={selectedDivStyles[3]} onClick={() => handleDivClick(4)}>Div 4</div>
//       <div className="div5" style={selectedDivStyles[4]} onClick={() => handleDivClick(5)}>Div 5</div>
//       <div className="div6" style={selectedDivStyles[5]} onClick={() => handleDivClick(6)}>Div 6</div>
//     </div>
//   );
// };

// export default App;