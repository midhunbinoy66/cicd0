import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-messageme',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './messageme.component.html',
  styleUrl: './messageme.component.css'
})
export class MessagemeComponent implements OnInit {

  messageMeForm!:FormGroup;

  constructor(
    private fb:FormBuilder,
    private toaster:ToastrService
  ){}

  ngOnInit(): void {
      this.initializeForm()
  }

  initializeForm(){
    this.messageMeForm = this.fb.group({
        name:['',Validators.required],
        email:['',[Validators.required,Validators.email]],
        message:['',Validators.required]
    })
  }

  onSubmit(){
    this.toaster.success('Will reach out', `Thank you ${this.messageMeForm.get('name')?.value}`)
    this.messageMeForm.reset()
  }
}
