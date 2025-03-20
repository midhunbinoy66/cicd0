import { Component } from '@angular/core';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [],
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.css'
})
export class TerminalComponent {

  navigteMe(target:number){
    if(target==1){
      window.scroll(50,50)
    }
  }
}
