import { Component, OnInit } from '@angular/core';
import { HangmanService } from 'src/app/services/hangman.service';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss']
})
export class HangmanComponent implements OnInit {
  question: String = '';
  questions: string[] = [];
  guesses: string[] = [];
  category: string = '';

  constructor(private hangmanService: HangmanService) { }

  ngOnInit(): void {
    this.hangmanService.getQuestions().subscribe((response)=>{
      this.questions = response.items;
      this.category = response.category;
      this.pickNewQuestion();
    });
  }

  guess(letter: string){
    if(!letter || this.guesses.includes(letter)){
      return;
    }
    this.guesses = [...this.guesses, letter]; //guesses is a new array, with the letter assigned
  }

  dummyClick(){
    const key = prompt('Enter a key')|| '';
    this.guess(key);
  }

  reset(){ //reset guesses to zero and pick a new question
    this.guesses = [];
    this.pickNewQuestion();
  }

  pickNewQuestion(){ //user random index to pick a question
    const randomIndex = Math.floor(Math.random() * this.questions.length);
    this.question = this.questions[randomIndex];
    console.log(this.question);
  }
}
