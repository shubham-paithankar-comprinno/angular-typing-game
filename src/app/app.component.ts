import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence()
  enteredText = ''

  onInput (event: Event) {
    let { value = '' } = event.target as HTMLInputElement
    this.enteredText = value
  }

  //r = randomText letter, c = entered letter
  compareText (r: string, c: string) {
    if (!c) {
      return 'black'
    }
    return c === r ? 'green' : 'red'
  }

}
