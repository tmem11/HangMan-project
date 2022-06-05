import Letter from "./Letter";
import React, { Component } from 'react';


class Solution extends Component {
    showLetters(){
        const letters= []
        for(let c of this.props.solution.word ){
            if(this.props.letterStatus[c]){
                letters.push(c)
            }
            else{
                letters.push("_")

            }
            
        }
        return letters.map(l=> <Letter  letter={l} />)
        
    }
    render() {
        
        
        return (
            <div>
                <div>{this.showLetters()}</div>
                <div>{this.props.solution.hint}</div>
                
            </div>
              
    
              
        
                  
            
            // this.showLetters()
            )
    }
}
export default Solution