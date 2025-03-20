import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [],
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.css'
})
export class TerminalComponent {

  @Output() sectionSelector = new EventEmitter<number>()

  navigteMe(target:number){
    this.sectionSelector.emit(target)
  }
}
