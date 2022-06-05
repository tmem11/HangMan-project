import React, { Component } from 'react';


class Letter extends Component {
    selectLetter = () =>{
        this.props.letterCliked(this.props.letter)
    
      }
    render() {
       
        return (
               
                <span onClick={this.selectLetter} class={this.props.className}>
                {this.props.letter}
                </span>
         
         
            )
    }
}
export default Letter