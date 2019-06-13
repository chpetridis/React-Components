import React, { Component } from 'react';

import './Calculator.scss';
import NormalRow from '../../components/NormalRow/NormalRow';
import FinalRow from '../../components/FinalRow/FinalRow';

class Calculator extends Component {
   state = {
      display: [0],
      enteredValue: false
   }

   constructor(props) {
      super(props);
      this.clearInputHandler = this.clearInputHandler.bind(this);
      this.calculateResultHandler = this.calculateResultHandler.bind(this);
      this.inputToDisplayHandler = this.inputToDisplayHandler.bind(this);
   }
  
   /*
   shouldComponentUpdate(nextProps, nextState) {
      return JSON.stringify(this.state.display) !== JSON.stringify(nextState.display);
   }
   */

   clearInputHandler = () => {
      this.setState({display: [0], enteredValue: false});
   }

   inputToDisplayHandler = (input) => {
      if (!this.state.enteredValue) {
         if (input === 0 || isNaN(input)) return;
         this.setState({display: [input], enteredValue: true});
      } else {
         const tempDisplay = [...this.state.display];
         if (isNaN(tempDisplay[tempDisplay.length - 1]) && (input === 0 || isNaN(input))) return;
         tempDisplay.push(input);
         this.setState({display: tempDisplay});
      }
   }

   calculateResultHandler = () => {
      let expression = [...this.state.display];
      
      if (this.expressionIsInvalid(expression)) return;

      expression = this.uniteNumbers(expression);
      const result = this.computeResult(expression);
      result === 0 ? this.setState({display: [result], enteredValue: false}) : this.setState({display: [result]});
   }

   expressionIsInvalid (expression) {
      return isNaN(expression[expression.length - 1]) || expression.length === 1;
   }

   uniteNumbers(expression) {
      const finalExpression = [];
      let tempNumber = '';

      for (let i = 0; i < expression.length; i++) {
         if (!isNaN(expression[i])) {
            tempNumber += expression[i];
         } else {
            finalExpression.push(Number(tempNumber));
            finalExpression.push(expression[i]);
            tempNumber = '';
         }
      }
      finalExpression.push(Number(tempNumber));
      return finalExpression;
   }

   computeResult(expression) {
      let sum = expression[0];

      for (let i = 1; i < expression.length - 1; i += 2) {
         sum = this.makeCalculation(sum, expression[i], expression[i+1]);
      }
      return sum;
   }

   makeCalculation(previousSum, operator, number) {
      if (operator === '+') {
         return previousSum + number;
      } else if (operator === '-') {
         return previousSum - number;
      } else if (operator === '/') {
         return previousSum / number;
      } else {
         return previousSum * number;
      } 
   }

   render() {
      return (
         <div className='Calculator'>
            <label id='result-display'>{this.state.display}</label>

            <NormalRow pushToExpression={this.inputToDisplayHandler} 
                       values={{n1: 7, n2:8, n3: 9, o1: '/'}}/>

            <NormalRow pushToExpression={this.inputToDisplayHandler} 
                       values={{n1: 4, n2:5, n3: 6, o1: '*'}}/>   

            <NormalRow pushToExpression={this.inputToDisplayHandler} 
                       values={{n1: 1, n2:2, n3: 3, o1: '-'}}/>  

            <FinalRow  clear={this.clearInputHandler} 
                       calculate={this.calculateResultHandler}
                       pushToExpression={this.inputToDisplayHandler}
                       values={{n1: 0, o1: 'C', o2: '=', o3: '+'}}/>          
         </div>
      );
   }
}

export default Calculator;