import './App.css';
import Letters from "../src/components/Letters";
import Score from "../src/components/Score";
import Solution from "../src/components/Solution";
import React, { Component } from 'react';
import Letter from './components/Letter';
import EndGame from './components/EndGame';





class App extends Component{ 

  constructor(){
    super()
    this.state={
      letterStatus:{
        A: false,
        B: false,
        C: false,
        D: false,
        E: true,
        F: false,
        G: false,
        H: false,
        I: false,
        J: false,
        K: false,
        L: false,
        M: false,
        N: false,
        O: false,
        P: false,
        Q: false,
        R: false,
        S: true,
        T: false,
        U: false,
        V: false,
        W: false,
        X: false,
        Y: true,
        Z: false
      },
      solution:{
        word:"BYTES",
        hint:"t"
      },
      score:100
    }
  }
  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }
  selectLetter = (letter) =>{
    let allLetters = {...this.state.letterStatus}
    allLetters[letter]=true
    this.setState({
      letterStatus:allLetters

    },this.updateScore(letter))
  }
  isAllLettersGueussed(){
    for(let c of this.state.solution.word){
      if (!this.state.letterStatus[c]){
        return false
      }
    }
    return true
  }
  isGameOver(){
    if(this.state.score<=0){
      return true
    }
    else if(this.isAllLettersGueussed()){
      return true
    }
    return false
  }
    updateScore = (letter) =>{
      const trueGeuues= this.state.solution.word.includes(letter)
      let newScore=this.state.score
      if(trueGeuues){
        newScore = newScore +20

      }
      else{
        newScore = newScore -5

      }
      this.setState({
        score:newScore
  
      })
    }
    

  
  render(){
    let gameOver=this.isGameOver()
    let componentToDisplay = !gameOver ?<div>
      
      
     <Score score={this.state.score} />
      <Solution letterStatus={this.state.letterStatus} solution={this.state.solution} />
<Letters letterStatus={this.state.letterStatus}  letter={this.selectLetter}  />
</div>

:

<EndGame message={this.state.score>0 ? "Congratulations" :this.state.solution.word} />




  return (
    <div className="App">
    {componentToDisplay}
    </div>
    
  );
}
}

export default App;
