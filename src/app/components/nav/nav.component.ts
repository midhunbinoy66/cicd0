import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  @Output() sectionSelector = new EventEmitter<number>()

  navigteMe(target:number){
    this.sectionSelector.emit(target)
  }
}
