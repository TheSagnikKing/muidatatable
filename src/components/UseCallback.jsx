// import React, { memo, useState } from 'react'

// const Childcomponent = memo(({todos}) => {
//   console.log("Child Component Rendered")
//   return (
//     <main style={{ marginTop: "30px", color:"orangered", fontWeight: "500" }}>
//       <h2>Hello I am Child Component</h2>
//     </main>
//   )
// })

// const UseCallback = () => {
//   const [todos, setTodos] = useState(["apple", "banana", "grape"])
//   const [counter, setCounter] = useState(0)

//   const handleClick = () => {
//     setCounter((prev) => prev + 1)
//   }

//   return (
//     <main style={{ padding: "30px 0px 0px 100px" }}>
//       <h1>{counter}</h1>
//       <button onClick={handleClick}
//         style={{
//           padding: "4px 12px",
//           background: "#000",
//           borderRadius: "4px",
//           border: "none",
//           cursor: "pointer",
//           color: "#fff"
//         }}>
//         click me</button>
//         <Childcomponent todos={todos}/>
//     </main>
//   )
// }

// export default UseCallback


// import React, { useState, memo } from 'react';

// // Child Component (with props)
// const ChildWithProps = memo(({ name }) => {
//   console.log('ChildWithProps Component Rendered');
//   return (
//     <main style={{ marginTop: '30px', color: 'green', fontWeight: '500' }}>
//       <h2>Hello, {name}</h2>
//     </main>
//   );
// });

// const ParentComponent = () => {
//   const [counter, setCounter] = useState(0);
//   const [name, setName] = useState("John");

//   const handleClick = () => {
//     setCounter((prev) => prev + 1);
//   };

//   const changeName = () => {
//     setName((prev) => (prev === "John" ? "Jane" : "John"));
//   };

//   return (
//     <main style={{ padding: '30px 0px 0px 100px' }}>
//       <h1>{counter}</h1>
//       <button
//         onClick={handleClick}
//         style={{
//           padding: '4px 12px',
//           background: '#000',
//           borderRadius: '4px',
//           border: 'none',
//           cursor: 'pointer',
//           color: '#fff',
//           marginRight: '10px'
//         }}
//       >
//         Increment Counter
//       </button>
//       <button
//         onClick={changeName}
//         style={{
//           padding: '4px 12px',
//           background: '#007bff',
//           borderRadius: '4px',
//           border: 'none',
//           cursor: 'pointer',
//           color: '#fff',
//         }}
//       >
//         Change Name
//       </button>
//       {/* Memoized child with props */}
//       <ChildWithProps name={name} />
//     </main>
//   );
// };

// export default ParentComponent;

//useCallback 

import React, { useState, memo } from 'react';
import { useCallback } from 'react';


const ChildWithProps = memo(({ changeName }) => {
  console.log('ChildWithProps Component Rendered');
  return (
    <main style={{ marginTop: '30px', color: 'green', fontWeight: '500' }}>
      <h2>Function Hello</h2>
      <button
        onClick={changeName}
        style={{
          padding: '4px 12px',
          background: '#007bff',
          borderRadius: '4px',
          border: 'none',
          cursor: 'pointer',
          color: '#fff',
        }}
      >
        Change Name
      </button>
    </main>
  );
});

const ParentComponent = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("John");

  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };

  const changeName = useCallback(() => {
    setName((prev) => (prev === "John" ? "Jane" : "John"));
  },[counter]);

  return (
    <main style={{ padding: '30px 0px 0px 100px' }}>
      <h1>{counter}</h1>
      <button
        onClick={handleClick}
        style={{
          padding: '4px 12px',
          background: '#000',
          borderRadius: '4px',
          border: 'none',
          cursor: 'pointer',
          color: '#fff',
          marginRight: '10px'
        }}
      >
        Increment Counter
      </button>
      
      {/* Here useCallback solves the issue that why the child component is rerendering again
      and again when i click the changeName function even though changeName function value 

      orlogic is not changed and also i wrapped the function inside a memo.The reason is 
      in each and every render the function recreates a new reference thats why. 
      
      So to prevent it i wrap that function inside a callback function so that it caches the function refernce and donot 
      recreate on each render and in the dependency for example i passed a counter so that
      the child component rerender on counter value change not name value change. 
      
      (VVP)Like this when using (useCallback always use React.memo) . Reason is let say if i donot use the memo what will
      happen react by default will render both the parent and the child together so it wont fullfill my purpose. */}
       

      <h2>{name}</h2>
      {/* Memoized child with props */}
      <ChildWithProps changeName={changeName}/>
    </main>
  );
};

export default ParentComponent;
