import React, { Component } from 'react';
import Letter from "./Letter";

class Letters extends Component {
    showLetters(){
        const letters= []
        for(let c of this.props.letterStatus ){
            if(this.props.letterStatus[c]){
                letters.push(<Letter class="non-selected" letter={c} />)
            }
            else{
                letters.push("_")

            }
            
        }
        return letters.map(l=> <Letter letter={l} />)
    }
    getClassName(l){
        return this.props.letterStatus[l] ? "selected" : "non-selected"

    }
    render() {
        return (<div>
            <div> Your ideal mood when coding
            </div>  
            <div>avalible letters</div> 
            {Object.keys(this.props.letterStatus).map(l=> <Letter key={l} letterCliked={this.props.letter} className={this.getClassName(l)} letter={l} />)}
           
            </div>
            )
    }
}
export default Letters