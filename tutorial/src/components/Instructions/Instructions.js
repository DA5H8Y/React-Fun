import React, { Component } from 'react';
import './Instructions.css'
import emoji from './emoji.svg'

{/* This is an example of a Component.
    Golden Rules
      1. The Component name must start with a Captial
    Useful Rules
      1. Make the filename the same as the Compoent name.
*/}

export default class Instructions extends Component {
    render() {
        return(
          <div className="instructions">
            {/* Must return a single element so use of empty <>..</> useful if no css styling necessary*/}
            <img alt="laughing crying emoji" src={emoji} />
            <p>Click on an emoji to view the emoji short name.</p>
          </div>
        )
    }
}

{/* This is an example of a function, the modern replacement for a Component.
*/}

export function InstructionsFunction() {
  return(
    <div className="instructions">
      {/* Must return a single element so use of empty <>..</> useful if no css styling necessary*/}
      <img alt="laughing crying emoji" src={emoji} />
      <p>Click on an emoji to view the emoji short name.</p>
    </div>
  )
}

{/* You could also rewrite the function as an arrow function using the implicit return. 
    The main difference is that you lose the function body. You will also need to first 
    assign the function to a variable and then export the variable:

      const Instructions = () => (
        <div className="instructions">
          <img alt="laughing crying emoji" src={emoji} />
          <p>Click on an emoji to view the emoji short name.</p>
        </div>
      )
      
      export default Instructions;

  */}