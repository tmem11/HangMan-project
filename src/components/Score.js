import React, { Component } from 'react';


class Score extends Component {
    setClass(){
        if(this.props.score>80){
            return "high-score"
        }
        else if(this.props.score<=80 && this.props.score>50){
            return "medium-score"
        }
        else if(this.props.score<=50){
            return "low-score"
        }

    }
    render() {
        return (
            <div class={this.setClass()}> {this.props.score}
            </div>   
            )
    }
}
export default Score