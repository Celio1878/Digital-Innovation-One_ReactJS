import React from 'react';
import Button from './Button';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
// import './styles/index.css';

// Element 1 -> In the structure React
function sum(a, b) {
   alert(`sum of ${a} + ${b} is ${a + b} ?`)
}

// Element 2 -> In the structure React
function firstJSX() {
   return (
      <div className="test">
         Célio Vieira - Introduction to ReactJS
      </div>
   )
}

// Declarative
const hasCustomer = true

const App = () => {

   const listCustomers = [
      {
         id: 1,
         name: 'Célio Vieira',
         age: [26, 19]
      },
      {
         id: 2,
         name: 'Débora Cardoso',
         age: [25, 18]
      },
      {
         id: 3,
         name: 'Vanessa Schuengue',
         age: [26, 25]
      }
   ]

   const handleClick = (e, id) => {
      console.log ('Deletar Cliente')
      alert (`ID do cliente: ${id}`)
   }

   const name = 'Clicked'

   const showEvent = (e) => {
      console.log ('Click Event')
      console.log (e)
      alert (name)
   }

   const button = <button onClick = {showEvent}> Customer History </button>

   const handleChange = (e) => {
      const {value} = e.target
      console.log (value)
   }

   const renderCustomers = (customer, index) => {
      return (
         <div key={`customer -> ${customer.id}`}>
            <li> {customer.name} <button onClick = {(e) => handleClick (e, customer.id)}> Deletar Cliente </button> </li>
            {customer.age.map(renderAge)}
         </div>
      )
   }

   const renderAge = (age, index) => {
      return (
         <div style={{ paddingLeft: '10px' }} key={`age -> ${index}`}>
            <li> {age} </li>
         </div>
      )
   }

   const renderShowHistory = () => (
      <div>
         <p> Click on the button to visualizate the Customer History </p>

         {button}
      </div>
   )

   const renderAddCustomer = () => (

      <div>
         <p> Click on the button to register the Customer History </p>

         {button}
      </div>
   )

   /* Exemplo of the conditional render
   const showCustomer = () =>{
      if (!hasCustomer) return null

      return (
         <div>
            <h1> Client name: {listCustomer} </h1>
         </div>
      )
   }
   */
   console.log('hasCustomer', hasCustomer)

   return (
      <div className="App">

         {firstJSX()}

         <Button onClick={() => sum(10, 10)} name="Sum" />

         <ComponentA>

            <ComponentB>
               <Button onClick={() => sum(20, 50)} name="Another Sum" />
            </ComponentB>

         </ComponentA>

         {hasCustomer ? renderShowHistory() : renderAddCustomer()}

         <div>
            <ul>
               {listCustomers.map(renderCustomers)}
            </ul>
         </div>

         <input onChange = {handleChange} />

      </div>
   );
};

export default App;
