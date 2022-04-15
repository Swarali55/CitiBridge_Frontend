import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
  person : Person = new Person();

  

  ngOnInit(): void {
  }
submitPerson() {
  console.log(JSON.stringify(this.person));
  console.log('form submitted');
  this.personService.addPerson(this.person).subsrcribe((res) => {
    console.log('user added successfully');
  })
}
}
