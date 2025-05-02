import React, { useState } from 'react';

const MyComponent = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select onChange={handleOptionChange}>
        <option value="">Select an option</option>
        <option value="div1">Option 1</option>
        <option value="div2">Option 2</option>
        <option value="div3">Option 3</option>
        <option value="div4">Option 4</option>
        <option value="div5">Option 5</option>
        <option value="div6">Option 6</option>
      </select>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: selectedOption === 'div1' ? 'red' : 'white',
            marginRight: '10px',
          }}
        />
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: selectedOption === 'div2' ? 'green' : 'white',
            marginRight: '10px',
          }}
        />
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: selectedOption === 'div3' ? 'blue' : 'white',
            marginRight: '10px',
          }}
        />
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: selectedOption === 'div4' ? 'orange' : 'white',
            marginRight: '10px',
          }}
        />
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: selectedOption === 'div5' ? 'purple' : 'white',
            marginRight: '10px',
          }}
        />
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: selectedOption === 'div6' ? 'pink' : 'white',
            marginRight: '10px',
          }}
        />
      </div>
    </div>
  );
};

export default MyComponent;