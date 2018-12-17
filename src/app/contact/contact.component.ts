import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private dataService: DataService) { 
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  contactFormSubmit(){
    this.submitted = true;
    console.log("form submitted", this.contactForm.value);
    this.dataService.createUser(this.contactForm.value.name);
    this.dataService.getUsersData();
  }

}
