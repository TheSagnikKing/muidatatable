import React, { useState, useMemo } from 'react';
import lodash from 'lodash';

const Lodash1 = () => {
  const [name, setName] = useState("");

  // Create the debounced function only once
  const debounceFun = useMemo(
    () => lodash.debounce(() => {
      console.log('Function debounced after 1000ms!');
    }, 1000),
    []
  );

  const handleNameChange = (e) => {
    setName(e.target.value);
    debounceFun();  // Call the debounced function
  };

  console.log(name);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
      />
    </div>
  );
};

export default Lodash1;
