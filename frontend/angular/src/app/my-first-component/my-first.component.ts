import { Component } from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.scss']
})
export class MyFirstComponent {

  inputValue: string = 'Brother Ali';

  clickMe(): void {
    alert(this.inputValue);
  }
}
