import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUserDetails } from 'src/app/interface/registration.interface';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/')]],
      addresses: this.fb.array([]),
    });
    this.addItem();
  }

  get addresses() {
    return this.userForm.get('addresses') as FormArray;
  }

  addItem() {
    const address = this.fb.group({
      city: ['', Validators.required],
      state: ['', [Validators.required]],
      zipCode: ['', Validators.required]
    });
    this.addresses.push(address);
  }

  removeItem(index: number) {
    this.addresses.removeAt(index);
  }

  submitForm() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
