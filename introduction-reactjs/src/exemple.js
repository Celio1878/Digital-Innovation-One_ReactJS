import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import './styles/index.css';

// Element 1 -> In the structure React
function sum (a, b) {
   alert ( `sum of ${a} + ${b} is ${a + b} ?`)
}

// Element 2 -> In the structure React
function firstJSX() {
   return (
      <div className = "test">
         Célio Vieira - Introduction to ReactJS
      </div>
   )
}

// In JavaScript -> Structure in the form **Class**
class App extends Component {

   constructor (props) {
      super (props)

      this.state = {
         clock: 1000,
         copo: 'água'
      }
   }

   componentDidMount() {
      setTimeout (() => {
         this.setState ({
            copo: 'suco'
         })
      }, 3000)
   }

   alterarCopo = () => {
      this.setState({
         copo: 'refrigerante'
      })
   }

   render() {

      const { clock, copo } = this.state

      return (
         <div>
            <h1> { clock } </h1>
            <button onClick = { () => this.alterarCopo() }> { copo }</button>
         </div>
      )
   }
}

/* In React -> Own Structure

// Component -> Components are groups of the elements
const App = () => {
   return (
      <div className = "App">
         {firstJSX()}
         <Button onClick = {() => sum (10, 10)} name = "Sum" />
         <ComponentA>
            <ComponentB>
               <Button onClick = {() => sum (20, 50)} name = "Another Sum" />
            </ComponentB>
         </ComponentA>
      </div>
   )
}
*/

ReactDOM.render(<App />, document.getElementById('root'));
