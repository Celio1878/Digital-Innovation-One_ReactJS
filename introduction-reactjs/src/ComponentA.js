import React from 'react';

// Component
const ComponentA = (props) => {

   return (
      <div> Component A
         <div> {props.children}</div>
      </div>
   )
}

export default ComponentA;
