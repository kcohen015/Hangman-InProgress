import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hangman-display',
  templateUrl: './hangman-display.component.html',
  styleUrls: ['./hangman-display.component.scss']
})
export class HangmanDisplayComponent implements OnInit, OnChanges {
  //pass guesses and mistakes from hangman component
  @Input() guesses: string[] = [];
  @Input() question: string = '';

  MAX_MISTAKES = 7;
  mistakesRemaining;

  constructor() {
    this.mistakesRemaining = this.MAX_MISTAKES; //initialize mistakes remaining = to max 7
   }

   ngOnChanges(changes: SimpleChanges): void {
      const guessesCurrentValue = changes['guesses'].currentValue; 
      //if there is a change in the guess
       //if there is a value and it is not equal to the previous value
       if(
        guessesCurrentValue && 
        guessesCurrentValue.length && 
        guessesCurrentValue != changes['guesses'].previousValue)
        {
        // console.log(changes['guesses'].currentValue); //anytime the input changes from the parent, log it.
        // check guess against the last letter provided 
        this.checkGuess(
          guessesCurrentValue[
            guessesCurrentValue.length-1
          ]
          );
       }
   }

  checkGuess(letter: string){
    //did they make a mistake? and did you win?
    let didWin = false;
  }

  wasGuessAMistake(letter:string){
    const match = this.question.match(new RegExp(letter, 'gi')); //gi means check globally and case insensitive
    return match ? 0 : 1; //check if the match is true otherwise return 1
  }
  ngOnInit(): void {
  }

  
}
