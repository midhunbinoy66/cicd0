import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    { 
      title: 'Instatrabjo', 
      description: 'An on-demand service delivery app built with Angular & Node.js. Backend support for workers & employers.', 
      link: 'https://insta.quickiz.com/' 
    },
    { 
      title: 'TVS Aviation', 
      description: 'Inventory management system for TVS, built with Node.js to handle stock management.', 
      link: 'https://tvs-aviation.quickiz.com/' 
    },
    { 
      title: 'Pillai’s E-commerce', 
      description: 'E-commerce application on Angular, serving clients in both the UK & India.', 
      link: 'https://pillais.quickiz.com/' 
    }
  ];
}
