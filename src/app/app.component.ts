import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'passwordGenerator';
  password:any="";
  useLetters = false;
  useNumbers=false;
  useSymbols=false;
  passwordLength=0

  onChangeLength(value:string){
    const parsedValue=parseInt(value);
    if(!isNaN(parsedValue)){
      this.passwordLength=parsedValue;
    }

  }

  useLettersFunction(){
    this.useLetters=!this.useLetters;
    console.log(this.useLetters)
  }
  useNumbersFunction(){
    this.useNumbers=!this.useNumbers;
  }
  useSymbolsFunction(){
    this.useSymbols=!this.useSymbols;

  }

  generatePassword(){
    const letters="abcdefghijklmnopqrstuvwxz";
    const numbers="1234567890";
    const symbols="!@#$%^&*()"

    let validChars='';
    let generatedPassword='';
    if(this.useLetters){
      validChars+=letters;
    }

    if(this.useNumbers){
      validChars+=numbers;
    }

    if(this.useSymbols){
      validChars+=symbols;
    }

    for(let i=0;i<this.passwordLength;i++){
      const index=Math.floor(Math.random()*validChars.length);
      generatedPassword+=validChars[index];
    }
    this.password=generatedPassword;

  }




}
