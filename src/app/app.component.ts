import { Component, ElementRef, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MessagemeComponent } from './components/messageme/messageme.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent,TerminalComponent,AboutmeComponent,ProjectsComponent,MessagemeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ruptline';
  
  @ViewChild('aboutMe') aboutMeSection!:ElementRef
  @ViewChild('project') projectSection!:ElementRef
  @ViewChild('messageMe') messageMeSection!:ElementRef

  navigateEmitter(target:number){
    if(target==1){
      this.aboutMeSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }else if(target ==2){
      this.projectSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else{
      this.messageMeSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }  
  }
}
